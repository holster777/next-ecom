import Image from "next/image"

export default function Product({name, image, price}) {
    return (
        <div className="flex flex-col">
            <Image src={image} alt={name} width={300} height={450} className="w-[300px] h-[450px]" />
            <h1 className="text-lg font-bold mt-5 mb-3">{name}</h1>
            <p>{price}</p>
        </div>
    )
}