// import { useEffect } from "react";
// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData()
//     const [data,setData] = useState([])
//     useEffect(()=>{
//    fetch('https://api.github.com/users/ansuljain789')
//    .then(Response=> Response.json())
//    .then(data =>{
//     console.log(data);
//     setData(data);
    
//    })
//     },[])
    return(
        <div className=" text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers:{data.follwers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github;




export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/ansuljain789')
    return response.json();
}