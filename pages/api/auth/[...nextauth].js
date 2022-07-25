import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

/* 
La autenticacion la vamos a hacer con next-auth, que fue creado para next.js, se instala primero desde aca https://next-auth.js.org/getting-started/upgrade-v4

despues seguir los pasos aca https://next-auth.js.org/getting-started/example

*/

export default NextAuth({
  // Configurar uno o mas proveedores de autenticacion
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // se pueden agregar mas proveedores aca
  ],

  pages:{
    signIn: "/auth/signin" //en que pagina se encuentra el signin
  }

})

/* Pasos para generar las credenciales en google:

- https://cloud.google.com/
- console
- new project
- en la parte superior ahora elegimos el proyecto que acabamos de crear
- menu hamburguesa, api and services, credentials
- configure consent screen, en este caso elegi external pero para redbee puede elegirse internal de la organizacion
- volver a credentials, create credentials oauth client id, el redirect uri se puede cambiar despues
- estas credenciales se ponen en el .env.local


*/
