import React, { Component } from 'react';
import { View, Text, Button, Image, ListView, TouchableOpacity, PixelRatio } from 'react-native';
import Header from '../Header';
import GetProduct from '../../Api/GetProduct';
//style
import { Style } from '../Style';
const { s_container, s_containerProductDetail, s_blockProductDetail, s_iconHeader, s_pointWhite, s_blockInfosProductDetail, s_blockImageProductDetail, s_imageProductDetail, s_blockNameProductDetail, s_nameProductDetail, s_priceProductDetail, s_desProductDetail, s_blockColorProductDetail, s_textColorProductDetail, s_blockColorMateProductDetail, s_sampleColor } = Style;
//images
import { ImageUrl } from '../Image';
const { i_backProduct, i_iconCartGreen } = ImageUrl;
//uri
import { Uri } from '../Uri';
const { u_imageProduct } = Uri;
//languages
import { Language } from '../Language';
const { l_showDetail, l_unitCurrency } = Language;
//global
import { Global } from '../Global';
const { g_listOrderProduct } = Global;
//
export default class ProductDetailScreen extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		this.state = {
			productId: this.props.navigation.state.params.productId,
			data: this.ds.cloneWithRows([])
		};
	}
	//
	createRow(row, goBack) {
		return(
			<View style={s_blockInfosProductDetail}>
				<View style={s_blockProductDetail}>
					<TouchableOpacity onPress={() => goBack()}>
						<Image
							style={s_iconHeader}
							source={i_backProduct}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.addProductToCart(row)}>
						<Image
							style={s_iconHeader}
							source={i_iconCartGreen}
						/>
					</TouchableOpacity>
				</View>
				<View style={s_blockImageProductDetail}>
					<Image style={s_imageProductDetail} source={{uri: `${u_imageProduct}${row.images[0]}`}} />
					<Image style={s_imageProductDetail} source={{uri: `${u_imageProduct}${row.images[1]}`}} />
				</View>
				<View style={s_blockNameProductDetail}>
					<Text style={s_nameProductDetail}>{row.name}</Text>
					<Text style={s_priceProductDetail}> / </Text>
					<Text style={s_priceProductDetail}>{row.price}{l_unitCurrency}</Text>
				</View>
				<Text style={s_desProductDetail}>{row.description}</Text>
				<View style={s_blockColorMateProductDetail}>
					<Text style={s_textColorProductDetail}>{row.material}</Text>
					<View style={s_blockColorProductDetail}>
						<Text style={s_textColorProductDetail}>{row.color}</Text>
						<View style={[s_sampleColor, {backgroundColor:row.color.toLowerCase()}]}></View>
					</View>
				</View>
			</View>
		)
	}
	// add product to cart
	addProductToCart(product) {
		let checkIndexProduct = Global.g_listOrderProduct.findIndex(item => item.product.id == product.id);
		if(checkIndexProduct > -1) {
			let quantity = Global.g_listOrderProduct[checkIndexProduct].quantity;
			quantity++;
			Global.g_listOrderProduct.splice(checkIndexProduct, 1);
			Global.g_listOrderProduct.push({product, quantity: quantity});
		} else {
			Global.g_listOrderProduct.push({product, quantity: 1});
		}
	}
	//
	componentDidMount() {
		GetProduct(this.state.productId).then(responseJson => {
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
				<View style={s_containerProductDetail}>
					<ListView
						enableEmptySections={true}
						dataSource = {this.state.data}
						renderRow = {row => this.createRow(row, goBack)}
					/>
				</View>
			</View>
		);
	}
}