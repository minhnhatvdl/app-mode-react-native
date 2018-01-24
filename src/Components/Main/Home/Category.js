import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
//style
import { Style } from '../../Style';
const { s_block, s_titleBlock, s_titleBlockText, s_zoneBlock, s_zoneBlockImage, s_slide, s_textSlide, s_paginationActiveDot, s_paginationDot, s_swiper } = Style;
//languages
import { Language } from '../../Language';
const { l_category } = Language;
//list category
import { Uri } from '../../Uri';
const { u_listCategory, u_imageCategory } = Uri;
//class
export default class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	//
	componentDidMount() {
		fetch(u_listCategory)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					data: responseJson.category
				})
			})
			.catch((error) => {
				console.error(error +'');
		});
	}
	//
	render() {
		const { navigate } = this.props;
		return (
			<View style={s_block}>
				<View style={s_titleBlock}>
					<Text style={s_titleBlockText}>{l_category.toUpperCase()}</Text>
				</View>
				<View style={s_zoneBlock}>
					<Swiper style={s_swiper}
						removeClippedSubviews={false}
						showsPagination 
						autoplay={true} 
						autoplayTimeout={5}
						dot={<View style={s_paginationDot} />}
						activeDot={<View style={s_paginationActiveDot} />}>
						{
		                    this.state.data.map((item, index) => (
								<TouchableOpacity key={index} onPress={() => navigate('ListProduct', {'categoryId': item.id, 'name': item.name})}>
									<Image source={{uri: `${u_imageCategory}${item.image}`}}
		                               		style={s_slide}>
										<Text style={s_textSlide}>{item.name}</Text>
									</Image>
								</TouchableOpacity>
		                    ))
		                }
					</Swiper>
				</View>
			</View>
		);
	}
}