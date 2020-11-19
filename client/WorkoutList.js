import React from 'react'
import SingleWorkout from './SingleWorkout'

export default () => (
  <div id="workouts">
    <SingleWorkout />
    <div className="workout">
      <div className="workout-header">
        <h2>Saturday Routine</h2>
        <i className="fas fa-edit"></i>
      </div>
      <div id="exercise-3" className="exercise-header">
        <i className="fas fa-check-circle"></i>
        <h3>Swimming</h3>
        <span>30 min</span>
      </div>
      <div>
        Vivamus eu consequat ante. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse sit amet mattis augue, eget interdum
        diam.
      </div>
      <div id="exercise-4" className="exercise-header">
        <i className="fas fa-check-circle"></i>
        <h3>Running</h3>
        <span>20 min</span>
      </div>
      <div>
        Cras vestibulum, libero vel convallis molestie, magna tortor tempor
        lacus, eu aliquet erat magna a lacus. Vestibulum mauris nibh,
        ultrices in tortor a, eleifend placerat mi. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. In dapibus sed felis pharetra luctus.
      </div>
    </div>
  </div>
)
