import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ListView, TextInput } from 'react-native';
//style
import { Style } from '../Style';
const { s_container, s_headerOptionMenu, s_menuBar, s_iconHeader, s_titleApp, s_point, s_inputUserInfos, s_containerInfos, s_btnUserInfos, s_textBtnSignIn } = Style;
//images
import { ImageUrl } from '../Image';
const { i_backRight } = ImageUrl;
//languages
import { Language } from '../Language';
const { l_userInfos, l_point, l_btnUserInfos } = Language;
//list order
const userInfos = {"name": "HO Dac Minh Nhat", "address": "19 rue Léo Delibles 92330 Sceaux France", "telephone": "07 81 11 31 33"};
export default class ChangeInfosScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: userInfos.name,
      address: userInfos.address,
      telephone: userInfos.telephone
    };
  }
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={s_container}>
        <View style={s_headerOptionMenu}>
          <View style={s_menuBar}>
            <Text style={s_point}>{l_point}</Text>
            <Text style={s_titleApp}>{l_userInfos}</Text>
            <TouchableOpacity onPress={() => goBack()}>
              <Image
                source={i_backRight}
                style={[s_iconHeader]}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={s_containerInfos}>
          <TextInput
            style={s_inputUserInfos}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
          <TextInput
            style={s_inputUserInfos}
            onChangeText={(address) => this.setState({address})}
            value={this.state.address}
          />
          <TextInput
            style={s_inputUserInfos}
            onChangeText={(telephone) => this.setState({telephone})}
            value={this.state.telephone}
          />
          <TouchableOpacity style={s_btnUserInfos} onPress={() => {}}>
            <Text style={s_textBtnSignIn}>{l_btnUserInfos.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}