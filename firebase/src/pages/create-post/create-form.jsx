import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {addDoc, collection} from "firebase/firestore";
import { auth,db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const CreateForm=()=>{
    const [user] =useAuthState(auth);
    const navigate=useNavigate();

    const schema=yup.object().shape({
        title:yup.string().required("error add a title"),
        description:yup.string().required("error add description"),        
    })

    const {register, handleSubmit ,formState:{errors}}= useForm({
        resolver: yupResolver(schema)
    })

    const postsRef=collection(db,"posts");

    const onCreatePost= async (data)=>{
        await addDoc(postsRef,{
            //...data ->this can also be used instead of the first 2 lines
            title: data.title,
            description: data.description,
            username: user?.displayName,
            userId: user?.uid,
        });
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="title" {...register("title")}/>
            {/* <p style={{color:"red"}}>{errors.title.message}</p> */}
            <textarea placeholder="description" {...register("description")}/>
            {/* <p style={{color:"red"}}>{errors.description.message}</p> */}
            <input className="bg-slate-300" type="submit"/>
        </form>
    )
}