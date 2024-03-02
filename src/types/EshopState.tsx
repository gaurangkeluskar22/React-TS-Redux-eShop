import Product from "./Product"

interface FetchProductSlice{
    isLoading : boolean,
    data : Product[],
}

interface EshopState {
    AllProducts : FetchProductSlice
}

export default EshopState