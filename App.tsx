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


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };



  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Feed">
          <Drawer.Screen name="ProductsContainer" component={ProductsContainer} options={{ title: 'Products' }} />
          <Drawer.Screen name="Favourite" component={FavouritePage} />
          <Drawer.Screen name="Cart" component={CartPage} />
        </Drawer.Navigator>
      </NavigationContainer>

    );

    const Stack = createNativeStackNavigator();

    const ProductsContainer = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductsPage} options={{ headerShown: false }} />
          <Stack.Screen name="Product" component={ProductPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      );
    }
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
