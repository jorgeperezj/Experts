import React from 'react'
import ExpertRegister from '../components/ExpertRegister'
import { Stack } from 'react-bootstrap'
import { Navigate } from "react-router-dom";

const Register = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user == undefined) {
        return <Navigate to="/" />;
    }else if(user.flagNewUser == false){
        return <Navigate to="/home" />;
    }
    return (
        <div>
            <Stack gap={2} className="col-md-5 mx-auto">
                <ExpertRegister />
            </Stack>
        </div>
    )
}

export default Register
