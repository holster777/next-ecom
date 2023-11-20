import Stripe from 'stripe'
import Product from './components/Product'


const getProducts = async() => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15',
  })
  const products = await stripe.products.list()
  const productsWithPrices = await Promise.all(products.data.map( async (product) => {
    const prices = await stripe.prices.list({product: product.id})
    const features = product.metadata.features || ""
  
      return {
        id: product.id,
        active: product.active,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        description: product.description,
        metadata: { features }
      }
    
  }))
  
  const activeProducts = productsWithPrices.filter((products) => products.active)

  return activeProducts
  
}


export default async function Home() {

const products = await getProducts()

  return (
    <div className="px-9 lg:px-16">
      <div className="grid grid-cols-fluid gap-10 py-16">
      {products.map((product, index) => {
        return (
          <Product {...product} key={`product-${index}`} />
        )
      })}
      </div>
    </div>
  )
}
