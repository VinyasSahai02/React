import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from "firebase/auth"

export const Navbar=()=>{

    const [user]=useAuthState(auth);
    const signUserOut= async ()=>{
        await signOut(auth);
    }

    return (
        <div className="text-blue-700 font-semibold space-x-3">
            <Link to="/">Home</Link>
            {!user ? <Link to="/login">Login</Link>:<Link to="/createpost">Create Post</Link>}
            
            {user &&(
                <div>
                <p>{user?.displayName}</p>
                <img src={user?.photoURL||""} width="100" height={100}/>
                <button onClick={signUserOut}>log out</button>
            </div>
            )}          
        </div>
    )
}