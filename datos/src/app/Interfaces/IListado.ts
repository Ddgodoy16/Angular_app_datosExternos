import { IDatos } from "./IDatos"

export interface IListado{
    count: number
    next: string
    previous: string | null
    results: IDatos[]
}