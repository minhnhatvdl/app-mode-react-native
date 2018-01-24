import React, { Component } from 'react';
import { View, Text, Button, Image, ListView, TouchableOpacity, PixelRatio } from 'react-native';
import Header from '../../Header';
import CartIcon from './CartIcon';
//style
import { Style } from '../../Style';
const { s_container, s_iconTabBar, s_itemListProductCart, s_imageItemListProduct, s_imageFullWidth, s_itemBlockInfosListProductCart, s_nameProduct, s_priceProductCart, s_priceProduct, s_listProductCart, s_rowProductCart, s_iconDeleteProduct, s_iconAddProduct, s_totalCart, s_priceTotalProduct } = Style;
//images
import { ImageUrl } from '../../Image';
const { i_iconCart } = ImageUrl;
//languages
import { Language } from '../../Language';
const { l_cart, l_showDetail, l_totalCart, l_checkOutNow } = Language;
//list product
import { Uri } from '../../Uri';
const { u_imageProduct } = Uri;
//global
import { Global } from '../../Global';
const { g_listOrderProduct } = Global;
//
export default class CartScreen extends Component {
  static navigationOptions = {
    tabBarLabel: l_cart,
    tabBarIcon: ({ tintColor }) => <CartIcon tintColor={tintColor} />
  };
  //
  constructor(props) {
    super(props);
    this.totalPrice = 0;
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      totalPrice: 0,
      data: this.ds.cloneWithRows([])
    };
  }
  //get total price
  getTotalPrice(listOrderProduct) {
    let totalPrice = 0;
    listOrderProduct.forEach(product => totalPrice += parseInt(product.product.price*product.quantity));
    return totalPrice;
  }
  //add a product
  addProduct(productId) {
    let indexProduct = Global.g_listOrderProduct.findIndex(product => product.product.id == productId);
    let quantity = Global.g_listOrderProduct[indexProduct].quantity;
    quantity++;
    Global.g_listOrderProduct[indexProduct].quantity = quantity;
    this.setState({
      totalPrice: this.getTotalPrice(Global.g_listOrderProduct),
      data: this.ds.cloneWithRows(Global.g_listOrderProduct)
    })
  }
  //remove a product
  removeProduct(productId) {
    let indexProduct = Global.g_listOrderProduct.findIndex(product => product.product.id == productId);
    let quantity = Global.g_listOrderProduct[indexProduct].quantity;
    console.log(quantity);
    if(quantity == 1) {
      Global.g_listOrderProduct.splice(indexProduct, 1);
    } else {
      quantity--;
      Global.g_listOrderProduct[indexProduct].quantity = quantity;
    }
    this.setState({
      totalPrice: this.getTotalPrice(Global.g_listOrderProduct),
      data: this.ds.cloneWithRows(Global.g_listOrderProduct)
    })
  }
  removeDirectProduct(productId) {
    let indexProduct = Global.g_listOrderProduct.findIndex(product => product.product.id == productId);
    Global.g_listOrderProduct.splice(indexProduct, 1);
    this.setState({
      totalPrice: this.getTotalPrice(Global.g_listOrderProduct),
      data: this.ds.cloneWithRows(Global.g_listOrderProduct)
    })
  }
  //
  createRow(row, navigate) {
    return (
      <View style={s_itemListProductCart}>
        <TouchableOpacity 
          onPress={() => navigate('ProductDetail', {'productId': row.product.id})}
          style={s_imageItemListProduct}>
          <Image
            style={s_imageFullWidth}
            source={{uri: `${u_imageProduct}${row.product.images[0]}`}}
          />
        </TouchableOpacity>
        
        <View style={s_itemBlockInfosListProductCart}>
          <View style={s_rowProductCart}>
            <Text style={s_nameProduct}>{row.product.name}</Text>
            <TouchableOpacity
              onPress={() => this.removeDirectProduct(row.product.id)}>
              <Text style={s_iconDeleteProduct}>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={s_priceProductCart}>{row.product.price}</Text>
          <View style={s_rowProductCart}>
            <TouchableOpacity
              onPress={() => this.addProduct(row.product.id)}>
              <Text style={s_iconAddProduct}>+</Text>
            </TouchableOpacity>
            <Text style={s_iconAddProduct}>{row.quantity}</Text>
            <TouchableOpacity
              onPress={() => this.removeProduct(row.product.id)}>
              <Text style={s_iconAddProduct}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigate('ProductDetail', {'productId': row.product.id})}
              >
              <Text style={s_priceProduct}>{l_showDetail}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  //
  componentDidMount() {
    this.setState({
      totalPrice: this.getTotalPrice(Global.g_listOrderProduct),
      data: this.ds.cloneWithRows(Global.g_listOrderProduct)
    })
  }
  //
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={s_container}>
        <Header navigate={navigate} />
        <ListView
          enableEmptySections={true}
          dataSource = {this.state.data}
          renderRow = {row => this.createRow(row, navigate)}
        />
        <TouchableOpacity
          style={s_totalCart}
          onPress={() => {}}>
          <Text style={s_priceTotalProduct}>{l_totalCart.toUpperCase()} {this.state.totalPrice}$ {l_checkOutNow.toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}