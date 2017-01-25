import _ from 'lodash';
import React, { Component } from 'react';
import { Text, ListView, View, StyleSheet } from 'react-native';

export default class CommentsSelectionView extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([{index: 0, title: 'Loading..'}])
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource.cloneWithRows(this.props.rowsData)}
                renderRow={this.renderRow}
                enableEmptySections={true}
                />
        );
    }

    renderRow = (rowData) => {  
        const color = (() => {
            switch(rowData.index) {
                case this.props.rightAnswer: return 'green';
                case this.props.wrongAnswer: return 'red';
                default: return 'white';
            }
        })();
        return (
            <View
                style={{backgroundColor: color}}
                >
                <Text
                    onPress={() => this.props.clickHandler && this.props.clickHandler(rowData)}
                >{rowData.title}</Text>
            </View>
        )
    }
}
