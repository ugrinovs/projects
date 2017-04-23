import React from 'react'

const Dropdown = (props) => {
  const {
    isOpen,
    children
  } = props;

  return (
    <div>
      {isOpen ? children : null}
    </div>
  )
}

Dropdown.defaultProps = {
  isOpen: false
}

export default Dropdown;
