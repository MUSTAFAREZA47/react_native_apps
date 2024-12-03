import { View, Text, ScrollView, StyleSheet } from 'react-native'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import React from 'react'
import Card from './components/Card';
import ElevatedCards from './components/ElevatedCards';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.background}>
        <ScrollView>
          <Text style={styles.headingText}>Flat Card</Text>
          <Card />
          <Text style={styles.headingText}>Elevated Card</Text>
          <ElevatedCards />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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