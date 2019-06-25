
const getUniqueFacils = (data) => {
    
    
    const allFacils = data.reduce((accFacils, hotel) => {
        return [...accFacils, ...hotel.facilities]
    }, [])
    
    const uniqueFacils = allFacils.reduce((accUniqueFacils, facil) => {
        return accUniqueFacils.includes(facil) ? accUniqueFacils : [...accUniqueFacils, facil]
    }, [])

    return uniqueFacils

}

module.exports = { getUniqueFacils }