import React, { Component } from 'react';
import { View, Text, Image, ListView, TouchableOpacity } from 'react-native';
import GetNewProduct from '../../../Api/GetNewProduct';
//style
import { Style } from '../../Style';
const { s_block, s_titleBlock, s_titleBlockText, s_zoneBlockRow, s_imageTopProduct, s_galleryItem, s_nameTopProduct, s_priceTopProduct, s_infoTopProduct } = Style;
//images
import { ImageUrl } from '../../Image';
const { i_topProduct1 } = ImageUrl;
//languages
import { Language } from '../../Language';
const { l_topProduct, l_unitCurrency } = Language;
//uri list product
import { Uri } from '../../Uri';
const { u_listProduct, u_imageProduct } = Uri;
//class
export default class TopProduct extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		this.state = {
			data: this.ds.cloneWithRows([])
		};
	}
	//
	createRow(row, navigate) {
		return(
			<View style={s_galleryItem}>
				<TouchableOpacity
					onPress={() => navigate('ProductDetail', {'productId': row.id})}>
					<Image
						style={s_imageTopProduct}
						source={{uri: `${u_imageProduct}${row.images[1]}`}}
					/>
				</TouchableOpacity>
				<View style={s_infoTopProduct}>
					<TouchableOpacity 
					onPress={() => navigate('ProductDetail', {'productId': row.id})}>
						<Text style={s_nameTopProduct}>{row.name.toUpperCase()}</Text>
					</TouchableOpacity>
					<Text style={s_priceTopProduct}>{row.price}{l_unitCurrency}</Text>
				</View>
			</View>
		)
	}
	//
	componentDidMount() {
		GetNewProduct().then(responseJson => {
			this.setState({
				data: this.ds.cloneWithRows(responseJson)
			})
		})
	}
	//
	render() {
		const { navigate } = this.props;
		return (
			<View style={s_block}>
				<View style={s_titleBlock}>
					<Text style={s_titleBlockText}>{l_topProduct.toUpperCase()}</Text>
				</View>
				<ListView
					contentContainerStyle={s_zoneBlockRow}
					enableEmptySections={true}
					dataSource = {this.state.data}
					renderRow = {row => this.createRow(row, navigate)}
				/>
			</View>
		);
	}
}
