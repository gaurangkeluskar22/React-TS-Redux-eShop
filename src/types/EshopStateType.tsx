import Product from "./Product"

interface EshopStateType {
    fetchProductSlice : {
        isLoading : boolean,
        data : Product[],
    },
}

export default EshopStateType