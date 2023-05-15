'use client'
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PostPage() {
  const params = useParams()
  const { id } = params
  return <div>this is the {id} page
  <div><Link href='/'>Back to home page</Link></div></div>;
}
