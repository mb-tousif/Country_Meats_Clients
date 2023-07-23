import Image from "next/image";
import logo from "../Assets/logo.png";

const footerStyle: React.CSSProperties = {
    padding: '1rem',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };
export default function Footer() {
  return (
    <div style={footerStyle}>
        <Image src={logo} alt="Country Meats" width={100} height={100} />
        <p>Country Meats Ltd</p>
        <p>All right reserved & Copyright &#169; {new Date().getFullYear()}.</p>
    </div>
  )
}
