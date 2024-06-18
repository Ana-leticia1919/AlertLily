import React from "react";
import {
    View,
    Image,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
} from "react-native";
import Layout from '../components/ajuda-list-layout';
import Page1 from "../components/page1";
import Page2 from "../components/page2";
import Page3 from "../components/page3";
import Page4 from "../components/page4";
import Carousel from "react-native-snap-carousel"

const {width : screenWidth} = Dimensions.get("window");

const dummyData = [
    {
        id: 1,
        titulo: "Alerte que está em perigo aos seus contatos!",
        img: require("../icones/image1.png"),
        texto: "Ao apertar seu botão de conexão Bluetooth, seus contatos de emergência serão acionados e receberão uma mensgem de alerta."
    },
    {
        id: 2,
        titulo: "Tenha pessoas de confiança como contato de emergência para qualquer situação!",
        img: require("../icones/image2.png"),
        texto: "Adicione um contato para que ele acompanhe sua jornada e lhe proporcione mais segurança."
    },
    {
        id: 3,
        titulo: "O GPS de emergência é um sistema de localização que permite aos usuários enviar sinais de socorro em situações de emergência!",
        img: require("../icones/image3.png"),
        texto: "Ao acionar o GPS, informações de localização são transmitidas para seus contatos de emegência, agilizando a resposta em situações de perigo."
    },
    {
        id: 4,
        titulo: "Crie o seu perfil, apenas seus contatos de confiança terão acesso",
        img: require("../icones/image4.png"),
        texto: "Adicione informações ao seu perfil para casos de emergência, você pode alterar a todo momento."
    }, 
];

const MyCarousel = ({data}) => {

    const renderItem = ({item}) => {
        <View>
            <Page1 
                title={item.titulo}
                img={item.img}
                text={item.texto}
            />
        </View>
    };

    return (
        <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            layout="default"
        />
    )
}


function AjudaList(props){
    return(
        <Layout>
            <View style={styles.container}>
                <MyCarousel data={dummyData}/>
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

 {/* <Page1
                        title="Alerte que está em perigo aos seus contatos!"
                        img={require("../icones/image1.png")}
                        text="Ao apertar seu botão de conexão Bluetooth, seus contatos de emergência serão acionados e receberão uma mensgem de alerta."
                         
                    /> 
                    
                     <Page2
                        title="Tenha pessoas de confiança como contato de emergência para qualquer situação!"
                        img={require("../icones/image2.png")}
                        text="Adicione um contato para que ele acompanhe sua jornada e lhe proporcione mais segurança."
                         
                    />  

                    <Page3
                        title="O GPS de emergência é um sistema de localização que permite aos usuários enviar sinais de socorro em situações de emergência!"
                        img={require("../icones/image3.png")}
                        text="Ao acionar o GPS, informações de localização são transmitidas para seus contatos de emegência, agilizando a resposta em situações de perigo."
                         
                    />  
                    
                    <Page4
                        title="Crie o seu perfil, apenas seus contatos de confiança terão acesso"
                        img={require("../icones/image4.png")}
                        text="Adicione informações ao seu perfil para casos de emergência, você pode alterar a todo momento."
                         
                    />   */}