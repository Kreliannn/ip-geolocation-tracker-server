export interface accountInterfaceInput {
    name: string,
    email: string,
    password: string
}



export interface accountInterface extends accountInterfaceInput {
    _id : string,
}