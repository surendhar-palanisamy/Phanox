import { Box, HStack, Stack, Text, Image, VStack, Grid } from '@chakra-ui/react'
import { useRouter } from 'next/router'
// import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/client'

function Products({ products }: any) {
  const router = useRouter();
  // console.log(products[2]['slug'].current,'from product component')
  return (
    <VStack >
      <Text my={5} fontWeight={'bold'} fontSize={'3xl'} textColor={'blue.700'} align={'center'}>Best Seller Products</Text>
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} columnGap={5} >
        {
          products.map((product: any) => {
            return (
              <Box py={[2, 0, 0, 0]} sx={{
                transition: ' 0.4s ease-in-out',
                '&:hover': { transform: 'scale(1.08)', cursor: 'pointer' },
              }} key={product['slug'].current} onClick={() => { router.push(`products/${product['slug'].current}`) }}>

                <Box px={1} rounded={'xl'} bgColor={'blackAlpha.100'} height={'44'} width={'44'}><Image src={`${urlFor(product.image[0])}`} /></Box>
                <Text fontWeight={'semibold'}>{product.name}</Text>
                <Text fontWeight={'bold'}>${product.price}</Text>
              </Box>)
          })}
      </Grid>
    </VStack>
  )
}

export default Products