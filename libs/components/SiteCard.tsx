import Image from "next/image";
import type { Website } from "../data/websites";
import { Button } from "./Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./Card";
import { Badge } from "./LanguageTag";

export const SiteCard = ({
  id,
  name,
  links,
  desc,
  lang,
  enabled,
  img,
  ...rest
}: Website) => {
  return (
    <Card className="h-full">
      <CardHeader
        className="text-center font-semibold text-secondary-900 text-xl"
        {...rest}
      >
        {name}
      </CardHeader>
      <div className="mx-6 mb-6 flex flex-wrap justify-center gap-2">
        {lang?.sort().map(language => {
          return (
            <Badge
              key={language}
              variant={language}
            >
              {language}
            </Badge>
          );
        })}
      </div>
      <CardContent className="">
        {img && (
          <Image
            alt={name}
            src={img}
            width={800}
            height={800}
          />
        )}
      </CardContent>
      <CardDescription className="mx-6 mb-6 text-pretty">
        {desc}
      </CardDescription>
      <CardFooter className="flex flex-wrap gap-1">
        {links
          ?.filter(link => link.disabled !== true)
          .map((link, index) => {
            return (
              <a
                href={link.href}
                key={link.label}
                className={index === 0 ? "w-full" : "w-1/2 flex-1"}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant={"reverse"}
                  colors={link.label.match(/Github/i) ? "github" : "default"}
                  className="w-full content-center"
                >
                  {link.label}
                </Button>
              </a>
            );
          })}
      </CardFooter>
    </Card>
  );
};
