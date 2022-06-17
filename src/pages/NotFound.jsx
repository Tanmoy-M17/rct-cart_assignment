import React from 'react';
import { Heading } from '@chakra-ui/react'

function NotFound() {
  return (
    <div>
      <br /><br />
        <Heading as='h2' size='3xl' noOfLines={1}>
    404  Page not Found
  </Heading>
  <br /><br />
    </div>
  )
}

export default NotFound