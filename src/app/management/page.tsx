'use client'

import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import ItemModel from "../interfaces/ItemModel";
import FixedScreen from "../components/FixedScreen";
import ItemBox from "./components/ItemBox";
import ItemModelDataRow from "./interfaces/ItemModelDataRow";

// RESTful API URL
const url: string = "/management/item";

// Component:
export default function ManagementPage() {
    // States:
    const [ items, setItems ] = useState<ItemModelDataRow[]>([]);
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
                setItems(
                    result.map(
                        function (itemModel: ItemModel): ItemModelDataRow {
                            return { ...itemModel, selected: false };
                        }
                    )
                );
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
            <ItemBox
                close={closeFixedScreen}
                onAlter={load}
            />
        )
    }

    function selectItem(index: number) {
        // Get selected item
        const target: ItemModelDataRow = items[index];

        // Update items
        setItems(
            items.map(
                function (item: ItemModelDataRow, _index: number): ItemModelDataRow {
                    if (_index !== index) {
                        return { ...item };
                    }
                    else {
                        return { ...item, selected: !target.selected }
                    }
                }
            )
        );
    }

    const selectAll: ChangeEventHandler<HTMLInputElement> = function (event: ChangeEvent<HTMLInputElement>): void {
        // Get target from event
        const target: HTMLInputElement = event.target;

        // Get checked field of target
        const checked: boolean = target.checked;

        // Updating items list
        setItems(
            items.map(
                function (item: ItemModelDataRow): ItemModelDataRow {
                    return { ...item, selected: checked }
                }
            )
        );
    }

    function showEditItemBox(index: number) {
        setPopup(
            <ItemBox
                close={closeFixedScreen}
                onAlter={load}
                target={items[index]}
            />
        )
    }

    async function removeItem(index: number) {
        try {
            // Sending HTTP request and receiving response
            const response: Response = await fetch(
                url,
                {
                    method: "DELETE",
                    body: JSON.stringify(
                        {
                            target: items[index]
                        }
                    )
                }
            )

            // Parsing repsonse's body into json
            const { success, message }: { success: boolean, message: string } = await response.json();

            // Failed case
            if (!success) {
                alert(message);
            }
            // Success case
            else {
                load().catch(
                    function (error: any) {
                        alert("Đã có lỗi xảy ra trong quá trình tải lại danh sách sản phẩm!");
                        console.error(error);
                    }
                )
            }
        }
        catch (error: any) {
            alert("Đã có lỗi xảy ra trong quá trình xử lý!");
            console.error(error);
        }
    }

    async function removeSelectedItems() {
        try {
            // Sending HTTP request and receiving response
            const response: Response = await fetch(
                url,
                {
                    method: "DELETE",
                    body: JSON.stringify(
                        {
                            targets: items.map(
                                function (item: ItemModelDataRow): ItemModel | undefined {
                                    if (item.selected) {
                                        return item;
                                    }
                                }
                            )
                        }
                    )
                }
            )

            // Parsing response's body into json
            const { success, message }: { success: boolean, message: string } = await response.json();

            // Failed case
            if (!success) {
                alert(message);
            }
            // Success case
            else {
                load().catch(
                    function (error: any) {
                        alert("Đã có lỗi xảy ra trong quá trình xử lý!");
                        console.error(error);
                    }
                )
            }
        }
        catch (error: any) {
            alert("Đã có lỗi xảy ra trong quá trình xử lý!");
            console.error(error);
        }
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
                <Button type="normal" value="Xóa" className="inlineBlock verticalAlignMiddle margin5px" onClick={removeSelectedItems} />

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
                                <input type="checkbox" onChange={selectAll} />
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
                                function (item: ItemModelDataRow, index: number): JSX.Element {
                                    return (
                                        <tr key={item.id}>
                                            <td className="textAlignLeft">
                                                <input type="checkbox" checked={item.selected} onChange={ function() {selectItem(index)} } />
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
                                                {/* Edit button */}
                                                <Button type="normal" value="Sửa" className="margin5px" onClick={ function () {showEditItemBox(index)} } />

                                                {/* Delete button */}
                                                <Button type="normal" value="Xóa" className="margin5px" onClick={ function () {removeItem(index)} } />
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