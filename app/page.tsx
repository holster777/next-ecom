import ProductList from "./components/ProductList";
import Image from "next/image";
import { bitter, dmSerif, inter } from "./fonts";
import Link from "next/link";


export default function Home() {

  return (
    <div>
      <div className="grid grid-cols-2 border-b border-black">
        <Image src="https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Womans face" width={1920} height={1080} className="w-full h-auto object-cover"/>
        <div className="px-9 lg:px-16 flex flex-col justify-center">
          <p className={`${inter.className} uppercase text-sm mb-3 shadow-purple max-w-max`}>Our mission</p>
          <h1 className={`${dmSerif.className} antialiased text-7xl font-semibold w-4/5 mb-9`}>Beautiful skin, powered by plants</h1>
          <p className="w-3/4">Need some lorum ipsum to go here to add some text for this space but can't think of anything right now.</p>
          <Link href="/our-mission" className="my-9">Learn More</Link>
        </div>
      </div>

      <ProductList />
    
    </div>
  )
}
