import { Box, Button, HStack, ring, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/client'
import { Grid, GridItem } from '@chakra-ui/react'
import { useRouter } from 'next/router'
function HeroBanner({ data }: any) {
  console.log(data, 'from banner component')
  const router = useRouter()
  return (
    <>
      <Box position={'relative'} mx={['2', '2', '2', '36']} bgColor={'blackAlpha.200'} px={[3, 3, 3, 4]} rounded='xl'>
        <HStack>
          <Box pt={8} >
            <Text py={[1, 0, 0, 0]} fontWeight={'semibold'} >{data.smallText}</Text>
            <Text py={[1, 0, 0, 0]} fontWeight={'bold'} fontSize={['', '', '', '5xl']}>{data.midText}</Text>
            <Text py={[1, 0, 0, 0]} fontWeight={'bold'} fontSize={['', '', '', '7xl']} textColor={"white"}>{data.largeText1}</Text>
            <Button py={[1, 0, 0, 0]} mb={4} colorScheme={'red'} rounded={'xl'} onClick={() => { router.push(`products/headphones`) }}>{data.buttonText}</Button>

          </Box>
          <Box position={'absolute'} pt={['12', '', '', '']} left={['36', '', '', '96']} top={[0, 0, 0, -16]}  >
            <Image src={`${urlFor(data.image)}`} width={300} height={300} />
          </Box>
        </HStack>
        <Box py={2} position={['initial', 'initial', 'initial', 'absolute']} bottom='0' right={'5'} mb={2} >
          <Stack>
            <Text fontWeight={'bold'} textColor={'blue.700'}>Description</Text>
            <Text fontWeight={'thin'}>{data.desc}</Text>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default HeroBanner




// <Grid mx={['2', '2', '2', '36']} templateColumns={['repeat(5, 1fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)']} bgColor={'blackAlpha.200'} px={[1, 1, 1, 4]} rounded='xl'>
// <GridItem colSpan={2} pt={8} >
//   <Text fontWeight={'semibold'} >{data.smallText}</Text>
//   <Text fontWeight={'bold'} fontSize={['', '', '', '5xl']}>{data.midText}</Text>
//   <Text fontWeight={'bold'} fontSize={['', '', '', '7xl']} textColor={"white"}>{data.largeText1}</Text>
//   <Button mb={4} colorScheme={'red'} rounded={'xl'} onClick={() => { router.push(`products/headphones`) }}>{data.buttonText}</Button>

// </GridItem>
// <GridItem position={'relative'} colStart={3} colSpan={2}>
//   <Image src={`${urlFor(data.image)}`} width={300} height={300} />
// </GridItem>
// <GridItem position={'relative'} colSpan={1} mb={2} colStart={5}>
//   <Stack position={'absolute'} bottom='0' >
//     <Text fontWeight={'bold'} textColor={'blue.700'}>Description</Text>
//     <Text fontWeight={'thin'}>{data.desc}</Text>
//   </Stack>
// </GridItem>
// </Grid>
