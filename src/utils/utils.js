
export const getUniqueFacils = (data) => {
    
    
    const allFacils = data.reduce((accFacils, hotel) => {
        return [...accFacils, ...hotel.facilities]
    }, [])
    
    const uniqueFacils = allFacils.reduce((accUniqueFacils, facil) => {
        return accUniqueFacils.includes(facil) ? accUniqueFacils : [...accUniqueFacils, facil]
    }, [])

    return uniqueFacils

}



export const addBooleanToCheckboxes = (uniqueFacilities) => {
    const booleanAdded = uniqueFacilities.map(uniqueFacility => {
        return { facility: uniqueFacility, checked: false }
    })

    return booleanAdded
}



export const toggleCheckedBooleanInCheckboxFacilites = (checkBoxFacilities, facility) => {
    const toggledCheckboxes = checkBoxFacilities.map(checkBox => {
        return checkBox.facility === facility ? { ...checkBox, checked: !checkBox.checked } : checkBox 
    })

    return toggledCheckboxes
}


// module.exports = { getUniqueFacils, addBooleanToCheckboxes, toggleCheckedBooleanInCheckboxFacilites }