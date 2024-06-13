import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

function Eslogan(props){
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.eslogan}>{props.title}</Text>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.eslogan}>{props.text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
    },
    wrapper:{
        justifyContent:'center',
        alignItems:"center",
        flexDirection: "row",
        borderColor: "#2B0A88",
        borderBottomWidth:1,
        paddingHorizontal:20,
        margin: 8,
    },
    eslogan:{
        fontSize:18,
        fontWeight:'800',
        color:"#2B0A88",
    },
});

export default Eslogan;