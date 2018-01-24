import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
//dimension
import { Dimension } from './Dimension';
const { width, height, widthFull, heightCollection, heightCategory, widthGallery, heightGalley, widthMenu, widthListProduct, heightListProduct } = Dimension;
//menu
export const Style = StyleSheet.create({
	s_container: {
		flex: 1,
		backgroundColor: '#D5D4D0'
	},
	s_iconHeader: {
		width: height/30,
		height: height/30
	},
	s_iconTabBar: {
		width: height/25,
		height: height/25
	},
	s_header: {
		height: height/8,
		width: width,
		backgroundColor: '#2BAF86',
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
		paddingBottom: 10,
		justifyContent: 'space-around'
	},
	s_menuBar: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	s_input: {
		height: height/25,
		borderColor: 'gray',
		backgroundColor: '#fff',
		paddingTop: 3,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 3,
		fontSize: 15,
		fontFamily: 'Avenir',
		color: '#2BAF86'
	},
	s_titleApp: {
		fontSize: 19,
		color: '#fff',
		fontFamily: 'Avenir'
	},
	s_block: {
		backgroundColor: '#fff',
		margin: 10,
		padding: 10,
		shadowColor: '#4f3f39',
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 5,
			height: 5
		}
	},
	s_titleBlock: {
		paddingBottom: 10
	},
	s_titleBlockText: {
		color: '#989998',
		fontSize: 20,
		fontFamily: 'Avenir',
	},
	s_zoneBlock: {
		justifyContent: 'flex-start'
	},
	s_zoneBlockImage: {
		width: widthFull,
		height: heightCollection
	},
	s_zoneBlockRow: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	s_swiper: {
		height: heightCategory,
	},
	s_slide: {
		width: widthFull,
		height: heightCategory,
		justifyContent: 'center',
		alignItems: 'center',
	},
	s_textSlide: {
		color: '#B6B7B6',
		fontSize: 25,
		fontFamily: 'Avenir'
	},
	s_paginationDot: {
		backgroundColor: '#D5D4D0',
		width: 7,
		height: 7,
		borderRadius: 7,
		marginLeft: 7,
		marginRight: 7
	},
	s_paginationActiveDot: {
		backgroundColor: '#2BAF86', 
		width: 7, 
		height: 7, 
		borderRadius: 7, 
		marginLeft: 7, 
		marginRight: 7
	},
	s_galleryItem: {
		borderWidth: 1,
		borderColor: '#F1F2F1',
		width: widthGallery + 4,
		margin: 1,
		padding: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	s_imageTopProduct: {
		width: widthGallery,
		height: heightGalley,
	},
	s_infoTopProduct: {
		padding: 5,
	},
	s_nameTopProduct: {
		fontSize: 15,
		fontFamily: 'Avenir',
		color: '#979897',
	},
	s_priceTopProduct: {
		fontSize: 15,
		fontFamily: 'Avenir',
		color: '#BB1A55',
	},
	s_containerMenu: {
		flex: 1,
		backgroundColor: '#2BAF86',
		padding: 20,
		alignItems: 'center',
	},
	s_avatar: {
		width: width/3,
		height: width/3,
		borderRadius: (width/3) / PixelRatio.get(),
		margin: 20,
	},
	s_userName: {
		fontFamily: 'Avenir',
		fontSize: 20,
		color: '#FEFFFE',
	},
	s_blockMenu: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	s_textOptionMenu: {
		color: '#2BAF86',
		fontFamily: 'Avenir',
		fontSize: 15,
	},
	s_blockOptionMenu: {
		width: widthMenu - 40,
		backgroundColor: '#FEFFFE',
		borderRadius: 10,
		padding: 10,
		marginBottom: 2,
		alignItems: 'center',
	},
	s_inputAuth: {
		height: height/20,
		borderColor: 'gray',
		backgroundColor: '#fff',
		paddingTop: 3,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 3,
		marginBottom: 10,
		fontSize: 15,
		fontFamily: 'Avenir',
		color: '#2BAF86',
		borderRadius: (width/20) / PixelRatio.get(),
	},
	s_containerAuth: {
		flex: 1,
		backgroundColor: '#2BAF86',
		padding: 40,
		justifyContent: 'space-between'
	},
	s_btnSignIn: {
		height: height/20,
		borderWidth: 1,
		borderColor: '#fff',
		backgroundColor: '#2BAF86',
		paddingTop: 3,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 3,
		marginBottom: 5,
		borderRadius: (width/20) / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center',
	},
	s_btnUserInfos: {
		height: height/20,
		backgroundColor: '#2BAF86',
		paddingTop: 3,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 3,
		marginBottom: 5,
		borderRadius: (width/20) / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center',
	},
	s_textBtnSignIn: {
		fontFamily: 'Avenir',
		color: '#fff',
		fontSize: 15,
	},
	s_zoneSignInUp: {
		flexDirection: 'row',
	}, 
	s_zoneInfos: {
		flex: 1,
	},
	s_btnSignInBottom: {
		width: (width - 80)/2,
		height: height/20,
		borderWidth: 1,
		borderColor: '#fff',
		backgroundColor: '#fff',
		paddingTop: 3,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 3,
		marginRight: 3,
		borderTopLeftRadius: (width/20) / PixelRatio.get(),
		borderBottomLeftRadius: (width/20) / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center',
	},
	s_btnSignUpBottom: {
		width: (width - 80)/2,
		height: height/20,
		borderWidth: 1,
		borderColor: '#fff',
		backgroundColor: '#fff',
		paddingTop: 3,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 3,
		borderTopRightRadius: (width/20) / PixelRatio.get(),
		borderBottomRightRadius: (width/20) / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center',
	},
	s_textBtnSignInBottomActive: {
		fontFamily: 'Avenir',
		color: '#2BAF86',
		fontSize: 15,
	},
	s_textBtnSignInBottomInactive: {
		fontFamily: 'Avenir',
		color: '#D8D9D8',
		fontSize: 15,
	},
	s_headerOptionMenu: {
		height: height/12,
		width: width,
		backgroundColor: '#2BAF86',
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
		paddingBottom: 10,
		justifyContent: 'space-around'
	},
	s_point: {
		color: '#2BAF86',
	},
	s_blockOrder: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 3,
	},
	s_blockOrderTitle: {
		fontFamily: 'Avenir',
		fontSize: 15,
		color: '#878887',
		fontWeight: 'bold',
	},
	s_blockOrderValue1: {
		fontFamily: 'Avenir',
		fontSize: 15,
		color: '#3EB892',
	},
	s_blockOrderValue2: {
		fontFamily: 'Avenir',
		fontSize: 15,
		color: '#B40E66',
	},
	s_blockOrderValue3: {
		fontFamily: 'Avenir',
		fontSize: 15,
		color: '#B1035F',
		fontWeight: 'bold',
	},
	s_containerInfos: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
	}, 
	s_inputUserInfos: {
		height: height/20,
		borderWidth: 1,
		borderColor: '#2BAF86',
		backgroundColor: '#fff',
		paddingTop: 3,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 3,
		marginBottom: 10,
		fontSize: 15,
		fontFamily: 'Avenir',
		color: '#333',
		borderRadius: (width/20) / PixelRatio.get(),
	},
	s_containerListProduct: {
		flex: 1,
		margin: 10,
		padding: 10,
		shadowColor: '#4f3f39',
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 5,
			height: 5
		},
		backgroundColor: '#fff',
	},
	s_containerProductDetail: {
		flex: 1,
		margin: 10,
		padding: 10,
		shadowColor: '#4f3f39',
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 5,
			height: 5
		},
		backgroundColor: '#fff',
	},
	s_blockListProduct: {
		flexDirection: 'row',
		width: widthFull,
		justifyContent: 'space-between',
		paddingTop: 5,
		paddingBottom: 10,
		borderBottomWidth: 0.7,
		borderBottomColor: '#CCCDCC',
	},
	s_blockProductDetail: {
		flexDirection: 'row',
		width: widthFull,
		justifyContent: 'space-between',
		paddingTop: 5,
		paddingBottom: 10,
	},
	s_nameListProduct: {
		fontFamily: 'Avenir',
		fontSize: 20,
		color: '#BA2072',
	},
	s_pointWhite: {
		color: '#fff',
	},
	s_itemListProduct: {
		padding: 10,
		flexDirection: 'row',
		borderBottomWidth: 0.7,
		borderBottomColor: '#CCCDCC',
	},
	s_itemListProductCart: {
		padding: 10,
		flexDirection: 'row',
		marginBottom: 10,
		backgroundColor: '#fff',
		shadowColor: '#4f3f39',
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 5,
			height: 5
		}
	},
	s_imageItemListProduct: {
		flex: 1,
	},
	s_itemBlockInfosListProduct: {
		flex: 2,
		paddingLeft: 20,
		justifyContent: 'space-around',
	},
	s_itemBlockInfosListProductCart: {
		flex: 2,
		paddingLeft: 20,
		justifyContent: 'space-between',
	},
	s_imageFullWidth: {
		width: widthListProduct,
		height: heightListProduct,
	},
	s_nameProduct: {
		fontFamily: 'Avenir',
		fontSize: 20,
		color: '#ABACAB',
	},
	s_priceProduct: {
		fontFamily: 'Avenir',
		fontSize: 15,
		color: '#BA2072',
	},
	s_priceProductCart: {
		fontFamily: 'Avenir',
		fontSize: 20,
		color: '#BA2072',
	},
	s_materialProduct: {
		fontFamily: 'Avenir',
		fontSize: 15,
	},
	s_rowColorProduct: {
		flexDirection: 'row',
	},
	s_blockImageProductDetail: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	s_imageProductDetail: {
		width: widthGallery,
		height: heightGalley,
	},
	s_blockNameProductDetail: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#F4F5F4',
		marginBottom: 10,
	},
	s_nameProductDetail: {
		fontFamily: 'Avenir',
		fontSize: 25,
		color: '#2F2F36',
	},
	s_priceProductDetail: {
		fontFamily: 'Avenir',
		fontSize: 25,
		color: '#888988',
	},
	s_desProductDetail: {
		fontFamily: 'Avenir',
		fontSize: 15,
		color: '#888988',
		textAlign: 'justify',
	},
	s_blockColorMateProductDetail: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 20,
		paddingBottom: 20,
	},
	s_textColorProductDetail: {
		fontFamily: 'Avenir',
		fontSize: 15,
		color: '#B8196F',
	},
	s_blockColorProductDetail: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	s_blockInfosProductDetail: {
		paddingTop: 5,
	},
	s_listProductCart: {
		margin: 10,
	},
	s_listProductSearch: {
		margin: 10,
	},
	s_rowProductCart: {
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	s_iconDeleteProduct: {
		fontFamily: 'Avenir',
		fontSize: 15,
		color: '#D5D4CF',
	},
	s_iconAddProduct: {
		fontFamily: 'Avenir',
		fontSize: 20,
		color: '#333',
	},
	s_totalCart: {
		backgroundColor: '#2BAF86',
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	s_priceTotalProduct: {
		fontFamily: 'Avenir',
		fontSize: 20,
		color: '#fff',
	},

	s_mapStyleContact: {
        width: width - 20,
        height: height/3,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    s_mapContainerContact: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    s_infoContainerContact: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    s_rowInfoContainerContact: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    s_imageStyleContact: {
        width: 30,
        height: 30
    },
    s_infoTextContact: {
        fontFamily: 'Avenir',
        color: '#AE005E',
        fontSize: 15,
    },
    s_numberOrderProduct: {
    	position: 'absolute',
    	right: -5,
    	top: -2,
    	width: width/25,
    	height: width/25,
    	backgroundColor: 'red',
    	borderRadius: width/25 / PixelRatio.get(),
    	justifyContent: 'center',
    	alignItems: 'center',
    	zIndex: 9,
    },
    s_numberOrder: {
    	fontFamily: 'Avenir',
    	fontSize: 10,
    	color: '#fff',
    	fontWeight: 'bold',
    },
    s_sampleColor: {
    	width: 20,
    	height: 20,
    	borderRadius: 20/PixelRatio.get(),
    	marginLeft: 20,
    }
});




