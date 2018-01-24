import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ListView } from 'react-native';
//style
import { Style } from '../Style';
const { s_container, s_headerOptionMenu, s_menuBar, s_iconHeader, s_titleApp, s_point, s_block, s_blockOrder, s_blockOrderTitle, s_blockOrderValue1, s_blockOrderValue2, s_blockOrderValue3  } = Style;
//images
import { ImageUrl } from '../Image';
const { i_backRight } = ImageUrl;
//languages
import { Language } from '../Language';
const { l_orderHistory, l_point, l_orderId, l_orderTime, l_orderStatus, l_orderTotal } = Language;
//list order
const listOrderHistory = [
  {"id": "ORD15", "time": "2016-04-19 08:19:30", "status": "pending", "total": "200$"},
  {"id": "ORD15", "time": "2016-04-19 08:19:30", "status": "pending", "total": "200$"},
  {"id": "ORD15", "time": "2016-04-19 08:19:30", "status": "pending", "total": "200$"}
];
export default class OrderHistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      data: this.ds.cloneWithRows(listOrderHistory)
    };
  }
  //
  createRow(row) {
    return (
      <View style={s_block}>
        <View style={s_blockOrder}>
          <Text style={s_blockOrderTitle}>{l_orderId}</Text>
          <Text style={s_blockOrderValue1}>{row.id}</Text>
        </View>
        <View style={s_blockOrder}>
          <Text style={s_blockOrderTitle}>{l_orderTime}</Text>
          <Text style={s_blockOrderValue2}>{row.time}</Text>
        </View>
        <View style={s_blockOrder}>
          <Text style={s_blockOrderTitle}>{l_orderStatus}</Text>
          <Text style={s_blockOrderValue1}>{row.status}</Text>
        </View>
        <View style={s_blockOrder}>
          <Text style={s_blockOrderTitle}>{l_orderTotal}</Text>
          <Text style={s_blockOrderValue3}>{row.total}</Text>
        </View>
      </View>
  )}
  //
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={s_container}>
        <View style={s_headerOptionMenu}>
          <View style={s_menuBar}>
            <Text style={s_point}>{l_point}</Text>
            <Text style={s_titleApp}>{l_orderHistory}</Text>
            <TouchableOpacity onPress={() => goBack()}>
              <Image
                source={i_backRight}
                style={[s_iconHeader]}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ListView
          dataSource = {this.state.data}
          renderRow={this.createRow}
        />
      </View>
    );
  }
}