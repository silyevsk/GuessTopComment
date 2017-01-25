import Immutable from 'seamless-immutable';
import * as types from '../actionTypes';
import _ from 'lodash';

const initialState = Immutable({
  postsById: {},
  usedIds: new Set(),
  currentPostId: undefined
});

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.MORE_POSTS_FETCHED:
            return mergeMorePosts(state, action.postsById);
    }
    return state;
}

function mergeMorePosts(state, newPosts) {
    var stateDiff = {
        // postsById: Object.assign(state.postsById, newPosts)
        postsById: newPosts
    }

    // Set initial current post here?
    if(state.currentPost === undefined) {
        const length = Object.keys(newPosts).length;
        if(length > 0) {
            const index = Math.floor(Math.random() * length);
            stateDiff.currentPostId = Object.keys(newPosts)[index];
        }
    }

    return state.merge(stateDiff);
}