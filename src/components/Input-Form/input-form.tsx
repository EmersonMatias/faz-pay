
import { InputFormProps } from "../../types/type";
import { Input } from "../ui/input";
import { Container, ErrorMessage } from "./style";

export default function InputForm(props: InputFormProps) {
        const { label, name, register, type, maxLength, message, minLength, placeholder, required, validate} = props
    
    return (
        <Container>
            <label htmlFor={name}>{label}</label>
            <Input
                id={name}
                type={type}
                placeholder={placeholder}
                {...register(name, {
                    required: required,
                    minLength,
                    maxLength,
                    validate,
                })}
            />
           <ErrorMessage>{message}</ErrorMessage>
        </Container>
    )
}




