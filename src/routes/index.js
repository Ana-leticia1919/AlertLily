import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InicioList from "../pages/Inicio/containers/inicio-list";
import LoginList from "../pages/login/container/login-list";

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
        </Stack.Navigator>
    );
}

export default Routes;