import { HTMLInputTypeAttribute } from "react"
import { UseFormRegister } from "react-hook-form"

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface InputFormProps {
    label: string
    type: HTMLInputTypeAttribute | undefined,
    name: string,
    register: UseFormRegister<any>,
    validate?: (data: string) => string | undefined,
    required?: string
    minLength?: {
        message: string,
        value: number
    },
    maxLength?: {
        message: string,
        value: number
    }
    placeholder?: string
    message?: string
}
