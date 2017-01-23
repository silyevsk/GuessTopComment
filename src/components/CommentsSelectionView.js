import _ from 'lodash';
import React, { Component } from 'react';
import { Text, ListView, View, StyleSheet } from 'react-native';

export default class CommentsSelectionView extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['Loading..'])
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource.cloneWithRows(this.props.titlesArray)}
                renderRow={this.renderRowByIndex}
                enableEmptySections={true}
                />
        );
    }

    renderRowByIndex = (rowIndex) => {
        const row = this.props.titlesArray[rowIndex];
        return (
            <View
                style={{backgroundColor: this.props.selectedRowIndex === rowIndex ? 'cyan' : 'white'}}
                >
                <Text
                    onPress={() => this.props.clickHandler(rowIndex)}
                >{rowIndex}</Text>
            </View>
        )
    }
}
