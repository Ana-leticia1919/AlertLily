import React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import {useNavigation} from "@react-navigation/native";


function Link(props){
    
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
    },
    text:{
        color: "#A081F8",
        fontSize: 10,
        margin: 10,
        marginBottom: 20,
    },
});

export default Link;