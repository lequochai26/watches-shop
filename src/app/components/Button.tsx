// Interface:
interface ButtonProps {
    type: "normal" | "submit" | "normalInForm";
    value: string;
    className?: string;
    onClick?(): void;
}

// Component:
export default function Button({ type, value, className, onClick }: ButtonProps) {
    // Class name definition
    className = `backgroundWhite borderBlackThin borderRadius5px widthFitContent heightFitContent padding5px paddingLeft15px paddingRight15px fontFamilyInherit fontSize17px cursorPointer ${className || ""}`;

    // View:
    switch (type) {
        case 'normal': return (
            <button className={ className } onClick={ onClick }>
                { value }
            </button>
        );

        case 'submit': return (
            <input type="submit" value={ value } className={className} />
        )

        case 'normalInForm': return (
            <input type="button" value={ value } onClick={ onClick } className={className} />
        )
    }
}