const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const query = utils().queryFn()

  const idUserInfoById = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.idUserGet
    const member = JSON.parse(await trelloAuth(query).getUsers(tokenKeyPair))
    return member
  }

  const idUserInfo = async (body) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    const data = JSON.parse(await trelloAuth(query).getUserInfo(tokenKeyPair))
    tokenKeyPair.id = data.id
    const member = JSON.parse(await trelloAuth(query).getUsers(tokenKeyPair))
    return member
  }

  const getAFieldOnAMember = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.field = params.field
    const boards = JSON.parse(await trelloAuth(query).getAFieldOnAMember(tokenKeyPair))
    return boards
  }

  const getAMembersActions = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getAMembersActions(tokenKeyPair))
    return boards
  }

  const getMembersCustomBoardBack = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getMembersCustomBoardBack(tokenKeyPair))
    return boards
  }

  const getABoardBackOfAMember = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.idBackground = params.idBackground
    const boards = JSON.parse(await trelloAuth(query).getABoardBackOfAMember(tokenKeyPair))
    return boards
  }

  const getAMembersBoardStars = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getAMembersBoardStars(tokenKeyPair))
    return boards
  }

  const getABoardStarOfMember = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.idStar = params.idStar
    const boards = JSON.parse(await trelloAuth(query).getABoardStarOfMember(tokenKeyPair))
    return boards
  }

  const getBoardsThatMemberBelongsTo = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getBoardsThatMemberBelongsTo(tokenKeyPair))
    return boards
  }

  const getBoardsTheMemberHasBeenInvitedTo = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getBoardsTheMemberHasBeenInvitedTo(tokenKeyPair))
    return boards
  }

  const getCardsTheMemberIsOn = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getCardsTheMemberIsOn(tokenKeyPair))
    return boards
  }

  const getAMembersCustomBoardBack = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getAMembersCustomBoardBack(tokenKeyPair))
    return boards
  }

  const getCustomBoardBackOfMember = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.idBackground = params.idBackground
    const boards = JSON.parse(await trelloAuth(query).getCustomBoardBackOfMember(tokenKeyPair))
    return boards
  }

  const getAMembersCustomEmojis = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getAMembersCustomEmojis(tokenKeyPair))
    return boards
  }

  const getAMembersCustomEmoji = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.idEmoji = params.idEmoji
    const boards = JSON.parse(await trelloAuth(query).getAMembersCustomEmoji(tokenKeyPair))
    return boards
  }

  const getMemberscustomStickers = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getMemberscustomStickers(tokenKeyPair))
    return boards
  }

  const getAMembersCustomSticker = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.idSticker = params.idSticker
    const boards = JSON.parse(await trelloAuth(query).getAMembersCustomSticker(tokenKeyPair))
    return boards
  }

  const getMembersNotification = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getMembersNotification(tokenKeyPair))
    return boards
  }

  const getMembersOrganization = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getMembersOrganization(tokenKeyPair))
    return boards
  }

  const getOrganizationAMemberHasBeenInvitedTo = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getOrganizationAMemberHasBeenInvitedTo(tokenKeyPair))
    return boards
  }

  const getMembersSavedSearched = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getMembersSavedSearched(tokenKeyPair))
    return boards
  }

  const getASavedSearch = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getASavedSearch(tokenKeyPair))
    return boards
  }

  const getMembersTokens = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getMembersTokens(tokenKeyPair))
    return boards
  }

  const getUserTrelloBoards = async (body) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    const boards = JSON.parse(await trelloAuth(query).getUserTrelloBoards(tokenKeyPair))
    return boards
  }

  return {
    idUserInfo,
    idUserInfoById,
    getAFieldOnAMember,
    getAMembersActions,
    getMembersCustomBoardBack,
    getABoardBackOfAMember,
    getAMembersBoardStars,
    getABoardStarOfMember,
    getBoardsThatMemberBelongsTo,
    getBoardsTheMemberHasBeenInvitedTo,
    getCardsTheMemberIsOn,
    getAMembersCustomBoardBack,
    getCustomBoardBackOfMember,
    getAMembersCustomEmojis,
    getAMembersCustomEmoji,
    getMemberscustomStickers,
    getAMembersCustomSticker,
    getMembersNotification,
    getMembersOrganization,
    getOrganizationAMemberHasBeenInvitedTo,
    getMembersSavedSearched,
    getASavedSearch,
    getMembersTokens,
    getUserTrelloBoards
  }
}
