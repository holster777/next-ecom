export type AddCartType = {
    name: string, 
    image: string,
    id: string,
    quantity?: number | undefined,
    unit_amount: number | null,
    metadata: MetDataType
}

type MetDataType = {
    ingredients: string, 
    category: string
}