//npm install react-hook-form yup
import {useForm} from "react-hook-form"
import * as yup from 'yup'
//yup is to kind of generate the shape of the form
import {yupResolver} from '@hookform/resolvers/yup'
//this package integreates reactformhook and yup


export const Form=()=> {
    const schema=yup.object().shape({  //schema decides the condition to submit a form
        fullName: yup.string().required("full name is req"),  //enforces that fullname is a string
        email: yup.string().email().required(), //required means it is a requirment to fill this inorder to submit this form
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null]).required(),
    })


    //we receieve this info as a object {fullName: ,email: ,etc..}
    //so register comes into decide the props ie. email:
    const {register, handleSubmit, formState:{errors} }=useForm({   //register and handleSubmit are funcs
        //npm install @hookform/resolvers
        resolver: yupResolver(schema),  //how the schemea will look
    });


    const onSubmit=(data)=>{
        console.log(data);
    }


  return ( //onsubmitting  handleSubmit and onSubmit both run
    <form onSubmit={handleSubmit(onSubmit)}> 
        <input type="text" placeholder="Full Name" {...register("fullName")}/>
        <p>{errors.fullName?.message}</p>  
        <input type="text" placeholder="Email" {...register("email")}/>
        <input type="number" placeholder="Age" {...register("age")}/>
        <input type="password" placeholder="Password" {...register("password")}/>
        <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
        <input type="submit" />
    </form>
  )
}
