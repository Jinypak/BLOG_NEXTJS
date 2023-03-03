import React from "react";
import Post from "@/components/main/Post";
import Link from "next/link";

type Props = {};

export default function Posts({}: Props) {
  return (
    <div className={"absolute h-screen max-w-5xl"}>
      <div className={"flex flex-col"}>
        <Link href={"/post/1"}>
          <Post />
        </Link>
      </div>
    </div>
  );
}
