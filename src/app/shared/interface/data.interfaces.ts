export interface APIResponse<T>{
    result:T;

}

export interface DataResponse{
    
    characters: APIResponse<Character[]>
    episodes: APIResponse<Episode[]>

}



export interface Character{

    id: number
    name: number
    species: string
    status: string
    gender: string
    image: string
    isFavorite?: boolean

}

export interface Episode{
    
    name:string
    episode: string

}