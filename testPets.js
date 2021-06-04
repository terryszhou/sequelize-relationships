const db = require('./models')
const log = console.log

// FIND USER GIVE PET
async function newPet() {
    try {
        const user = await db.user.findOne()
        const newPet = await user.createPet({
            name: "Barko",
            species: "Barkly"
        })3
        log(newPet)
    } catch(err) {
        log(err)
    }
}

// CALL FUNCTION   
// newPet()

// FIND USER CHECK PETS
async function printPet() {
    try {
        const user = await db.user.findOne()
        const pets = await user.getPets()
        log(pets)
    } catch (err) {
        log(err)
    }
}

// printPet()

// CREATE PET NO USER
async function addPet() {
    try {
        const options = {
            where: {
                name: 'Cat',
                species: 'Jetpack cat'
            },
            defaults: {
                description: 'Awesome cat that flies in a jetpack'
            }
        }
        // ARRAY DESTRUCTURING
        const [pet, created] = await db.pet.findOrCreate(options)

        // FIND USER
        const user = await db.user.findOne()

        // ASSOCIATE USER WITH PET
        await user.addPet(pet)
        log(`user ${user.firstName} now has a pet named ${pet.name}.`)
    } catch (err) {
        log(err)
    }
}

// addPet()

// INCLUDES/EAGER LOADING
async function eagerLoading() {
    try {
        const users = await db.user.findAll({
            include: [db.pet]
        })
        users.forEach(user => {
            log(`${user.firstName}'s pets:`)
            user.pets.forEach(pet => {
                log(pet.name)
            })
        })
    } catch (err) {
        log(err)
    }
}

eagerLoading()