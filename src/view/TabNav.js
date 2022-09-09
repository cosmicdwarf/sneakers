import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "./screens/HomeScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import AccountScreen from "./screens/AccountScreen";

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen
    },
    Bookmark: {
        screen: BookmarkScreen
    },
    Account: {
        screen: AccountScreen
    }
});

export default TabNavigator;