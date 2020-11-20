import React, { Component, Fragment } from 'react'
import Header from './Header'
import Main from './Main'

const workouts = [
  {
    id: 1,
    name: 'Tuesday Routine',
    exercises: [
      {
        id: 1,
        name: 'Bicycling',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum est volutpat ultricies consequat.',
        duration: 30,
        completed: false,
      },
      {
        id: 2,
        name: 'Running',
        description:
          'Praesent at ex sed diam pellentesque congue pellentesque eu felis. Aliquam erat volutpat.',
        duration: 45,
        completed: true,
      },
    ],
  },
  {
    id: 2,
    name: 'Saturday Routine',
    exercises: [
      {
        id: 3,
        name: 'Swimming',
        description:
          'Vivamus eu consequat ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        duration: 30,
        completed: true,
      },
      {
        id: 4,
        name: 'Running',
        description:
          'Cras vestibulum, libero vel convallis molestie, magna tortor tempor lacus, eu aliquet erat magna a lacus.',
        duration: 20,
        completed: true,
      },
    ],
  }
]

class App extends Component {
  constructor() {
    super()
    this.state = { workouts }
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  toggleCompleted(id) {
    const idx = id < 3 ? 0 : 1
    const workouts = this.state.workouts
    const oldExercises = workouts[idx].exercises
    const newExercises = oldExercises.map(e => {
      if(e.id === id) e.completed = !e.completed
      return e
    })
    workouts[idx].exercises = newExercises
    this.setState({ workouts })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Main
          workouts={this.state.workouts}
          toggleCompleted={this.toggleCompleted}
        />
      </Fragment>
    )
  }
}

export default App
