import { ClerkProvider } from '@clerk/nextjs';
import '../pages/styles/globals.css';     // Importando seus estilos globais

export default function App({ Component, pageProps }) {

  return (
  <ClerkProvider >
    <Component {...pageProps} />
  </ClerkProvider>);
}
