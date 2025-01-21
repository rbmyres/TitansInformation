import React from 'react'
import stadium from '/img/stadium.jpg'

function Home() {
  return (
    <main>
        <h1>Tennessee Titans</h1>

        <p>The Tennessee Titans are a NFL football team who are optimistic about their team heading into the 2023 NFL season. This website will give some introductory information about some of the Titans players and staff, and give some insight into the history of the Titans.         </p>

        <p>To start, here is an explanation of how the players were split into positions:   </p>
        
        <ul>
            <li>Skill Position players are those who primarily throw, catch, and run the ball which includes quarterbacks, running backs, wide receivers, and tight ends.            </li>
            <li>Offensive Line is self explanatory, as these are the players who block by creating gaps in the run game and protecting the quarterback in the passing game.</li>
            <li>Front Seven, as the name suggests, are the seven players who make up the first line of defense. They often fight the offensive line, stop the run, and rush the quarterback.   </li>
            <li>Secondary is the last line of defense. These are the players who primarily defend the pass by guarding the skill position players in either man or zone coverage.             </li>
        </ul>
        <img className="stadium" src={stadium} alt="titans stadium" />
    </main>
  )
}

export default Home