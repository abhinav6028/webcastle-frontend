"use server"
import EditProducts from '@/app/Components/EditProducts'
import { fetchApiData } from '@/app/fetchData/fetchData'
import { Grid } from '@mui/material'
import React from 'react';

export default async function page() {

    const data = await fetchApiData(`products`)

    return (
        <Grid sx={{ mt: 10 }}>
            <EditProducts data={data} />
        </Grid>
    )
}
