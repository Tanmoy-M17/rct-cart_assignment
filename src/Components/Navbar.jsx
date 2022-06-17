import React, { useContext } from 'react'
import { Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import logo from "../logo.png";
import { Divider } from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg";
// import { FiSearch } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import { Button} from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContext';


function Navbar() {

  const {isAuth,ToggleAuth}=useContext(AuthContext);
  console.log(isAuth)

  return (
    <div className={styles.main}>
        <div className={styles.logodiv}>

          <Heading as='h2' size='xl' color='green' >Zapa</Heading>
          <Divider orientation='vertical' />
          <Image
            boxSize='80px'
            position="absolut"
            src={logo}
            alt='Dan Abramov'
          />
          
        </div>
        <div className={styles.link}>
          <Link to=""> Home</Link>
          <Link to="/store"> Store</Link>
          <Link to="/men"> Men</Link>
          <Link to="/women"> Women</Link>
          <Link to="/trending"> Trending</Link>
          <Link to="/offers"> Offers</Link>
        </div>
        <div className={styles.lastdiv} >
          <button>
             {
            isAuth ? <Image
            borderRadius='full'
            boxSize='35px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            /> :<CgProfile></CgProfile>
            }
       
          </button>
         
      
      <Button onClick={ToggleAuth}> {isAuth ? "Logout" :"Login"}</Button>
       <RiShoppingCartLine></RiShoppingCartLine>
        </div>
    
    </div>

  )
}

export default Navbar