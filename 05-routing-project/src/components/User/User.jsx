import { useParams} from "react-router-dom";

export const User = () => {

    const {username} = useParams();
    return (
        <>
            <div className='w-screen max-w-8xl'>
                <h1 className='ml-10  text-center text-gray-700 mx-auto text-2xl py-52'> Username: {username}</h1>
            </div>
        </>
    )
}
