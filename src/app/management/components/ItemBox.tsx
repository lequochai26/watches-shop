import { ChangeEvent, ChangeEventHandler, useState } from "react";
import ItemDataAlterComponentProps from "../interfaces/ItemDataAlterComponentProps";
import ItemModel from "@/app/interfaces/ItemModel";
import InputField from "@/app/components/InputField";
import Image from "next/image";
import Button from "@/app/components/Button";

// RESTful API Route
const url: string = "/management/item";

// Interface:
interface ItemBoxProps extends ItemDataAlterComponentProps {
    target?: ItemModel;
}

// Component:
export default function ItemBox({ close, onAlter, target }: ItemBoxProps) {
    // Constants:
    const inputFieldClassName: string = "width350px margin15px";

    // States:
    const [ fields, setFields ] = useState<Partial<ItemModel>>(target || {price: 0});
    const [ selectedImage, setSelectedImage ] = useState<File | undefined>(undefined);

    // Event handlers:
    const fieldChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = function (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        // Get target from event
        const target: HTMLInputElement | HTMLTextAreaElement = event.target;

        // Get target's name
        const name: string = target.name;

        // Switch name with cases
        switch (name) {
            case 'price': return priceChange(target as HTMLInputElement);
            case 'image': return imageChange(target as HTMLInputElement);
            default: return setFields({ ...fields, [name]: target.value });
        }
    }

    function priceChange(target: HTMLInputElement): void {
        // Get number value from target
        const value: number = target.valueAsNumber;

        // Exit if value is NaN
        if (Number.isNaN(value)) {
            return;
        }

        // Update fields
        setFields(
            { ...fields, price: value }
        );
    }

    function imageChange(target: HTMLInputElement): void {
        // Target's files not null
        if (target.files) {
            // Target's selected at least 1 file
            if (target.files.length > 0) {
                // The selected file is type of image
                if (target.files[0].type.indexOf("image") !== -1) {
                    setSelectedImage(target.files[0]);
                }
                else {
                    alert("Tệp bạn đã chọn không hợp lệ!");
                    setSelectedImage(undefined);
                }
            }
            else {
                setSelectedImage(undefined);
            }
        }
        else {
            setSelectedImage(undefined);
        }
    }

    // View:
    return (
        <div className="inlineBlock verticalAlignMiddle width65vw height80vh backgroundWhite borderBlackThin borderRadius10px padding15px overflowScroll">
            {/* Form */}
            <form>
                {/* Table */}
                <table className="widthFitParent">
                    {/* Table body */}
                    <tbody>
                        <tr>
                            {/* ID input field */}
                            <td>
                                <InputField type="text" name="id" value={fields.id} placeholder="Mã sản phẩm" onChange={fieldChange} className={inputFieldClassName} required={true} disabled={target ? true : false} />
                            </td>

                            {/* Name input field */}
                            <td>
                                <InputField type="text" name="name" value={fields.name} placeholder="Tên sản phẩm" onChange={fieldChange} className={inputFieldClassName} required={true} />
                            </td>
                        </tr>

                        <tr>
                            {/* Price input field */}
                            <td>
                                <InputField type="number" name="price" value={fields.price} placeholder="Đơn giá" onChange={fieldChange} min={0} className={inputFieldClassName} required={true} />
                            </td>

                            {/* Description input field */}
                            <td>
                                <textarea name="description" value={fields.description} placeholder="Mô tả sản phẩm" className={`height100px fontFamilyInherit fontSize17px ${inputFieldClassName}`} onChange={fieldChange} required={true} />
                            </td>
                        </tr>

                        {/* Item image input */}
                        <tr>
                            <td colSpan={2}>
                                <label htmlFor="image" className="cursorPointer">
                                    Hình ảnh sản phẩm: <br/>
                                    <Image
                                        src={
                                            selectedImage
                                            ? URL.createObjectURL(selectedImage)
                                            : (
                                                target
                                                ? target.image
                                                : "/select-image.jpg"
                                            )
                                        }
                                        width={500}
                                        height={500}
                                        alt=""
                                        className="borderBlackThin borderRadius10px"
                                    />
                                </label>

                                <input type="file" id="image" name="image" className="fontFamilyInherit fontSize17px" onChange={fieldChange} style={{ display: "none" }} />
                            </td>
                        </tr>

                        {/* Submission area */}
                        <tr>
                            <td colSpan={2}>
                                {/* Cancel button */}
                                <Button type="normalInForm" value="Hủy" onClick={close} className="margin15px" />

                                {/* Submit button */}
                                <Button type="submit" value={target ? "Cập nhật" : "Thêm"} className="margin15px" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}