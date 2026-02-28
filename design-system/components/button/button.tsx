"use client";

import { Button as FlowbiteButton } from "flowbite-react";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const variantClasses = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700",
  outline:
    "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700",
  ghost:
    "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
} as const;

const sizeClasses = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
} as const;

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonSize = keyof typeof sizeClasses;

export interface ButtonProps extends Omit<
  ComponentProps<typeof FlowbiteButton>,
  "color"
> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <FlowbiteButton
      className={twMerge(
        "rounded-sm",
        variantClasses[variant],
        sizeClasses[size],
        "focus:ring-2",
        className,
      )}
      {...props}
    >
      {children}
    </FlowbiteButton>
  );
}
