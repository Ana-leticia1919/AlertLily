import React from "react";
import {
    View,
    Image,
    Text,
    FlatList,
    StyleSheet,
    ScrollView,
} from "react-native";
import Layout from '../components/ajuda-list-layout';
import Page1 from "../components/ajuda-page-1";
import Page2 from "../components/ajuda-page-2";
import Page3 from "../components/ajuda-page-3";
import Page4 from "../components/ajuda-page-4";

function AjudaList(props){
    return(
        <Layout>
            <View style={{ flex: 1 }}>
                <ScrollView horizontal>
                <Page1/>
                
                </ScrollView>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    tudo:{
        

    },
    
    boneca1:{
        width:"100%",
        marginTop: 100
    },
    texto:{
        color:"#510A88",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 0
        
    }






})

export default AjudaList;