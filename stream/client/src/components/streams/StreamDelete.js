import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import Modal from "../Modal"
import history from "../../history"
import { fetchStream, deleteStream } from "../../store/actions"

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  renderActions() {
    const id = this.props.match.params.id

    return (
      <>
        <button
          onClick={() => {
            this.props.deleteStream(id)
          }}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    )
  }

  renderContent() {
    if (!this.props.stream) {
      return <div>Are you sure you want to delete this stream?</div>
    }

    return (
      <div>
        Are you sure you want to delete this stream {this.props.stream.title}?
      </div>
    )
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => {
            history.push("/")
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
)
