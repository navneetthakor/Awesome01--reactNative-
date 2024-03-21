/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

function AppPro() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <View style={style.container}>
        {/* my image  */}
        <Image source={require('./myphoto.jpg')} style={style.imageStyle} />
        <Text style={isDarkMode ? style.darkMode : style.whiteMode}>
          Navneet kumar
        </Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 500,
  },

  whiteMode: {
    color: 'black',
    fontSize: 30,
  },

  darkMode: {
    fontSize: 30,
    color: 'white',
  },

  // style for image
  imageStyle: {
    height: 250,
    width: 250,
    borderRadius: 300,
    marginBottom: 20,
  },
});

export default AppPro;
