'use client'

import Button from "../components/Button";
import InputField from "../components/inputField";

export default function ManagementPage() {
    return (
        <div>
            {/* Header */}
            <div className="block widthFitParent height50px backgroundWhite borderBlackThin">
                {/* Ruler */}
                <div className="ruler"></div>

                {/* Add button */}
                <Button type="normal" value="Thêm" className="inlineBlock verticalAlignMiddle margin5px marginLeft15px" />

                {/* Delete button */}
                <Button type="normal" value="Xóa" className="inlineBlock verticalAlignMiddle margin5px" />

                {/* Search keyword input field */}
                <InputField type="text" placeholder="Từ khóa tìm kiếm" className="inlineBlock verticalAlignMiddle margin5px" />

                {/* Search button */}
                <Button type="normal" value="Tìm kiếm" className="inlineBlock verticalAlignMiddle margin5px" />

                {/* Reload button */}
                <Button type="normal" value="Tải lại" className="inlineBlock verticalAlignMiddle margin5px" />
            </div>

            {/* Body */}
            <div>
                {/* Data table */}
                <table className="widthFitParent">
                    {/* Table header */}
                    <thead>
                        <tr>
                            <th className="textAlignLeft">
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

                    </tbody>
                </table>
            </div>
        </div>
    );
}