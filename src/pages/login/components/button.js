import React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import {useNavigation} from "@react-navigation/native";


function Button(props){
    
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.wrapper} onPress={ () => navigation.navigate(props.link)}>
                <Text style={styles.text}>{props.text}</Text>
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
        height: 48,
        width: 196,
        marginBottom: 20,
        marginTop: 10,
    },
    text:{
        fontSize: 18,
        color: "#F6F2FF",
        fontWeight: "bold",
    },
});

export default Button;