import Image from "next/image";
import Link from "next/link";
import {io} from "socket.io-client"
export default function Home() {

  const connection = io()
  connection.on('connection',()=>{})
  const pages = [1,2,3,4,5,6]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" >
      {pages.map((id, idx) =>
        <h1 key={idx}>
          <Link href={{
        pathname: `/post/${id}`,

      }

          }>to post {id}</Link>
        </h1>)}
      
    </main>
  );
}
