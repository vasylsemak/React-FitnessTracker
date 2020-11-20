import React from 'react'
import Analytics from './Analytics'
import WorkoutList from './WorkoutList'

export default ({ workouts }) => (
  <div id="container">
    <Analytics workouts={workouts} />
    <WorkoutList workouts={workouts} />
  </div>
)
