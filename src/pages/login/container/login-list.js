import React, { useState }from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Link from "../components/link";
import Button from "../components/button";

const schema = yup.object({
    email: yup.string().email("Email invalido").required("Informe seu email."),
    password: yup.string().min(8, "A senha deve conter pelo menos 8 digitos").required("Crie uma senha."),
});

function LoginList(props){

    //fazer checkbox.

    const {control, handleSubmit, formState:{ errors } } = useForm ({
        resolver: yupResolver(schema)
    });

    function handleSingIn(data){
        console.log(data);
    }

    return( 
        <ImageBackground source={require('../icones/plano-de-fundo.png')} style={styles.container}>

            <Image source={require('../icones/logo.png')} style={styles.logo} elevetion={5}/>

            <View style={styles.wrapper} >

                <Controller
                    control={control}
                    name="email"
                    render={({field: {onChange, onBlur, value}}) =>(
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="E-mail"
                            placeholderTextColor={"#A081F8"}
                        />
                    )}
                />
                {errors.email && <Text style={styles.mensagemErro}>{errors.email?.message}</Text>}

                <Controller
                    control={control}
                    name="password"
                    render={({field: {onChange, onBlur, value}}) =>(
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Senha"
                            secureTextEntry={true}
                            placeholderTextColor={"#A081F8"}
                        />
                    )}
                />
                {errors.password && <Text style={styles.mensagemErro}>{errors.password?.message}</Text>}

                <View style={styles.wrapperlinks}>
                    <Link text="Lembre-se de mim" link="Cadastro"/>
                    <Link text="Esqueci a senha" link="Cadastro"/>
                </View>
                
                <Button text="ENTRAR" link="Perguntas"/>

                <Link text="Não tem uma conta? cadastre-se já." link="Cadastro"/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        //flex: 1, 
        height: 900,
        paddingTop: 80,  
    },
    wrapper:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#F6F2FF",
        height: 417,
        width: 263,
        borderWidth: 5,
        borderColor: "#A081F8",
        borderRadius: 20,
    },
    logo:{
        height: 148,
        width: 178,
        position: 'absolute',
        top: 197,
        
    },
    input:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#F6F2FF",
        borderColor: "#A081F8",
        borderRadius: 30,
        borderWidth: 3,
        height: 45,
        width: 298,
        paddingLeft: 20,
        margin: 10,
        color: "#A081F8",
    },
    mensagemErro:{
        fontSize:15,
        color: "#821919",
    },
    wrapperlinks:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    wrapperCheck:{
        justifyContent: "center",
        alignItems: "center",
    },
});

export default LoginList; 