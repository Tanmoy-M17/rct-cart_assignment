import React from 'react'
 import { Image } from '@chakra-ui/react'

export const Banner = () => {
  return (
    <div style={{height:"150px" ,margin:"5px",overflow:"hidden" ,display:"flex",flexDirection:"row",border:"2px solid" }}>
      
        <div> <Image src='https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80'
        /></div><h4 style={{fontSize:"40px"}}>coupon code</h4>
    </div>
  )
}
