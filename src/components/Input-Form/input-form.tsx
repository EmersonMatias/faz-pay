import { UseFormRegister } from "react-hook-form";
import { Input } from "../ui/Input";
import { Container, ErrorMessage } from "./style";
import { HTMLInputTypeAttribute } from "react";

interface InputFormProps {
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
    isPending?: boolean
}

export default function InputForm({ label, name, register, type, isPending, maxLength, message, minLength, placeholder, required, validate }: Readonly<InputFormProps>) {
    return (
        <Container>
            <label htmlFor={name}>{label}</label>
            <Input
                id={name}
                type={type}
                disabled={isPending}
                placeholder={placeholder}
                {...register(name, {
                    required: required,
                    minLength,
                    maxLength,
                    validate
                })}
            />
           <ErrorMessage>{message}</ErrorMessage>
        </Container>
    )
}


