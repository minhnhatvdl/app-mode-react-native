import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

import { Style } from '../../Style';
const { s_iconTabBar, s_numberOrderProduct, s_numberOrder } = Style;
//images
import { ImageUrl } from '../../Image';
const { i_iconCart } = ImageUrl;
//languages
import { Language } from '../../Language';
const { l_cart } = Language;
//list product
import { Uri } from '../../Uri';
const { u_listProduct } = Uri;
//global
import { Global } from '../../Global';
const { g_listOrderProduct } = Global;
//
export default class CartIcon extends Component {
  //
  getTemplateCart(listOrderProduct) {
    if(listOrderProduct.length > 0) {
      return (
        <View>
          <View style={s_numberOrderProduct}>
            <Text style={s_numberOrder}>{listOrderProduct.length}</Text>
          </View>
          <Image
            source={i_iconCart}
            style={[s_iconTabBar, {tintColor: this.props.tintColor}]}
          />
        </View>
      )
    } else {
      return (
        <Image
          source={i_iconCart}
          style={[s_iconTabBar, {tintColor: this.props.tintColor}]}
        />
      )
    }
  }
  render() {
    return this.getTemplateCart(g_listOrderProduct);
  }
}