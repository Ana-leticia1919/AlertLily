import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InicioList from "../pages/Inicio/containers/inicio-list";
import LoginList from "../pages/login/container/login-list";
import PerguntasList from "../pages/perguntas/container/perguntas-list";
import CadastroList from "../pages/cadastro/container/cadastro-list";
import SobreNosList from "../pages/sobre-nos/container/sobre-nos-list";

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Inicio"
                component={InicioList}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="Login"
                component={LoginList}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="Cadastro"
                component={CadastroList}
                options={{ headerShown: false}}
            />
            
            <Stack.Screen
                name="Perguntas"
                component={PerguntasList}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="SobreNos"
                component={SobreNosList}
                options={{ headerShown: false}}
            />  
        </Stack.Navigator>
    );
}

export default Routes;