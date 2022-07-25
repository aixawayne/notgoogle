import Header from "../../components/Header";
import {getProviders, signIn} from "next-auth/react";

//client side
export default function signin({providers}){ //le paso los providers que saque con la funcion de abajo
    return(
        <div>
            <Header/>
            <div className="mt-40">

                {Object.values(providers).map(provider =>( //ahora tenemos un solo proveedor, pero lo armamos asi para agregar mas 
                    <div key={provider.name} className="flex flex-col items-center">

                        <img className="w-52 object-cover"
                        src="https://media-exp1.licdn.com/dms/image/C4D0BAQGCJ6VcWQOwBA/company-logo_200_200/0/1653587240481?e=2147483647&v=beta&t=k1q32zEVkGOEG7UtwTj902PCj8tZqqkbOdixJe1UpAI" 
                        alt="google-logo"></img>

                        <p className="text-sm italic my-10 text-center">Esta pagina se creo con amor para fines educativos :D</p> 
                        
                        <button className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500" onClick={() =>signIn(provider.id, {callbackUrl: "/"})}>
                            {/* la callbackurl se tiene que agregar en googlecloud, ver  pasos en ...nextauth.js*/}
                            Ingresar con {provider.name} 

                        </button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}


//server side 

//esto nos va a dar los proveedores
export async function getServerSideProps(){ //para renderizar esta funcion adentro del server y no desde el browser, es mas rapido

    const providers = await getProviders();

    return {
        props: { providers }
    };
}