import { Button } from "@/libs/components/Button";
import { SiteCard } from "@/libs/components/SiteCard";
import SocialLinks from "@/libs/components/SocialLinks";
import { websites } from "@/libs/data/websites";
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
          <h1 className="text-xl">Mikey Villavicencio</h1>
          <p className="mb-16">SDET and more</p>
          <div className="mt-10">
            <SocialLinks direction="x" />
          </div>
        </div>
      </section>
      <section>
        <div className="m-b-12 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {websites
            .filter(site => site.enabled !== false)
            .sort((a, b) => a.id - b.id)
            .map(site => (
              <div
                className="flex h-full w-full items-center p-4"
                key={site.id}
              >
                <SiteCard
                  id={site.id}
                  name={site.name}
                  links={site.links}
                  desc={site.desc}
                  lang={site.lang.map(io => io)}
                  enabled={site.enabled}
                  img={site.img}
                />
              </div>
            ))}
          <div className="mx-auto flex h-full items-center p-4">
            <Button
              variant={"reverse"}
              className=""
            >
              Just a satisying button to click
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
