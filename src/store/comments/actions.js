import redditService from '../../services/reddit';
import _ from 'lodash';
import * as types from './actionTypes';

export function fetchComments(postId) {
    return async(dispatch, getState) => {
        try {
            const comments = await redditService.getComments(postId);
            var commentsByPostId = {};
            commentsByPostId[postId] = comments;
            dispatch({type: types.COMMENTS_FETCHED, commentsByPostId});
        } catch(error) {
            console.error(error);
        }
    }
}