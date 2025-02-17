import Title from "@/components/title/Title";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Title>La Caverne des Bros</Title>
      <Image
        src="/images/frieren.webp"
        alt="Les compagnons de la Caverne"
        width={600}
        height={400}
        className="mx-auto my-8 w-[750px] h-[500px]"
      />
      <div></div>
    </>
  );
}
