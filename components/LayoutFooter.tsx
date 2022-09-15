import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
function LayoutFooter() {
  return (
    <VStack pb={6}>

        <Text fontWeight={'semibold'}>2022.Phanox All rights reserved</Text>
      <HStack> 
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </HStack>
    </VStack>
  )
}

export default LayoutFooter