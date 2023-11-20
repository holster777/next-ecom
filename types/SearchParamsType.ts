
type Params = {
    id: string,
}

type SearchParams = {
    id: string,
    name: string,
    image: string,
    unit_amount: number | null,
    description: string | null,
    ingredients: string,

}

export type SearchParamsType = {
    params: Params,
    searchParams: SearchParams

}