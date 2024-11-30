import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Pressable } from 'react-native';
import DevFlowLogo from '../../assets/images/DevFlowLogo.png';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones

const HeaderApp = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={DevFlowLogo} style={styles.logo} resizeMode="contain" />
      <TouchableOpacity style={styles.iconContainer}>
        <Pressable>
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#0C0C0C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: '70%',
  },
  iconContainer: {
    padding: 17,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HeaderApp;
