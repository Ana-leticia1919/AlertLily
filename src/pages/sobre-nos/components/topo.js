import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

function Topo(props){
    return(
        <View style={styles.container}>
            <LinearGradient colors={['#A060F1', '#693A92', '#510A88']} style={styles.backColor}>
                <Text>Seu conteúdo aqui</Text>
            </LinearGradient>
        </View>

    );
}

const styles = StyleSheet.create({
    backColor:{
        height: 200,
    },
    container:{
        height: 200,
        borderBottomRadius: 300,
    },
});


export default Topo; 