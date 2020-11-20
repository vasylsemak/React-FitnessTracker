import React from 'react'
import SingleWorkout from './SingleWorkout'

export default ({ workouts }) => (
  <div id="workouts">
    <SingleWorkout exercises={workouts[0].exercises} day={workouts[0].name} />
    <SingleWorkout exercises={workouts[1].exercises} day={workouts[1].name} />
  </div>
)
