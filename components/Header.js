import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const router = useRouter();
  console.log(router.asPath);
  const links = [
    {
      link: "Home",
      route: "/",
    },
    {
      link: "Contact",
      route: "/contact",
    },
    {
      link: "Services",
      route: "/services",
    },
    {
      link: "About",
      route: "/about",
    },
    {
      link: "Gallery",
      route: "/gallery",
    },
  ];

  return (
    <div className={styles.__header___container}>
      <div className={styles.menu}>
        {links.map((item, __index) => (
          <Link key={__index} href={item.route}>
            <a
              className={styles.__menu__item}
              style={{
                color: router.asPath === item.route ? "#D92929" : "",
              }}
            >
              {" "}
              {item.link}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
