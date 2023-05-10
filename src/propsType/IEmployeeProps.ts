import { IEmployee } from "../types/IEmployee";

export interface IEmployeeProps
{
    list : IEmployee[],

    setlist?: Function,

    remove?: Function,

    setEdit?: Function,

    ind? : number


}