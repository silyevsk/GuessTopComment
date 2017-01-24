import _ from 'lodash';

export function getCommentsArray(state) {
    return _.get(state.comments.commentsById, state.posts.currentPostId) || [];
}

export function getTopCommentIndex(state) {
    return _.maxBy(getCommentsArray(state), (x) => x.score);
}

export function getSelectedIndex(state) {
    return _.indexOf(getCommentsArray(state), state.selectedCommentIndex);
}