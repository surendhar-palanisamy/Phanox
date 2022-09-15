import { Badge, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, HStack, Text, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Cart from './Cart';
function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const cart_items = useSelector((state: RootState) => state.addtocart.product)
  const dispatch = useDispatch()
  // console.log(cart_item)
  return (

    <Box mx={[0, 0, 0, 3]} px={[1, 1, 1, 10]} py={4}>

      <HStack justify={'space-between'} >
        <Link href='/'>
          <a><Text textTransform={'uppercase'}>Phanox shop</Text></a>
        </Link>
        <Box cursor={'pointer'} onClick={onOpen} position={'relative'} display={'flex'} >
          <Box >
            <HiOutlineShoppingBag size={22} />
          </Box>
          <Badge position={'absolute'} left='3' fontSize='0.6em' bgColor={'red.500'} rounded='full' variant={'solid'}>
            {(cart_items.length == 0) ?
              <div>0</div> : <div>{cart_items.length}</div>}

          </Badge>
        </Box>

      </HStack>
      <>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        // finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>

              <Cart />

            </DrawerBody>

          </DrawerContent>
        </Drawer>
      </>
    </Box>


  )
}

export default Navbar