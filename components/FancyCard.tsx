import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/98/3c/08/983c08218c2290800f22f1688eb5086d.jpg',
            }}
            alt='manali'
            style={styles.image}
          />
        </View>
        <Text style={{fontSize: 16, fontWeight: 'bold', fontFamily: 'helvetica', color: 'blue'}}>Location: Manali</Text>
        <Text>
          Description: Manali is a picturesque hill station nestled in the
          northern Indian state of Himachal Pradesh, known for its stunning
          natural beauty. Surrounded by snow-capped Himalayan peaks, lush green
          valleys, and flowing rivers, it is a popular destination for adventure
          seekers and nature lovers. Manali offers activities like trekking,
          skiing, paragliding, and river rafting, along with serene spots such
          as Solang Valley, Rohtang Pass, and the Beas River. Its charming
          villages, vibrant markets, and ancient temples, like Hidimba Devi
          Temple, add to its appeal as a perfect getaway.
        </Text>
        <Button
          title="Read More"
          onPress={() => Alert.alert('I am working now...')}
        />
      </View>
    </View>
  );
}

export default FancyCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        margin: 8,
        rowGap: 5,
        borderRadius: 4
    },
    image: {
        height: 400,
        width: 'auto',
        borderRadius: 5
    }
})