import React, { Fragment } from 'react'

export default ({ id, name, completed, duration }) => (
  <Fragment>
    <div id={`exercise-${id}`} className="exercise-header">
      <i className="far fa-circle"></i>
      <h3>{name}</h3>
      <span>{`${duration} min`}</span>
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      fermentum est volutpat ultricies consequat. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos.
    </div>
  </Fragment>
)
