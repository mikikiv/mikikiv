"use client";

import { cx } from "class-variance-authority";
import { useState } from "react";
import { type Language, websites } from "../data/websites";
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
  const [explicit, setExplicit] = useState(false);

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
            >
              {!explicit ? (
                <pre>
                  <span>or</span>
                  <span>|</span>
                  <span className="line-through opacity-50">and</span>
                </pre>
              ) : (
                <pre>
                  <span className="line-through opacity-50">or</span>
                  <span>|</span>
                  <span>and</span>
                </pre>
              )}
            </Button>
          )}
        </div>
        {filterOptions.map(filterName => {
          const selected = filters.includes(filterName);
          return (
            <Button
              key={filterName}
              className={cx(
                badgeVariants({
                  variant: filterName,
                }),
                selected || interacted === false
                  ? "-translate-x-1 -translate-y-1"
                  : "",
              )}
              aria-selected={selected}
              variant={selected || interacted === false ? "default" : "reverse"}
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
      </div>
    </section>
  );
};

export default SitesDisplay;
