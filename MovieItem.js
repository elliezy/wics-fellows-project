import React from 'react';
import { Text, TextInput, View, StyleSheet, Dimensions, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MovieItem = ({name, imageURL, bannerURL, description }) => {
    const navigation = useNavigation();
    return (
    <Pressable onPress={() => navigation.navigate('ScreenOne', {name: name, bannerURL: bannerURL, description: description})} style={styles.item}>
        <View style={styles.imageView}>
            <Image style={styles.image} source={{uri: imageURL}}/>
        </View>
        <View style={styles.info}>
            <Text style={styles.title}>{name}</Text>
            <Text numberOfLines={6} style={styles.text}>{description}</Text>
        </View>
      
    </Pressable>
  );
}

export default MovieItem;

const styles = StyleSheet.create({
    item: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        // justifyContent: "center",
        // alignItems: "center",
        width: Dimensions.get('window').width,
        marginBottom: "3%",
        paddingLeft: "1%",
        paddingRight: "1%",
    },
    image: {
        width: 80,
        height: 120,
        margin: 5,
        display: "flex",
        resizeMode: "contain",
        flex: 1,
        marginLeft: "3%",
        marginRight: "3%",
    },
    imageView: {
        display: "flex",
        flex: 1,
    },
    text: {
        color: "white",
        fontSize: 11,
        // fontFamily: "AvenirNext-Regular"
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: "1%",
    },
    info: {
        display: "flex",
        flex: 3,
    }

});