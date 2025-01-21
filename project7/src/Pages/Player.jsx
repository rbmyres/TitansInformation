import React from "react";
import { useLocation } from "react-router-dom";

function Player() {

    // Recieve and set the player info
    const location = useLocation();
    const { player } = location.state;

    return (
        <main>
            <div className="container">
                <div className = "item item-1"> { player.name }</div>
                <div className = "item item-2"> { player.paragraph }</div>
            </div>
        </main>
    );
}

export default Player;
