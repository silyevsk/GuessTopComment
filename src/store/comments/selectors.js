import _ from 'lodash';

export function getCommentsArray(state) {
    return _.get(state.comments.commentsById, state.posts.currentPostId) || [];
}

export function getTopCommentIndex(state) {
    const commentsArray = getCommentsArray(state);
    return commentsArray.indexOf(_.maxBy(commentsArray, (x) => x.score));
}

export function getSelectedIndex(state) {
    return state.comments.selectedCommentIndex;
}