import { getProducts } from '@/util/stripe/products'
import Product from './Product'


export default async function ProductList() {

    const products = await getProducts()

    // TODO: ENABLE FILTER BY PRODUCT CATEGORY

    return (
        <div className="grid grid-cols-fluid gap-x-10 gap-y-12 py-9 lg:py-24 max-w-[1400px] mx-auto">
            {products.map((product, index) => {
                return (
                <Product {...product} key={`product-${index}`} />
                )
            })}
      </div>
    )
}