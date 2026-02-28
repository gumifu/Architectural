"use client";

import { Button } from "@/design-system";
import { colors, spacing } from "@/design-system/tokens";
import { Card } from "flowbite-react";

export default function DesignSystemPageContent() {
  return (
    <div className="px-4 pt-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Design System
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          トークンとコンポーネントの一覧です。
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Button
        </h2>
        <Card className="mb-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Size: xs / sm / md / lg
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Button size="xs">xs</Button>
            <Button size="sm">sm</Button>
            <Button size="md">md</Button>
            <Button size="lg">lg</Button>
          </div>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Colors
        </h2>
        <Card>
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Primary
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(colors.primary).map(([key, value]) => (
                  <div
                    key={key}
                    className="h-10 w-10 rounded-lg border border-gray-200 shadow-sm dark:border-gray-600"
                    style={{ backgroundColor: value }}
                    title={`primary-${key}: ${value}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Neutral
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(colors.neutral).map(([key, value]) => (
                  <div
                    key={key}
                    className="h-10 w-10 rounded-lg border border-gray-200 shadow-sm dark:border-gray-600"
                    style={{ backgroundColor: value }}
                    title={`neutral-${key}: ${value}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Semantic
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(colors.semantic).map(([key, value]) => (
                  <div
                    key={key}
                    className="h-10 w-16 rounded-lg border border-gray-200 shadow-sm dark:border-gray-600"
                    style={{ backgroundColor: value }}
                    title={`${key}: ${value}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Spacing
        </h2>
        <Card>
          <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
            4px ベースのスケール（Tailwind 相当）
          </p>
          <div className="flex flex-wrap items-end gap-2">
            {Object.entries(spacing).map(([key, value]) => (
              <div
                key={key}
                className="flex flex-col items-center"
                title={`${key}: ${value}`}
              >
                <div
                  className="bg-primary-500 dark:bg-primary-600 w-8 rounded"
                  style={{ height: value }}
                />
                <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {key}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
