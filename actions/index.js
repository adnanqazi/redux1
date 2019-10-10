let nextTodoId = 0
export const addTodo = text => (
  console.log(`action being created with text: ${text}`) ||
{
  type: 'ADD_TODO',
  id: nextTodoId++,
  text: text
})

//filter passed by footer.js is one among VisibilityFilters shown below
export const setVisibilityFilter = filter => (
console.log(`action being created with setVisibilityFilter: ${filter}`) ||
  {
  type: 'SET_VISIBILITY_FILTER',
  filter: filter
})

export const toggleTodo = id => (
console.log(`action being created with TOGGLE_TODO with id: ${id}`) ||
  {
  type: 'TOGGLE_TODO',
  id: id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
