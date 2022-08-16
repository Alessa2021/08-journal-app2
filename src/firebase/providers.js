import {GoogleAuthProvider, signInWithPopup, updateProfile} from 'firebase/auth'

import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {

    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        //const credentials = GoogleAuthProvider.credentialFromResult( result )
        //console.log({credentials})
        
      

        const { displayName, email,photoURL, uid} = result.user

        

        return {
            ok: true,
            displayName, email, photoURL, uid
        }


    } catch (error) {

        const errorCode = error.errorCode
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)


        console.log(error)

        return {
            ok: false,
            errorMessage,
            errorCode,
            email,
            credential

        }
        
    }

}