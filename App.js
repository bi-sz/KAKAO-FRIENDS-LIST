import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import Header from './src/Header';
import Myprofile from './src/Myprofile';
import { myProfile } from './src/data';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <Myprofile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : statusBarHeight,
    backgroundColor: '#fff',
  },
});
