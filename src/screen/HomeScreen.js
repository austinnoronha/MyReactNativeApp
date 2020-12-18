import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '@material-ui/core';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation, route }) {

    navigation.setOptions({ 
        headerTitle: "Home",
        headerLeft: null
    });

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome {route.params.email}!</Text>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details', { name: 'Jane' }) } >
                <Button variant="contained" color="primary">
                    Go to details page &raquo;
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
    heading: {
        fontSize: "1rem",
        marginBottom: "20px",
        fontWeight: "bold"
    },
});

export default HomeScreen;  