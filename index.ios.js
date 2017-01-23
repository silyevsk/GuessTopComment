/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PostContainer from './src/containers/PostContainer';
import CommentsContainer from './src/containers/CommentsContainer';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './src/store/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

class Root extends Component {
  constructor() {
    super();
    this.state = {
      store: store,
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{height: 100}}/>
              <PostContainer/>
              <CommentsContainer/>
          </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('GuessTopComment', () => Root);