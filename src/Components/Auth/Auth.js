import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
//style
import { Style } from '../Style';
const { s_container, s_header, s_menuBar, s_iconHeader, s_titleApp, s_inputAuth, s_containerAuth, s_btnSignIn, s_textBtnSignIn, s_zoneSignInUp, s_zoneInfos, s_btnSignInBottom, s_btnSignUpBottom, s_textBtnSignInBottomActive, s_textBtnSignInBottomInactive } = Style;
//images
import { ImageUrl } from '../Image';
const { i_back, i_iconLogo } = ImageUrl;
//languages
import { Language } from '../Language';
const { l_titleApp, l_orderHistory, l_email, l_password, l_signInNow, l_signIn, l_signUp, l_name, l_rePassword, l_signUpNow } = Language;
//
export default class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: true,
      name: '',
      email: '',
      password: '',
      repassword: '',
    };
  }
  //
  render() {
    const signInJSX = (
      <View style={s_containerAuth}>
        <View style={s_zoneInfos}>
          <TextInput
            style={s_inputAuth}
            placeholder={l_email}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry={true}
            style={s_inputAuth}
            placeholder={l_password}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <TouchableOpacity style={s_btnSignIn} onPress={() => {}}>
            <Text style={s_textBtnSignIn}>{l_signInNow.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
        <View style={s_zoneSignInUp}>
          <TouchableOpacity style={s_btnSignInBottom} onPress={() => this.setState({isSignIn: true})}>
            <Text style={s_textBtnSignInBottomActive}>{l_signIn.toUpperCase()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s_btnSignUpBottom} onPress={() => this.setState({isSignIn: false})}>
            <Text style={s_textBtnSignInBottomInactive}>{l_signUp.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    const signUpJSX = (
      <View style={s_containerAuth}>
        <View style={s_zoneInfos}>
          <TextInput
            style={s_inputAuth}
            placeholder={l_name}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
          <TextInput
            style={s_inputAuth}
            placeholder={l_email}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry={true}
            style={s_inputAuth}
            placeholder={l_password}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <TextInput
            secureTextEntry={true}
            style={s_inputAuth}
            placeholder={l_rePassword}
            onChangeText={(repassword) => this.setState({repassword})}
            value={this.state.repassword}
          />
          <TouchableOpacity style={s_btnSignIn} onPress={() => {}}>
            <Text style={s_textBtnSignIn}>{l_signUpNow.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
        <View style={s_zoneSignInUp}>
          <TouchableOpacity style={s_btnSignInBottom} onPress={() => this.setState({isSignIn: true})}>
            <Text style={s_textBtnSignInBottomInactive}>{l_signIn.toUpperCase()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s_btnSignUpBottom} onPress={() => this.setState({isSignIn: false})}>
            <Text style={s_textBtnSignInBottomActive}>{l_signUp.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    const templateJSX = (this.state.isSignIn)? signInJSX:signUpJSX;
    const { goBack } = this.props.navigation;
    return (
      <View style={s_container}>
        <View style={s_header}>
          <View style={s_menuBar}>
            <TouchableOpacity onPress={() => goBack()}>
              <Image 
                source={i_back}
                style={[s_iconHeader]}
              />
            </TouchableOpacity>
            <Text style={s_titleApp}>{l_titleApp}</Text>
            <Image 
              source={i_iconLogo}
              style={[s_iconHeader]}
            />
          </View>
        </View>
        {templateJSX}
      </View>
        
    );
  }
}