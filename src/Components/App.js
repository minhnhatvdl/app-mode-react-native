import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from './Main/Home/Home';
import CartScreen from './Main/Cart/Cart';
import SearchScreen from './Main/Search';
import ContactScreen from './Main/Contact';
import MenuScreen from './Menu/Menu';
import OrderHistoryScreen from './Menu/OrderHistory';
import ChangeInfosScreen from './Menu/ChangeInfos';
import AuthScreen from './Auth/Auth';
import ListProductScreen from './Product/ListProduct';
import ProductDetailScreen from './Product/ProductDetail';
//dimension
import { Dimension } from './Dimension';
const { widthMenu } = Dimension;
//tab bar
export const TabBar = TabNavigator({
	Home: { screen: HomeScreen },
	Cart: { screen: CartScreen },
	Search: { screen: SearchScreen },
	Contact: { screen: ContactScreen },
},{
	tabBarPosition: 'bottom',
	tabBarOptions: {
		activeTintColor: '#2BAF86',
		inactiveTintColor: '#848584',
		style: {
			backgroundColor: '#F5F6F5'
		}
	},
	swipeEnabled: true
});
//drawer
export const App = DrawerNavigator({
  	TabBar: { screen: TabBar },
  	Auth: { screen: AuthScreen },
  	OrderHistory: { screen: OrderHistoryScreen },
  	ChangeInfos: { screen: ChangeInfosScreen },
  	ListProduct: { screen: ListProductScreen },
  	ProductDetail: { screen: ProductDetailScreen },
},{
	drawerWidth: widthMenu,
	drawerPosition: 'left',
	contentComponent: props => <MenuScreen {...props} />
});