import axios from 'axios';

const DATAURL = 'http://localhost:8000/generadoras/api/generadoras';

export const GetOfData  = async ( id ) =>  {
    try {
        const request = await axios.post(DATAURL, { id });
        return request?.data;   
    } catch (error) {
        console.log('Error', error )
    }
}