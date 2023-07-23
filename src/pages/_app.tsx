import { store } from "../Redux/store";
import "../styles/globals.css";
import { Provider } from "react-redux";

export default function App({
  Component,
  pageProps,
}: React.ComponentProps<any>) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
