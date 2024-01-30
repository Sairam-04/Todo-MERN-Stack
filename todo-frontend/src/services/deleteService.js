import axios from "axios"
import { getUser } from "../utils/localStorage";

const deleteService = async (url, includeHeaders) => {
    try {
        const config = includeHeaders ? {
            headers: {
                'Content-type': 'application/json',
                'x-auth-token': getUser()
            }
        } : {}
        const response = await axios.delete(url, config);
        return response;
    } catch (err) {
        return {
            error: err
        }
    }
}

export default deleteService;