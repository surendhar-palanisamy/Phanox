import { Box, Button, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import React from 'react'
import { urlFor } from '../lib/client'

function Footer({ data }: any) {
  const router = useRouter()
  console.log(data, 'from footer component')
  return (
    <Box display={['', '', '', 'flex']} justifyContent={'space-between'} my={['', '', '', '24']} position={'relative'} mx={['2', '2', '2', '36']} rounded='xl' px={[2, 1, 1, 6]} py={[2, 0, 0, 12]} bgColor={'red.500'} textColor='white'>

      <Stack my={[2, 0, 0, 0]}>
        <Text pb={3}>{data.discount}</Text>
        <Text lineHeight={['0', '3']} fontSize={['', '', '', '5xl']} fontWeight={'bold'} fontStyle={'italic'}>{data.largeText1}</Text>
        <Text pt={2} fontSize={['', '', '', '5xl']} fontWeight={'bold'} fontStyle={'italic'}>{data.largeText2}</Text>
        <Text >{data.saleTime}</Text>
      </Stack>
      <Box position={'absolute'} left={['32', '', '', '80']} top={['0', '', '', '-16']}>
        <Image loading='lazy' height={[200, 400]} width={400} src={`${urlFor(data.image)}`} />
      </Box>

      <Box py={[2, 0, 0, 0]}>
        <Text>{data.smallText}</Text>
        <Text fontSize={['', '', '', '5xl']} fontWeight={'bold'} fontStyle={'italic'}>{data.midText}</Text>
        <Text>{data.desc}</Text>
        <Button mt={4} textColor={'red'} size={'sm'} bgColor={'white'} onClick={() => { router.push(`products/headphones`) }}>{data.buttonText}</Button>
      </Box>

    </Box>
  )
}

export default Footer