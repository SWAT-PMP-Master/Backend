class Queries {
  constructor (oauth) {
    this.uri = 'https://trello.com'
    this.oauth = oauth
  }

  authorizationFn (url, tokenInfo) {
    const self = this
    const authPromise = new Promise((resolve, reject) => {
      self.oauth.get(
        url,
        tokenInfo.accToken,
        tokenInfo.accTokenSecrete,
        (err, data, response) => {
          if (!err) {
            resolve(data)
          } else {
            reject(err)
          }
        }
      )
    })
    return authPromise
  }

  // Actions

  async getAnAction (tokenInfo) {
    const url = `${this.uri}/1/actions/${tokenInfo.id}`
    const getAnActionPromise = await this.authorizationFn(url, tokenInfo)
    return getAnActionPromise
  }

  async getASpecificFieldOnAnAction (tokenInfo) {
    const url = `${this.uri}/1/actions/${tokenInfo.id}/${tokenInfo.field}`
    const getASpecificFieldOnAnActionPromise = await this.authorizationFn(url, tokenInfo)
    return getASpecificFieldOnAnActionPromise
  }

  async getTheBoardForAnAction (tokenInfo) {
    const url = `${this.uri}/1/actions/${tokenInfo.id}/board`
    const getTheBoardForAnActionPromise = await this.authorizationFn(url, tokenInfo)
    return getTheBoardForAnActionPromise
  }

  async getTheCardForAnAction (tokenInfo) {
    const url = `${this.uri}/1/actions/${tokenInfo.id}/card`
    const getTheCardForAnActionPromise = await this.authorizationFn(url, tokenInfo)
    return getTheCardForAnActionPromise
  }

  async getTheListForAnAction (tokenInfo) {
    const url = `${this.uri}/1/actions/${tokenInfo.id}/list`
    const getTheListForAnActionPromise = await this.authorizationFn(url, tokenInfo)
    return getTheListForAnActionPromise
  }

  async getTheMemberOfAnAction (tokenInfo) {
    const url = `${this.uri}/1/actions/${tokenInfo.id}/member`
    const getTheMemberOfAnActionPromise = await this.authorizationFn(url, tokenInfo)
    return getTheMemberOfAnActionPromise
  }

  async getTheMemberCreatorOfAnAction (tokenInfo) {
    const url = `${this.uri}/1/actions/${tokenInfo.id}/memberCreator`
    const getTheMemberCreatorOfAnActionPromise = await this.authorizationFn(url, tokenInfo)
    return getTheMemberCreatorOfAnActionPromise
  }

  async getTheOrganizationOfAnAction (tokenInfo) {
    const url = `${this.uri}/1/actions/${tokenInfo.id}/organization`
    const getTheOrganizationOfAnActionPromise = await this.authorizationFn(url, tokenInfo)
    return getTheOrganizationOfAnActionPromise
  }

  async getActionsReactions (tokenInfo) {
    const url = `${this.uri}/1/actions/${tokenInfo.idAction}/reactions`
    const getActionsReactionsPromise = await this.authorizationFn(url, tokenInfo)
    return getActionsReactionsPromise
  }

  async getActionReaction (tokenInfo) {
    const url = `${this.uri}/1/actions/${tokenInfo.idAction}/reactions/${tokenInfo.id}`
    const getActionReactionPromise = await this.authorizationFn(url, tokenInfo)
    return getActionReactionPromise
  }

  async listActionSummaryOfReactions (tokenInfo) {
    const url = `${this.uri}/1/actions/${tokenInfo.idAction}/reactionsSummary`
    const listActionSummaryOfReactionsPromise = await this.authorizationFn(url, tokenInfo)
    return listActionSummaryOfReactionsPromise
  }

  // Boards

  async getMemberShipBoards (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/memberships`
    const userBoardsPromise = await this.authorizationFn(url, tokenInfo)
    return userBoardsPromise
  }

  async getBoard (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}`
    const userBoardsPromise = await this.authorizationFn(url, tokenInfo)
    return userBoardsPromise
  }

  async getBoardfield (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/${tokenInfo.field}`
    const userBoardsPromise = await this.authorizationFn(url, tokenInfo)
    return userBoardsPromise
  }

  async getBoardAction (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/actions`
    const userBoardsPromise = await this.authorizationFn(url, tokenInfo)
    return userBoardsPromise
  }

  async getACardOnABoard (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/cards/${tokenInfo.idCard}`
    const getACardOnABoardPromise = await this.authorizationFn(url, tokenInfo)
    return getACardOnABoardPromise
  }

  async getBoardsStartsOnABoard (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.boardId}/boardStars`
    const getBoardsStartsOnABoardPromise = await this.authorizationFn(url, tokenInfo)
    return getBoardsStartsOnABoardPromise
  }

  async getCardsOnABoard (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/cards`
    const getCardsOnABoardPromise = await this.authorizationFn(url, tokenInfo)
    return getCardsOnABoardPromise
  }

  async getFilteredCardsOnABoard (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/cards/${tokenInfo.filter}`
    const getFilteredCardsOnABoardPromise = await this.authorizationFn(url, tokenInfo)
    return getFilteredCardsOnABoardPromise
  }

  async getCustomFieldsForBand (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/customfields`
    const getCustomFieldsForBandPromise = await this.authorizationFn(url, tokenInfo)
    return getCustomFieldsForBandPromise
  }

  async getLabelsOnABoard (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/labels`
    const getLabelsOnABoardPromise = await this.authorizationFn(url, tokenInfo)
    return getLabelsOnABoardPromise
  }

  async getBoardLists (boardIdAndTokenInfo) {
    const url = `${this.uri}/1/boards/${boardIdAndTokenInfo.boardId}/lists`
    const boardlistsPromise = await this.authorizationFn(url, boardIdAndTokenInfo)
    return boardlistsPromise
  }

  async getFilteredListsOnAboard (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/lists/${tokenInfo.filter}`
    const getFilteredListsOnAboardPromise = await this.authorizationFn(url, tokenInfo)
    return getFilteredListsOnAboardPromise
  }

  async getTheMembersOfABoard (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/members`
    const getTheMembersOfABoardPromise = await this.authorizationFn(url, tokenInfo)
    return getTheMembersOfABoardPromise
  }

  async getEnabledPowerupsOnBoard (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/boardPlugins`
    const getEnabledPowerupsOnBoardPromise = await this.authorizationFn(url, tokenInfo)
    return getEnabledPowerupsOnBoardPromise
  }

  async getPowerupsOnABoard (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/plugins`
    const getPowerupsOnABoardPromise = await this.authorizationFn(url, tokenInfo)
    return getPowerupsOnABoardPromise
  }

  // Cards

  async getACard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}`
    const getACardPromise = await this.authorizationFn(url, tokenInfo)
    return getACardPromise
  }

  async getAFieldOnACard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/${tokenInfo.field}`
    const getAFieldOnACardPromise = await this.authorizationFn(url, tokenInfo)
    return getAFieldOnACardPromise
  }

  async getActionsOnACard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/actions`
    const getActionsOnACardPromise = await this.authorizationFn(url, tokenInfo)
    return getActionsOnACardPromise
  }

  async getAttachementsOnACard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/attachments`
    const getAttachementsOnACardPromise = await this.authorizationFn(url, tokenInfo)
    return getAttachementsOnACardPromise
  }

  async getAnAttachmentOnACard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/attachments/${tokenInfo.idAttachment}`
    const getAnAttachmentOnACardPromise = await this.authorizationFn(url, tokenInfo)
    return getAnAttachmentOnACardPromise
  }

  async getTheBoardCardIsOn (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/board`
    const getTheBoardCardIsOnPromise = await this.authorizationFn(url, tokenInfo)
    return getTheBoardCardIsOnPromise
  }

  async getCheckitemsOnABoard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/checkItemStates`
    const getCheckitemsOnABoardPromise = await this.authorizationFn(url, tokenInfo)
    return getCheckitemsOnABoardPromise
  }

  async getChecklistsOnABoard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/checklists`
    const getChecklistsOnABoardPromise = await this.authorizationFn(url, tokenInfo)
    return getChecklistsOnABoardPromise
  }

  async getCheckItemOnACard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/checkItem/${tokenInfo.idCheckItem}`
    const getCheckItemOnACardPromise = await this.authorizationFn(url, tokenInfo)
    return getCheckItemOnACardPromise
  }

  async getTheListOfACard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/list`
    const getTheListOfACardPromise = await this.authorizationFn(url, tokenInfo)
    return getTheListOfACardPromise
  }

  async getTheMembersOfACard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/members`
    const getTheMembersOfACardPromise = await this.authorizationFn(url, tokenInfo)
    return getTheMembersOfACardPromise
  }

  async getMembersWhoHaveVotedOnACard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/membersVoted`
    const getMembersWhoHaveVotedOnACardPromise = await this.authorizationFn(url, tokenInfo)
    return getMembersWhoHaveVotedOnACardPromise
  }

  async getPluginDataOnACard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/pluginData`
    const getPluginDataOnACardPromise = await this.authorizationFn(url, tokenInfo)
    return getPluginDataOnACardPromise
  }

  async getStickersOnACard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/stickers`
    const getStickersOnACardPromise = await this.authorizationFn(url, tokenInfo)
    return getStickersOnACardPromise
  }

  async getAStickerOnACard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/stickers/${tokenInfo.idSticker}`
    const getAStickerOnACardPromise = await this.authorizationFn(url, tokenInfo)
    return getAStickerOnACardPromise
  }

  async getCustomFieldItemsForACard (tokenInfo) {
    const url = `${this.uri}/1/cards/${tokenInfo.id}/customFieldItems`
    const getCustomFieldItemsForACardPromise = await this.authorizationFn(url, tokenInfo)
    return getCustomFieldItemsForACardPromise
  }

  // Checklist

  async getAChecklist (tokenInfo) {
    const url = `${this.uri}/1/checklists/${tokenInfo.id}`
    const getAChecklistPromise = await this.authorizationFn(url, tokenInfo)
    return getAChecklistPromise
  }

  async getFieldOnAChecklist (tokenInfo) {
    const url = `${this.uri}/1/checklists/${tokenInfo.id}/${tokenInfo.field}`
    const getFieldOnAChecklistPromise = await this.authorizationFn(url, tokenInfo)
    return getFieldOnAChecklistPromise
  }

  async getTheBoardTheChecklistIsOn (tokenInfo) {
    const url = `${this.uri}/1/checklists/${tokenInfo.id}/board`
    const getTheBoardTheChecklistIsOnPromise = await this.authorizationFn(url, tokenInfo)
    return getTheBoardTheChecklistIsOnPromise
  }

  async getTheCardAChecklistIsOn (tokenInfo) {
    const url = `${this.uri}/1/checklists/${tokenInfo.id}/cards`
    const getTheCardAChecklistIsOnPromise = await this.authorizationFn(url, tokenInfo)
    return getTheCardAChecklistIsOnPromise
  }

  async getCheckitemsOnAChecklist (tokenInfo) {
    const url = `${this.uri}/1/checklists/${tokenInfo.id}/checkItems`
    const getCheckitemsOnAChecklistPromise = await this.authorizationFn(url, tokenInfo)
    return getCheckitemsOnAChecklistPromise
  }

  async getACheckitemOnAChecklist (tokenInfo) {
    const url = `${this.uri}/1/checklists/${tokenInfo.id}/checkItems/${tokenInfo.idCheckItem}`
    const getACheckitemOnAChecklistPromise = await this.authorizationFn(url, tokenInfo)
    return getACheckitemOnAChecklistPromise
  }

  // Custom Fields

  async getACustomField (tokenInfo) {
    const url = `${this.uri}/1/customFields/${tokenInfo.id}`
    const getACustomFieldPromise = await this.authorizationFn(url, tokenInfo)
    return getACustomFieldPromise
  }

  async getOptionsOfCustomFieldDropDown (tokenInfo) {
    const url = `${this.uri}/1/customFields/${tokenInfo.id}/options`
    const getOptionsOfCustomFieldDropDownPromise = await this.authorizationFn(url, tokenInfo)
    return getOptionsOfCustomFieldDropDownPromise
  }

  async getOptionOfCustomFieldDropdown (tokenInfo) {
    const url = `${this.uri}/1/customFields/${tokenInfo.id}/options/${tokenInfo.idCustomFieldOption}`
    const getOptionOfCustomFieldDropdownPromise = await this.authorizationFn(url, tokenInfo)
    return getOptionOfCustomFieldDropdownPromise
  }

  // Emojis

  async getListAvailableEmoji (tokenInfo) {
    const url = `${this.uri}/1/emoji/`
    const getListAvailableEmojiPromise = await this.authorizationFn(url, tokenInfo)
    return getListAvailableEmojiPromise
  }

  // Enterprise

  async getAnEnterprise (tokenInfo) {
    const url = `${this.uri}/1/enterprise/${tokenInfo.id}`
    const getAnEnterprisePromise = await this.authorizationFn(url, tokenInfo)
    return getAnEnterprisePromise
  }

  async getAuditlogDataForAnEnterprise (tokenInfo) {
    const url = `${this.uri}/1/enterprise/${tokenInfo.id}/auditlog`
    const getAuditlogDataForAnEnterprisePromise = await this.authorizationFn(url, tokenInfo)
    return getAuditlogDataForAnEnterprisePromise
  }

  async getEnterpriseAdminMembers (tokenInfo) {
    const url = `${this.uri}/1/enterprise/${tokenInfo.id}/admins`
    const getEnterpriseAdminMembersPromise = await this.authorizationFn(url, tokenInfo)
    return getEnterpriseAdminMembersPromise
  }

  async getSignupForEnterprise (tokenInfo) {
    const url = `${this.uri}/1/enterprise/${tokenInfo.id}/signupUrl`
    const getSignupForEnterprisePromise = await this.authorizationFn(url, tokenInfo)
    return getSignupForEnterprisePromise
  }

  async getMembersOfEnterprise (tokenInfo) {
    const url = `${this.uri}/1/enterprise/${tokenInfo.id}/members`
    const getMembersOfEnterprisePromise = await this.authorizationFn(url, tokenInfo)
    return getMembersOfEnterprisePromise
  }

  async getAMemberOfEntreprise (tokenInfo) {
    const url = `${this.uri}/1/enterprise/${tokenInfo.id}/members/${tokenInfo.idMember}`
    const getAMemberOfEntreprisePromise = await this.authorizationFn(url, tokenInfo)
    return getAMemberOfEntreprisePromise
  }

  async getWhetherAnOrganizationCanBe (tokenInfo) {
    const url = `${this.uri}/1/enterprise/${tokenInfo.id}/transferrable/organization/${tokenInfo.idOrganization}`
    const getWhetherAnOrganizationCanBePromise = await this.authorizationFn(url, tokenInfo)
    return getWhetherAnOrganizationCanBePromise
  }

  // Labels

  async getALabel (tokenInfo) {
    const url = `${this.uri}/1/labels/${tokenInfo.id}`
    const getALabelPromise = await this.authorizationFn(url, tokenInfo)
    return getALabelPromise
  }

  // List

  async getCardsOnList (boardListAndTokenInfo) {
    const url = `${this.uri}/1/lists/${boardListAndTokenInfo.listId}/cards`
    const cardsOnListPromise = await this.authorizationFn(url, boardListAndTokenInfo)
    return cardsOnListPromise
  }

  // Members

  async getUsers (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}`
    const userInfoPromise = await this.authorizationFn(url, tokenkeyPair)
    return userInfoPromise
  }

  async getAFieldOnAMember (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/${tokenkeyPair.field}`
    const getAFieldOnAMemberPromise = await this.authorizationFn(url, tokenkeyPair)
    return getAFieldOnAMemberPromise
  }

  async getAMembersActions (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/actions`
    const getAMembersActionsPromise = await this.authorizationFn(url, tokenkeyPair)
    return getAMembersActionsPromise
  }

  async getMembersCustomBoardBack (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/boardBackgrounds`
    const getMembersCustomBoardBackPromise = await this.authorizationFn(url, tokenkeyPair)
    return getMembersCustomBoardBackPromise
  }

  async getABoardBackOfAMember (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/boardBackgrounds/${tokenkeyPair.idBackground}`
    const getABoardBackOfAMemberPromise = await this.authorizationFn(url, tokenkeyPair)
    return getABoardBackOfAMemberPromise
  }

  async getAMembersBoardStars (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/boardStars`
    const getAMembersBoardStarsPromise = await this.authorizationFn(url, tokenkeyPair)
    return getAMembersBoardStarsPromise
  }

  async getABoardStarOfMember (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/boardStars/${tokenkeyPair.idStar}`
    const getABoardStarOfMemberPromise = await this.authorizationFn(url, tokenkeyPair)
    return getABoardStarOfMemberPromise
  }

  async getBoardsThatMemberBelongsTo (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/boards`
    const getBoardsThatMemberBelongsToPromise = await this.authorizationFn(url, tokenkeyPair)
    return getBoardsThatMemberBelongsToPromise
  }

  async getBoardsTheMemberHasBeenInvitedTo (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/boardsInvited`
    const getBoardsTheMemberHasBeenInvitedToPromise = await this.authorizationFn(url, tokenkeyPair)
    return getBoardsTheMemberHasBeenInvitedToPromise
  }

  async getCardsTheMemberIsOn (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/cards`
    const getCardsTheMemberIsOnPromise = await this.authorizationFn(url, tokenkeyPair)
    return getCardsTheMemberIsOnPromise
  }

  async getAMembersCustomBoardBack (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/customBoardBackgrounds`
    const getAMembersCustomBoardBackPromise = await this.authorizationFn(url, tokenkeyPair)
    return getAMembersCustomBoardBackPromise
  }

  async getCustomBoardBackOfMember (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/customBoardBackgrounds/${tokenkeyPair.idBackground}`
    const getCustomBoardBackOfMemberPromise = await this.authorizationFn(url, tokenkeyPair)
    return getCustomBoardBackOfMemberPromise
  }

  async getAMembersCustomEmojis (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/customEmoji`
    const getAMembersCustomEmojisPromise = await this.authorizationFn(url, tokenkeyPair)
    return getAMembersCustomEmojisPromise
  }

  async getAMembersCustomEmoji (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/customEmoji/${tokenkeyPair.idEmoji}`
    const getAMembersCustomEmojiPromise = await this.authorizationFn(url, tokenkeyPair)
    return getAMembersCustomEmojiPromise
  }

  async getMemberscustomStickers (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/customStickers`
    const getMemberscustomStickersPromise = await this.authorizationFn(url, tokenkeyPair)
    return getMemberscustomStickersPromise
  }

  async getAMembersCustomSticker (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/customStickers/${tokenkeyPair.idSticker}`
    const getMemberscustomStickersPromise = await this.authorizationFn(url, tokenkeyPair)
    return getMemberscustomStickersPromise
  }

  async getMembersNotification (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/notifications`
    const getMembersNotificationPromise = await this.authorizationFn(url, tokenkeyPair)
    return getMembersNotificationPromise
  }

  async getMembersOrganization (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/organizations`
    const getMembersOrganizationPromise = await this.authorizationFn(url, tokenkeyPair)
    return getMembersOrganizationPromise
  }

  async getOrganizationAMemberHasBeenInvitedTo (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/organizationInvited`
    const getOrganizationAMemberHasBeenInvitedToPromise = await this.authorizationFn(url, tokenkeyPair)
    return getOrganizationAMemberHasBeenInvitedToPromise
  }

  async getMembersSavedSearched (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/savedSearches`
    const getMembersSavedSearchedPromise = await this.authorizationFn(url, tokenkeyPair)
    return getMembersSavedSearchedPromise
  }

  async getASavedSearch (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/savedSearches/${tokenkeyPair.idSearch}`
    const getASavedSearchPromise = await this.authorizationFn(url, tokenkeyPair)
    return getASavedSearchPromise
  }

  async getMembersTokens (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}/tokens`
    const getMembersTokensPromise = await this.authorizationFn(url, tokenkeyPair)
    return getMembersTokensPromise
  }

  async getUserInfo (tokenkeyPair) {
    const url = `${this.uri}/1/members/me`
    const userInfoPromise = await this.authorizationFn(url, tokenkeyPair)
    return userInfoPromise
  }

  async getUserTrelloBoards (tokenInfo) {
    const url = `${this.uri}/1/members/me/boards`
    const userBoardsPromise = await this.authorizationFn(url, tokenInfo)
    return userBoardsPromise
  }

  // Notifications

  async getANotification (tokenInfo) {
    const url = `${this.uri}/1/notifications/${tokenInfo.id}`
    const getANotificationPromise = await this.authorizationFn(url, tokenInfo)
    return getANotificationPromise
  }

  async getAFieldOfANotification (tokenInfo) {
    const url = `${this.uri}/1/notifications/${tokenInfo.id}/${tokenInfo.field}`
    const getAFieldOfANotificationPromise = await this.authorizationFn(url, tokenInfo)
    return getAFieldOfANotificationPromise
  }

  async getTheBoardANotificationIsOn (tokenInfo) {
    const url = `${this.uri}/1/notifications/${tokenInfo.id}/board`
    const getTheBoardANotificationIsOnPromise = await this.authorizationFn(url, tokenInfo)
    return getTheBoardANotificationIsOnPromise
  }

  async getTheCardANotificationIsOn (tokenInfo) {
    const url = `${this.uri}/1/notifications/${tokenInfo.id}/card`
    const getTheCardANotificationIsOnPromise = await this.authorizationFn(url, tokenInfo)
    return getTheCardANotificationIsOnPromise
  }

  async getTheListANotificationIsOn (tokenInfo) {
    const url = `${this.uri}/1/notifications/${tokenInfo.id}/list`
    const getTheListANotificationIsOnPromise = await this.authorizationFn(url, tokenInfo)
    return getTheListANotificationIsOnPromise
  }

  async getTheMemberANotificationIsAbout (tokenInfo) {
    const url = `${this.uri}/1/notifications/${tokenInfo.id}/member`
    const getTheMemberANotificationIsAboutPromise = await this.authorizationFn(url, tokenInfo)
    return getTheMemberANotificationIsAboutPromise
  }

  async getTheMemberWhoCreatedTheNotification (tokenInfo) {
    const url = `${this.uri}/1/notifications/${tokenInfo.id}/memberCreator`
    const getTheMemberWhoCreatedTheNotificationPromise = await this.authorizationFn(url, tokenInfo)
    return getTheMemberWhoCreatedTheNotificationPromise
  }

  async getANotificationAssociatedOrganization (tokenInfo) {
    const url = `${this.uri}/1/notifications/${tokenInfo.id}/organization`
    const getANotificationAssociatedOrganizationPromise = await this.authorizationFn(url, tokenInfo)
    return getANotificationAssociatedOrganizationPromise
  }

  // Organizations

  async getAnOrganization (tokenInfo) {
    const url = `${this.uri}/1/organizations/${tokenInfo.id}`
    const getAnOrganizationPromise = await this.authorizationFn(url, tokenInfo)
    return getAnOrganizationPromise
  }

  async getFieldOnOrganization (tokenInfo) {
    const url = `${this.uri}/1/organizations/${tokenInfo.id}/${tokenInfo.field}`
    const getFieldOnOrganizationPromise = await this.authorizationFn(url, tokenInfo)
    return getFieldOnOrganizationPromise
  }

  async getActionsForOrganization (tokenInfo) {
    const url = `${this.uri}/1/organizations/${tokenInfo.id}/actions`
    const getActionsForOrganizationPromise = await this.authorizationFn(url, tokenInfo)
    return getActionsForOrganizationPromise
  }

  async getBoardsInAnOrganization (tokenInfo) {
    const url = `${this.uri}/1/organizations/${tokenInfo.id}/boards`
    const getBoardsInAnOrganizationPromise = await this.authorizationFn(url, tokenInfo)
    return getBoardsInAnOrganizationPromise
  }

  async retrieveOrganizationsExports (tokenInfo) {
    const url = `${this.uri}/1/organizations/${tokenInfo.id}/exports`
    const retrieveOrganizationsExportsPromise = await this.authorizationFn(url, tokenInfo)
    return retrieveOrganizationsExportsPromise
  }

  async getTheMembersOfAnOrganization (tokenInfo) {
    const url = `${this.uri}/1/organizations/${tokenInfo.id}/members`
    const getTheMembersOfAnOrganizationPromise = await this.authorizationFn(url, tokenInfo)
    return getTheMembersOfAnOrganizationPromise
  }

  async getMembershipsOfAnOrganization (tokenInfo) {
    const url = `${this.uri}/1/organizations/${tokenInfo.id}/memberships`
    const getMembershipsOfAnOrganizationPromise = await this.authorizationFn(url, tokenInfo)
    return getMembershipsOfAnOrganizationPromise
  }

  async getAMembershipOfAnOrganization (tokenInfo) {
    const url = `${this.uri}/1/organizations/${tokenInfo.id}/memberships/${tokenInfo.idMembership}`
    const getAMembershipOfAnOrganizationPromise = await this.authorizationFn(url, tokenInfo)
    return getAMembershipOfAnOrganizationPromise
  }

  async getThePluginDataScoped (tokenInfo) {
    const url = `${this.uri}/1/organizations/${tokenInfo.id}/pluginData`
    const getThePluginDataScopedPromise = await this.authorizationFn(url, tokenInfo)
    return getThePluginDataScopedPromise
  }

  async getTagsOfAnOrganization (tokenInfo) {
    const url = `${this.uri}/1/organizations/${tokenInfo.id}/tags`
    const getTagsOfAnOrganizationPromise = await this.authorizationFn(url, tokenInfo)
    return getTagsOfAnOrganizationPromise
  }

  async getOrganizationsNewBillableGuests (tokenInfo) {
    const url = `${this.uri}/1/organizations/${tokenInfo.id}/newBillableGuests/${tokenInfo.idBoard}`
    const getOrganizationsNewBillableGuestsPromise = await this.authorizationFn(url, tokenInfo)
    return getOrganizationsNewBillableGuestsPromise
  }

  // Plugins

  async getAPlugin (tokenInfo) {
    const url = `${this.uri}/1/plugins/${tokenInfo.id}`
    const getAPluginPromise = await this.authorizationFn(url, tokenInfo)
    return getAPluginPromise
  }

  async getPluginsMemberPrivacyCompliance (tokenInfo) {
    const url = `${this.uri}/1/plugins/${tokenInfo.id}/compliance/memberPrivacy`
    const getPluginsMemberPrivacyCompliancePromise = await this.authorizationFn(url, tokenInfo)
    return getPluginsMemberPrivacyCompliancePromise
  }

  // Searching

  async searchTrello (tokenInfo) {
    const url = `${this.uri}/1/search`
    const searchTrelloPromise = await this.authorizationFn(url, tokenInfo)
    return searchTrelloPromise
  }

  async searchForMembers (tokenInfo) {
    const url = `${this.uri}/1/search/members`
    const searchForMembersPromise = await this.authorizationFn(url, tokenInfo)
    return searchForMembersPromise
  }

  // Webhooks

  async getAWebhook (tokenInfo) {
    const url = `${this.uri}/1/webhooks/${tokenInfo.id}`
    const getAWebhookPromise = await this.authorizationFn(url, tokenInfo)
    return getAWebhookPromise
  }

  async getAFieldOnAWebhook (tokenInfo) {
    const url = `${this.uri}/1/webhooks/${tokenInfo.id}/${tokenInfo.field}`
    const getAFieldOnAWebhookPromise = await this.authorizationFn(url, tokenInfo)
    return getAFieldOnAWebhookPromise
  }
}

module.exports.Queries = Queries
