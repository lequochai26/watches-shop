// Interface:
interface FixedScreenProps {
    content?: JSX.Element;
    backgroundColor?: string;
}

// Component:
export default function FixedScreen({ content, backgroundColor }: FixedScreenProps) {
    // Background color validation
    if (!backgroundColor) {
        backgroundColor = "rgba(0,0,0,0.5)";
    }

    // View:
    return (
        content && (
            <div className="block widthFitScreen heightFitScreen positionFixed left0px right0px textAlignCenter" style={{ backgroundColor: backgroundColor }}>
                {/* Ruler */}
                <div className="ruler"></div>

                {/* Content */}
                { content }
            </div>
        )
    );
}