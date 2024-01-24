import {getDocs ,collection} from "firebase/firestore"
import {db} from "../../config/firebase"
import { useEffect, useState } from "react";
import {Post} from "./post"

export const Main=()=>{
    const [postsList,setPostsList]=useState(null)
    const postsRef=collection(db,"posts");

    const getPosts = async()=>{
        const data = await getDocs(postsRef)
        setPostsList(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        //to get  just the req info as firebase gives of a lot of unreqired info
    }

    useEffect(()=>{
        getPosts();
    },[])
    
    return (
        <div>
            {postsList?.map((post)=><Post props={...post}/>)}
        </div>//? is put as we dont want to map through post if it is null(initial case)
    )
}