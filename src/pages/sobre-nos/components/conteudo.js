import React, {useState} from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from "react-native";

function Conteudo(props){
  
      return (
        <View style={styles.container}>
      <ScrollView style={styles.teste}>
        <View style={styles.wrapper}>
            <Text style={styles.text}>O Alert Lily é um projeto que busca garantir segurança e conforto em todos os momentos. Diariamente, quase 51 mil mulheres sofrerem violência no Brasil, o objetivo é que esses números diminuam, fazendo com mulheres se sintam tranquilas e confiantes ao sair de casa. </Text>
        </View>
        
        <View style={styles.wrapper}>
            <Text style={styles.text}>O nome "Alert Lily" foi escolhido com a intenção de representar o projeto, alert para representar o estado alerta da aplicação, e Lily que significa Lírio, buscando representar sempre da maneira mais suave a feminilidade e a força. O projeto tem a ideia de com apenas um toque, proteger a mulher que se encontra em situação de vulnerabilidade, buscando clareza, visibilidade e objetividade. O projeto se iniciou com a proposta de um professor que trouxe à tona a ideia de um botão do pânico, um dispositivo físico, utilizado por mulheres em situações de perigo. Esse é o Alert Lily, um aplicativo desenvolvido por mulheres, para mulheres</Text>
        </View>
        
        {/* <View></View> */}
      </ScrollView>
    </View>
      );
}

const styles = StyleSheet.create({
    container:{
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       flex: 1,
       top:"21%",
    },
    wrapper:{
       margin: 20,
    },
    
    text:{
       color: "#2B0A88",
       fontSize: 20,
    },
    teste:{
        padding: 10,
        marginBottom: "45%",
    },
});

export default Conteudo;