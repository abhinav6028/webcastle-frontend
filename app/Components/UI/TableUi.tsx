"use client"
import React, { useState } from 'react';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import CreateProdect from '../CreateProdect';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Cookies from 'js-cookie'
import axios from 'axios';
import EditProduct from '../EditProduct';
import EditProducts from '../EditProducts';
import { useRouter } from 'next/navigation';

export default function TableUi(props: any) {

    const { data } = props

    const [showForm, setShowForm] = useState(false)

    const [editForm, setEditForm] = useState(false)

    const [productId, setProductId] = useState()

    const token = Cookies?.get('token')

    const router = useRouter()

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    return (

        <Grid container sx={{ justifyContent: 'center' }}>

            {/* <EditProducts editForm={editForm} setEditForm={setEditForm} productId={productId} /> */}

            {/* <EditProduct  /> */}

            {
                showForm ?
                    <CreateProdect showForm={showForm} setShowForm={setShowForm} productId={productId} />
                    :
                    <Grid container lg={10} sx={{ bgcolor: '' }}>

                        <Typography
                            onClick={() => setShowForm(!showForm)}
                            sx={{
                                bgcolor: '#C0C0C0', py: { xs: 1, sm: 1, md: 1, lg: 2 }, px: { xs: 2, sm: 2, md: 4, lg: 4 }, ml: 'auto', my: 2, cursor: 'pointer', fontWeight: 'bold', fontSize: { xs: 12, sm: 12, md: 14, lg: 15 }, fontFamily: 'outfit'
                            }}>Add Product</Typography>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>

                                    <TableRow>

                                        <TableCell align="center" sx={{ fontFamily: 'outfit' }}>Product</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: 'outfit' }}>Image</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: 'outfit' }}>Price</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: 'outfit' }}>Offer Price</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: 'outfit' }}>Actions</TableCell>

                                    </TableRow>

                                </TableHead>

                                <TableBody>

                                    {
                                        data.map((data: any) => (

                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >

                                                <TableCell align="center" sx={{ fontFamily: 'outfit' }}>{data?.name}</TableCell>

                                                <TableCell align="center" sx={{ fontFamily: 'outfit' }}>
                                                    <Box
                                                        component='img'
                                                        src='https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg'
                                                        sx={{ height: 60, width: 60 }}
                                                    />
                                                </TableCell>

                                                <TableCell align="center" sx={{ fontFamily: 'outfit' }}>{data?.price}</TableCell>
                                                <TableCell align="center" sx={{ fontFamily: 'outfit' }}>{data?.offerPrice}</TableCell>

                                                <TableCell align="center" sx={{ fontFamily: 'outfit', bgcolor: '', display: "flexs", justifyContent: 'center' }}>
                                                    <Grid container sx={{ justifyContent: 'center' }}>
                                                        <Box sx={{ display: 'flex' }}>

                                                            <DeleteIcon
                                                                onClick={() => {
                                                                    axios.delete(`http://127.0.0.1:3000/products/${data?._id}`,
                                                                        { headers: headers }).then(() => {
                                                                            alert("Successfully Deleted")
                                                                        })
                                                                }}
                                                                sx={{ cursor: 'pointer' }} />

                                                            <ModeEditOutlineIcon
                                                                onClick={() => {
                                                                    router.push(`/backend/products/${data?._id}`)
                                                                    setEditForm(!editForm)
                                                                }}
                                                                sx={{ cursor: 'pointer', ml: 1 }} />
                                                        </Box>

                                                    </Grid>

                                                </TableCell>

                                            </TableRow>

                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
            }

        </Grid >
    )
}
