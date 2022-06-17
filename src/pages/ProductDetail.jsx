import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { RiShoppingCartLine } from "react-icons/ri";
import { RequireAuth } from '../HOC/RequireAuth';
import axios from 'axios';

function ProductDetail() {
    const {id}=useParams();

    const [data,setData]=useState({});
    useEffect(()=>{
      const getData=async()=>{
        let r= await axios.get(`http://localhost:8080/product/${id}`);
           setData(r.data);
        };
     getData();
   },[]);
  
  

  return (
    <RequireAuth>
       <div style={{display:"flex" ,textAlign:"center",alignItems:"center",padding:"20px"}}>
      
        <Image src={data.img} alt='Dan Abramov' />
        <Stat>
        <StatLabel>Title : {data.title}</StatLabel>
        <StatNumber>£{data.price}</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>

        
          <Button colorScheme='facebook' leftIcon={<RiShoppingCartLine />}>
          Add to Cart
          </Button>
        
        
      

        </Stat>
              
    </div>
    </RequireAuth>
   
  )
}

export default ProductDetail