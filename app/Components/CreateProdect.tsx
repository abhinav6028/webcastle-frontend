"use client"
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import Cookies from 'js-cookie'
import { headers } from 'next/headers';
import CloseIcon from '@mui/icons-material/Close';

export default function CreateProduct(props: any) {
    const { showForm, setShowForm } = props;
    const [file, setFile] = useState<File | null>(null);

    const initialValues = {
        name: "",
        description: "",
        image: "",
        price: "",
        offerPrice: "",
    };

    const token = Cookies.get('token');

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setStatus, setSubmitting, setErrors }) => {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('description', values.description);
            formData.append('price', values.price);
            formData.append('offerPrice', values.offerPrice);
            if (file) {
                formData.append('image', "file");
            }

            try {
                const response = await axios.post('http://127.0.0.1:3000/products', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                })
                Cookies.set('token', response.data.token);
                setShowForm(false)
                // router.push('/backend/products');
            } catch (error: any) {
                alert("Invalid user");
            }
        },
    });

    return (
        <Grid container sx={{
            bgcolor: '#b2b2b2',
            position: 'absolute', top: 0, left: 0, zIndex: 2000,
            height: '100vh', justifyContent: 'center', alignItems: 'center'
        }}>
            <form action="" style={{ width: '100%', justifyContent: 'center', display: 'flex' }} onSubmit={formik.handleSubmit} >

                <Grid container xs={11} sm={10} md={5} lg={10} sx={{ bgcolor: "#FFF", borderRadius: "18px", justifyContent: 'center' }}>

                    <Grid container sx={{ my: 2, alignItems: 'center' }}>
                        <Typography sx={{
                            color: "rgba(0, 0, 0, 0.5)", fontSize: 22, fontFamily: 'outfit',
                            textAlign: 'center',
                            ml: 6
                        }}>Create Product</Typography>

                        <CloseIcon
                            onClick={() => setShowForm(!showForm)}
                            sx={{ ml: 'auto', mr: 6, cursor: 'pointer' }} />
                    </Grid>

                    <Grid container sx={{ justifyContent: 'center' }} xs={11} sm={11} md={11} lg={10}>
                        <Grid container xs={10} sm={10} md={6} lg={6}>
                            <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 18, fontFamily: 'outfit' }}>Product Name</Typography>
                            <Grid container xs={12} sm={12} md={12} lg={11} >
                                <TextField
                                    label="Product name"
                                    sx={{ width: '100%', my: 1 }}
                                    name='name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                        </Grid>

                        <Grid container xs={10} sm={10} md={6} lg={6}>
                            <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 18, fontFamily: 'outfit', my: .6 }}>Product Price</Typography>
                            <Grid container xs={12} sm={12} md={12} lg={11}>
                                <TextField
                                    label="Price"
                                    sx={{ width: '100%', my: 1 }}
                                    name='price'
                                    value={formik.values.price}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                        </Grid>

                        <Grid container xs={10} sm={10} md={6} lg={6}>
                            <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 18, fontFamily: 'outfit', my: .6 }}>Offer Price</Typography>
                            <Grid container xs={12} sm={12} md={12} lg={11}>
                                <TextField
                                    label="Offer Price"
                                    sx={{ width: '100%', my: 1 }}
                                    name='offerPrice'
                                    value={formik.values.offerPrice}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                        </Grid>

                        <Grid container xs={10} sm={10} md={6} lg={6}>
                            <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 18, fontFamily: 'outfit', my: .6 }}>Image</Typography>
                            <Grid container xs={12} sm={12} md={12} lg={11}>
                                <input
                                    type='file'
                                    sx={{ width: '100%', my: 1 }}
                                    name='image'
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </Grid>
                        </Grid>

                        <Grid container xs={10} sm={10} md={12} lg={12}>
                            <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 18, fontFamily: 'outfit', my: .6 }}>Description</Typography>
                            <Grid container xs={12} sm={12} md={12} lg={11}>
                                <TextField
                                    label="Description"
                                    sx={{ width: '100%', my: 1 }}
                                    name='description'
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                        </Grid>

                        <Grid container sx={{ justifyContent: 'center' }}>
                            <Button
                                type='submit'
                                variant="contained"
                                sx={{ my: 2, px: { xs: 2, sm: 2, md: 3, lg: 4 } }}
                            >Create</Button>
                        </Grid>
                    </Grid>
                </Grid >
            </form >
        </Grid >
    );
}