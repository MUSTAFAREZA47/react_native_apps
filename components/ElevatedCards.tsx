import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => (
    <ScrollView horizontal style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.textStyle}>Please</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.textStyle}>Scroll</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.textStyle}>Me</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.textStyle}>More...</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.textStyle}>And</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.textStyle}>More...</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.textStyle}>😉</Text>
        </View>
    </ScrollView>
)

export default ElevatedCards

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'aqua',
    margin: 8,
    borderRadius: 5,
    elevation: 4,
    shadowColor: 'grey',
    shadowOffset: {
        width: 1,
        height: 1
    },
    shadowOpacity: 0.5

  },
  textStyle: {
    fontWeight: 'bold',
    color: '#000',
  },
});