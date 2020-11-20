import React from 'react'
import SingleExercise from './SingleExercise'

export default ({ exercises, day }) => (
  <div className="workout">
    <div className="workout-header">
      <h2>{`${day} Routine`}</h2>
      <i className="fas fa-edit"></i>
    </div>
    {
      exercises.map(e =>
        <SingleExercise
          key={e.id}
          id={e.id}
          name={e.name}
          completed={e.completed}
          duration={e.duration}
        />
      )
    }
  </div>
)
