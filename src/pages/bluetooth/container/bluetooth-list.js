import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import NavBarBottom from "../../../routes/nav-bar-bottom";

function BluetoothList(props){
    return(
        <View>
            <Text style={styles.text}>Bluetooth</Text>

            {/* <NavBarBottom/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       
    },
    text:{
        color: "#3B0056",
        fontSize: 20,
     },
});

export default BluetoothList;