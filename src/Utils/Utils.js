export const addElemArray = (array, newElem) => {
    return [...array, newElem];
}

export const remElemArray = (array, value) => {
    return array.filter(elem => elem !== value);
}
