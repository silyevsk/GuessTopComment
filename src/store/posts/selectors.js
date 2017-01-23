import _ from 'lodash';

export function getCurrentPost(state) {
    return _.get(state.posts.postsById, state.posts.currentPostId);
}