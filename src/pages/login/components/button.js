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
        marginBottom: 30,
    },
    textBtn:{
        fontSize: 18,
        color: "#fff",
    },
});

export default Button;