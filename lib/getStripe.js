import {loadStripe} from '@stripe/stripe-js'


let stripePromise;


 export const getStripe = () =>{

    if(!stripePromise){
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_PK_STRIPE)
    }



    return stripePromise
}


