import { useContext } from "react"

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;

    }
    return children;

}
export default PrivateRoute;