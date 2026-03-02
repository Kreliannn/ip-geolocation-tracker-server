export interface accountInterfaceInput {
    name: string,
    email: string,
    password: string,
    history : string[]
}



export interface accountInterface extends accountInterfaceInput {
    _id : string,
}