import Image from "next/image";
import NavBar from "./components/profile";
import Link from "next/link";
import Profile from "./components/profile";

export default function Home() {
  const pages = [1, 2, 3, 4, 5, 6];
  return (
    <>
    <head>
        <title>this is my first next app</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className="flex justify-center p-4">
      this is homepage
      <div>
        <Link href="/post/second">link to second page</Link>
      </div>
      </div>
    </>
  );
}
