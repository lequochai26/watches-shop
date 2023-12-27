import { ReactNode } from "react"
import { quicksand } from "../fonts"

export default function ManagementLayout(
    { children }: {
        children: ReactNode
    }
) {
    return (
        <div className={quicksand.className}>
            { children }
        </div>
    );
}