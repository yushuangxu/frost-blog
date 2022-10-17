export type StoreArticleInitstate = {
    article: (string | number | {
        name: string,
        desc: string,
    })[];
}