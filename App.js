import React from 'react';
import {StatusBar} from 'react-native'
import Routes from './src/routes';
import {COLORS} from './src/constants';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={COLORS.lightGray3}
        barStyle='dark-content'
      />
      <Routes/>
    </>
  );
}