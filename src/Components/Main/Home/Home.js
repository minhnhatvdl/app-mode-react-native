import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import Header from '../../Header';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
//style
import { Style } from '../../Style';
const { s_container, s_iconTabBar } = Style;
//images
import { ImageUrl } from '../../Image';
const { i_iconHome } = ImageUrl;
//languages
import { Language } from '../../Language';
const { l_home } = Language;
//class
export default class HomeScreen extends Component {
	static navigationOptions = {
		tabBarLabel: l_home,
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={i_iconHome}
				style={[s_iconTabBar, {tintColor: tintColor}]}
			/>
		)
	};
	//
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={s_container}>
				<ScrollView>
					<Header navigate={navigate} />
					<Collection navigate={navigate} />
					<Category navigate={navigate} />
					<TopProduct navigate={navigate} />
				</ScrollView>
			</View>
		);
	}
}
					

