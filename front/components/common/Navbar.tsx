import React from "react";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className={"sticky top-0 z-50 bg-amber-50 h-[50px] w-full"}>
      <div
        className={"flex items-center justify-between max-w-7xl mx-auto h-full"}
      >
        <div className={"flex"}>
          <Link href={"/"}>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
              alt={"github"}
              className={"w-[30px] h-[30px] mx-[10px]"}
            />
          </Link>
          <Link href={"/"}>
            <img
              src={
                "https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1677525592~exp=1677526192~hmac=6ca890a7f57e868bcbcf6c22fc243490b9871c19f20409878e6c63198e35f93d"
              }
              alt={"instagram"}
              className={"w-[30px] h-[30px] mx-[10px]"}
            />
          </Link>
        </div>
        <ul className={"flex"}>
          <Link href={"/"} className={"mx-[10px]"}>
            HOME
          </Link>
          <Link href={"/about"} className={"mx-[10px]"}>
            ABOUT
          </Link>
          <Link href={"/contact"} className={"mx-[10px]"}>
            CONTACT
          </Link>
          <Link href={"/write"} className={"mx-[10px]"}>
            WRITE
          </Link>
        </ul>
        <div>
          <img src="" alt="" />
          <span>SEARCH</span>
        </div>
      </div>
    </div>
  );
}
