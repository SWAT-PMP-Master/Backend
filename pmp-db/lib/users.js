'use strict'

module.exports = function setupUsers (usersModel) {
  async function createOrUpdate (users) {
    const cond = {
      where: {
        uuid: users.uuid
      }
    }
    const existingusers = await usersModel.findOne(cond)
    if (existingusers) {
      const updated = await usersModel.update(users, cond)
      return updated ? usersModel.findOne(cond) : existingusers
    }

    const result = await usersModel.create(users)
    return result.toJSON()
  }

  async function findById (id) {
    return await usersModel.findOne({
      where: {
        id
      }
    })
  }

  async function findByNickname (Nickname) {
    return await usersModel.findOne({
      where: {
        Nickname
      }
    })
  }

  async function findByEmail (email) {
    return await usersModel.findOne({
      where: {
        email
      }
    })
  }

  async function findByUuid (uuid) {
    return await usersModel.findOne({
      where: {
        uuid
      }
    })
  }

  async function findAll () {
    return await usersModel.findAll()
  }

  async function deleteById (id) {
    return await usersModel.destroy({
      where: {
        id
      }
    })
  }

  async function emailExists (email) {
    const userExist = await usersModel.findOne({
      where: {
        email
      }
    })

    if (userExist) {
      return true
    }
  }
  async function userExists (users) {
    const userExist = await usersModel.findOne({
      where: {
        Nickname: users
      }
    })

    if (userExist) {
      return true
    }
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findByNickname,
    findAll,
    emailExists,
    findByEmail,
    deleteById,
    userExists
  }
}
