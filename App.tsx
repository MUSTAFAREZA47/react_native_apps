import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Card from './components/Card';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <Text style={styles.headingText}>Main Card</Text>
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
});