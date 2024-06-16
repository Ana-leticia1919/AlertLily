import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import Topo from "../components/topo";
import Conteudo from "../components/conteudo";

function SobreNosList(props){
    return(
        <View style={styles.container}>
            <Topo style={styles.t1}/>
            <Conteudo style={styles.t2}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#E8CDF9",
        // height: "100%",
        // width: "100%",
        flex: 1,
    },
});


export default SobreNosList; 