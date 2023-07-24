import Footer from "../UI/Footer";
import Header from "../UI/Header";
import Meta from "./Meta";

const rootStyle:React.CSSProperties = {
  minHeight: '70vh',
}

export default function RootLayout({ children }: React.ComponentProps<any>) {
  return (
    <>
    <Meta />
    <Header />
    <div style={rootStyle}>
    { children }
    </div>
    <Footer />
    </>
  )
}
