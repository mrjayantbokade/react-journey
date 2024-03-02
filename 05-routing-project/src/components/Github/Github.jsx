import {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";

export const Github = () => {

    const data = useLoaderData()
    // const[data, setData] = useState([]);
    // use this or the other one method
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/mrjayantbokade')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //             console.log(data)
    //         })
    // }, [])

    return (

        <>


            <div className='w-screen h-96 max-w-8xl'>
                <div className='w-screen max-w-8xl flex flex-row'>
                    <img className='rounded-full w-40 h-40 mx-10 my-30 ' src= {data.avatar_url} alt="github image"/>
                    <div className='flex flex-col justify-around'>
                        <h1 className='ml-10 text-gray-700 mx-auto text-2xl '> Name: {data.name}</h1>
                        <h1 className='ml-10 text-gray-700 mx-auto text-2xl '> Github Followers: {data.followers}  </h1>
                        <h1 className='ml-10 text-gray-700 mx-auto text-2xl '> Username: {data.login}</h1>
                        <h1 className='ml-10 text-gray-700 mx-auto text-2xl '> Public Repos: {data.public_repos}</h1>
                    </div>

                </div>
            </div>


        </>
    )
}



export const githubInfoLoader = async () => {
    const response = await fetch('http://api.github.com/users/mrjayantbokade')
    const data = await response.json()
    return data
}