export interface Product {
    id?: string,
    nameProduct?: string,
    referency?: string,
    price?: number,
    weight?: number,
    stock?: number,
    idCategory?: number,
}

export interface SaveProduct {
    data: Product,
    status: number
}

export interface editSuccess {
    data?: string,
    status?: number
}
