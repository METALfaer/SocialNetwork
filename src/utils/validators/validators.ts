export const required = (value: any) => {
    if (value) return undefined

    return 'error message'
};

export const maxLengthCreator = (maxLength: any) => (value: any) => {
    if (value.length > maxLength) return `max length is ${maxLength} symbols`

    return undefined
}


