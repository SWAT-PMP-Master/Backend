'use strict'

module.exports = function setupTable (tableModel) {
  async function createOrUpdate (table) {
    const cond = {
      where: {
        uuid: table.uuid
      }
    }

    const existingTable = await tableModel.findOne(cond)
    if (existingTable) {
      const updated = await tableModel.update(table, cond)
      return updated ? tableModel.findOne(cond) : existingTable
    }

    const result = await tableModel.create(table)
    return result.toJSON()
  }

  async function findById (id) {
    return await tableModel.findOne({
      where: {
        id
      }
    })
  }

  async function findByUuid (uuid) {
    return await tableModel.findOne({
      where: {
        uuid
      }
    })
  }

  async function findAll () {
    return await tableModel.findAll()
  }

  async function deleteById (id) {
    return await tableModel.destroy({
      where: {
        id
      }
    })
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll,
    deleteById
  }
}
