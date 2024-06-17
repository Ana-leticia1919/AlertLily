import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
} from "react-native";

function Page3(props){
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
     padding: 10


    },
    img:{
        
        width: 350,
        height: 350,    
        borderWidth: 10,
        borderColor: "#C198F6" ,
        borderRadius: 20,

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

export default Page3;