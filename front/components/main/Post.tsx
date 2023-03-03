import React from "react";

type Props = {};

export default function Post({}: Props) {
  return (
    <div className={"flex items-center justify-center max-w-[800px] m-[20px]"}>
      <img
        src="https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-superJumbo.jpg"
        alt=""
        className={"h-[300px] object-cover rounded-[10px]"}
      />
      <div className={"flex flex-col"}>
        <h2 className={"py-[10px] w-full"}>Post title</h2>
        <p className={"px-[10px] w-full"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
    </div>
  );
}
