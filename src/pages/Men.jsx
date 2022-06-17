import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';
import styles from "./Men.module.css";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';


export const Men = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        const getData=async()=>{
          let r= await axios.get(`http://localhost:8080/product`);
             setData(r.data);
          }
       getData()
     },[]);
    
  return (
    <div className={styles.imgdiv}>

        {data.map((e)=>{return <div key ={e.id}>

            <Image boxSize='200px' src={e.img}  width='200px'
            margin='auto' alt='Dan Abramov' />
            <Link to={`/men/${e.id}`}>
             <Button
            size='md'
            height='38px'
            width='200px'
            margin='auto'
            border='2px'
            borderColor='green.500'
            >
                See More
            </Button>
            </Link>
           
        </div> 

        })}  <Outlet to="/"></Outlet>
       
    </div>
  )
}
