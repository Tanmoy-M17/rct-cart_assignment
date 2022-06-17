import React from 'react';
import styles from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { RiYoutubeLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { Divider } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';


import { FaQuestionCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className={styles.main}>
        
        <div className={styles.content}>

              <div>
              <Heading as='h5' size='sm'>
                About us
              </Heading>
              <Text fontSize='xs' noOfLines={4}>
                made with love by subhankar; 
                Thank yoy for Visit :)
              
              </Text>


            </div>
            <div>
                suppor
            </div>
            <div>
                
                shop
            </div>
        

            <div>
                <p><FaQuestionCircle></FaQuestionCircle>FAQ</p> 
                <Link to="/faq"> </Link>
                
            </div>
        </div>
        
      
        <Divider />
         <div className={styles.social}>
            <p>Reach out to us </p>
            
            <BsFacebook></BsFacebook>
            <BsTwitter></BsTwitter>
            <BsLinkedin></BsLinkedin>
            <BsInstagram></BsInstagram>
            <BsGithub></BsGithub>
            <RiYoutubeLine></RiYoutubeLine>
         
             
            
           
        </div> 
        <Divider />
    </div>
  )
}
