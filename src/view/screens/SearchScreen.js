import React from "react";
import { View } from "react-native";

const SearchScreen = ({ }) => {
    return (
        <View></View>
    );
};

export default SearchScreen;

export const Home = ({ navigation }) => (
    <ScreenContainer>
        <Text>Master List Screen</Text>
        <Button
            title="React Native by Example"
            onPress={() =>
                navigation.push("Details", { name: "React Native by Example " })
            }
        />
        <Button
            title="React Native School"
            onPress={() =>
                navigation.push("Details", { name: "React Native School" })
            }
        />
        <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
    </ScreenContainer>
);