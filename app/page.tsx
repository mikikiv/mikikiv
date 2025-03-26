import CardDisplay from "@/libs/components/CardDisplay";
import SocialLinks from "@/libs/components/SocialLinks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <section className="flex h-96 text-text-950 sm:mb-0">
        <div className="mx-auto my-auto text-center ">
          <Image
            alt="Mikey"
            width={150}
            height={150}
            className="mx-auto rounded-full"
            src="https://avatars.githubusercontent.com/u/46366395?v=4"
          />
          <h1 className="text-mtext text-xl">Mikey Villavicencio</h1>
          <p className="mb-16 text-mtext">SDET and more</p>
          <div className="mt-10">
            <SocialLinks direction="x" />
          </div>
        </div>
      </section>
      <CardDisplay />
    </div>
  );
}
