import axios from "axios"
import { getUser } from "../utils/localStorage";

const putService = async (url, requestData, includeHeaders) => {
    try {
        const config = includeHeaders ? {
            headers: {
                'Content-type': 'application/json',
                'x-auth-token': getUser()
            }
        } : {}
        const response = await axios.put(url, requestData, config);
        return response;
    } catch (err) {
        return {
            error: err
        }
    }
}

export default putService;