import { ReactNode } from "react"
import { quicksand } from "../fonts"

export default function ManagementLayout(
    { children }: {
        children: ReactNode
    }
) {
    return (
        <html>
            <body className={`${quicksand.className}`}>
                { children }
            </body>
        </html>
    );
}