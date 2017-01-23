import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as commentsActions from '../store/comments/actions';
import { connect } from 'react-redux';
import * as commentsSelectors from '../store/comments/selectors';
import CommentSelectionView from '../components/CommentsSelectionView';

class CommentsContainer extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <CommentSelectionView
                    titlesArray={this.props.titlesArray}
                    clickHandler={this.handleRowClick.bind(this)}
                    />
            </View>
        );
    }

    handleRowClick(rowIndex) {
        if(rowIndex === this.props.topCommentIndex) {
            //increment score
        }

        // proceed to the next question
    }
}

function mapStateToProps(state) {
    console.warn("in mapStateToProps: ", state.comments);
    return {
        titlesArray: commentsSelectors.getCommentsTitlesArray(state),
        topCommentIndex: commentsSelectors.getTopCommentIndex(state)
    };
}

export default connect(mapStateToProps)(CommentsContainer);