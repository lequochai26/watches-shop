'use client'

import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import ItemModel from "../interfaces/ItemModel";
import FixedScreen from "../components/FixedScreen";
import NewItemBox from "./components/NewItemBox";

// RESTful API URL
const url: string = "/management/item";

// Component:
export default function ManagementPage() {
    // States:
    const [ items, setItems ] = useState<ItemModel[]>([]);
    const [ keyword, setKeyword ] = useState<string>("");
    const [ popup, setPopup ] = useState<JSX.Element | undefined>(undefined);

    // Effects:
    useEffect(
        function () {
            load().then(
                function () {
                    console.log("Items loaded successfully!")
                }
            );
        }, []
    )

    // Data operations:
    async function load(keyword?: string) {
        try {
            // Sending HTTP request and receiving response
            const response: Response = await fetch(
                `${url}?method=${!keyword ? "GETALL": `GETBYKEYWORD&keyword=${keyword}`}`,
                {
                    method: "GET"
                }
            )

            // Parsing response into json
            const { success, result, message }: { success: boolean, result: ItemModel[], message: string } = await response.json();

            // Failed case
            if (!success) {
                alert(message);
            }
            // Success case
            else {
                setItems(result);
            }
        }
        catch (error: any) {
            alert("Đã có lỗi xảy ra trong quá trình xử lý!");
            console.error(error);
        }
    }

    // Event handlers:
    const keywordChange: ChangeEventHandler<HTMLInputElement> = function (event: ChangeEvent<HTMLInputElement>) {
        // Get target from event
        const target: HTMLInputElement = event.target;

        // Get value from target
        const value: string = target.value;

        // Set keyword base on value
        setKeyword(value);
    }

    function closeFixedScreen() {
        setPopup(undefined);
    }

    function showNewItemBox() {
        setPopup(
            <NewItemBox
                close={closeFixedScreen}
                onAlter={load}
            />
        )
    }

    // View:
    return (
        <div>
            {/* Fixed screen */}
            <FixedScreen content={popup} />

            {/* Header */}
            <div className="block widthFitParent height50px backgroundWhite borderBlackThin">
                {/* Ruler */}
                <div className="ruler"></div>

                {/* Add button */}
                <Button type="normal" value="Thêm" className="inlineBlock verticalAlignMiddle margin5px marginLeft15px" onClick={showNewItemBox} />

                {/* Delete button */}
                <Button type="normal" value="Xóa" className="inlineBlock verticalAlignMiddle margin5px" />

                {/* Search keyword input field */}
                <InputField type="text" value={keyword} placeholder="Từ khóa tìm kiếm" className="inlineBlock verticalAlignMiddle margin5px width450px" onChange={keywordChange} />

                {/* Search button */}
                <Button type="normal" value="Tìm kiếm" className="inlineBlock verticalAlignMiddle margin5px" onClick={ function() {load(keyword)} } />

                {/* Reload button */}
                <Button type="normal" value="Tải lại" className="inlineBlock verticalAlignMiddle margin5px" onClick={ function() {load()} } />
            </div>

            {/* Body */}
            <div>
                {/* Data table */}
                <table className="widthFitParent">
                    {/* Table header */}
                    <thead>
                        <tr className="textAlignLeft">
                            <th>
                                <input type="checkbox" />
                            </th>

                            <th>
                                Mã sản phẩm
                            </th>

                            <th>
                                Tên sản phẩm
                            </th>

                            <th>
                                Đơn giá
                            </th>

                            <th className="textAlignRight">
                                Hành động
                            </th>
                        </tr>
                    </thead>

                    {/* Table body */}
                    <tbody>
                        {
                            items.map(
                                function (item: ItemModel): JSX.Element {
                                    return (
                                        <tr key={item.id}>
                                            <td className="textAlignLeft">
                                                <input type="checkbox" />
                                            </td>

                                            <td>
                                                {item.id}
                                            </td>

                                            <td>
                                                {item.name}
                                            </td>

                                            <td>
                                                {item.price}
                                            </td>

                                            <td className="textAlignRight">
                                                <Button type="normal" value="Sửa" className="margin5px" />
                                                <Button type="normal" value="Xóa" className="margin5px" />
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}