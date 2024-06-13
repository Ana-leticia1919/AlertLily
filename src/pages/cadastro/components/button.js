import React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";


function Button(props){
    

    return(
        <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
                <Text style={styles.text}>ENTRAR</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#510A88",
        borderRadius: 100,
        height: 59,
        width: 233,
        marginVertical: 20,
        marginTop: 20,
        marginBottom:100,
    },
    text:{
        fontSize:20,
        color: "#fff",
    },
});

export default Button;