const fs = require('fs');
const axios = require('axios')



const image_1 = ('/home/ishan/Desktop/grow_together__React-Django/frontend/Monstera_deliciosa_p_nxq1eU566aWi.jpeg')
const apiKey = '2b10P60RFzvdu9lsD1dWCHuk6u'
const apiURL = 'https://my-api.plantnet.org/v2/identify/all?api-key='
const organ_1 = 'organs=flower'



 getPlants = async () => {
try {
	const { status, data } = await axios.post(
		apiURL + apiKey + '&images=' + image_1 + '&' + organ_1
	);

	console.log('data', require('util').inspect(data, false, null, true)); // should be: read "Step 6" below
} catch (error) {
	console.error('error', error);
}
}


getPlants()



