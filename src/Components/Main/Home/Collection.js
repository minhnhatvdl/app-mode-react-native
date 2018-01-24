import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
//style
import { Style } from '../../Style';
const { s_block, s_titleBlock, s_titleBlockText, s_zoneBlock, s_zoneBlockImage } = Style;
//images
import { ImageUrl } from '../../Image';
const { i_banner } = ImageUrl;
//languages
import { Language } from '../../Language';
const { l_collection } = Language;
//class
export default class Collection extends Component {
	render() {
		const { navigate } = this.props;
		return (
			<View style={s_block}>
				<View style={s_titleBlock}>
					<Text style={s_titleBlockText}>{l_collection.toUpperCase()}</Text>
				</View>
				<View style={s_zoneBlock}>
					<TouchableOpacity
						onPress={() => navigate('ListProduct', {'categoryId': 'collection', 'name': l_collection})}>
						<Image
							source={i_banner}
							style={s_zoneBlockImage}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
