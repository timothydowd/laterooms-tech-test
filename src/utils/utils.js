
const getUniqueFacils = (data) => {
    
    
    const allFacils = data.reduce((accFacils, hotel) => {
        return [...accFacils, ...hotel.facilities]
    }, [])
    
    const uniqueFacils = allFacils.reduce((accUniqueFacils, facil) => {
        return accUniqueFacils.includes(facil) ? accUniqueFacils : [...accUniqueFacils, facil]
    }, [])

    return uniqueFacils

}

const addBooleanToCheckboxes = (uniqueFacilities) => {
    const booleanAdded = uniqueFacilities.map(uniqueFacility => {
        return { facility: uniqueFacility, checked: false }
    })

    return booleanAdded
}

module.exports = { getUniqueFacils, addBooleanToCheckboxes }