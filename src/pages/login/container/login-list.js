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
            <View style={styles.wrapper}>
                <Image source={require('../icones/logo.png')} style={styles.logo}/>

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
                    <Text style={styles.links}>Lembre-me</Text>
                    <Text style={styles.links}>Esquceu a senha?</Text>
                </View>
                
                <TouchableOpacity style={styles.btn} onPress={handleSubmit(handleSingIn)}>
                    <Text style={styles.textBtn}>ENTRAR</Text>
                </TouchableOpacity>
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
        height: 317,
        width: 253,
        borderWidth: 5,
        borderColor: "#A081F8",
        borderRadius: 20,
    },
    logo:{
        height: 148,
        width: 178,
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
    links:{
        color: "#A081F8",
        fontSize: 10,
        margin: 10,
        marginBottom: 20,
    },
    btn:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#510A88",
        borderRadius: 100,
        height: 48,
        width: 196,
        marginBottom: 130,
    },
    textBtn:{
        fontSize: 18,
        color: "#fff",
    },
});

export default LoginList; 