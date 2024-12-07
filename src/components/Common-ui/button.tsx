import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "",
                outline: "border",
                ghost: "",
            },
            size: {
                default: "",
                sm: "h-9 px-3",
                lg: "h-11 px-8",
                icon: "h-10 w-10",
            },
            rounded: {
                default: "rounded-md",
                full: "rounded-full",
                none: "rounded-none",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            rounded: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    bgColor?: string
    textColor?: string
    hoverBgColor?: string
    hoverTextColor?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, rounded, asChild = false, bgColor, textColor, hoverBgColor, hoverTextColor, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(
                    buttonVariants({ variant, size, rounded }),
                    bgColor && `bg-${bgColor}`,
                    textColor && `text-${textColor}`,
                    hoverBgColor && `hover:bg-${hoverBgColor}`,
                    hoverTextColor && `hover:text-${hoverTextColor}`,
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }

