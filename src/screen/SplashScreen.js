import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import SplashImg from '../../assets/splash.png';

function SplashScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={SplashImg} /> 
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SplashScreen;  