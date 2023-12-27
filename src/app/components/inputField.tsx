import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

// Interface:
interface InputFieldProps {
    type: HTMLInputTypeAttribute;
    name?: string;
    value?: string | readonly string[] | number | undefined;
    placeholder?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

// Component:
export default function InputField({ type, name, value, placeholder, className, onChange }: InputFieldProps) {
    // Class name definition
    className = `backgroundWhite borderBlackThin borderRadius5px fontFamilyInherit fontSize17px padding5px paddingLeft15px paddingRight15px width250px ${className || ""}`;

    // View:
    return (
        <input type={ type } name={ name } value={ value } placeholder={ placeholder } className={ className } onChange={ onChange } />
    )
}