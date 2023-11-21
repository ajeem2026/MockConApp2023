import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const MediaScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.HeaderParent}>
          <View style={styles.HeaderTop}>
            <Text style={styles.HeaderTopText}>MEDIA</Text>
          </View>
        </View>
        <Text> Media Screen </Text>
        <Button
          title="Click Here"
          onPress={() => alert("Button Clicked!")}
        />
      </View>
    );
  };

export default MediaScreen;

const styles= StyleSheet.create({
    //this StyleSheet is for Click Button in the middle
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
    //This styles the upper red portion of the screen
    HeaderParent: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: "23%",
        borderRadius: 0,
        opacity: 1,
        zIndex: -1,
        transform: [
            { translateX: 0 },
            { translateY: 0 },
            { rotate: "0deg" },
        ],
        backgroundColor: "rgba(167,2,2,1)",
    },
    HeaderTop: {
        position: 'absolute',
        width: "100%",
        height: "30%",
        borderBottomColor: "#FFFFFF",
        borderBottomWidth: 0.9,

        opacity: 1,
    },
    HeaderTopText: {
        position: "absolute",
        width: "100%",
        textAlign: "center",
        fontSize: 30,
        color: "#FFFFFF",
        fontWeight: "bold",
        fontFamily: ".SF Compact",
        padding: 10,
    },

    
});


