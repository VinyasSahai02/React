import {useQuery} from "@tanstack/react-query"
//this hook is used to make req to get data from an API
import Axios from "axios"

export const Home=()=>{
    const {data,isLoading}=useQuery(["cat"],()=>{
        return Axios.get("https://catfact.ninja/fact")
        .then((res)=>res.data);
    }); //takes 2 things([array with unique key],fetch func)

    if(isLoading){
        return <h1>Loading...</h1>//shows this until data is fetched
    }

    return <div>
        <h1>this is the home page</h1>
        <p>{data?.fact}</p>
    </div>
}
//if just . then it will breakto solve this ?. so it doesnt fetch data from a null value (data is null until the fetch req is completed so null.fact is nothing)
// therre are multiple props of react Query
// const{data,isloading,iserror,refetch}
// iserror executes if for example the url is wrong
// isloading executes until the data is fetched
// refetch requests the data again
//etc ...


//react query by default refetches the data if you change tabs

//to not refetch the data when we change tabs
// const client=new QueryClient({
//     defaultOptions:{
//         queries:{
//             refetchOnWindowFocus:false
//         },
//     },
// })