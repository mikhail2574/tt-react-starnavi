import axios from 'axios';

const BASE_URL = 'https://60816d9073292b0017cdd833.mockapi.io/modes';

async function getOptions() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export default getOptions;
