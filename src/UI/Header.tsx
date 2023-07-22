import Link from "next/link";
import React from "react";

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

export default function Header() {
  const paths = [
    {
      page: "Home",
      route: "/",
    },
    {
      page: "Cows",
      route: "/cows",
    },
    {
      page: "About",
      route: "/about",
    },
    {
      page: "Contact",
      route: "/contact",
    },
    {
      page: "Cart",
      route: "cart",
    },
    {
      page: "Admin",
      route: "/admin",
    },
    {
      page: "Login",
      route: "/login",
    },
  ];
  return (
    <div style={headerStyle}>
      {paths.map((path, index) => (
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            margin: "0px 10px",
          }}
          key={index + 1}
          href={path.route}
        >
          {path.page}
        </Link>
      ))}
    </div>
  );
}
