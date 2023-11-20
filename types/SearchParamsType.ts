
type Params = {
    id: string,
}

type SearchParams = {
    id: string,
    name: string,
    image: string,
    price: number | null,
    description: string | null,

}

export type SearchParamsType = {
    params: Params,
    searchParams: SearchParams

}