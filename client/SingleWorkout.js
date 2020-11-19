import React from 'react'
import SingleExercise from './SingleExercise'

export default () => (
  <div className="workout">
    <div className="workout-header">
      <h2>Tuesday Routine</h2>
      <i className="fas fa-edit"></i>
    </div>
    <SingleExercise />
    <div id="exercise-2" className="exercise-header">
      <i className="fas fa-check-circle"></i>
      <h3>Running</h3>
      <span>45 min</span>
    </div>
    <div>
      Praesent at ex sed diam pellentesque congue pellentesque eu felis.
      Aliquam erat volutpat. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos. Nunc vel orci
      laoreet, commodo quam in, dignissim purus. Nunc a lacinia eros, sed
      lobortis ipsum.
    </div>
  </div>
)
