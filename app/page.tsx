import Product from './components/Product'
import { getProducts } from '@/pages/api/stripe/products'

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
