import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const BackgroundChange = () => {
  const [backgroundColor, setBackgroundColor] = useState('yellow');

  const generateRandomColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    console.log(color);

    setBackgroundColor(color);
  };

  return (
    <>
      {/* <StatusBar backgroundColor={backgroundColor} /> */}
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <TouchableOpacity onPress={generateRandomColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.textBtn}>Change Color</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BackgroundChange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: 500,
  },
  actionBtn: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 2,
  },
  textBtn: {
    fontSize: 14,
  },
});
