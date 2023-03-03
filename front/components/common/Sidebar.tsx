import React from "react";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className={"absolute bg-white right-0 h-screen hidden xl:block"}>
      <div className={"max-w-[300px] p-[20px] border-l-2 h-full"}>
        <h2 className={"border-y-2 text-center py-[10px]"}>USERNAME</h2>
        <img
          src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
          alt=""
          className={"w-full h-[200px] object-cover my-[20px]"}
        />
        <p className={"text-center my-[20px]"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, quod, quia, quae voluptates quibusdam voluptatibus
          accusantium quas quidem natus quos. Quisquam, quae. Quisquam
          voluptate, quod, quia, quae voluptates quibusdam voluptatibus
          accusantium quas quidem natus quos. Quisquam, quae.
        </p>
        <h3 className={"border-y-2 text-center py-[10px]"}>CATEGORIES</h3>
        <ul className={"flex flex-col"}>
          <li className={"my-[10px] text-center"}>Life</li>
          <li className={"my-[10px] text-center"}>Music</li>
          <li className={"my-[10px] text-center"}>Style</li>
          <li className={"my-[10px] text-center"}>Sport</li>
          <li className={"my-[10px] text-center"}>Tech</li>
          <li className={"my-[10px] text-center"}>Cinema</li>
        </ul>
      </div>
    </div>
  );
}
