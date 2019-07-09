const { expect } = require('chai')
const  deepFreeze  = require('deep-freeze')
const { getUniqueFacils, addBooleanToCheckboxes, toggleCheckedBooleanInCheckboxFacilites, filterHotelsByCheckedFacilities } = require('../utils/utils')


describe('getUniqueFacils', () => {
    it('when passed an empty array it returns an empty array', () => {
        expect(getUniqueFacils(deepFreeze([]))).to.eql([])
      });
      it('when passed 1 hotel without facilities, returns an empty array', () => {
        const hotels = [{
          "name": "hotelone",
          "starRating": 5,
          "facilities": []
        }]

        deepFreeze(hotels)
        expect(getUniqueFacils(hotels)).to.eql([])
      });
      it('when passed 1 hotel with facilities, returns those facilities in an array', () => {
        const hotels = [{
          "name": "hotelone",
          "starRating": 5,
          "facilities": ["car park", "pool"]
        }]

        deepFreeze(hotels)
        expect(getUniqueFacils(hotels)).to.eql(["car park", "pool"])
      });
      it('when passed 2 hotels with same facilities, returns those facilities without any duplicates', () => {
        const hotels = [{
          "name": "hotelone",
          "starRating": 5,
          "facilities": ["car park", "pool"]
        },
        {
          "name": "hoteltwo",
          "starRating": 5,
          "facilities": ["car park", "pool"]
        }]

        deepFreeze(hotels)
        expect(getUniqueFacils(hotels)).to.eql(["car park", "pool"])
      });
      it('when passed 2 hotels with differing facilities, returns all facilities', () => {
        const hotels = [{
          "name": "hotelone",
          "starRating": 5,
          "facilities": ["car park", "pool"]
        },
        {
          "name": "hoteltwo",
          "starRating": 5,
          "facilities": ["bar", "lounge"]
        }]

        deepFreeze(hotels)
        expect(getUniqueFacils(hotels)).to.eql(["car park", "pool", "bar", "lounge"])
      });
      it('when passed a number of hotels with differing overlapping facilities, returns all unique facilities', () => {
        const hotels = [{
          "name": "hotelone",
          "starRating": 5,
          "facilities": ["car park", "pool", "gym"]
        },
        {
          "name": "hoteltwo",
          "starRating": 5,
          "facilities": ["bar", "lounge"]
        },
        {
          "name": "hotelthree",
          "starRating": 5,
          "facilities": ["terrace", "pool", "gym"]
        },
        {
          "name": "hotelfour",
          "starRating": 5,
          "facilities": ["bar", "sauna", "restaurant"]
        },
      ]

        deepFreeze(hotels)
        expect(getUniqueFacils(hotels)).to.eql(["car park", "pool", "gym", "bar", "lounge", "terrace", "sauna", "restaurant"])
      });
});

describe('addBooleanToCheckboxes', () => {
  it('when passed an empty array returns an empty array', () => {
    expect(addBooleanToCheckboxes(deepFreeze([]))).to.eql([])
  });

  it('when passed an array containing 1 facility, returns an array containing an object with a boolean set to false', () => {
    const uniqueFacilities = ['pool']
    const expected = [{ facility: 'pool', checked: false }]
    deepFreeze(uniqueFacilities)
    expect(addBooleanToCheckboxes(uniqueFacilities)).to.eql(expected)
  });
  it('when passed an array containing a number of facilities, returns an array of objects with a boolean set to false', () => {
    const uniqueFacilities = ['pool', 'bar', 'restaurant']
    const expected = [{ facility: 'pool', checked: false }, { facility: 'bar', checked: false }, { facility: 'restaurant', checked: false }]
    deepFreeze(uniqueFacilities)
    expect(addBooleanToCheckboxes(uniqueFacilities)).to.eql(expected)
  });

});

describe('toggleCheckedBooleanInCheckboxFacilites', () => {
  it('when passed an empty array of checkboxes and a facility returns an empty array of checkboxes', () => {
    const checkBoxes = []
    const facility = 'pool'
    deepFreeze(checkBoxes)
    expect(toggleCheckedBooleanInCheckboxFacilites(checkBoxes, facility)).to.eql([])
  });

  it('when passed an array containing 1 checkbox and a facility returns the facility in question with a checked boolean opposite to its previous value', () => {
    const checkBoxes = [{ facility: 'pool', checked: false}]
    const facility = 'pool'
    const expected = [{ facility: 'pool', checked: true}]
    deepFreeze(checkBoxes)
    expect(toggleCheckedBooleanInCheckboxFacilites(checkBoxes, facility)).to.eql(expected)
  });

  it('when passed an array containing a number of checkboxes and a facility returns all checkboxes, and changes the checked boolean for the checkbox that matches the facility passed as an argument', () => {
    const checkBoxes = [{ facility: 'pool', checked: false }, { facility: 'bar', checked: false }, { facility: 'restaurant', checked: false }]
    const facility = 'bar'
    const expected = [{ facility: 'pool', checked: false }, { facility: 'bar', checked: true }, { facility: 'restaurant', checked: false }]
    deepFreeze(checkBoxes)
    expect(toggleCheckedBooleanInCheckboxFacilites(checkBoxes, facility)).to.eql(expected)
  });
});

describe('filterHotelsByCheckedFacilities', () => {
  it('when passed an empty array of hotels and an empty array of checkbox facilites return no hotels', () => {
    const hotelData = []
    const checkBoxFacilities = []
    const expected = []
    deepFreeze(hotelData)
    deepFreeze(checkBoxFacilities)

    expect(filterHotelsByCheckedFacilities(hotelData, checkBoxFacilities)).to.eql(expected)
  });
});