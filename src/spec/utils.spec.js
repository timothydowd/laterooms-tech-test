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
});