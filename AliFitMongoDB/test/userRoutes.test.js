const supertest = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')
const app = require('../app')

const User = require('../models/user')

let database;

const { expect, beforeAll, afterEach, afterAll } = require('@jest/globals')

beforeAll(async () => {
  database = await MongoMemoryServer.create();
  const uri = database.getUri();
  console.log(uri)
  await mongoose.connect(uri)
})

afterEach(async () => {
  await User.deleteMany({})
})

afterAll(async () => {
  await mongoose.disconnect()
  await database.stop()
})

const userToCreate = {
  email: "scott@gmail.com",
  firstName: 'scott',
  lastName:"parker",
  age:34,
  phoneCode:"+44",
  phoneNumber:5137361,
  shortGoal:"help",
  longGoal:"help2",
  startHeight:182,
  startWeight:123
}

describe('User Route Tests', () => {
  test('Getting all users', async () => {
    await new User(userToCreate).save();

    const expecting = await User.find({}).lean()

    await supertest(app)
      .get('/user/users')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        //Stringify and then parse expecting to convert the ObjectId to a string
        expect(response.body.data).toEqual(JSON.parse(JSON.stringify(expecting)))
      })
  })

  test('Creating a user', async () => {
    await supertest(app)
      .post('/user/create')
      .send(userToCreate)
      .expect(200)
      .then(async response => {
        const users = await User.find({}).lean();
        const user = users[0]
        expect(users).toHaveLength(1)
        expect(user.email).toBe(userToCreate.email)
        expect(user.firstName).toBe(userToCreate.firstName)
        expect(user.lastName).toBe(userToCreate.lastName)
        expect(user.age).toBe(userToCreate.age)
        expect(user.phoneCode).toBe(userToCreate.phoneCode)
        expect(user.phoneNumber).toBe(userToCreate.phoneNumber)
        expect(user.shortGoal).toBe(userToCreate.shortGoal)
        expect(user.longGoal).toBe(userToCreate.longGoal)
        expect(user.startHeight).toBe(userToCreate.startHeight)
        expect(user.startWeight).toBe(userToCreate.startWeight)
      })
  })

  test('Updating a user', async () => {
    const newUser = (await new User(userToCreate).save()).toObject()

    newUser.email = 'newuseremail'

    await supertest(app)
      .put(`/user/${newUser._id}`)
      .send({ email: newUser.email })
      .expect(200)
      .then(async response => {
        const user = await User.findOne({ _id: { $eq: newUser._id } }).lean();
        // .Lean just returns the data that want to be tested and filters out the un-used mongoose features.
        expect(user).toEqual(newUser)
      })
  })

  test('Deleting a user', async () => {
    const user = await new User(userToCreate).save();

    await supertest(app)
      .delete(`/user/${user._id}`)
      .expect(200)
      .then(async () => {
        const users = await User.find({}).lean();
        expect(users).toEqual([])
      })
  })
})