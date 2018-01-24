import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
//
//collection 933 465
//collection 800 400
//gallery 361 452
//list product 361 452
export const Dimension = {
	width: width,
	height: height,
	widthMenu: 4*width/5,
	widthFull: width - 10*4,
	heightCollection: 465*(width - 10*4)/933,
	heightCategory: 400*(width - 10*4)/800,
	widthGallery: (width - 13*4)/2,
	heightGalley: 452*(width - 13*4)/2/361,
	widthListProduct: (width - 10*6)/3,
	heightListProduct: 452*((width - 10*6)/3)/361,
}