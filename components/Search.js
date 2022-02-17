import React from 'react';
import { Image, StyleSheet, View, TextInput, ScrollView, Text } from 'react-native';

import List from './List';
import { CORNLIGHT, BLACK, CHARCOAL } from '../colors';
import Logo from '../assets/logo.png';

export default function Search() {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <Image source={Logo} style={{ width: 60, height: 60 }} />
          <Text style={styles.title}>Taco Me Voy!</Text>
        </View>
        <TextInput
          style={styles.container}
          onChangeText={text => onChangeText(text)}
          placeholder="Busque pelo nome do alimento"
          value={value}
        />
      </View>
      <ScrollView>
        <List search={value} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: CHARCOAL,
    paddingHorizontal: 8,
  },
  wrapper: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  container: {
    height: 50,
    backgroundColor: CORNLIGHT,
    paddingHorizontal: 16,
    borderRadius: 5,
    color: BLACK,
    fontSize: 16,
  },
});
