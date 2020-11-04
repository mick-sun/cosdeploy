const cosdeploy = require('..')

// TODO: Implement module test
test('cosdeploy', () => {
  expect(cosdeploy('w')).toBe('w@zce.me')
  expect(cosdeploy('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => cosdeploy(100)).toThrow('Expected a string, got number')
})
