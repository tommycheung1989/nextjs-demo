import Head from "next/head";
import Link from "next/link";

export default function second() {
  return (
    <>
      <Head>
        <title>this is the second page</title>
        <link rel="favicon" href="/images/avatar.svg" />
      </Head>
      this is second
      <div>
        <Link href="/"> back to home</Link>
      </div>
    </>
  );
}
