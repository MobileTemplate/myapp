//
// Author: leafsoar
// Date: 2016-07-09 11:05:57
// 

'use scrit';

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';


import * as action from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Home extends Component {
  render() {
  	const { actions, state } = this.props;
    const onPressLearnMore = () => {
    	// 
        
        console.log(actions.UserInfo(10001, null, (s, d)=>{
        	console.log(s)
        	console.log(d)
        }))
        // if (navigation) {
        //     this.props.navigation.navigate('Mine');
        // }

    }
    console.log("==>", state.user_info);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to 任务管理! HOME
        </Text>
        <Text style={styles.instructions} onClick={()=>{
            console.log("hhh")
        }}>
          To get started, edit index.ios.js
        </Text>
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

export default connect(state => ({
	state: state.user
}), (dispatch) => ({
	actions: bindActionCreators(action.user, dispatch)
}))(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
