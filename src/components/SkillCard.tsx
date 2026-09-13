// import React from 'react'
import { Heart } from 'lucide-react'
import { useState } from "react"

type SkillCardProps = {
  name: string
}
const SkillCard = ({name}: SkillCardProps) => {
    const [liked , setLiked] = useState(false)
    const likes = liked ? 1 : 0
  return (
    <article className="feature-card island-shell rise-in rounded-3xl p-5">
        <div className="space-y-2">
            <p className="island-kicker">Skill</p>
            <h2 className="display-text">{name}</h2>
            <p>{likes} {likes === 1 ? 'like' : 'likes'}</p>
        </div>

        <button onClick={() => setLiked((current)=>  !current)} type="button">
            <Heart fill={liked? 'currentColor' : "none"} size={18} /> 
        </button>
    </article>

  )
}

export default SkillCard
