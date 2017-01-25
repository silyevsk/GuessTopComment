export default class RedditServiceMock {
    getPosts = async function() {}

    reset() {
        this.getPosts = jest.fn();
    }

    addPosts(value) {
        this.getPosts.mockReturnValueOnce(value);
    }
}