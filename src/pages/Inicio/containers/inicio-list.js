import React from "react";
import {
    View,
    Text,
    FlatList,
} from "react-native";
import Layout from "../components/inicio-list-layout";
import Eslogan from "../components/eslogan";
import Button from "../components/button";

function InicioList(props){
    return(
        <Layout title="Seja bem vindo!" >
            <Eslogan title="Segurança em cada passo" text="confiança em cada escolha."/>
            <Button/>
        </Layout> 
    );
}


export default InicioList; 