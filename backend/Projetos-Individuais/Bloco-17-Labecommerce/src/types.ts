export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type Products = {
    id: string,
    name: string,
    image: string,
    price: number
}

export type Purchases = {
    userId: string,
    productId: string,
    quantity: number,
    id: string,
    totalPrice: number
}

export type PurchaseByUserId = {
    productName: string,
    quantity: number,
    totalPrice: number,
    price: number
}