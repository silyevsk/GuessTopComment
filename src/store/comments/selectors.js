import _ from 'lodash';

export function getCurrentComments(state) {
    return _.get(state.comments.commentsById, state.posts.currentPostId) || [];
}

export function getCommentsTitlesArray(state) {
    return _.map(getCurrentComments(state), (x) => x.title)
}

export function getTopCommentIndex(state) {
    return _.maxBy(getCurrentComments(state), (x) => x.score);
}