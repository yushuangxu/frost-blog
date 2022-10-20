export type StoreArticleInitstate = {
    article: (string | number | {
        name: string,
        desc: string,
        id: number
    })[];
    info: any;
    isLoading: boolean;
}