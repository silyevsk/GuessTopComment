import _ from 'lodash';

export function getCurrentPost(state) {
    return _.get(state.posts.postsById, state.posts.currentPostId);
}

export function getCurrentPostId(state) {
    return state.posts.currentPostId;
}