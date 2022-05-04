export type CategoryType = {
    title: string
    imgUrl: string
    slug: string
    children?: CategoryType[]
}