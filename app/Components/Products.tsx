"use client"
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Products(props: any) {

    const { data } = props;

    const router = useRouter()

    return (
        <Grid container sx={{ justifyContent: 'center', mt: 10, bgcolor: '#f5f7f8' }}>

            <Grid container xs={11} sm={11} md={10} lg={11} sx={{ my: { xs: 2, sm: 2, md: 3, lg: 3 }, bgcolor: '' }}>

                <Grid container sx={{ width: '100%', justifyContent: 'space-around' }}>

                    {

                        data?.map((data: any, index: any) =>

                            <Grid
                                onClick={() => router.push(data?._id)}
                                container xs={5.5} sm={3} md={3.4} lg={2} sx={{ my: 2, justifyContent: 'center' }}>

                                <Grid container xs={11} sm={11} md={11} lg={11} sx={{
                                    background: '#FFF', justifyContent: 'center',
                                    borderRadius: 1,
                                    boxShadow: "0px 0px 15px 0px rgba(62, 193, 208, 0.05)",
                                    border: '1px solid grey',
                                    cursor: 'pointer'
                                }}>


                                    <Grid container xs={11} sm={11} md={11} lg={11} sx={{ background: '', justifyContent: 'center', py: 1.5 }}>


                                        <Grid container justifyContent="center" sx={{
                                            alignItems: "",
                                            pb: { xs: 1, sm: 1.2, md: 1.5, lg: 1.5 },
                                            bgcolor: '',
                                            borderBottom: '1px solid rgba(242, 242, 242, 1)'
                                        }}>

                                            <Grid
                                                container
                                                xs={11} sm={11} md={10} lg={10}

                                            >

                                                <Box
                                                    component="img"
                                                    src='https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg'
                                                    sx={{ width: '100%' }}
                                                />



                                            </Grid>




                                            <Typography sx={{
                                                width: '',
                                                fontSize: { xs: 13, sm: 13, md: 16, lg: 18, fontFamily: "outfit", width: '100%' }, color: 'rgba(128, 128, 128, 1)'
                                            }}>{data?.name}</Typography>


                                        </Grid>







                                        <Grid container lg={10} md={10} sx={{ justifyContent: { xs: 'start', sm: 'start', md: 'center', lg: 'center' } }}>

                                            <Typography sx={{
                                                fontSize: { xs: 7, sm: 11, md: 15, lg: 15 },
                                                color: '#FFF',
                                                bgcolor: 'rgba(31, 108, 171, 1)', fontFamily: "outfit",
                                                height: 'fit-content', fontWeight: 'bold',
                                                py: { xs: .6, sm: .6, md: 1, lg: 1 },
                                                px: { xs: 2, sm: 2, md: 4, lg: 4 }, cursor: 'pointer',
                                                borderRadius: 1
                                            }}>BUY NOW</Typography>

                                        </Grid>



                                    </Grid>

                                </Grid>
                            </Grid>

                        )
                    }
                </Grid >

            </Grid>
        </Grid >
    )
}
