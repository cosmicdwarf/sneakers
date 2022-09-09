import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import HomeScreen from './src/view/screens/HomeScreen';
import DetailsSceeen from './src/view/screens/DetailsScreen';
import BagScreen from './src/view/screens/BagScreen';
import AccountScreen from './src/view/screens/AccountScreen';
import BookmarkScreen from './src/view/screens/BookmarkScreen';
import LogIn from './src/view/screens/LogIn';
import { StatusBar } from 'react-native';

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor={'white'} />
            <Stack.Navigator screenOptions={{ header: () => null }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsSceeen} />
                <Stack.Screen name="Bag" component={BagScreen} />
                <Stack.Screen name="Account" component={AccountScreen} />
                <Stack.Screen name="Bookmark" component={BookmarkScreen} />
                <Stack.Screen name="LogIn" component={LogIn} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;