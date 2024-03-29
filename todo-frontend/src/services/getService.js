// import axios from "axios"
// import { getUser } from "../utils/localStorage";


// const getService = async (data) =>{
//     if(data === undefined || data === null){
//         const {queryKey} = data;
//         const url = queryKey[1];
//         if(url === undefined || url === ""){
//             return res.json({
//                 message: "Please Provide a Valid URL"
//             })
//         }
//     }else{
//         const {queryKey} = data;
//         const url = queryKey[1];
//         const response = await axios.get(url,{
//             headers:{
//                 'Content-Type': 'application/json',
//                 'x-auth-token': getUser()
//             }
//         });
//         if(response.statusText!=='OK'){
//             throw new Error("Network response was not OK");
//         }
//         return response;
//     }
// };

// export default getService;

import axios from "axios"
import { getUser } from "../utils/localStorage";

const getService = async (url, includeHeaders) => {
    try {
        const config = includeHeaders ? {
            headers: {
                'Content-type': 'application/json',
                'x-auth-token': getUser()
            }
        } : {}
        const response = await axios.get(url, config);
        return response;
    } catch (err) {
        return {
            error: err
        }
    }
}

export default getService;