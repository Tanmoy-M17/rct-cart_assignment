import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Men.module.css";
import { Button, Image} from '@chakra-ui/react';
import {  Outlet } from 'react-router-dom';

const Home = () => {
  const [data,setData]=useState([]);

  const getData= async()=>{
      
      try{
          let res= await fetch (" http://localhost:8080/product");

          let data= await res.json();
          setData(data);

          console.log(data);

      }catch(err){

          console.log(err)
      }

  }

  useEffect(()=>{

getData();

  },[])


return (
  <div className={styles.imgdiv}>

      {data.map((e)=>{return <div key ={e.id}>

          <Image boxSize='200px' src={e.img} alt='Dan Abramov' />
          <Link to={`/men/${e.id}`}>
           <Button
          size='md'
          height='38px'
          width='200px'
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

export default Home