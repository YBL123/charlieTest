const { expect } = require('@jest/globals')

const User = require('./charlieHR')


describe('testing user', () => {
  it('the age is an int', () => {
    const John = new User('John', '1974-11-03')
    expect(typeof John.age()).toBe('number')
  })

  it('next birthday is an object', () => {
    const Mary = new User('Mary', '1965-09-05')
    expect(typeof Mary.nextBirthday()).toBe('object')
  })

  it('is the next birthday really the following year', () => {
    const Mary = new User('Mary', '1965-09-05')
    const nextYear = Mary.nextBirthday().getFullYear()
    const trueNextYear = new Date().getFullYear() + 1
    expect(nextYear).toBe(trueNextYear)
  })

})