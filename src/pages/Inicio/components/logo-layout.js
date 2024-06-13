import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
} from "react-native";
import * as Animatable from "react-native-animatable";

function LogoLayout(props){
    return(
        <View style={styles.wrapper}>
             <Animatable.Image 
                style={styles.logo} 
                source={props.iconLogo}
                animation="flipInY"
             />
        </View>
    );
}


const styles = StyleSheet.create({
    wrapper:{
        paddingHorizontal:20,
        paddingTop: 112,
        alignItems:"center",
        justifyContent:"center",
    },
    logo:{
      height: 315.82,
      width: 282.22,  
    },
});


export default LogoLayout;