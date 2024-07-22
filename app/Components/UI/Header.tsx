
"use client"
import { Avatar, Box, Grid, Typography } from '@mui/material'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {

    const pathname = usePathname();

    console.log("router", pathname);


    return (
        <Grid container sx={{ display: pathname == "/backend/login" ? 'none' : '' }}>

            <Grid container sx={{
                justifyContent: "center", py: 2,
                position: "fixed",
                top: 0,
                left: 0, zIndex: 1000,
                bgcolor: '#FFF',
                display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }
            }}>

                <Grid container md={11.7} lg={11} sx={{ bgcolor: "", alignItems: 'center' }}>

                    <Typography
                        // onClick={() => router.push('/login')}
                        sx={{
                            color: "#808080",
                            fontSize: 30,
                            fontWeight: 600, fontFamily: 'outfit',
                            mr: 4,
                            cursor: 'pointer'
                        }}>E-Come</Typography>



                    <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                        <Link href="/backend/login" style={{ textDecoration: 'none' }}>
                            <Typography
                                // onClick={() => router.push('/login')}
                                sx={{
                                    color: "#808080",
                                    fontSize: 15, fontWeight: 600, fontFamily: 'outfit',
                                    mr: 4,
                                    cursor: 'pointer'
                                }}>Admin Login</Typography>
                        </Link>

                        <Avatar sx={{ cursor: 'pointer' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                    </Box>

                </Grid>
            </Grid >
        </Grid>
    )
}

export default Header
