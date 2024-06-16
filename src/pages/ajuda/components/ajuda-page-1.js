import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
} from "react-native";

function Page1(props){
    return(
            <View style={styles.container}>

                <View style={styles.wrapperTitle}>
                    <Text style={styles.title}>
                    Alerte que está em perigo aos seus contatos!
                    </Text>
                </View>
                
                <View style={styles.wrapperImg}>
                    <Image style={styles.img} source={require("../icones/image1.png")} />
                </View>

                <View style={styles.wrapperText}>
                    <Text style={styles.text}>
                    Ao apertar seu botão de conexão Bluetooth, seus contatos de emergência serão acionados e receberão uma mensgem de alerta.
                    </Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
    },
    wrapperTitle:{
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    title:{
        color:"#510A88",
        fontWeight: "800",
        fontSize: 20,
        textAlign: "center",
    },
    wrapperImg:{
       margin: 10,     
    },
    img:{
        width: 412,
        height: 420    
    },
    wrapperText:{
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    text:{
        color:"#510A88",
        fontWeight: "400",
        fontSize: 18,
        textAlign: "center",
    },
});

export default Page1;