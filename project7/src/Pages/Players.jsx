import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./Auth/FirebaseConfig";
import { getDocs, collection } from "firebase/firestore";

function Players() {

    const colRef = collection(db, "players");
    const navigate = useNavigate();
    const [players, setPlayers] = useState([]);

    // Define first choices
    const [choices, setChoices] = useState([
        { value: 'Skill Position', id: 'Skill' },
        { value: 'Offensive Line', id: 'Line' },
        { value: 'Front Seven', id: 'Front' },
        { value: 'Secondary', id: 'Second' },
    ]);

    // Fetch firestore data
    useEffect(() => {
        getPlayers();
    }, []);

    const getPlayers = async () => {
        try {
            const data = await getDocs(colRef);
            const fetchedData = {};                 // Create empty object to store player data
            data.docs.forEach((doc) => {            // For each document in the database, add the document
                fetchedData[doc.id] = doc.data();   // to the object with the id as the key
            })
            setPlayers(fetchedData);            
        } catch (error) {
            console.error(error);
        }
    };



    const changeChoices = (positionGroup) => {

        // If a group is selected, update the choices with the 
        // 4 player names of the selected position group.
        if (players[positionGroup]) {
            const updatedChoices = Object.entries(players[positionGroup]).map(    // Map through each object of position group
                ([playerId, playerInfo]) => ({
                    value: playerInfo.name,   // Change the value from the position group to player name
                    id: playerId,             // Change the id from position group to lastname
                    info: playerInfo,         // Add player info in order to pass later
                })
            );

            setChoices(updatedChoices); // Set new choices

        // If a player is selcted, pass the player info
        // and navigate to the player component. 
        } else {

            // Find the chosen players
            const player = choices.find((choice) => choice.id === positionGroup);

            // Pass the player info and navigate
            if(player){
                navigate(`/~rbmyres/CS354/Project7/project7/player/${player.id}`, {
                    state: { player: player.info }, 
                });
            }
        }
    };

    return (
        <div>
            <ul id="firstChoices" className="choices">
                {choices.map((choice) => (
                    <li key={choice.id}>
                        <button onClick={() => changeChoices(choice.id)}>
                            {choice.value}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Players;
