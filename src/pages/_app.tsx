import { store } from "../Redux/store";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({
  Component,
  pageProps,
}: React.ComponentProps<any>) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
      <ToastContainer />
    </Provider>
  );
}
