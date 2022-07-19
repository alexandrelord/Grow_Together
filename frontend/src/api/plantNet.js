import axios from 'axios'
window.Buffer = window.Buffer || require("buffer").Buffer

const apiURL = '/v2/identify/all?api-key='
const apiKey = '2b10P60RFzvdu9lsD1dWCHuk6u'
const organ_1 = 'organs=flower'

export async function plantIdentification(s3URL) {
	console.log(s3URL)
	const encodedURL = encodeURIComponent(s3URL)
	const plantNetURL = apiURL + apiKey + "&images=" + encodedURL + "&" + organ_1
	console.log(plantNetURL)
	

	const response = await axios.get("https://my-api.plantnet.org" + plantNetURL)
	
	return response?.data
}

