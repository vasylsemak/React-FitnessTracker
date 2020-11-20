import React from 'react'

export default ({ workouts }) => {
  const allExercises = workouts.reduce((accum, w) => [...accum, ...w.exercises], [])
  const completed = allExercises.filter(e => e.completed === true)
  const totalMinutes = completed.reduce((accum, e) => (accum + e.duration), 0)
  const percentage = completed.length / allExercises.length * 100

  return (
    <div id="analytics">
      <div id="analytics-content">
        <div id="analytics-header">
          <h2>Analytics</h2>
        </div>
        <dl id="analytics-list">
          <div>
            <dt>Total Minutes Exercised:</dt>
            <dd id="total-minutes">{totalMinutes}</dd>
          </div>
          <div>
            <dt>Favorite Exercise:</dt>
            <dd>Running</dd>
          </div>
          <div>
            <dt>Percentage Completed:</dt>
            <dd id="percentage-completed">{`${percentage}%`}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

