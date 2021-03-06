'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const query = utils().queryFn()

  const getAnEnterprise = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getAnEnterprise(tokenKeyPair))
    return boards
  }

  const getAuditlogDataForAnEnterprise = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getAuditlogDataForAnEnterprise(tokenKeyPair))
    return boards
  }

  const getEnterpriseAdminMembers = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getEnterpriseAdminMembers(tokenKeyPair))
    return boards
  }

  const getSignupForEnterprise = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getSignupForEnterprise(tokenKeyPair))
    return boards
  }

  const getMembersOfEnterprise = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getMembersOfEnterprise(tokenKeyPair))
    return boards
  }

  const getAMemberOfEntreprise = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.idMember = params.idMember
    const boards = JSON.parse(await trelloAuth(query).getAMemberOfEntreprise(tokenKeyPair))
    return boards
  }

  const getWhetherAnOrganizationCanBe = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.idOrganization = params.idOrganization
    const boards = JSON.parse(await trelloAuth(query).getWhetherAnOrganizationCanBe(tokenKeyPair))
    return boards
  }

  return {
    getAnEnterprise,
    getAuditlogDataForAnEnterprise,
    getEnterpriseAdminMembers,
    getSignupForEnterprise,
    getMembersOfEnterprise,
    getAMemberOfEntreprise,
    getWhetherAnOrganizationCanBe
  }
}
