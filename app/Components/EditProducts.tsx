"use client"
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import Cookies from 'js-cookie'
import { headers } from 'next/headers';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';

export default function EditProducts(props: any) {

    const { data } = props

    const pathname = usePathname().split('/')[3]

    const editData = data?.filter((data: any, index: any) => data?._id == pathname) ? data?.filter((data: any, index: any) => data?._id == pathname)[0] : ''

    const router = useRouter()

    const initialValues = {

        product_name: editData?.name,
        description: editData?.description,
        image: "",
        Price: editData?.price,
        offer_price: editData?.offerPrice,

    };

    const token = Cookies?.get('token')

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setStatus, setSubmitting, setErrors }) => {

            try {
                axios.patch(`http://127.0.0.1:3000/products/${pathname}`,
                    {
                        name: values?.product_name,
                        description: values?.description,
                        image: values?.image,
                        price: values?.Price,
                        offerPrice: values?.offer_price,
                    },
                    { headers: headers }
                ).then((res) => {
                    router.push('/backend/products')
                })
                // router.push('/backend/products');
            } catch (error: any) {
                alert("INvalid user");
            }
        },
        enableReinitialize: true
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
                        }}>Creat Product</Typography>

                        <CloseIcon
                            // onClick={() => setShowForm(!showForm)}
                            sx={{ ml: 'auto', mr: 6, cursor: 'pointer' }} />
                    </Grid>

                    <Grid container sx={{ bgcolor: "", justifyContent: 'center' }} xs={11} sm={11} md={11} lg={10}>

                        <Grid container xs={10} sm={10} md={6} lg={6}>

                            <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 18, fontFamily: 'outfit' }}>Product Name</Typography>

                            <Grid container xs={12} sm={12} md={12} lg={11} >
                                <TextField
                                    id="outlined-requirgba(0, 0, 0, 0.5)"
                                    // label="Product name"
                                    sx={{ width: '100%', my: 1 }}
                                    name='product_name'
                                    value={formik.values.product_name}
                                    onChange={formik.handleChange}
                                />
                            </Grid>

                        </Grid>

                        <Grid container xs={10} sm={10} md={6} lg={6}>
                            <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 18, fontFamily: 'outfit', my: .6 }}>Product Price</Typography>

                            <Grid container xs={12} sm={12} md={12} lg={11}>
                                <TextField
                                    id="outlined-requirgba(0, 0, 0, 0.5)"
                                    // label="Price"
                                    sx={{ width: '100%', my: 1 }}
                                    name='Price'
                                    value={formik.values.Price}
                                    onChange={formik.handleChange}
                                />
                            </Grid>

                        </Grid>

                        <Grid container xs={10} sm={10} md={6} lg={6}>
                            <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 18, fontFamily: 'outfit', my: .6 }}>Offer Price</Typography>

                            <Grid container xs={12} sm={12} md={12} lg={11}>
                                <TextField
                                    id="outlined-requirgba(0, 0, 0, 0.5)"
                                    // label="Offer Price"
                                    sx={{ width: '100%', my: 1 }}
                                    name='offer_price'
                                    value={formik.values.offer_price}
                                    onChange={formik.handleChange}
                                />
                            </Grid>

                        </Grid>

                        <Grid container xs={10} sm={10} md={6} lg={6}>
                            <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 18, fontFamily: 'outfit', my: .6 }}>Image</Typography>

                            <Grid container xs={12} sm={12} md={12} lg={11}>
                                <TextField
                                    id="outlined-requirgba(0, 0, 0, 0.5)"
                                    // label="Image"
                                    type='file'
                                    sx={{ width: '100%', my: 1 }}
                                    name='image'
                                    value={formik.values.image}
                                    onChange={formik.handleChange}
                                />
                            </Grid>

                        </Grid>

                        <Grid container xs={10} sm={10} md={12} lg={12}>

                            <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 18, fontFamily: 'outfit', my: .6 }}>Description</Typography>

                            <Grid container xs={12} sm={12} md={12} lg={11}>
                                <TextField
                                    id="outlined-requirgba(0, 0, 0, 0.5)"
                                    // label="Description"
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
    )
}
