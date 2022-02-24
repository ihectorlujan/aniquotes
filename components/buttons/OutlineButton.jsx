import styled from "styled-components"

const Button = styled.button`
  &.btn {
    margin: 0px 10px;
    border: 2px solid black;
    border-radius: 5px;
    background-color: white;
    color: black;
    padding: 6px 12px;
    cursor: pointer;
  }

  &.danger {
    border-color: #d90d32;
    color: #d90d32;
  }

  &.danger:hover {
    background: #d90d32;
    color: white;
  }

  &.primary {
    border-color: #1b65a6;
    color: #1b65a6;
  }

  &.primary:hover {
    background: #1b65a6;
    color: white;
  }
`

const OutlineButton = (props) => {
  return <Button {...props}>{props.children}</Button>
}

export default OutlineButton
