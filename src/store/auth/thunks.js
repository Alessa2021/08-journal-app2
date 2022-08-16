import { signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, logout, login } from "./authSlice"
// checkingCredentials, logout y login fueron definidos como parte del reducer de auth en el authSlice para realizar el cambio de estado de la autenticación




// Aqui se programan las tareas asincronas que van a realizar las funciones de los componentes a traves del useDispatch en la page de login (no necesitamos aqui importar a useDispatch porque se lo requiere en login page)

export const checkingAuthentication = ( email, password ) => {
    return async(dispatch) => {
        
        //viene del slice
        dispatch( checkingCredentials() )
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch )=> {

        // viene del slice
        dispatch( checkingCredentials())

        // viene del firebase
       const result = await signInWithGoogle()
       console.log({result})
        if( !result.ok) return dispatch( logout( result.errorMessage ) )

        dispatch( login(result))
 
    }
}