import axios from "axios";

export async function fetchApiData(url: any) {

    try {
        const response = await axios.get(`http://127.0.0.1:3000/${url}`)
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}