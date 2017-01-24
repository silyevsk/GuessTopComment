import Immutable from 'seamless-immutable';
import * as types from './actionTypes';
import _ from 'lodash';

const initialState = Immutable({
  commentsById: {},
  selectedCommentIndex: undefined
});

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.COMMENTS_FETCHED:
            const newCommentsById = _.extend(state.commentsById, action.commentsByPostId);
            return state.merge({commentsById: action.commentsByPostId, selectedCommentIndex: undefined});
        case types.COMMENT_SELECTED:
            console.warn("action: ", action);
            console.warn("state: ", state.merge({selectedCommentIndex: action.commentIndex}));

            return state.merge({selectedCommentIndex: action.commentIndex});
    }
    return state;
}