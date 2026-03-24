import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';




const AppLogin: React.FC = () => {
    // const theme = useTheme();
    const navigate = useNavigate();
    const userNameRef = useRef("emilys") as any;
    const userPswRef = useRef("emilyspass") as any;

    const Container = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;     
    height: 500px;
    width: 500px;
    margin: auto;
    // border: 1px solid red;
    & h1{
        text-align: center;
    }
    & .MuiFormControl-root{
        display: block;
        margin-bottom: 15px;
        
    }
    input{
        width: 400px
    }
    button{
        width: 100%;
    }
`



    const checkUser = async() => {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: userNameRef?.current?.value,
                password: userPswRef?.current.value,
                expiresInMins: 30, // optional, defaults to 60
            }),
            // credentials: 'include' // Include cookies (e.g., accessToken) in the request
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }

    const { data, isLoading, isFetching, error, refetch } = useQuery({
        queryKey: ["user"],
        queryFn: checkUser,
        enabled: false
    });

    const handleLogin = (e: any) => {
        refetch();
    }

    useEffect(() => {
        if(data && data?.accessToken && data?.refreshToken){
            const {accessToken, refreshToken} = data;
            localStorage.setItem("accessToken", accessToken)
            localStorage.setItem("refreshToken", refreshToken)
            navigate('/home');
        }
    }, [data])

    if(isLoading){
        return <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
    }


    return <Container>
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1 } }}
            noValidate
            autoComplete="off"
        >
            <h1>Nandu's</h1>
            <FormControl>
                <InputLabel htmlFor="component-outlined">User Name</InputLabel>
                <OutlinedInput
                    id="user-name"
                    placeholder="username"
                    label="User Name"
                    inputRef={userNameRef}
                    defaultValue="emilys"
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="component-outlined">Password</InputLabel>
                <OutlinedInput
                    id="user-password"
                    placeholder="password"
                    label="Password"
                    type="password"
                    inputRef={userPswRef}
                    defaultValue="emilyspass"
                />
            </FormControl>
            <Button variant="contained" onClick={(e: any) => handleLogin(e)} disabled={isFetching}>
                {isFetching ? 'Logging Inn...' : 'Login'}
            </Button>
        </Box>
    </Container>
}

export default AppLogin;