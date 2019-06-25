
const getUniqueFacils = (data) => {
    
    
    const allFacils = data.reduce((accFacils, hotel) => {
        return [...accFacils, ...hotel.facilities]
    }, [])
    console.log('allFacils: ', allFacils)
    return allFacils;

}

module.exports = { getUniqueFacils }