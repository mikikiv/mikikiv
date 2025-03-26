"use client";

import { cx } from "class-variance-authority";
import { useState } from "react";
import { AVAILABLE_LANGUAGES, type Language, websites } from "../data/websites";
import { Button } from "./Button";
import { badgeVariants } from "./LanguageTag";
import { SiteCard } from "./SiteCard";

const filteredSites = websites.filter(site => site.enabled !== false);

const CardDisplay = () => {
  const filterOptions = Array.from(
    new Set(filteredSites.flatMap(site => site.lang)),
  );
  const [filters, setFilters] = useState([] as Language[]);
  const [interacted, setInteracted] = useState(false);
  const [explicit, setExplicit] = useState(true);

  const addRemoveFromFilters = (i: Language) => {
    setInteracted(true);
    if (!filters.includes(i)) {
      setFilters([...filters, i]);
    } else {
      setFilters(filters.filter(a => a !== i));
    }
  };

  const filteredResults = ({ inclusive }: { inclusive: boolean }) => {
    if (inclusive) {
      return filteredSites.filter(site => {
        if (interacted === false || filters.length === 0) return site;
        return filters.every(language => site.lang.includes(language));
      });
    }
    return filteredSites.filter(site => {
      if (interacted === false || filters.length === 0) return site;
      return filters.some(language => site.lang.includes(language));
    });
  };

  return (
    <section>
      <div className="m-4 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        <div className="flex gap-2">
          <Button
            key={"clear"}
            className={cx(
              badgeVariants({
                uiStyle: "button",
              }),
              "w-1/2",
            )}
            variant={"reverse"}
            onClick={() => {
              setFilters([]);
            }}
          >
            {"Clear"}
          </Button>
          <Button
            key={"all"}
            className={cx(
              badgeVariants({
                uiStyle: "button",
              }),
              "w-1/2",
            )}
            variant={explicit ? "default" : "reverse"}
            onClick={() => {
              setExplicit(!explicit);
            }}
          >
            {"Exact"}
          </Button>
        </div>
        {filterOptions.map(filterName => {
          return (
            <Button
              key={filterName}
              className={badgeVariants({
                variant: filterName,
                uiStyle: "button",
              })}
              variant={
                filters.includes(filterName) || filters.length === 0
                  ? "default"
                  : "reverse"
              }
              onClick={() => {
                addRemoveFromFilters(filterName);
              }}
            >
              {filterName}
            </Button>
          );
        })}
      </div>
      <div className="m-b-12 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredResults({ inclusive: explicit })
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
  );
};

export default CardDisplay;
