const db = require('./models')

// CREATE
db.user.create({
  firstName: 'Anna',
  lastName: 'Zocher',
  age: 30,
  email: "azocher@ga.co"
}).then(createdUser=>{
  console.log(createdUser)
})

// READ
db.user.findOne({
  where: { firstName: 'Anna' }
}).then( foundUser=> {
  console.log(foundUser)
})

// UPDATE

// DESTROY

