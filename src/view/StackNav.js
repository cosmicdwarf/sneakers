import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "./screens/DetailsScreen";
import LogIn from "./screens/LogIn";
import BagScreen from "./screens/BagScreen";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Bag" component={BagScreen} />
            <Stack.Screen name="LogIn" component={LogIn} />
        </Stack.Navigator>
    )
}


export default HomeStackNavigator;