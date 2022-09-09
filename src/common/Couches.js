import React from 'react';
import {Text,View,Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import products from '../products';

export default class Couches extends React.Component{
    render(){
        return(

            <TouchableOpacity
             activeOpacity={0.5}
             onPress={this.props.onPress}
             style={{marginTop:30, backgroundColor:"#FFF", height:250, width:200, elevation:2, borderRadius:10, padding:15, marginRight:10, marginBottom:5}}>
                <Image
                    source={this.props.src}
                    style={{width:170, height:140, borderRadius:10}}
                />
                <View style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
                    <Text style={{fontWeight:"bold", color:"#4f4a4a", fontSize:12}}>
                        {this.props.name}
                    </Text>
                    <View style={{height:4, width:4, borderRadius:4, backgroundColor:"red", marginHorizontal:4}}></View>
                    <Text style={{color:"red", fontSize:9, fontWeight:"bold"}}>
                        New
                    </Text>
                </View>

                 <View style={{flexDirection:"row", marginTop:5, alignItems:"center", width:"100%"}}>
                    <View style={{width:"80%"}}>
                        <Text style={{fontSize:15, fontWeight:"bold"}}>
                            {this.props.price} {'\u20B9'}
                        </Text>
                    </View>
                    <View style={{width:"20%"}}>
                        <Image
                            source={require('../images/add.png')}
                            style={{alignSelf:"flex-end", width:25, height:25, marginRight:10}}
                        />
                    </View>
                </View>

            </TouchableOpacity>
        );
    }
}
