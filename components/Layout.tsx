import { Box } from '@chakra-ui/react'
import React from 'react'
import LayoutFooter from './LayoutFooter'
import Navbar from './Navbar'

type layouttype ={
    childcomponent : React.ReactNode
}

function Layout({childcomponent}:layouttype) {
  return (
    <Box >
<Navbar/>
{childcomponent}
<LayoutFooter/>
    </Box>
  )
}

export default Layout