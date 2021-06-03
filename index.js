const db = require('./models')

// CREATE
// db.user.create({
//   firstName: 'Anna',
//   lastName: 'Zocher',
//   age: 30,
//   email: "azocher@ga.co"
// }).then( createdUser => {
//   console.log(createdUser)
// })

// async function createUser() {
//   try {
//     const createdUser = await db.user.create({
//       firstName: 'Nick',
//       lastName: 'Schmitt',
//       age: 29,
//       email: 'birthdayboy@gmail.com'
//     })

//     console.log(createdUser)
//   } catch (error) {
//     console.log(error)
//   }
// }

// createUser()

// READ
// refactor finding nick in the DB to async/await
// async function findNick() {
//   try {
//     const foundUser = await db.user.findOne({
//       where: { firstName: 'Nick' }
//     })

//     console.log(foundUser)
//   } catch(error) {
//     console.log(error)
//   }
// }

// findNick()

// UPDATE

// DESTROY

