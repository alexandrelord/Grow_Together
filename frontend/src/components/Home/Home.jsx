import { useContext, useState, useEffect } from "react";
import style from "./Home.module.css";
import Button from "../Reusables/Button/Button";
import AuthContext from "../../context/AuthProvider";
import useRefreshToken from "../../hooks/useRefreshToken";
import axios from "axios";
import S3 from "react-aws-s3";
import { useNavigate } from "react-router-dom";
window.Buffer = window.Buffer || require("buffer").Buffer;

export default function Home() {
  // const { setAuth } = useContext(AuthContext)
  const [image, setImage] = useState("");
  const [plant, setPlant] = useState("");
  const [plantimg, setPlantImg] = useState(null);
  const [bestScore, setBestScore] = useState(null);

const navigate =useNavigate();
// function nav () {
//     console.log(plant)
//     navigate("/matches", {
//     state: {
//         plantimg: plantimg,
//         bestScore: bestScore
//     }
// })

    useEffect(() => {
       if (plant) 
       navigate("/matches", {
        state: {
            plant,
            plantimg,
            bestScore
        }
    })
       
      
      }, [plant])

  const config = {
    bucketName: "grow-together",
    region: "us-west-1",
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  };
  const ReactS3Client = new S3(config);
  const S3_BASE_URL = "https://s3-us-west-1.amazonaws.com/";
  const BUCKET = "grow-together/";
  const refresh = useRefreshToken();

  function handleChange(e) {
    setImage(e.target.files[0]);
  }

  async function handleClick(e) {
    e.preventDefault();
    let key = "";
    await ReactS3Client.uploadFile(image).then((data) => (key = data.key));
    let api_url = "/v2/identify/all?api-key=";
    let api_key = "2b10P60RFzvdu9lsD1dWCHuk6u";
    let organ_1 = "organs=flower";
    let s3Url = S3_BASE_URL + BUCKET + key;
    setPlantImg(s3Url);
    let encodedURL = encodeURIComponent(s3Url);
    let url = api_url + api_key + "&images=" + encodedURL + "&" + organ_1;
    await axios.get(url).then((res) => {
      let score = null;
    setPlant(res.data.bestMatch);
      score = (res.data.results[0].score * 100).toFixed(2);
      if (score > 50) {
        setBestScore(score);
      } else {
        setBestScore("Sorry, please upload another Image");
      }
    });
     }

  return (
    //         <section>
    //             <h1>Home</h1>
    //             <button onClick={() => refresh()}>Refresh</button>
    //         </section>
    //     )
    // }

    <div className={style.card} /* onSubmit={handleSubmit} */>
      <div className={style.image}>
        <p>Looking for a plant to match yours?</p>
        <p>Take a photo and find a match!</p>
      </div>
      <div className={style.addPhoto}>
        <form onSubmit={handleClick}>
          <label>Select File</label>
          <input onChange={handleChange} type="file" name="photo" />
          <Button label="Upload" type="submit">Upload </Button>
        </form>
      </div>
      {plant ? <h2> Best Match: {plant}</h2> : null}
      {plant ? <img src={plantimg} /> : null}
      {bestScore ? <h2>Result: {bestScore} </h2> : null}
    </div>
  );
}
