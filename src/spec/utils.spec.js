const { expect } = require('chai')
const { getUniqueFacils } = require('../utils/utils')
// const data = require('../data/data.json')

describe('getUniqueFacils', () => {
    it('when passed an empty array it returns an empty array', () => {
        expect(getUniqueFacils([])).to.eql([])
      });
      it('when passed 1 hotel without facilities, returns an empty array', () => {
        const hotels = [{
          "name": "hotelone",
          "starRating": 5,
          "facilities": []
        }]
        expect(getUniqueFacils(hotels)).to.eql([])
      });
      it('when passed 1 hotel with facilities, returns those facilities in an array', () => {
        const hotels = [{
          "name": "hotelone",
          "starRating": 5,
          "facilities": ["car park", "pool"]
        }]
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
        expect(getUniqueFacils(hotels)).to.eql(["car park", "pool"])
      });
});