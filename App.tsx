import { View, Text, ScrollView, StyleSheet } from 'react-native'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import React from 'react'
import Card from './components/Card';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import BackgroundChange from './components/BackgroundChange';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.background}>
        <ScrollView>
          <Text style={styles.headingText}>Flat Card</Text>
          <Card />
          <Text style={styles.headingText}>Elevated Card</Text>
          <ElevatedCards />
          <Text style={styles.headingText}>Fancy Card</Text>
          <FancyCard />
          <Text style={styles.headingText}>Blog Card</Text>
          <ActionCard />
          <Text style={styles.headingText}>Contact List</Text>
          <ContactList />
          <Text style={styles.headingText}>Background Change</Text>
          <BackgroundChange />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
});