"use client";
import SitesDisplay from "@/libs/components/SitesDisplay";
import SocialLinks from "@/libs/components/SocialLinks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <section className="flex sm:mb-0">
        <div className="mx-auto my-auto mt-8 text-center">
          <Image
            alt="Mikey"
            width={150}
            height={150}
            className="mx-auto rounded-full"
            src="https://avatars.githubusercontent.com/u/46366395?v=4"
          />
          <h1 className="text-mtext text-xl">Mikey Villavicencio</h1>
          <p className="text-mtext">SDET and more</p>
          <div className="mt-8">
            <SocialLinks direction="x" />
            <SitesDisplay />
          </div>
        </div>
      </section>
    </div>
  );
}
