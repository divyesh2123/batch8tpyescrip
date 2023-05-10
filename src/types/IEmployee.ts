export interface IEmployee
{

    fname : string,
    lname: string,
    address: string,
    city: string,
    state: string,
    zipcode: string,
    removeEmployee? : Function,
    deleteindex?: number,
    setEdit?: Function
}