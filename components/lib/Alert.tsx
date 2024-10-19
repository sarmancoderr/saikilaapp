import clsx from "clsx"
import { PropsWithChildren } from "react"
import { BSVariants } from "./BSTypes"

type AlertProps = PropsWithChildren<{
    variant: BSVariants
}>

export default function Alert({variant, children}: AlertProps) {
    const classes = clsx('alert', [
        'alert-' + variant
    ])
    return (
        <div className={classes} role="alert">
            {children}
        </div>
    )
}