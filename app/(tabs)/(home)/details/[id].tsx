import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const globalStyles = (require('../../../../assets/styles'))

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.subTitle}>Details of user {id} </Text>

      <View style={globalStyles.linkWrap}>
        <Link style={globalStyles.link} href="/details/details">Go to details screen</Link>
        <Link style={globalStyles.link} href="/">Go to home screen</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

