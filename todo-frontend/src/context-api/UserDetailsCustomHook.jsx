import { useContext } from "react";
import { UserDetails } from "./UserDetails";
const UserDetailsCustomHook=()=>{
    return useContext(UserDetails);
}
export default UserDetailsCustomHook;