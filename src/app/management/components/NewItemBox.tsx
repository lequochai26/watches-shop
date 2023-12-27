import { ChangeEvent, ChangeEventHandler, useState } from "react";
import ItemDataAlterComponentProps from "../interfaces/ItemDataAlterComponentProps";
import ItemModel from "@/app/interfaces/ItemModel";
import InputField from "@/app/components/InputField";

// Component:
export default function NewItemBox({ close, onAlter }: ItemDataAlterComponentProps) {
    // States:
    const [ fields, setFields ] = useState<Partial<ItemModel>>({});

    // Event handlers:
    const fieldChange: ChangeEventHandler<HTMLInputElement> = function (event: ChangeEvent<HTMLInputElement>) {
        // Get target from event
        const target: HTMLInputElement = event.target;

        // Get target's name
        const name: string = target.name;

        // Switch name with cases
        switch (name) {
            default: {
                setFields({ ...fields, [name]: target.value })
            }
        }
    }

    // View:
    return (
        <div className="inlineBlock verticalAlignMiddle width350px height350px backgroundWhite borderBlackThin borderRadius10px padding15px">
            {/* Form */}
            <form>
                {/* ID input */}
                <p>
                    <InputField type="text" name="id" value={fields.id} placeholder="Mã sản phẩm" onChange={fieldChange} />
                </p>

                
            </form>
        </div>
    );
}