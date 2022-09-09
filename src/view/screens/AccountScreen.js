import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, SafeAreaView, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import { MaterialIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';


const AccountScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 10, backgroundColor: 'white' }}>
            <View>
                <StatusBar backgroundColor={'white'} barStyle="dark-content" />
            </View>

            <View style={style.header}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()} >
                    <MaterialIcons name="arrow-back" size={28} />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={{ alignItems: 'center', marginTop: 50 }}>
                    <TouchableOpacity style={{ borderRadius: 50 }} activeOpacity={0.5}>
                        <Image
                            source={require('../../images/img2.jpg')}
                            style={{ width: 100, height: 100, borderRadius: 50 }}
                        />
                    </TouchableOpacity>
                    <View style={{ marginTop: 10, alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Ghritak Jyoti Kalita</Text>
                        <Text style={{ fontSize: 12, marginTop: 7 }}>ghritakjyotikalita@gmail.com</Text>
                        <Text style={{ fontSize: 12, marginTop: 7 }}>+91 7002031369</Text>
                        <TouchableOpacity style={{ marginBottom: 20, flexDirection: 'row', backgroundColor: '#eceef0', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5, marginTop: 12 }}>
                            <Text style={{ fontSize: 12 }}>EDIT PROFILE</Text>
                            <MaterialIcons size={15} style={{ justifyContent: 'center', marginLeft: 3 }} name='edit' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: '#eceef0', marginHorizontal: 20, marginBottom: 5, borderRadius: 10 }} activeOpacity={0.5}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 70 }}>
                            <View style={{ justifyContent: 'center', width: 80, alignItems: 'center' }}>
                                <Octicons name='package-dependents' size={35} />
                            </View>
                            <View style={{ justifyContent: 'center', width: '60%' }}>
                                <Text style={{ fontWeight: 'bold', marginBottom: 3 }}>Orders</Text>
                                <Text style={{ color: '#808080' }}>Check order status</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginLeft: 10 }}>
                                <MaterialIcons name='arrow-forward-ios' size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#eceef0', marginHorizontal: 20, marginBottom: 5, borderRadius: 10 }} activeOpacity={0.5}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 70 }}>
                            <View style={{ justifyContent: 'center', width: 80, alignItems: 'center' }}>
                                <MaterialIcons name='call' size={35} />
                            </View>
                            <View style={{ justifyContent: 'center', width: '60%' }}>
                                <Text style={{ fontWeight: 'bold', marginBottom: 3 }}>Customer Care</Text>
                                <Text style={{ color: '#808080' }}>Contact regarding your order</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginLeft: 10 }}>
                                <MaterialIcons name='arrow-forward-ios' size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#eceef0', marginHorizontal: 20, marginBottom: 5, borderRadius: 10 }} activeOpacity={0.5}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 70 }}>
                            <View style={{ justifyContent: 'center', width: 80, alignItems: 'center' }}>
                                <MaterialIcons name='edit-location' size={35} />
                            </View>
                            <View style={{ justifyContent: 'center', width: '60%' }}>
                                <Text style={{ fontWeight: 'bold', marginBottom: 3 }}>Address</Text>
                                <Text style={{ color: '#808080' }}>Edit Addresses</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginLeft: 10 }}>
                                <MaterialIcons name='arrow-forward-ios' size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#eceef0', marginHorizontal: 20, marginBottom: 5, borderRadius: 10 }} activeOpacity={0.5}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 70 }}>
                            <View style={{ justifyContent: 'center', width: 80, alignItems: 'center' }}>
                                <MaterialCommunityIcons name='credit-card-multiple' size={35} />
                            </View>
                            <View style={{ justifyContent: 'center', width: '60%' }}>
                                <Text style={{ fontWeight: 'bold', marginBottom: 3 }}>Saved Cards</Text>
                                <Text style={{ color: '#808080' }}>Add New Card</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginLeft: 10 }}>
                                <MaterialIcons name='arrow-forward-ios' size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#eceef0', marginHorizontal: 20, marginBottom: 5, borderRadius: 10 }} activeOpacity={0.5}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 70 }}>
                            <View style={{ justifyContent: 'center', width: 80, alignItems: 'center' }}>
                                <MaterialIcons name='settings' size={35} />
                            </View>
                            <View style={{ justifyContent: 'center', width: '60%' }}>
                                <Text style={{ fontWeight: 'bold', marginBottom: 3 }}>Settings</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginLeft: 10 }}>
                                <MaterialIcons name='arrow-forward-ios' size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 40, marginTop: 40, alignItems: 'center' }}>
                    <Button onPress={() => navigation.navigate('LogIn')} title='Log Out' buttonStyle={{ backgroundColor: '#000', color: 'black', height: 50, borderRadius: 10 }} containerStyle={{ width: '70%' }} />
                </View>

                <View style={{ marginBottom: 100, alignItems: 'center' }}>
                    <Text>App Version : 1.0.0</Text>
                </View>
            </ScrollView>

            <View style={{}} activeOpacity={0.8}>
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: "#eeeeee", justifyContent: 'center', borderTopLeftRadius: 50, borderTopRightRadius: 50, padding: 15, marginHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ paddingHorizontal: 20 }}>
                            <MaterialIcons name='home' color='black' size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingHorizontal: 20 }}>
                            <MaterialIcons name='search' color='black' size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Bookmark')} style={{ paddingHorizontal: 20 }}>
                            <MaterialIcons name='bookmark' color='black' size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{ paddingHorizontal: 20 }}>
                            <MaterialIcons name='person' color='grey' size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default AccountScreen;