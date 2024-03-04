import Product from "./Product"

interface FetchProductSlice {
    isLoading : boolean,
    data : Product[],
}

interface CartSlice {
    data : Product[],
    count : number,
    cartItemId : number,
}

interface EshopState {
    AllProducts : FetchProductSlice,
    Cart : CartSlice
}

export default EshopState