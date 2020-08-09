import React from "react"
import { connect } from "react-redux"

class UserHeader extends React.Component {
  render() {
    const { user } = this.props
    if (!user) {
      return null
    }
    return <div className="header">{user.name}</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => ownProps.id === user.id),
  }
}

export default connect(mapStateToProps)(UserHeader)
