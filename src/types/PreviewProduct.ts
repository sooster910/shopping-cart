export interface ProductPreview{
    prefix: string,
    mainImage: string,
    name: string,
    productUrl: string,
    brand: {
        id: number,
        name: string
    },
    shop: {
        id: number,
        name: string
    },
    shippingPrice:number,
    originalPrice: number,
    ssomeePrice: number,
    soldOut : boolean,
}