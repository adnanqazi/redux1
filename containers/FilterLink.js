import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})
/*note how children of FilterLink, from footer, are implicitly passed to Link as
props.children*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
