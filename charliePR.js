class User {
  constructor(name, dob) {
    this.name = name
    this.dob = dob
  }

  age () {
    const dateToday = new Date()
    const birthday = new Date(this.dob)
    const age = dateToday.getFullYear() - birthday.getFullYear()

    console.log(this.name, age)

    return age
  }


  nextBirthday () {
    const dateToday = new Date()
    const birthday = new Date(this.dob)
    const date = birthday.getDate()
    const month = birthday.getMonth() 
    const year = dateToday.getFullYear() 

    const nextBirthday = new Date()
    nextBirthday.setFullYear(year + 1)
    nextBirthday.setMonth(month)
    nextBirthday.setDate(date)

    console.log(this.name, nextBirthday)


    return nextBirthday
  }

}

module.exports = User

