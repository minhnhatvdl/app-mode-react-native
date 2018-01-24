import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
//style
import { Style } from '../Style';
const { s_container, s_containerMenu, s_avatar, s_userName, s_blockMenu, s_textOptionMenu, s_blockOptionMenu } = Style;
//images
import { ImageUrl } from '../Image';
const { i_avatar } = ImageUrl;
//languages
import { Language } from '../Language';
const { l_titleApp, l_titleSearch, l_orderHistory, l_changeInfo, l_signOut, l_signIn } = Language;
//
export default class MenuScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Menu',
  };
  //
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }
  //
  render() {
    const { navigate } = this.props.navigation;
    const loginJSX = (
      <View style={s_containerMenu}>
        <Image
          source={i_avatar}
          style={s_avatar}
        />
        <Text style={s_userName}>HO Dac Minh Nhat</Text>
        <View style={s_blockMenu}>
          <TouchableOpacity style={s_blockOptionMenu} onPress={() => navigate('OrderHistory')}>
            <Text style={s_textOptionMenu}>{l_orderHistory}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s_blockOptionMenu} onPress={() => navigate('ChangeInfos')}>
            <Text style={s_textOptionMenu}>{l_changeInfo}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s_blockOptionMenu} onPress={() => navigate('OrderHistory')}>
            <Text style={s_textOptionMenu}>{l_signOut}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    const logoutJSX = (
      <View style={s_containerMenu}>
        <View style={s_blockMenu}>
          <TouchableOpacity style={s_blockOptionMenu} onPress={() => navigate('Auth')}>
            <Text style={s_textOptionMenu}>{l_signIn}</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
    const templateJSX = (this.state.isLoggedIn)? loginJSX:logoutJSX;
    return (
      <View style={s_container}>
        {templateJSX}
      </View>
    );
  }
}