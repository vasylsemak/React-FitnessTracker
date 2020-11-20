import React from 'react'
import Analytics from './Analytics'
import WorkoutList from './WorkoutList'

export default ({ workouts, toggleCompleted }) => (
  <div id="container">
    <Analytics workouts={workouts} />
    <WorkoutList workouts={workouts} toggleCompleted={toggleCompleted} />
  </div>
)
