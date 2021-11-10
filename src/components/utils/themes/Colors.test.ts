import { tagColors } from './Colors'

describe('Colors tests', () => {
   it('should test that tagColors length should be greater than one', () => {
      expect(tagColors.length).toBeGreaterThan(1)
   })
})
