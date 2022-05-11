import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

export default function ScreenOne({ route }) {
    const { name, bannerURL, description } = route.params;
    return (
        <View style={styles.screenOne}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{uri: bannerURL}}/>
            </View>
            <View style={styles.textView}>
                <Text style={styles.screenOneText}>{name}</Text>
                <Text style={styles.text}>{description}</Text>
            </View>
            {/* <Button title="Go to ScreenTwo" onPress={() => navigation.navigate('ScreenTwo')}/> */}
        </View>
  );
}

const styles = StyleSheet.create({
  screenOne: {
    flex: 1, 
    alignItems: "flex-start",
    // justifyContent: 'center',
    backgroundColor: 'black',
  },
  screenOneText: {
    fontSize: 32,
    color: 'white',
    // textAlign: 'left'
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  textView: {
    flex: 2,
    // alignItems: "flex-start"
    // justifyContent: 'flex-start'
    // backgroundColor: 'yellow'
    // textAlign: 'left'
  },
  imageView: {
    flex: 1,
    width: "100%",
    marginBottom: "3%",
    // backgroundColor: 'yellow'
  },
  image: {
    width: "100%",
    height: '100%',
    // margin: 5,
    // display: "flex",
    resizeMode: "contain",
    // flex: 1,
    // marginLeft: "3%",
    // marginRight: "3%",
    
},
});