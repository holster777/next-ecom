export type ProductType = {
    id: string,
    quantity?: number | 1,
    name: string,
    image: string,
    unit_amount: number | null,
    description: string | null,
    metadata: MetadataType

}

type MetadataType = {
    ingredients: string
}