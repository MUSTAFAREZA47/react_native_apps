import { Button, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink : string) {
        Linking.openURL(websiteLink)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title: The Evolution of Data Storage</Text>
      <Text style={styles.subTitle}>
        Subtitle: From File-Based Systems to NoSQL
      </Text>
      <View style={styles.boxImage}>
        <Image
          source={{
            uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1700930628181/88c12417-ac00-42e9-972d-3d9b8757f328.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
          }}
          alt="data-storage"
          style={styles.blogImage}
        />
      </View>
      <Text style={styles.subTitle}>
        Description: In the digital age, data is the new gold. Whether it's
        managing a small business's inventory or handling global-scale
        transactions, databases are the backbone of storing, organizing, and
        retrieving information efficiently. Let's take a deep dive into the
        world of databases, exploring the evolution from file-based systems to
        the modern-day SQL and NoSQL options.
      </Text>
      <TouchableOpacity
        style={styles.link}
        onPress={() =>
          openWebsite(
            'https://ahmedreza.hashnode.dev/the-evolution-of-data-storage',
          )
        }>
        <Text>Read Full Article</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ActionCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    rowGap: 15
  },
  title: {
    fontSize: 18,
    color: 'blue',
  },
  subTitle: {
    fontSize: 12,
  },
  boxImage: {
  },
  blogImage: {
    height: 450,
    width: 'auto',
    borderRadius: 5,
  },
  link: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});