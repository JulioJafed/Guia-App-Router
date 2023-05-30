import Link from "next/link"
import Image from "next/image"

export default async function Home() {
  const res = await fetch('https://api.github.com/repos/gamabasis/gif4');
  const data = await res.json();
  return (
    <div>
      <h1>Hola Mundo</h1>
      <h2>{data.id}</h2>
      <h3>{data.owner.avatar_url}</h3>
      <Image
        src={data.owner.avatar_url}
        width={500}
        height={500}
        alt="Picture of the author" />

      <ul>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contactus">Contact Us!</Link></li>
        <li><Link href="/blog/1">Blog 1</Link></li>
        <li><Link href="/blog/2">Blog2</Link></li>
      </ul>
      </div>
  )
}
