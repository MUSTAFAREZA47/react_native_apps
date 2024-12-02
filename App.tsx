import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Card from './components/Card';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App