import { Box, Button, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { AiFillCloseCircle, AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { empty_cart } from '../feautres/cartItemSlice'
import { cartvalue } from '../feautres/totalPriceSlice'
import { urlFor } from '../lib/client'
import { getStripe } from '../lib/getStripe'
function Cart() {
    const cart_items = useSelector((state: RootState) => state.addtocart.product)
    const total_price = useSelector((state: RootState) => state.cart_total_price.total_price)
    const [total_cost, set_total_cost] = useState(0)
    const dispatch = useDispatch()


    const handleCheckout = async () => {
        const stripe = await getStripe()

        const response: any = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cart_items)
        })

        if (response.statusCode === 500) return;
        const data = await response.json()
        toast.loading('Redirecting...', {
            duration: 1000
        })
        stripe.redirectToCheckout({ sessionId: data.id })
    }
    return (
        <Box sx={{
            position: 'relative',

        }}>

            <Box overflow={'auto'} sx={{
                h: '80vh',


            }}>
                {
                    cart_items.map((cart_item: any) => {
                        return (
                            <Box key={cart_item.product.name} display={'flex'} columnGap={10} py={4}>

                                <VStack>
                                    <Box px={1} rounded={'xl'} bgColor={'blackAlpha.100'} height={'24'} width={'24'}><Image src={`${urlFor(cart_item.product.image[0])}`} /></Box>
                                    <Text >Qty: {cart_item.item}</Text>
                                </VStack>
                                <Stack>
                                    <Text fontWeight={'bold'} textColor={'blue.800'} >  {cart_item.product.name}</Text>

                                    <Text fontWeight={'bold'} textColor={'red.600'}>Price: ${cart_item.product.price}</Text>
                                    {/* <AiOutlineCloseCircle color='red' /> */}
                                </Stack>
                            </Box>
                        )
                    })
                }
            </Box>
            {
                cart_items.length < 1 && <VStack position={'absolute'} px={5} top={0} pt={10} ><Text>Oops!! No Items In the Cart  :(</Text></VStack>
            }
            <HStack columnGap={10} >
                {
                    cart_items.length > 0 && <VStack bottom={0}>
                        <Button onClick={() => {
                            dispatch(empty_cart())
                            dispatch(cartvalue(0))
                        }} >Emtpy Cart</Button>
                    </VStack>
                }
                {cart_items.length > 0 &&
                    <VStack bottom={0} right={0}>

                        <Text>Total: ${
                            total_price
                        }</Text>
                    </VStack>}
            </HStack>
            {cart_items.length > 0 &&

                <VStack py={4}>
                    <Button colorScheme={'red'} onClick={() => {

                        console.log('pay with stripe clicked')
                        handleCheckout()
                    }} >
                        Pay with Stripe
                    </Button>
                </VStack>


            }
        </Box>
    )
}

export default Cart