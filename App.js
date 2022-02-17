import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Search from './components/Search';
import { WHITE, CHARCOAL } from './colors';

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: CHARCOAL, flex: 1 }}>
      <StatusBar style="light" />
      <View style={styles.container} backgroundColor={WHITE}>
        <Search style={{ flex: 1 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    flex: 1
  },
});
