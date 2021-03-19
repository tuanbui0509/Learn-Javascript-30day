const person = {
  firstName: 'Awakener',
  lastName: 'Betakes',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  console.log(this.skills.splice(0, this.skills.length - 1))
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
// console.log(person)
// console.log(person.getPersonInfo())

const copyPerson = Object.assign({}, person)
console.log(copyPerson)
// const keys = Object.keys(person);
// console.log(keys)
// const values = Object.values(person);
// console.log(values)
// const entries = Object.entries(person)
// console.log(entries)
console.log(copyPerson.hasOwnProperty('city'))
console.log(copyPerson.hasOwnProperty('country'))