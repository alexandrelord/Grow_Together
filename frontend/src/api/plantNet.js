import axios from 'axios'

window.Buffer = window.Buffer || require("buffer").Buffer

const apiURL = 'https://my-api.plantnet.org/v2/identify/all?api-key='
const apiKey = '2b10P60RFzvdu9lsD1dWCHuk6u'
const organ_1 = 'organs=flower'

export async function plantIdentification(s3URL) {
	const encodedURL = encodeURIComponent(s3URL)
	const plantNetURL = apiURL + apiKey + "&images=" + encodedURL + "&" + organ_1

	const response = await axios.get(plantNetURL)
	console.log(response.data)

	return response?.data
}

