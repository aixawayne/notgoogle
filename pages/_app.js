import '../styles/globals.css'
import {SessionProvider} from "next-auth/react"

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp

//esto contiene toda la aplicacion. Le agregamos por encima el session provider para que haga una sesion basada en nuestro estado de autenticacion
