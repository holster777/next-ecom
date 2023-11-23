import Stripe from "stripe"
import { PrismaClient } from '@prisma/client'
import { buffer } from "micro"
import { NextApiRequest, NextApiResponse } from "next"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
})

const prisma = new PrismaClient()

export const config = {
    api: {
        bodyParser: false
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    const reqBuffer = await buffer(req)
    const signature = req.headers["stripe-signature"]

    if (!signature) {
        return res.status(400).send('Missing Stripe Signature')
    }

    let event: Stripe.Event
    try {
        event = stripe.webhooks.constructEvent(reqBuffer, signature, process.env.STRIPE_WEBHOOK_SECRET!)
    } catch(err) {
        return res.status(400).send("Webhook Error" + err)
    }

// Handle different type of Stripe events

switch(event.type) {
    case "payment_intent.created":
        const paymentIntent = event.data.object
        console.log('Payment intent was created')
        break

    case "charge.succeeded":
        const charge = event.data.object as Stripe.Charge
        if (typeof charge.payment_intent === "string"){
            const order = await prisma.order.update({
                where: {paymentIntentId: charge.payment_intent},
                data: { status: "complete"}
            })
        }
        break
}

}





