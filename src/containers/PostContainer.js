import React, { Component } from 'react';
import { Text } from 'react-native';
import * as postsActions from '../store/posts/actions';
import * as commentsActions from '../store/comments/actions';
import { connect } from 'react-redux';
import * as postsSelectors from '../store/posts/selectors';

class PostContainer extends Component {
    componentWillMount() {
        this.props.dispatch(postsActions.fetchMorePosts());
    }

    render() {
        if (!this.props.post) return this.renderLoading();

        this.props.dispatch(commentsActions.fetchComments(this.props.post.id)); // where should this be?..

        if (!this.props.post.title) {
            return (
                <Text>No title</Text>
            )
        }

        return (
            <Text>{this.props.post.title}</Text>
        );
    }

    renderLoading() {
        return (
            <Text>Loading..</Text>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: postsSelectors.getCurrentPost(state)
    };
}

export default connect(mapStateToProps)(PostContainer);