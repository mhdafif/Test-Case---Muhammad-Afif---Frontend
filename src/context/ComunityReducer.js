export const CommunityAction = {
  SET_COMMUNITY: '@SET_COMMUNITY'
}

export const communityReducer = (state, action) => {
  switch (action.type) {
    case CommunityAction.SET_COMMUNITY:
      return { ...state, community: action.data }
  
    default:
      break;
  }
}