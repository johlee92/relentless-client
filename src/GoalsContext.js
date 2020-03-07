import React from 'react'

const GoalsContext = React.createContext({
  annual_goals: [],
  monthly_goals: [],
  weekly_goals: [],
  currentGoals: [],
  goalsFetch: () => {},
})

export default GoalsContext;