import React from 'react';

class ListGroup extends React.Component {
  render() {
    const {children} = this.props;
    return(
      <ul className="list-group">
          <li className="list-group-item">{children[0]}</li>
          <li className="list-group-item">{children[1]}</li>
      </ul>
    )
  }
}

export default ListGroup;