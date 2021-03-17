import { useHotkeys } from "@blueprintjs/core";
import React, { createRef, useMemo } from "react";
 
 const HotKeyComponent = ()=> {
    const inputRef = createRef<HTMLInputElement>();
 
    // important: hotkeys array must be memoized to avoid infinitely re-binding hotkeys
    const hotkeys = useMemo(() => [
        {
            combo: "R",
            global: true,
            label: "Refresh data",
            onKeyDown: () => console.info("Refreshing data..."),
        },
        {
            combo: "F",
            group: "Input",
            label: "Focus text input",
            onKeyDown: inputRef.current?.focus(),
        },
    ], []);
    const { handleKeyDown, handleKeyUp } = useHotkeys(hotkeys);
 
    return (
        <div tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
            Press "R" to refresh data, "F" to focus the input...
            <InputGroup inputRef={inputRef} />
        </div>
    );
}

export default HotKeyComponent;