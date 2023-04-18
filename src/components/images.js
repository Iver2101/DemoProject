import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const RandomImage = props => {
  const [uri, setUri] = useState('');

  useEffect(() => {
    fetchPic();
  }, []);

  const fetchPic = () => {
    fetch('https://picsum.photos/200')
      .then(response => setUri(response.url))
      .catch(error => console.log(error));
  };

  return (
    <>
      <Image source={{uri: uri}} style={styles.image} />
      <TouchableOpacity onPress={fetchPic} style={styles.button}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={fetchPic} onLongPress={() => console.log("first")} style={styles.button}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableHighlight>
      <View style={styles.button}>
        <Button title="Refresh" onPress={fetchPic} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button: {
    backgroundColor: '#3f51b5',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default RandomImage;
