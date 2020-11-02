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

const John = new User ("John", "1974-11-03")

John.age()
John.nextBirthday()


const Mary = new User("Mary", "1990-04-01")

Mary.age()
Mary.nextBirthday()

