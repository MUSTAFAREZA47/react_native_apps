import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {

    const contactList = [
      {
        uid: 1,
        name: 'Person 01',
        text: 'I love Coding and Tech',
        avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
      },
      {
        uid: 2,
        name: 'Person 02',
        text: 'Open-source enthusiast',
        avatar: 'https://avatars.githubusercontent.com/u/2?v=4',
      },
      {
        uid: 3,
        name: 'Person 03',
        text: 'JavaScript is life',
        avatar: 'https://avatars.githubusercontent.com/u/3?v=4',
      },
      {
        uid: 4,
        name: 'Person 04',
        text: 'Cloud Computing Advocate',
        avatar: 'https://avatars.githubusercontent.com/u/4?v=4',
      },
      {
        uid: 5,
        name: 'Person 05',
        text: 'Passionate about AI and ML',
        avatar: 'https://avatars.githubusercontent.com/u/5?v=4',
      },
    ];

  return (
    <View style={styles.container}>
      
        {contactList.map(({uid, name, text, avatar}) => (
            <View style={styles.box} key={uid}>
                <Image 
                    source={{
                        uri: avatar
                    }}
                    style={styles.image}
                />
                <View style={styles.insideBox}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subTitle}>{text}</Text>
                </View>

            </View>
        ))}
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
  container: {
    margin: 8
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'lightgreen',
    padding: 10
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 60/2
  },
  insideBox: {
    marginHorizontal: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'semibold'
  },
  subTitle: {
    fontStyle: 'italic'
  }
});