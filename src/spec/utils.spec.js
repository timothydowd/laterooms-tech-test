const { expect } = require('chai')
const { getUniqueFacils } = require('../utils/utils')
const data = require('../data/data.json')

describe('getUniqueFacils', () => {
    it('when passed an empty array it returns an empty array', () => {
        expect(getUniqueFacils([])).to.eql([])
      });
});