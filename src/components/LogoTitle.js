import * as React from 'react';
import { View, Text, Image } from 'react-native';
import Avatar from '@material-ui/core/Avatar';
import LogoImg from '../../assets/icon.png';

function LogoTitle() {
    return (
        
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom:"30px" }}>
            <Avatar style={{ width: 100, height: 100, backgroundColor: '#f9d33d' }}>
                <Image
                    style={{ width: 60, height: 60 }}
                    source={LogoImg}
                    />
            </Avatar>
        </View>
    );
}

export default LogoTitle;