import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';//desintalar essa biblioteca.
import {useNavigation} from "@react-navigation/native";

function Topo(props){

    const navigation = useNavigation();

    return(
        <ImageBackground source={require("../icones/elipse.png")} style={styles.container} >
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Perguntas")}>
                    <Image source={require("../icones/seta-esquerda.png")} style={styles.seta}/>
                    <Text style={styles.linkText}>INICIO</Text>
                </TouchableOpacity>

                <Image source={require("../icones/logo.png")} style={styles.logo}/>
            </View>
            
            <View style={styles.wrapperTitle}>
                <Text style={styles.title}>O QUE É O ALERT LILY?</Text>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "46%",
        position: "absolute",
        
    },
    wrapper:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 20,
    },
    link:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    seta:{
        width: 35,
        height: 35,
    },
    linkText:{
        fontSize: 15,
        color: "#510A88",
        fontWeight: "100",
    },
    logo:{
        width: 66,
        height: 56,
    },
    wrapperTitle:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    title:{
        fontSize: 25,
        fontWeight: "bold",
        color: "#F1E7FF",
    },
});


export default Topo; 