import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as commentsActions from '../store/comments/actions';
import { connect } from 'react-redux';
import * as commentsSelectors from '../store/comments/selectors';
import * as postsSelectors from '../store/posts/selectors';
import CommentSelectionView from '../components/CommentsSelectionView';
import _ from 'lodash';

class CommentsContainer extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <CommentSelectionView
                    rowsData={_.map(this.props.commentsArray, (x, index) => { return {index, title: x.title} })}
                    clickHandler={this.handleRowClick.bind(this)}
                    />
            </View>
        );
    }

    handleRowClick(rowData) {
        this.props.dispatch(commentsActions.handleCommentSelection(this.props.postId, rowData.index));
    }
}

function mapStateToProps(state) {
    return {
        postId: postsSelectors.getCurrentPostId(state),
        commentsArray: commentsSelectors.getCommentsArray(state),
        topCommentIndex: commentsSelectors.getTopCommentIndex(state),
        selectedCommentId: commentsSelectors.getSelectedIndex(state)
    };
}

export default connect(mapStateToProps)(CommentsContainer);