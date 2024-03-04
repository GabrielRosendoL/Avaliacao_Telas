import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Feed = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const isTabActive = (tabName) => {
    return activeTab === tabName;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-Vindo a Página Inicial</Text>
      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => handleTabPress('home')}
          style={[styles.iconContainer, isTabActive('home') && styles.activeTab]}
        >
          <Icon name="home" size={25} color={isTabActive('home') ? 'white' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress('search')}
          style={[styles.iconContainer, isTabActive('search') && styles.activeTab]}
        >
          <Icon name="search" size={25} color={isTabActive('search') ? 'white' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress('book')}
          style={[styles.iconContainer, isTabActive('book') && styles.activeTab]}
        >
          <Icon name="book" size={25} color={isTabActive('book') ? 'white' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress('group')}
          style={[styles.iconContainer, isTabActive('group') && styles.activeTab]}
        >
          <Icon name="group" size={25} color={isTabActive('group') ? 'white' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress('user')}
          style={[styles.iconContainer, isTabActive('user') && styles.activeTab]}
        >
          <Icon name="user" size={25} color={isTabActive('user') ? 'white' : 'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Nunito',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#2AE45B',
  },
  iconContainer: {
    alignItems: 'center',
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: 'black',
    borderRadius: 30,
    padding: 5,
  },
});

export default Feed;
