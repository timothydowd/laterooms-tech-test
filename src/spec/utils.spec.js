const { expect } = require('chai')
const { getUniqueFacils } = require('../utils/utils')
const  deepFreeze  = require('deep-freeze')
// const data = require('../data/data.json')

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