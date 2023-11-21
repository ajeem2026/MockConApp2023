//Simple placeholder code for each screen
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Image
          source={require('../assets/icons/map.png')}
          style={styles.mapImage}
        />
      </View>
      <View style={styles.legendContainer}>
          <Text style={styles.legendText}>Legend</Text>
        </View>
      <View style={styles.HeaderParent}>
        <View style={styles.HeaderTop}>
          <Text style={styles.HeaderTopText}>MAP</Text>
        </View>
      </View>
      <Text> Map Screen </Text>
      <Button
        title="Click Here"
        onPress={() => alert("Button Clicked!")}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  //this StyleSheet is for Click Button in the middle
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'
  },

  // mapContainer: {
  //   backgroundColor: 'white', // Set the background color to white
  //   borderRadius: 10, // Add borderRadius or any other styling you want
  //   overflow: 'hidden', // Ensure that the border-radius works as expected
  // },

  // mapImage: {
  //   position: 'absolute',
  //   top: '10%', // Adjust this to center vertically
  //   left: '10%', // Adjust this to center horizontally
  //   width: '80%', // Set the desired width (you can use a percentage or a specific value)
  //   height: '20%', // Set the desired height
  //   resizeMode: 'contain', // Adjust the resizeMode property if needed
  // },

  mapContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    top: '-15%', // Adjust this to center vertically
    width: '80%', // Set the desired width for the container
    height: '40%', // Set the desired height for the container
  },

  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  legendContainer: {
    top: '-13%',
    marginLeft: -275, // Adjust this value for spacing between the legend and mapContainer
  },

  legendText: {
    fontSize: 30,
    fontFamily: "Inter",
    fontWeight: 100,
    textAlign: "left",
    color: "#7A0202",
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