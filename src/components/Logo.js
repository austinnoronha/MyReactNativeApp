import * as React from 'react';
import { View, Text, Image } from 'react-native';
import LogoImg from '../../assets/icon.png';

function Logo() {
  return (
    <Image
      style={{ width: 35, height: 35 }}
      source={LogoImg}
    />
  );
}

export default Logo;