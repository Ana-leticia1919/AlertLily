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
import Conteudo from "../components/conteudo";

function AjudaList(props){
    return(
        <Layout>
            <View style={styles.container}>
                <ScrollView horizontal style={styles.scroll}>
                    <Conteudo
                        title="Alerte que está em perigo aos seus contatos!"
                        img={require("../icones/image1.png")}
                        text="Ao apertar seu botão de conexão Bluetooth, seus contatos de emergência serão acionados e receberão uma mensgem de alerta."
                        style={{marginLeft: 10,}}
                    />
                    <Conteudo
                        title="Tenha pessoas de confiança como contato de emergência para qualquer situação!"
                        img={require("../icones/image2.png")}
                        text="Adicione um contato para que ele acompanhe sua jornada e lhe proporcione mais segurança."
                    />
                    <Conteudo
                        title="O GPS de emergência é um sistema de localização que permite aos usuários enviar sinais de socorro em situações de emergência!"
                        img={require("../icones/image3.png")}
                        text="Ao acionar o GPS de emergência, as informações de localização são transmitidas para seus contatos pré-estabelecidos, agilizando a resposta em situações de perigo."
                    />
                    <Conteudo
                        title="Crie o seu perfil, apenas seus contatos de confiança terão acesso"
                        img={require("../icones/image4.png")}
                        text="Adicione informações ao seu perfil para casos de emergência, você pode alterar a todo momento."
                    />
                </ScrollView>
                <View style={styles.teste}>

                </View>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    scroll:{
        width: "100%",
    },
})

export default AjudaList;