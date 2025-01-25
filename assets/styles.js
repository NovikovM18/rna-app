'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
	container: {
		padding: 20,
		minHeight: '100%',
		flexDirection: 'column',
		gap: 8,
		backgroundColor: 'gainsboro',
	},
	title: {
		fontSize: 32,
		fontWeight: 700,
		color: 'darkslategray',
		textAlign: 'center',
	},
	subTitle: {
		fontSize: 24,
		fontWeight: 600,
		color: 'darkslategray',
		textAlign: 'center',
	},
	linkWrap: {
		alignSelf: 'center',
		gap: 8,
	},
	link: {
		padding: 4,
		paddingLeft: 8,
		paddingRight: 8,
		borderColor: 'darkslategray',
		borderWidth: 1,
		borderRadius: 12,
		backgroundColor: 'darkgray',
		fontSize: 22,
		color: 'darkslategray',
		textAlign: 'center',
	},
});