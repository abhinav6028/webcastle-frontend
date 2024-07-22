

import TableUi from '@/app/Components/UI/TableUi';
import { fetchApiData } from '@/app/fetchData/fetchData';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

export default async function page() {

    const data = await fetchApiData('products')

    console.log("showForm", data);


    return (
        <Grid container mt={10} sx={{ justifyContent: 'center' }}>


            <TableUi data={data} />

        </Grid>
    )
}
