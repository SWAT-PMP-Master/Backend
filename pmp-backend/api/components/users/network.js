'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const idUserInfoById = async (req, res, next) => {
  try {
    const userInfo = await controller.idUserInfoById(req.user, req.params)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const idUserInfo = async (req, res, next) => {
  try {
    const userInfo = await controller.idUserInfo(req.user)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getAFieldOnAMember = async (req, res, next) => {
  try {
    const userInfo = await controller.getAFieldOnAMember(req.user, req.params)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getAMembersActions = async (req, res, next) => {
  try {
    const userInfo = await controller.getAMembersActions(req.user)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getMembersCustomBoardBack = async (req, res, next) => {
  try {
    const userInfo = await controller.getMembersCustomBoardBack(req.user, req.params)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getABoardBackOfAMember = async (req, res, next) => {
  try {
    const userInfo = await controller.getABoardBackOfAMember(req.user)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getAMembersBoardStars = async (req, res, next) => {
  try {
    const userInfo = await controller.getAMembersBoardStar(req.user, req.params)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getABoardStarOfMember = async (req, res, next) => {
  try {
    const userInfo = await controller.getABoardStarOfMember(req.user)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getBoardsThatMemberBelongsTo = async (req, res, next) => {
  try {
    const userInfo = await controller.getBoardsThatMemberBelongsTo(req.user, req.params)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getBoardsTheMemberHasBeenInvitedTo = async (req, res, next) => {
  try {
    const userInfo = await controller.getBoardsTheMemberHasBeenInvitedTo(req.user)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getCardsTheMemberIsOn = async (req, res, next) => {
  try {
    const userInfo = await controller.getCardsTheMemberIsOn(req.user, req.params)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getAMembersCustomBoardBack = async (req, res, next) => {
  try {
    const userInfo = await controller.getAMembersCustomBoardBack(req.user)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getCustomBoardBackOfMember = async (req, res, next) => {
  try {
    const userInfo = await controller.getCustomBoardBackOfMember(req.user, req.params)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getAMembersCustomEmojis = async (req, res, next) => {
  try {
    const userInfo = await controller.getAMembersCustomEmojis(req.user)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getAMembersCustomEmoji = async (req, res, next) => {
  try {
    const userInfo = await controller.getAMembersCustomEmoji(req.user, req.params)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getMemberscustomStickers = async (req, res, next) => {
  try {
    const userInfo = await controller.getMemberscustomStickers(req.user)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getAMembersCustomSticker = async (req, res, next) => {
  try {
    const userInfo = await controller.getAMembersCustomSticker(req.user, req.params)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getMembersNotification = async (req, res, next) => {
  try {
    const userInfo = await controller.getMembersNotification(req.user)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getMembersOrganization = async (req, res, next) => {
  try {
    const userInfo = await controller.getMembersOrganization(req.user, req.params)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getOrganizationAMemberHasBeenInvitedTo = async (req, res, next) => {
  try {
    const userInfo = await controller.getOrganizationAMemberHasBeenInvitedTo(req.user)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getMembersSavedSearched = async (req, res, next) => {
  try {
    const userInfo = await controller.getMembersSavedSearched(req.user, req.params)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getASavedSearch = async (req, res, next) => {
  try {
    const userInfo = await controller.getASavedSearch(req.user)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getMembersTokens = async (req, res, next) => {
  try {
    const userInfo = await controller.getMembersTokens(req.user, req.params)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const getUserTrelloBoards = async (req, res, next) => {
  try {
    const userInfo = await controller.getUserTrelloBoards(req.user)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/:idUserGet', passport.authenticate('jwt', { session: false }), idUserInfoById)
router.get('/userInfo', passport.authenticate('jwt', { session: false }), idUserInfo)
router.get('/member/:id', passport.authenticate('jwt', { session: false }), getAFieldOnAMember)
router.get('/action/:id', passport.authenticate('jwt', { session: false }), getAMembersActions)
router.get('/custom/:id', passport.authenticate('jwt', { session: false }), getMembersCustomBoardBack)
router.get('/boardBackgroud/:id&:idBackground', passport.authenticate('jwt', { session: false }), getABoardBackOfAMember)
router.get('/starts/:id', passport.authenticate('jwt', { session: false }), getAMembersBoardStars)
router.get('/start/:id&:idStar', passport.authenticate('jwt', { session: false }), getABoardStarOfMember)
router.get('/belong/:id', passport.authenticate('jwt', { session: false }), getBoardsThatMemberBelongsTo)
router.get('/invited/:id', passport.authenticate('jwt', { session: false }), getBoardsTheMemberHasBeenInvitedTo)
router.get('/cards/:id', passport.authenticate('jwt', { session: false }), getCardsTheMemberIsOn)
router.get('/customBoard/:id', passport.authenticate('jwt', { session: false }), getAMembersCustomBoardBack)
router.get('/customBackground/:id&:idBackground', passport.authenticate('jwt', { session: false }), getCustomBoardBackOfMember)
router.get('/customEmojis/:id', passport.authenticate('jwt', { session: false }), getAMembersCustomEmojis)
router.get('/customEmoji/:id&:idEmoji', passport.authenticate('jwt', { session: false }), getAMembersCustomEmoji)
router.get('/customStickers/:id', passport.authenticate('jwt', { session: false }), getMemberscustomStickers)
router.get('/customSticker/:id&:idSticker', passport.authenticate('jwt', { session: false }), getAMembersCustomSticker)
router.get('/notification/:id', passport.authenticate('jwt', { session: false }), getMembersNotification)
router.get('/organization/:id', passport.authenticate('jwt', { session: false }), getMembersOrganization)
router.get('/invitationTo/:id', passport.authenticate('jwt', { session: false }), getOrganizationAMemberHasBeenInvitedTo)
router.get('/savedSearches/:id', passport.authenticate('jwt', { session: false }), getMembersSavedSearched)
router.get('/savedSearched/:id', passport.authenticate('jwt', { session: false }), getASavedSearch)
router.get('/token/:id', passport.authenticate('jwt', { session: false }), getMembersTokens)
router.get('/trelloBoards', passport.authenticate('jwt', { session: false }), getUserTrelloBoards)

module.exports = router
