import React from "react";
import { useRouter } from "next/router";

type Props = {};

export default function index({}: Props) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={"absolute top-[50px] max-w-7xl px-[20px]"}>
      <h1>Post {id}</h1>
      <img
        src="https://i0.wp.com/risevisible.com/wp-content/uploads/2022/08/midjourney-art-Oli_beaugrand.jpg?fit=1800%2C798&ssl=1"
        className={"w-full object-cover "}
        alt=""
      />
      <h1 className={"p-[20px]"}>{id} : title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quod, quia, quae voluptates quibusdam voluptatibus
        accusantium quas quidem natus quos.
      </p>
    </div>
  );
}
