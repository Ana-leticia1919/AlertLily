import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import LogoLayout from "./logo-layout";



function InicioListLayout(props){
    return(
        <View style={styles.container}>
            <LogoLayout iconLogo={require('../icone/logo.png')}/>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>
    );
}
 

const styles = StyleSheet.create({
    container:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#E8CDF9",
        //flex: 1,
        height: 900,
        
    },
    title:{
        fontSize:35,
        fontWeight:'900',
        color: "#2B0A88", 
        marginTop: 10,
    },
});

export default InicioListLayout;