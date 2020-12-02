import * as React from 'react'
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native'
import { RootNavigator } from './navigation/RootNavigator'

// Redux Store
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './store/reducers'
import thunk from 'redux-thunk'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)

function FakeHome({ navigation }) {
    return (
        <SafeAreaView>
            <Text onPress={() => navigation.navigate('Details', {
                detail_id: 1
            })}> This is a fake Home </Text>
        </SafeAreaView>
    )
}

function FakeDetailsScreen({ route, navigation }) {
    const { detail_id } = route.params
    return (
        <SafeAreaView>
            <Text onPress={() => navigation.goBack()}> This is a fake Details {detail_id} </Text>
        </SafeAreaView>
    )
}


const Stack = createStackNavigator()

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false)
    const linking = {
        prefixes: ['foodklore.app://', 'https://foodklore.app', 'https://www.foodklore.app'],
        config: {
            screens: {
                Home: {
                    screens: {
                        BottomHome: {
                            screens: {
                                Account: 'account/'
                            }
                        }
                    }
                },
                ConfirmAccount: {
                    path: 'validate/:entity/:token',
                }
            }
        }
    }

    return (
        <Provider store={store}>
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
                    <RootNavigator />
                </NavigationContainer>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
