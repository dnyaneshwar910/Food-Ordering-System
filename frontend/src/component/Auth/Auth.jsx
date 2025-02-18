import { Box, Modal } from '@mui/material'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { style } from '../Cart/Cart';
import RegisterFrom from './RegisterFrom';
import LoginForm from './LoginForm';

const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleOnClose = () =>{
        navigate("/");
    }
    return (
        <>

            <Modal onClose={handleOnClose}
                open={
                    location.pathname === "/account/register" ||
                    location.pathname === "/account/login"
                }
            >
                <Box sx={style}>
                    {
                        location.pathname === "/account/register"?<RegisterFrom/>:<LoginForm/>
                    }
                </Box>
            </Modal>

        </>
    )
}

export default Auth
