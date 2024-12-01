import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Pressable } from 'react-native';
import DevFlowLogo from '../../assets/images/DevFlowLogo.png';
import { Ionicons } from '@expo/vector-icons';

const HeaderApp = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={DevFlowLogo} style={styles.logo} resizeMode="contain" />
      
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chatbubble-outline" size={24} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.profilePic}>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  iconButton: {
    marginLeft: 20,
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 800
  },
  profilePic: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 50
  }
});

export default HeaderApp;
