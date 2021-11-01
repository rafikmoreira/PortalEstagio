import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import Layout from "../Components/Layout";
import Head from "next/head";
import VLibras from "@djpfs/react-vlibras-typescript";

function MyApp({ Component, pageProps }) {

  return  <div className="d-flex flex-column h-100">
            <Head>
              <title>Núcleo de Estágio - IFNMG - Almenara</title>
              <meta name="description" content="Informações sobre estágio" />
              <link rel="icon" href="/favicon.ico" />
              <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Poppins"/>
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
                    crossOrigin="anonymous"/>

            </Head>
            <VLibras/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
          </div>
}

export default MyApp
