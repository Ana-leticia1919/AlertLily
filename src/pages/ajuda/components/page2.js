import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
} from "react-native";

function Page2(props){
    return(
            <View style={styles.container}>

                <View style={styles.wrapperTitle}>
                    <Text style={styles.title}>
                    {props.title}
                    </Text>
                </View>
                
                <View style={styles.wrapperImg}>
                    <Image style={styles.img} source={props.img} />
                </View>

                <View style={styles.wrapperText}>
                    <Text style={styles.text}>
                    {props.text}
                    </Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 50,
    },
    wrapperTitle:{
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        paddingBottom:0,
    },
    title:{
        color:"#510A88",
        fontWeight: "800",
        fontSize: 20,
        textAlign: "center",
    },
    wrapperImg:{
       margin: 0,
       position: "relative",     
    },
    img:{
        width: 390,
        height: 350,    
        position: "relative",
    },
    wrapperText:{
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        paddingTop: 0,
    },
    text:{
        color:"#510A88",
        fontWeight: "500",
        fontSize: 18,
        textAlign: "center",
    },
});

export default Page2;