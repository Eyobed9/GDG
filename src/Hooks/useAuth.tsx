import {useContext} from "react";
import { UserAuthContext } from "./UserAuthContext";

const useAuth = () => {
    return useContext(UserAuthContext);
}

export default useAuth;