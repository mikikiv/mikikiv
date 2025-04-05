"use client";

import { cx } from "class-variance-authority";
import { useState } from "react";
import { AVAILABLE_LANGUAGES, type Language, websites } from "../data/websites";
import { Button } from "./Button";
import { badgeVariants } from "./LanguageTag";
import { SiteCard } from "./SiteCard";

const filteredSites = websites.filter(site => site.enabled !== false);

const SitesDisplay = () => {
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

  const [andOrButtonHover, setAndOrButtonHover] = useState(false);

  return (
    <section>
      <div className="m-4 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        <div className="flex gap-2">
          <Button
            key={"clear"}
            className={cx(filters.length > 1 ? "w-1/2" : "w-full")}
            variant={"reverse"}
            onClick={() => {
              setFilters([]);
            }}
            disabled={filters.length === 0}
          >
            {"Reset"}
          </Button>
          {filters.length > 1 && (
            <Button
              className={cx(
                "w-1/2 transition duration-300",
                !explicit ? "-translate-y-1 -translate-x-1" : "",
              )}
              variant={explicit ? "reverse" : "default"}
              onClick={() => {
                setExplicit(!explicit);
              }}
              onMouseOver={() => {
                setAndOrButtonHover(true);
              }}
              onMouseOut={() => {
                setAndOrButtonHover(false);
              }}
            >
              {!explicit ? (
                <>
                  <span>or</span>
                  <span className="line-through">and</span>
                </>
              ) : (
                <>
                  <span className="line-through">or</span>
                  <span>and</span>
                </>
              )}
            </Button>
          )}
        </div>
        {filterOptions.map(filterName => {
          const selected = interacted === true && filters.includes(filterName);
          return (
            <Button
              key={filterName}
              className={cx(
                badgeVariants({
                  variant: filterName,
                }),
                selected ? "-translate-x-1 -translate-y-1" : "",
              )}
              aria-selected={selected}
              variant={
                filters.includes(filterName) || interacted === false
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
        <div className="flex h-full w-full items-center p-4">
          <Button
            className={
              "hover:-translate-x-hover hover:-translate-y-hover active:-translate-x-selected active:-translate-y-selected"
            }
            variant={"default"}
          >
            Just a satisying button to click
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SitesDisplay;
