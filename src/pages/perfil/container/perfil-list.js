import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import NavBarBottom from "../../../routes/nav-bar-bottom";


function PerfilList(props){
    return(
        <View>
            <Text style={styles.text}>Perfil</Text>

            {/* <NavBarBottom/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       justifyContent: "center",
       alignItems: "center",
    },
    text:{
        color: "#3B0056",
        fontSize: 20,
     },
});

export default PerfilList;
