import Footer from "../UI/Footer";
import Header from "../UI/Header";
import Meta from "./Meta";

export default function RootLayout({ children }: React.ComponentProps<any>) {
  return (
    <>
    <Meta />
    <Header />
    { children }
    <Footer />
    </>
  )
}
