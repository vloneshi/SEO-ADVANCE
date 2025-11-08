import React from "react"
import AboutTeamCard from "./aboutTeamCard"

// Import local images
import Team1 from "../../images/froggy.png"
import Team2 from "../../images/jellyfish.png"
import Team3 from "../../images/sunny1.jpg.png"


const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard
        imgSrc={Team1}
        position="Froggy Crochet"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc={Team2}
        position="JellyFish Crochet"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc={Team3}
        position="Sunny Crochet"
      ></AboutTeamCard>
    </div>
  )
}

export default AboutGrid
