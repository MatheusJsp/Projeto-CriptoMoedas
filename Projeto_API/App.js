import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/screens/Home';

export default function App() {

  return (
    <>
      <StatusBar backgroundColor="#2F48D4" barStyle="light-content" />
      <Home />
    </>
  );
   
}