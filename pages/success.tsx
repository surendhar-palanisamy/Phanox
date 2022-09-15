import React from 'react'
import confetti from 'canvas-confetti'
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
function Success() {
    const coolFireworks = () => {
        var duration = 5 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min: any, max: any) {
            return Math.random() * (max - min) + min;
        }

        var interval: any = setInterval(function () {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }
    coolFireworks()
    const router = useRouter()
    return (
        <VStack height={'80vh'} alignItems='center' justifyContent={'center'}>
            <Text fontWeight={'bold'} fontStyle='italic' fontSize={'6xl'}>Let{`'`}s Continue Shopping</Text>
            <Button onClick={() => {
                router.push('/')
            }} colorScheme={'teal'}>
                Goo!!

            </Button>

        </VStack>
    )
}

export default Success