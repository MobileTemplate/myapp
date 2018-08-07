/** @format */

import {StatusBar, AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

StatusBar.setBarStyle('light-content', true);
AppRegistry.registerComponent(appName, () => App);


// import {AppRegistry,Component} from 'react-native';
// import App from './app/App';
// import {name as appName} from './app.json';

// class Electricity extends Component {
// 	render() {
//     	return (
// 			<App />
//     	);
// 	}
// }

// AppRegistry.registerComponent(appName, () => Electricity);
