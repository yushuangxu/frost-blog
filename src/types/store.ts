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