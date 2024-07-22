"use client"
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';

export default function page() {

    const router = useRouter()

    const initialValues = {

        user_name: '',
        password: '',

    };



    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setStatus, setSubmitting, setErrors }) => {

            try {
                // console.log("values............", values);
                const response = await axios.post('http://127.0.0.1:3000/auth/login', {
                    "username": values?.user_name,
                    "password": values?.password
                });
                Cookies.set('token', response?.data?.token);
                router.push('/backend/products');
            } catch (error: any) {
                alert("INvalid user");
            }
        },
    });

    return (
        <Grid container sx={{ bgcolor: '#b2b2b2', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Grid container justifyContent="center">

                <form action="" style={{ width: '100%', justifyContent: 'center', display: 'flex' }} onSubmit={formik.handleSubmit} >

                    <Grid container xs={11} sm={10} md={5} lg={4} sx={{ bgcolor: "#FFF", borderRadius: "18px", justifyContent: 'center' }}>

                        <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 22, fontFamily: 'outfit', textAlign: 'center', width: '100%', my: 2.5 }}>Login</Typography>

                        <Grid container sx={{ bgcolor: "", justifyContent: 'center' }} xs={11} sm={11} md={11} lg={10}>

                            <Grid container>

                                <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 18, fontFamily: 'outfit' }}>Username</Typography>

                                <Grid container xs={12} sm={12} md={12} lg={11} >
                                    <TextField
                                        id="outlined-requirgba(0, 0, 0, 0.5)"
                                        label="User name"
                                        sx={{ width: '100%', my: 1 }}
                                        name='user_name'
                                        value={formik.values.user_name}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>

                            </Grid>

                            <Grid container >
                                <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 18, fontFamily: 'outfit', my: .6 }}>Password</Typography>

                                <Grid container xs={12} sm={12} md={12} lg={11}>
                                    <TextField
                                        id="outlined-requirgba(0, 0, 0, 0.5)"
                                        label="Password"
                                        sx={{ width: '100%', my: 1 }}
                                        name='password'
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>

                            </Grid>

                            <Grid container sx={{ justifyContent: 'center' }}>
                                <Button
                                    type='submit'
                                    variant="contained"
                                    sx={{ my: 2, px: { xs: 2, sm: 2, md: 3, lg: 4 } }}
                                >SUBMIT</Button>
                            </Grid>

                        </Grid>

                    </Grid>
                </form>
            </Grid >
        </Grid>
    )
}


// value={formik.values.password}
// onChange={formik.handleChange}