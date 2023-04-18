/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Counters from './src/components/counters';
import RandomImage from './src/components/images';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const [total, setTotal] = React.useState(0);
  const incrementTotal = () => {
    setTotal(total + 1);
  };



return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Counters" component={Counters} />
        <Tab.Screen name="Image" component={RandomImage} />
      </Tab.Navigator>
    </NavigationContainer>
  );


}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
