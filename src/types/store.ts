export type StoreArticleInitstate = {
    article: {
        list: (string | number | {
            name: string,
            desc: string,
            id: number
        })[];
        count: number
    } | undefined;
   
    info: any;
    isLoading: boolean;
}
export type StoreExtractInitstate = {
    extract: {
        list: (string | number | {
            author: string,
            desc: string,
            id: number
        })[];
        count: number
    } | undefined;
    isLoading: boolean;
}