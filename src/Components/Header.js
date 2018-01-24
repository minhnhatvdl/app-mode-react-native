import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
//style
import { Style } from './Style';
const { s_header, s_iconHeader, s_menuBar, s_input, s_titleApp } = Style;
//images
import { ImageUrl } from './Image';
const { i_iconMenu, i_iconLogo } = ImageUrl;
//languages
import { Language } from './Language';
const { l_titleApp, l_titleSearch } = Language;
//class
export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputSearch: ''
		};
	}
	render() {
		return (
			<View style={s_header}>
				<View style={s_menuBar}>
					<TouchableOpacity onPress={() => {this.props.navigate('DrawerOpen')}}>
						<Image
							source={i_iconMenu}
							style={[s_iconHeader]}
						/>
					</TouchableOpacity>
					<Text style={s_titleApp}>{l_titleApp}</Text>
					<Image
						source={i_iconLogo}
						style={[s_iconHeader]}
					/>
				</View>
				<TextInput
					style={s_input}
					placeholder={l_titleSearch}
					onChangeText={(inputSearch) => this.setState({inputSearch})}
					value={this.state.inputSearch}
				/>
			</View>
		);
	}
}