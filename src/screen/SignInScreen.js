import * as React from 'react';
import { useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LoginKey from '@material-ui/icons/VpnKey';
import LogoTitle from '../components/LogoTitle';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
    },
    primary: {
        backgroundColor: '#b4232e',
    }
  }));

  
function SignInScreen({ navigation, route  }) {

    const classes = useStyles();

    navigation.setOptions({ 
            headerShown: false
        });

    const [inputEmail, setEmail] = useState(''); 
    const [error, setError] = React.useState(false);   

    const signInApp = (e) => {
        e.preventDefault();
        if(inputEmail == null || inputEmail.length < 5){
            setError(true);
        }
        if(inputEmail.indexOf('@') === -1){
            setError(true);
        }
        else{
            navigation.navigate('Home', { email: inputEmail })     
        }
        
    };

    return (
        <View style={styles.container}>
            <LogoTitle />
            <Text style={styles.heading}>Login!</Text>

            <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}
                >
                <FormControl component="fieldset" style={{ marginBottom: "10px", width: "70%" }} error={error}>
                    <TextField id="outlined-email" label="Email Address" type="email" variant="outlined" fullWidth onChange={e => setEmail(e.target.value)} error={error}  />
                </FormControl>
                <TouchableOpacity onPress={signInApp} >
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<LoginKey />}
                    >
                        Login
                    </Button>
                </TouchableOpacity>
            </Grid>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto'
    },
    heading: {
        fontSize: "2rem",
        marginBottom: "20px",
        fontWeight: "bold"
    },
    error:{

    }
});

export default SignInScreen;  