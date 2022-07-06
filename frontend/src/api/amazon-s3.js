import S3 from "react-aws-s3";

const config = {
    bucketName: "grow-together",
    region: "us-west-1",
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
}

const ReactS3Client = new S3(config)
const S3_BASE_URL = "https://s3-us-west-1.amazonaws.com/"
const BUCKET = "grow-together/"

export async function uploadToS3(image) {
    const response = await ReactS3Client.uploadFile(image)
    return S3_BASE_URL + BUCKET + response.key;
}

