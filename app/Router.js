//
// Author: leafsoar
// Date: 2016-07-09 11:07:35
// 


// 路由界面

'use strict';

import React, { Component } from 'react';

import Main from './components/Main';
import Home from './components/Home';

import {DrawerNavigator} from 'react-navigation'; 

export default class Router extends Component {
	render() {
		return(
			<Navigator/>
		)
	}
};

const Navigator = DrawerNavigator({  
    Home:{screen:Home},  
    Mine:{screen:Main},  
});  

