import '../styles/globals.css'

export default function App({ Component, pageProps }: React.ComponentProps<any>) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return getLayout(<Component {...pageProps} />);
}
