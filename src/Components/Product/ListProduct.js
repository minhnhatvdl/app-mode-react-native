import React, { Component } from 'react';
import { View, Text, Button, Image, ListView, TouchableOpacity, PixelRatio } from 'react-native';
import Header from '../Header';
import GetListProduct from '../../Api/GetListProduct';
//style
import { Style } from '../Style';
const { s_container, s_containerListProduct, s_iconHeader, s_blockListProduct, s_nameListProduct, s_pointWhite, s_itemListProduct, s_sampleColor, s_itemBlockInfosListProduct, s_imageItemListProduct, s_imageFullWidth, s_nameProduct, s_priceProduct, s_materialProduct, s_rowColorProduct } = Style;
//images
import { ImageUrl } from '../Image';
const { i_backList } = ImageUrl;
//uri
import { Uri } from '../Uri';
const { u_imageProduct } = Uri;
//languages
import { Language } from '../Language';
const { l_point, l_showDetail, l_collection, l_unitCurrency } = Language;
//
export default class ListProductScreen extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		this.state = {
			categoryId: this.props.navigation.state.params.categoryId,
			nameCategory: this.props.navigation.state.params.name,
			data: this.ds.cloneWithRows([])
		};
	}
	//
	createRow(row, navigate) {
		return (
			<View style={s_itemListProduct}>
				<TouchableOpacity 
					onPress={() => navigate('ProductDetail', {'productId': row.id})}
					style={s_imageItemListProduct}>
					<Image style={s_imageFullWidth} source={{uri: `${u_imageProduct}${row.images[0]}`}} />
				</TouchableOpacity>
				<View style={s_itemBlockInfosListProduct}>
					<Text style={s_nameProduct}>{row.name}</Text>
					<Text style={s_priceProduct}>{row.price}{l_unitCurrency}</Text>
					<Text style={s_materialProduct}>{row.material}</Text>
					<View style={s_rowColorProduct}>
						<Text style={s_materialProduct}>{row.color}</Text>
						<View style={[s_sampleColor, {backgroundColor:row.color.toLowerCase()}]}></View>
					</View>
					<TouchableOpacity onPress={() => navigate('ProductDetail', {'productId': row.id})}>
						<Text style={s_priceProduct}>{l_showDetail}</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
	//
	componentDidMount() {
		GetListProduct(this.state.categoryId, 1).then(responseJson => {
			this.setState({
				data: this.ds.cloneWithRows(responseJson)
			})
		})
	}
	//
	render() {
		const { navigate, goBack } = this.props.navigation;
		return (
			<View style={s_container}>
				<Header navigate={navigate} />
				<View style={s_containerListProduct}>
					<View style={s_blockListProduct}>
						<TouchableOpacity onPress={() => goBack()}>
							<Image
								style={s_iconHeader}
								source={i_backList}
							/>
						</TouchableOpacity>
						<Text style={s_nameListProduct}>{this.state.nameCategory}</Text>
						<Text style={s_pointWhite}>{l_point}</Text>
					</View>
					<ListView
						enableEmptySections={true}
						dataSource = {this.state.data}
						renderRow = {row => this.createRow(row, navigate)}
					/>
				</View>
			</View>
		);
	}
}
	
	


