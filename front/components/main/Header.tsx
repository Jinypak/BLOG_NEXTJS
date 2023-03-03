import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className={"relative"}>
      <h1
        className={
          "absolute text-center text-[40px] font-bold left-0 right-0 top-[-25px]"
        }
      >
        BLOG MADE SARAMDLE
      </h1>
      <img
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="image"
        className={"w-full h-[500px] object-cover my-[50px]"}
      />
    </div>
  );
}
