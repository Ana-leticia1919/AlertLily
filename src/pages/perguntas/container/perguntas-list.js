import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import {useNavigation} from "@react-navigation/native";

function PerguntasList(props){

    const navigation = useNavigation();

    return(
        <ImageBackground source={require('../icones/plano-de-fundo.png')} style={styles.container}>
            <Animatable.View style={styles.wrapper} animation={"fadeInUp"} duration={1000}>

                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("SobreNos")}>
                    <Text style={styles.textBtn}>Sobre nós</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={props.onPress}>
                    <Text style={styles.textBtn}>Ajuda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnG} onPress={props.onPress}>
                    <Text style={styles.textBtn}>Iniciar configurações</Text>
                </TouchableOpacity>
            </Animatable.View>

            <Animatable.Image source={require('../icones/logo.png')} style={styles.logo} animation={"fadeInDown"} duration={1000}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        //flex: 1,
        height: 900,
        paddingTop: 95, 
    },
    wrapper:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#F6F2FF",
        height: 355,
        width: 273,
        borderWidth: 5,
        borderColor: "#A081F8",
        borderRadius: 20,
        paddingTop: 140,
    },
    logo:{
        height: 148,
        width: 178,
        position: 'absolute',
        top: 240,
    },
    btn:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#510A88",
        borderRadius: 100,
        height: 48,
        width: 196,
        flexDirection: "row",
        margin: 15,
    },
    btnG:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#510A88",
        borderRadius: 100,
        height: 48,
        width: 232,
        flexDirection: "row",
        margin: 15,
        marginBottom: 130,
    },
    textBtn:{
        fontSize: 16,
        color: "#fff",
    },
});

export default PerguntasList;