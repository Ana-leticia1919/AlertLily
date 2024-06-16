import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {useNavigation} from "@react-navigation/native";


function AjudaListLayout(props){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
           <View style={styles.navbar}>
           <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Perguntas")}>
                    <Image source={require("../icones/seta-esquerda.png")} style={styles.seta}/>
                    <Text style={styles.texto}>INICIO</Text>
            </TouchableOpacity>
                
                <Image style={styles.tracos} source={require('../icones/tres-barras.png')} />
           </View>
           {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#F8FEFE",
        flex: 1,
        // height: "100%",
    },
    navbar:{
        backgroundColor: "#C198F6",
        height: 69,
        width: "100%",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    texto:{
        marginLeft: 10,
        fontSize: 15,
        color: "#510A88",
        fontWeight: "300",
        marginTop: 20,
    },
    seta:{
        justifyContent: "center",
        width: 20,
        height: 15,
        marginTop: 25,
        marginLeft: 15,
        marginRight: 0,
        flexDirection: "row",
    },
    tracos:{
        justifyContent: "center",
        width: 20,
        marginTop: 25,
        marginRight: 20,
    },
    link:{
        flexDirection: "row",
        justifyContent: "center",
    },
});

export default AjudaListLayout;