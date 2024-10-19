import clsx from "clsx"
import { PropsWithChildren } from "react"

type FlexStackProps = PropsWithChildren<{margin?: number, direction?: 'column' | 'row', reverse?: boolean}>

export default function FlexStack ({margin = 3, direction = 'column', reverse = false, children}: FlexStackProps) {
    const classes = clsx('d-flex flex-column', [
        'gap-' + margin,
        'flex-' + direction + (reverse ? '-reverse' : '')
    ])
    return (
        <div className={classes}>
            {children}
        </div>
    )
}