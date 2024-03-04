import React from 'react';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import Navigation from './screens/Navigation';

enableScreens();


const App = () => {
  return <Navigation />;
};

export default App;
