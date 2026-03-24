export interface IProduct {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: Array<string>,
    brand: string,
    sku: string,
    weight: number,
    dimensions: any,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: any,
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: any,
    images: any,
    thumbnail: string
}

export interface IProducts {
    limit: number,
    products: IProduct[],
    skip: number,
    total: number
}