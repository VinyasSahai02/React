import {auth,provider} from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const Login=()=>{
const navigate=useNavigate();

const signInWithGoogle= async ()=>{
    const result = await signInWithPopup(auth,provider)
    navigate('/')
}

    return (
        <div>
            <p>Sign In With Google To Continue</p>
            <button onClick={signInWithGoogle} className='bg-slate-300'>sign in with google</button>
        </div>
    )
}