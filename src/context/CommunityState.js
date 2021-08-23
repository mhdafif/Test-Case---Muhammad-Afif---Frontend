import React, { useReducer } from "react";
import { communityReducer, CommunityAction } from "./ComunityReducer";
import { CommunityContext } from "./CommunityContext";

export const CommunityState = (props) => {
  const initialState = { community: [] };

  const [state, dispatch] = useReducer(communityReducer, initialState);

  const addCommunity = (newCommunity) => {
    dispatch({
      data: [...state.community, newCommunity],
      type: CommunityAction.SET_COMMUNITY,
    });
  };

  const editCommunity = (data) => {
    const temp = state.community;
    const findIdx = state.community.findIndex((item) => item.id === data.id);
    temp.splice(findIdx, 1, data);
    dispatch({
      data: temp,
      type: CommunityAction.SET_COMMUNITY,
    });
  };

  const removeCommunity = (communityId) => {
    dispatch({
      data: [...state.community.filter((item) => item.id !== communityId)],
      type: CommunityAction.SET_COMMUNITY,
    });
  };

  return (
    <CommunityContext.Provider
      value={{
        addCommunity,
        editCommunity,
        removeCommunity,
        community: state.community,
      }}
    >
      {props.children}
    </CommunityContext.Provider>
  );
};
