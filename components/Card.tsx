import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, {backgroundColor: "red"}]}>
        <Text style={styles.textStyle}>Red</Text>
      </View>
      <View style={[styles.card, {backgroundColor: "blue"}]}>
        <Text style={styles.textStyle}>Blue</Text>
      </View>
      <View style={[styles.card, {backgroundColor: 'green'}]}>
        <Text style={styles.textStyle}>Green</Text>
      </View>
    </View>
  );
}

export default Card

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#000',
    margin: 8,
    borderRadius: 5
  },
  textStyle: {
    fontWeight: "bold",
    color: '#000'
  }
});