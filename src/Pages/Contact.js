import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Contact = () => {
    return (
        <Layout>
            <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
                <Typography variant='h4'> Contact My Restuarant </Typography>
                <p>
                    Restaurant guides review restaurants, often ranking them or providing information to guide consumers (type of food, handicap accessibility, facilities, etc.). One of the most famous contemporary guides is the Michelin series of guides which accord from 1 to 3 stars to restaurants they perceive to be of high culinary merit. Restaurants with stars in the Michelin guide are formal, expensive establishments; in general the more stars awarded, the higher the prices.

                    The main competitor to the Michelin guide in Europe is the guidebook series published by Gault Millau. Its ratings are on a scale of 1 to 20, with 20 being the highest.
                </p>
            </Box>
            <Box sx={{m:3,width:'600px',ml:10,'@media (max-width: 600px)':{
                width:'300px'
            }}}>
                <TableContainer>
                    <Table aria-label="contact label">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{bgcolor:'black',color:'white'}} align='center' borderRadius='20px'>Contact Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> +121-674328(contact no.)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <EmailIcon sx={{ color: 'skyblue', pt: 1 }} /> harshalgupta164@gmail.com(Email us)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <PhoneAndroidIcon sx={{ color: 'green', pt: 1 }} /> +91-988970-6763(Call us)
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}

export default Contact