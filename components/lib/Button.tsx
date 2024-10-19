import clsx from "clsx"
import { ComponentProps, PropsWithChildren } from "react"
import { BSSizes, BSVariants } from "./BSTypes"

type ButtonProps = PropsWithChildren<ComponentProps<"button"> & {
    variant: BSVariants,
    size?: BSSizes
}>

export default function Button ({children, variant, size, ...restProps}: ButtonProps) {
    const classes = clsx('btn', [
        'btn-' + variant,
        'btn-' + (size ?? 'md')
    ])

    return (
        <button type="submit" className={classes} {...restProps}>
            {children}
        </button>
    )
}