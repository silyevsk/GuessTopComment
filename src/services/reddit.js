import _ from 'lodash';

const REDDIT_BASE_URL = 'https://www.reddit.com';

class RedditService {
    async getPosts() {
        const url = REDDIT_BASE_URL + '/r/all.json';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`RedditService getPosts failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        const children = _.get(data, 'data.children');
        if (!children) {
            throw new Error(`RedditService getPosts failed, children not returned`);
        }
        return _.map(children, (post) => {
            // abstract away the specifics of the reddit API response and take only the fields we care about
            const body = _.get(post, 'data.selftext');
            return {
                id: _.get(post, 'data.id'),
                title: _.get(post, 'data.title'),
                body: body,
                thumbnail: this._validateUrl(_.get(post, 'data.thumbnail')),
                url: !body ? this._validateUrl(_.get(post, 'data.url')) : undefined,
                commentsNumber: _.get(post, 'data.comments_num')
            }
        });
    }

    async getComments(postId) {
        // Mock it for now:
        return [
            {
                title: "A",
                score: 7,
            },
            {
                title: "B",
                score: 0,
            },
            {
                title: "C",
                score: 12,
            },
            {
                title: "D",
                score: 34,
            }
        ];



        const url = REDDIT_BASE_URL + '/comments/' + postId + '.json';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`RedditService getComments failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        const children = _.get(data, 'data.children');
        if (!children) {
            throw new Error(`RedditService getComments failed, children not returned`);
        }

        return _.map(children, (post) => {
            // abstract away the specifics of the reddit API response and take only the fields we care about
            const body = _.get(post, 'data.selftext');
            return {
                id: _.get(post, 'data.id'),
                title: _.get(post, 'data.title'),
                body: body,
                thumbnail: this._validateUrl(_.get(post, 'data.thumbnail')),
                url: !body ? this._validateUrl(_.get(post, 'data.url')) : undefined
            }
        });
    }

    _validateUrl(url = '') {
        return url.startsWith('http') ? url : undefined;
    }
}

export default new RedditService;