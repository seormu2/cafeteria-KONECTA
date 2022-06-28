export interface Product {
    id?: number,
    nameProduct?: string,
    referency?: string,
    price?: number,
    weight?: number,
    stock?: number,
    idCategory?: number,
    total?: number
    totalPrice?: number
}

export interface SaveProduct {
    data: Product,
    status: number
}

export interface editSuccess {
    data?: string,
    status?: number
}
