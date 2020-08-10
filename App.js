import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { SplashScreen, Linking } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import useLinking from './navigation/useLinking';
import { RootNavigator } from './navigation/RootNavigator';

// Redux Store
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './store/reducers'
import thunk from 'redux-thunk'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

const prefix = Linking.makeUrl('/');

function FakeHome({navigation}) {
  return(
    <SafeAreaView>
      <Text onPress={() => navigation.navigate("Details")}> This is a fake Home </Text>
    </SafeAreaView>
  )
}

function FakeDetailsScreen({navigation}) {
  return(
    <SafeAreaView>
      <Text onPress={() => navigation.goBack()}> This is a fake Details </Text>
    </SafeAreaView>
  )
}


const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: "/",
        Details: {
          path: "details/:token",
        }
      }
    }
  }

  console.log("PREFIX", prefix);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {/* <NavigationContainer
            linking={linking}
            fallback={<Text>Loading...</Text>}
          >

          </NavigationContainer> */}
          <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
            {/* <RootNavigator/> */}
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={FakeHome} />
              <Stack.Screen name="Details" component={FakeDetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
