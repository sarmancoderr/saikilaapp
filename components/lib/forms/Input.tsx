import { ComponentProps } from "react"

type FormInput = ComponentProps<"input"> & {
    label: string,
    help?: string,
    id: string
}

export default function Input ({label, help, id, ...inputAttrs}: FormInput) {
    return (
        <div>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                {...inputAttrs}
                className="form-control"
                id={id}
                aria-describedby={id + 'Help'}
            />
            {help && <div id={id + 'Help'} className="form-text">
                {help}
            </div>}
        </div>
    )
}