export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Poco f1',
        price: 10999,
        features: '3GB/64GB',
        discount: 10
    },
    {
        id: 2,
        name: 'Realme Narzo',
        price: 11999,
        features: '4GB/64GB',
        discount: 12
    },
    {
        id: 3,
        name: 'Apple iPhone XR',
        price: 65999,
        features: '4GB/64GB',
        discount: 7
    },
    {
        id: 4,
        name: 'Samsung Galaxy S20+',
        price: 87999,
        features: '8GB/256GB',
        discount: 5
    },
    {
        id: 5,
        name: 'OnePlus 7 Pro',
        price: 49999,
        features: '8GB/256GB',
        discount: 18
    },
    {
        id: 6,
        name: 'Samsung Galaxy S10',
        price: 34999,
        features: '4GB/64GB',
        discount: 10
    },
    {
        id: 7,
        name: 'Samsung Galaxy M20',
        price: 18999,
        features: '6GB/64GB',
        discount: 20
    },
    {
        id: 8,
        name: 'RealMe note 8 pro ultra max',
        price: 8999,
        features: '10GB/512GB',
        discount: 42
    },
    {
        id: 9,
        name: 'Apple iPhone X',
        price: 89999,
        features: '6GB/128GB',
        discount: 4
    },
    {
        id: 10,
        name: 'Apple iPhone X',
        price: 79999,
        features: '4GB/64GB',
        discount: 10
    },
    {
        id: 11,
        name: 'Samsung Galaxy M20',
        price: 16999,
        features: '4GB/64GB',
        discount: 10
    },
    {
        id: 12,
        name: 'OnePlus 7t',
        price: 46999,
        features: '6GB/64GB',
        discount: 12
    },
    {
        id: 13,
        name: 'OnePlus 8',
        price: 67999,
        features: '8GB/512GB',
        discount: 14
    },
    {
        id: 14,
        name: 'Intex utra max pro 20+',
        price: 6999,
        features: '16GB/1024GB',
        discount: 35
    }
];

export type Product = {
    id: number;
    name: string;
    price: number;
    features: string;
    discount: number;
}