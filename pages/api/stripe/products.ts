import Stripe from 'stripe'

export async function getProducts() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: '2022-11-15',
    })

    const products = await stripe.products.list()
    const productsWithPrices = await Promise.all(products.data.map( async (product) => {
    const prices = await stripe.prices.list({product: product.id})
    const ingredients = product.metadata.ingredients || ""
    
        return {
          id: product.id,
          active: product.active,
          name: product.name,
          unit_amount: prices.data[0].unit_amount,
          image: product.images[0],
          currency: prices.data[0].currency,
          description: product.description,
          metadata: { ingredients }
        }
      
    }))
    
    const activeProducts = productsWithPrices.filter((products) => products.active)
  
    return activeProducts
    
  }


  export async function getProductById(id: string){
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: '2022-11-15',
    })
    
    const product = await stripe.products.retrieve(id)
    const price = await stripe.prices.retrieve(product.default_price as string)
    const ingredients = product.metadata.ingredients || ""
  
    const productData = {
    id: product.id,
    active: product.active,
    name: product.name,
    unit_amount: price.unit_amount,
    image: product.images[0],
    currency: price.currency,
    description: product.description,
    metadata: { ingredients }
    }

    return productData

  }
