import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '@material-ui/core';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


function HelpScreen({ navigation, route  }) {
    return (
        <View style={styles.container}>

            <Text>Help Screen....</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Home') } >
                <Button variant="contained" color="secondary">
                    &laquo; Back to homepage
                </Button>
            </TouchableOpacity>
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

export default HelpScreen;  