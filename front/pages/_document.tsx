import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Lora:ital@0;1&family=Varela&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Navbar />
        <div className={"relative"}>
          <Main />
          <Sidebar />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
