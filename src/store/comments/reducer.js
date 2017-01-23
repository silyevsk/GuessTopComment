import Immutable from 'seamless-immutable';
import * as types from './actionTypes';
import _ from 'lodash';

const initialState = Immutable({
  commentsById: {}
});

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.COMMENTS_FETCHED:
            const newCommentsById = _.extend(state.commentsById, action.commentsByPostId);
            return state.merge({commentsById: action.commentsByPostId});
    }
    return state;
}