import React, { Component } from 'react';
import { View, Text, Button, Image, PixelRatio, TouchableOpacity, ListView } from 'react-native';
import Header from '../Header';
import Search from '../../Api/Search';
//style
import { Style } from '../Style';
const { s_container, s_iconTabBar, s_itemListProductCart, s_imageItemListProduct, s_imageFullWidth, s_itemBlockInfosListProduct, s_nameProduct, s_priceProduct, s_materialProduct, s_rowColorProduct, s_listProductSearch } = Style;
//images
import { ImageUrl } from '../Image';
const { i_iconSearch } = ImageUrl;
//languages
import { Language } from '../Language';
const { l_search, l_showDetail } = Language;
//list product
import { Uri } from '../Uri';
const { u_listProduct } = Uri;
//
export default class SearchScreen extends Component {
  static navigationOptions = {
    tabBarLabel: l_search,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={i_iconSearch}
        style={[s_iconTabBar, {tintColor: tintColor}]}
      />
    )
  };
  //
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      data: this.ds.cloneWithRows([])
    };
  }
  //
  createRow(row, navigate) {
    return (
      <View style={s_itemListProductCart}>
        <TouchableOpacity 
          onPress={() => navigate('ProductDetail', {'productId': row.id})}
          style={s_imageItemListProduct}>
          <Image
            style={s_imageFullWidth}
            source={row.images[Object.keys(row.images)[0]]}
          />
        </TouchableOpacity>
        <View style={s_itemBlockInfosListProduct}>
          <Text style={s_nameProduct}>{row.name}</Text>
          <Text style={s_priceProduct}>{row.price}</Text>
          <Text style={s_materialProduct}>{row.material}</Text>
          <View style={s_rowColorProduct}>
            <Text style={s_materialProduct}>{row.color}</Text>
            <View style={{width:20, height:20, marginLeft:20, borderRadius:20/PixelRatio.get(),backgroundColor:row.code}}></View>
          </View>
          <TouchableOpacity 
            onPress={() => navigate('ProductDetail', {'productId': row.id})}
            >
            <Text style={s_priceProduct}>{l_showDetail}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  //
  componentDidMount() {
    Search().then(responseJson => {
      this.setState({
        data: this.ds.cloneWithRows([])
      })
    })
  }
  //
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={s_container}>
        <Header navigate={navigate} />
      </View>
    );
  }
}