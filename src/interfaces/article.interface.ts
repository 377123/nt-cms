export interface InputArticle {
    title: string;
    username: string;
    owner: number;
    classify: {
        id: number;
    };
    cover: string;
    abstract: string;
    content: string;
    top: boolean;
    status: number;
    source: string;
    sourceUrl: string;
    createAt: string;
    infoKVs?: {
        artInfoId: number;
        artInfoValue: string;
        infoItemId?: number }[];
}

export interface UpdateArticle {
    id: number;
    title: string;
    classifyId: number;
    sourceUrl: string;
    cover: string;
    owner: number;
    abstract: string;
    content: string;
    top: boolean;
    source: string;
    modifyAt?: string;
    status?: number;
    infoKVs?: {
        artInfoId: number;
        artInfoValue: string;
        infoItemId?: number
    }[];
    username: string;
}

export  interface ArtResult {
    id: number;
    title: string;
    classify: {
        id: number;
        name: string;
        alias: string;
        onlyChildrenArt: boolean;
    };
    sourceUrl: string;
    cover: string;
    abstract: string;
    content: string;
    top: boolean;
    source: string;
    username: string;
}