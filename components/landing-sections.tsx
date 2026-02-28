"use client";

import { useLocale } from "@/contexts/locale-context";
import { Button } from "@/design-system";
import { Card } from "flowbite-react";

const sectionIds = ["find", "map", "survey", "nearby", "exploration"] as const;

export function LandingSections() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
      {sectionIds.map((id) => {
        const section = t.sections[id];
        return (
          <section
            key={id}
            id={id}
            className="scroll-mt-24"
            aria-labelledby={`section-${id}-title`}
          >
            <Card className="bg-white dark:bg-gray-800">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2
                    id={`section-${id}-title`}
                    className="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    {section.title}
                  </h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    {section.description}
                  </p>
                </div>
                <div className="shrink-0">
                  <Button variant="primary" size="md">
                    {section.cta}
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        );
      })}
    </div>
  );
}
