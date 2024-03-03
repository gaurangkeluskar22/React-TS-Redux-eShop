export const generateRating = (value : number | undefined) : string => {
    if(value === undefined){
        return '0'
    }
    const rating = Math.ceil(value);
    return '⭐'.repeat(rating);
}
