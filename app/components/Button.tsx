"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  const [pending, setPending] = useState(false);
  console.log(props);

  return (
    <button
      className={cn(
        `border px-4 py-2 bg-sky-400 text-white rounded-md font-medium transition-all`,
        className,
        // pending && "bg-gray-500"
        {
          // "bg-gray-500": pending,
          ...props,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
