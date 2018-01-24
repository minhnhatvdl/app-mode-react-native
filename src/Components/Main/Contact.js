import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Header from '../Header';
//style
import { Style } from '../Style';
const { s_container, s_iconTabBar, s_mapContainerContact, s_infoContainerContact, s_rowInfoContainerContact, s_imageStyleContact, s_infoTextContact, s_mapStyleContact } = Style;
//images
import { ImageUrl } from '../Image';
const { i_iconContact, i_iconPhone, i_iconMail, i_iconMessage, i_iconLocation } = ImageUrl;
//languages
import { Language } from '../Language';
const { l_contact } = Language;
//
import { Uri } from '../Uri';
const { u_contact } = Uri;
//
export default class ContactScreen extends Component {
  static navigationOptions = {
    tabBarLabel: l_contact,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={i_iconContact}
        style={[s_iconTabBar, {tintColor: tintColor}]}
      />
    )
  };
  //
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={s_container}>
        <Header navigate={navigate} />
        <View style={s_mapContainerContact}>
          <MapView
            style={s_mapStyleContact}
            initialRegion={{
                latitude: 48.783083,
                longitude: 2.309184,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
            <MapView.Marker
                coordinate={{ latitude: 48.783083, longitude: 2.309184 }}
                title="Minh Nhat @ Home"
                description="Minh Nhat"
            />
          </MapView>
        </View>
        <View style={s_infoContainerContact}>
            <View style={s_rowInfoContainerContact}>
                <Image source={i_iconLocation} style={s_imageStyleContact} />
                <Text style={s_infoTextContact}>{u_contact.location}</Text>
            </View>
            <View style={s_rowInfoContainerContact}>
                <Image source={i_iconPhone} style={s_imageStyleContact} />
                <Text style={s_infoTextContact}>{u_contact.telephone}</Text>
            </View>
            <View style={s_rowInfoContainerContact}>
                <Image source={i_iconMail} style={s_imageStyleContact} />
                <Text style={s_infoTextContact}>{u_contact.email}</Text>
            </View>
            <View style={[s_rowInfoContainerContact, { borderBottomWidth: 0 }]}>
                <Image source={i_iconMessage} style={s_imageStyleContact} />
                <Text style={s_infoTextContact}>{u_contact.message}</Text>
            </View>
        </View>
      </View>

    );
  }
}