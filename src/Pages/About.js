import React from 'react'
import Layout from '../components/Layout/Layout'
import { Typography } from '@mui/material'
import {Box} from '@mui/material'
const About = () => {
  return (
    <Layout>
       <Box sx={{
        my:15,
        textAlign:'center',
        p:2,
        "& h4":{
          fontWeight:'bold',
          my:2,
          fontSize:"2rem"
        },
        "& p":{
          textAlign:'justify'
        },
        "@media (max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize:'1.5rem'
          }
        }
       }}>
        <Typography variant='h4'>
          Welcome To My Restuarant
        </Typography>
        <p>
        A restaurant is a business that prepares and serves food and drinks to customers.Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.
        </p>
        <br/>
        <p>
        The Indian restaurant industry is highly fragmented with more than 1.5 million outlets of which only around 3000 of them are from the organised segment.[54] The organised segment includes quick service restaurants; casual dining; cafes; fine dining; and pubs, bars, clubs, and lounges.
        </p>
       </Box>
        </Layout>
  )
}

export default About