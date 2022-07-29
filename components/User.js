import {useSession, signIn, signOut} from "next-auth/react" //primero importo la sesion para el estado de autenticacion

export default function User(){

    const { data: session} = useSession();

    if(session){ //si la persona esta autenticada, devolve esto
        return (
            <>
            <img onClick={signOut} src={session.user.image} alt="user-image" referrerPolicy='no-referrer' className="h-10 w-10 rounded-full cursor-pointer" ></img>
            <p>Holi {session.user.name}</p>
            </>
        )
    }
    return (//si la persona no esta autenticada, que se loguee
        <>
        <button className="bg-red-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md" onClick={signIn}>Ingresar</button>
        </>
    )
}