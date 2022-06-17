import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { HiOutlineLogin } from "react-icons/hi";
import { Button } from '@chakra-ui/react'


export const Login = () => {

    const {login}=useContext(AuthContext);

    const handleSubmit=()=>{

    }
  return (
    <div>
        
        
        <form onSubmit={handleSubmit}>
            <br />

        <input name="email" type="text" placeholder='email' />
        <br />
        <br />
        <input name="password" type="password"  placeholder='Enter passoword ...'  />
        <br />
        <br />
        <Button onClick={login} colorScheme='facebook' leftIcon={<HiOutlineLogin /> }>
            Login
        </Button>
        <br />
        <br />
        </form>
        
        </div>
  )
}
