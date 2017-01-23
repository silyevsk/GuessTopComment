import redditService from '../../services/reddit';
import _ from 'lodash';
import * as types from './actionTypes';

export function fetchMorePosts() {
    return async(dispatch, getState) => {
        try {
            const posts = await redditService.getPosts();
            const postsById = _.keyBy(posts, (post) => post.id);
            dispatch({type: types.MORE_POSTS_FETCHED, postsById});
        } catch(error) {
            console.error(error);
        }
    }
}