import Image from "next/image"
import Link from "next/link"
import { PiPlantFill } from "react-icons/pi"


export default function BlogFeaturedPost(){

return (

    <div className="grid lg:grid-cols-2 bg-sand text-white">
        <div className="flex flex-col px-9 lg:px-16 py-16 justify-center">
            
            <p className="text-sm uppercase flex gap-5 items-center"><PiPlantFill /> Featured Post <PiPlantFill /></p>
            <h2 className="text-2xl my-5 font-semibold">Five Benefits of Soapless Cleansers</h2>
            <p className="lg:w-3/4">We explore the huge differences using a soapless cleanser can make for your skin. It's time to stop using harsh chemicals and let the plants use their power.</p>
            <Link href="/blog/soapless-cleansers" className="px-5 py-2 border border-white mt-7 inline text-center">Read More</Link>
        </div>
        <Image src="https://images.unsplash.com/photo-1570554634503-9d0f79c97dd5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Soap bars lined up on end" width={600} height={600} className="w-full h-auto object-cover" />
    </div>

)



}