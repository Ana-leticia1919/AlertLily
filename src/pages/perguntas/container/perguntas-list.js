import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    
} from "react-native";

function PerguntasList(props){
    return(
        <ImageBackground source={require('../icones/plano-de-fundo.png')} style={styles.container}>
            <View style={styles.wrapper}>
            
                <Image source={require('../icones/logo.png')} style={styles.logo}/>

                <TouchableOpacity style={styles.btn} onPress={props.onPress}>
                    <Text style={styles.textBtn}>Sobre nós</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={props.onPress}>
                    <Text style={styles.textBtn}>Ajuda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnG} onPress={props.onPress}>
                    <Text style={styles.textBtn}>Iniciar configurações</Text>
                </TouchableOpacity>
            </View>
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
    },
    logo:{
        height: 148,
        width: 178,
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