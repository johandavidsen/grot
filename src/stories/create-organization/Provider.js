import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux'

const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

export default function Provider({ story }) {
  return (
    <ReduxProvider store={store}>
        {story}
    </ReduxProvider>
  )
}
