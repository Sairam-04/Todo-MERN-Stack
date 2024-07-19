// import axios from "axios";
// import { getUser } from "../utils/localStorage";
// import { useMutation } from "react-query";

// const postService = async (data) => {
//     if (data === undefined || data === null) {
//         const { queryKey } = data;
//         const url = queryKey[1];
//         if (url === undefined || url === "") {
//             return{
//                 message: "Please Provide a Valid URL"
//             }
//         }
//     } else {
//         const { url, requestData, includeHeaders } = data;
//         if (url === undefined || url === "") {
//             return{
//                 message: "Please Provide a Valid URL"
//             }
//         }
//         try{
//             const config = includeHeaders ? {
//                 headers:{
//                     'Content-type':'application/json',
//                     'x-auth-token' : getUser()
//                 }
//             } : {}

//             const response = await axios.post(url, requestData, config);
//             if (response.statusText !== 'OK') {
//                 throw new Error("Network response was not OK");
//             }
//             return response;

//         }catch(err){
//             return{
//                 message: "Please Provide a Valid URL"
//             }
//         }
//     }
// };

// const usePostService = () =>{
//     return useMutation(postService);
// }

// export default usePostService;

import axios from "axios"
import { getUser } from "../utils/localStorage";

const postService = async (url, requestData, includeHeaders) => {
    try {
        const config = includeHeaders ? {
            headers: {
                'Content-type': 'application/json',
                'x-auth-token': getUser()
            }
        } : {}
        const response = await axios.post(url, requestData, config);
        return response;
    } catch (err) {
        return {
            error: err
        }
    }
}

export default postService;