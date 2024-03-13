const validateProperNoun = (city : string) => {

    const containsLetter = /[a-zA-Z]/g.test(city);  
    return containsLetter;
}

const eventValidation = {
    validateProperNoun
}

export default eventValidation;