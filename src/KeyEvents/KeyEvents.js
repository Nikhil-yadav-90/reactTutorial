import React from "react";
import { HotKeys } from 'react-hotkeys';




const KeyEvent = ()=>{

    const keymap = {
        SNAP_LEFT: "command+left",
        DELETE_NODE: ["del", "backspace"]
    }



    return(
            <HotKeys keyMap = {keymap
            } onKeyDown>
        <div>
            
            <h2>This is Example Of Key Event</h2>
            <form>
                Name: <input/>
            </form>
          
        </div>
            </HotKeys>
    )
}


export default KeyEvent