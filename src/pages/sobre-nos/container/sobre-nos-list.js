import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import Topo from "../components/topo";

function SobreNosList(props){
    return(
        <View style={styles.container}>
            <Topo/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#E8CDF9",
        height: "100%",
        width: "100%",
    },
});


export default SobreNosList; 