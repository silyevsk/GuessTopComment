import { ActionTest } from 'redux-testkit';
import RedditServiceMock from '../../services/redditMock';

describe('posts actions', () => {
    const actionTest = new ActionTest();
    const serviceMock = new RedditServiceMock();

    const originalConsoleError = console.error;
    const mockedConsoleError = jest.fn();
    const post1 = {
        id: "id_1",
        title: "title_1",
        body: "body_1",
        thumbnail: "thumbnail_1",
        url: "url_1",
        commentsNumber: 18
    };

    const post2 = {
        id: "id_2",
        title: "title_2",
        body: "body_2",
        thumbnail: "thumbnail_2",
        url: "url_2",
        commentsNumber: 2
    };

    beforeEach(() => {
        serviceMock.reset();
        actionTest.reset();
        jest.setMock('../../services/reddit', serviceMock);
        uut = require('./actions');
        console.error = mockedConsoleError;
    });

    afterEach(() => {
        console.error = originalConsoleError;
    });

    it('fetchMorePosts on service success', () => {
        serviceMock.addPosts([post1]);
        actionTest.dispatchSync(uut.fetchMorePosts());
        expect(actionTest.getDispatched(0).getParams().postsById).toEqual({ id_1: post1 });
    });

    it('fetchMorePosts appends more posts', () => {
        actionTest.setState({
            postsById: {
                id_1: post1
            }
        });
        serviceMock.addPosts([post2]);
        actionTest.dispatchSync(uut.fetchMorePosts());
        expect(actionTest.getDispatched(0).getParams().postsById).toEqual({ id_1: post1, id_2: post2 });
    });
});