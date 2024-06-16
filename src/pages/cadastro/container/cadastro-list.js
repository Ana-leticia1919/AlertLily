import React, {useState} from "react";
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
import {useNavigation} from "@react-navigation/native";

const schema = yup.object({
    userName: yup.string().required("Informe seu nome."),
    email: yup.string().email("Email invalido").required("Informe seu email."),
    cpf: yup.number().min(11, "O CPF deve conter 11 digitos").required("Informe seu CPF."),
    password: yup.string().min(8, "A senha deve conter pelo menos 8 digitos").required("Crie uma senha."),
});

function CadastroList(props){

    const navigation = useNavigation();

    const {control, handleSubmit, formState:{ errors } } = useForm ({
        resolver: yupResolver(schema)
    });

    
    function handleSingIn(data){
        console.log(data);
    }

    return(
        <ImageBackground source={require('../icones/plano-de-fundo.png')} style={styles.container}>
                <View style={styles.wrapperTitle}>
                    <Text style={styles.title}>Crie sua conta!</Text>
                </View>
                

                <Controller
                    control={control}
                    name="userName"
                    render={({field: {onChange, onBlur, value}}) =>(
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Usuário"
                            placeholderTextColor={"#A081F8"}
                        />
                    )}
                />
                {errors.userName && <Text style={styles.mensagemErro}>{errors.userName?.message}</Text>}

                <Controller
                    control={control}
                    name="email"
                    render={({field: {onChange, onBlur, value}}) =>(
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Email"
                            placeholderTextColor={"#A081F8"}
                        />
                    )}
                />
                {errors.email && <Text style={styles.mensagemErro}>{errors.email?.message}</Text>}

                <Controller
                    control={control}
                    name="cpf"
                    render={({field: {onChange, onBlur, value}}) =>(
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="CPF"
                            placeholderTextColor={"#A081F8"}
                        />
                    )}
                />
                {errors.cpf && <Text style={styles.mensagemErro}>{errors.cpf?.message}</Text>}

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

                <TouchableOpacity style={styles.btn} onPress={handleSubmit(handleSingIn)}>
                    <Text style={styles.textBtn}>CADASTRAR-SE</Text>
                </TouchableOpacity>

        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flex: 1,
        paddingTop: 80,
        
    },
    wrapperTitle:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#C598FF",
        borderRadius: 30,
        height: 48,
        width: 220,
        elevation: 4, //sombra.
        margin: 20,
    },
    title:{
        fontSize: 20,
        fontWeight:'900',
        color: "#2B0A88", 
        elevation: 4,
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
    textBtn:{
        fontSize:20,
        color: "#fff",
    },
    btn:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#510A88",
        borderRadius: 100,
        height: 59,
        width: 233,
        marginVertical: 20,
        marginTop: 20,
        marginBottom:20,
    },
    mensagemErro:{
        fontSize:15,
        color: "#510A88",
    },
    wrapperLink:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#2B0A88",
        borderBottomWidth: 2,
        margin: 8,
    },
    link:{
        fontSize:15,
        color: "#3B0056",
        fontWeight: "bold"
    },
    imgSeta:{
        height: 35,
        width: 35,
    },
});

export default CadastroList; 