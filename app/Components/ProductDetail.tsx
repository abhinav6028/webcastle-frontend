"use client"
import { Box, Grid, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function ProductDetail(props: any) {

    const { data } = props

    const pathname = usePathname().split('/')[1]


    const details = data?.filter((data: any, index: any) => data?._id == pathname) ? data?.filter((data: any, index: any) => data?._id == pathname)[0] : ''

    console.log("/////////////////", details);


    return (
        <Grid container sx={{
            mt: 10,
            justifyContent: 'center'
        }}>

            <Grid container lg={10} sx={{
                bgcolor: '',
                alignItems: 'center'
            }}>


                <Grid container xs={11} sm={11} lg={6} md={6} sx={{ justifyContent: 'center', bgcolor: '', }}>
                    <Grid container xs={11} sm={11} lg={10} md={10} sx={{ bgcolor: '', }}>

                        <Grid
                            container
                            component="img"
                            src='https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg'
                        />

                    </Grid>
                </Grid>




                <Grid container xs={11} sm={11} lg={6} md={6} sx={{ bgcolor: '' }}>

                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{
                            fontSize: { xs: 20, sm: 25, md: 33, lg: 35 },
                            fontWeight: 'bold',
                            fontFamily: 'outfit'
                        }}>{details?.name}</Typography>

                        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                            <Typography sx={{
                                fontSize: { xs: 15, sm: 15, md: 25, lg: 25 },
                                fontWeight: 'bold',
                                fontFamily: 'outfit'
                            }}>{details?.offerPrice}</Typography>

                            <Typography sx={{
                                fontSize: { xs: 12, sm: 12, md: 17, lg: 18 },
                                fontWeight: 'bold',
                                fontFamily: 'outfit',
                                ml: 1,
                                color: 'grey',
                                my: 2
                            }}>{details?.price}</Typography>
                        </Box>

                        <Typography sx={{
                            fontSize: { xs: 12, sm: 12, md: 17, lg: 18 },
                            fontWeight: 'bold',
                            fontFamily: 'outfit',
                            ml: 1,
                            color: 'grey',
                            my: 2
                        }}>{details?.description}</Typography>

                        <Typography sx={{
                            fontSize: { xs: 7, sm: 11, md: 15, lg: 15 },
                            color: '#FFF',
                            bgcolor: 'rgba(31, 108, 171, 1)', fontFamily: "outfit",
                            height: 'fit-content', fontWeight: 'bold',
                            py: { xs: .6, sm: .6, md: 1, lg: 1 },
                            px: { xs: 2, sm: 2, md: 4, lg: 4 }, cursor: 'pointer',
                            borderRadius: 1,
                            width: 'fit-content '
                        }}>BUY NOW</Typography>

                    </Box>



                </Grid>
            </Grid>


        </Grid>
    )
}
