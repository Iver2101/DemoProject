import {

    StyleSheet,
    Text,
    View,
    Button,
  } from 'react-native';
    import React, { useState } from 'react';
  
const Counter = (props) => {
    const [count, setCount] = useState(0);
    
    const handleClick = () => {
        setCount(count + 1);
        props.func();
    }


    return (
        <View style={styles.container}>
            <Text>Name: {props.text}</Text>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={handleClick} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

 
export default Counter;