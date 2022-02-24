import styled from "styled-components"

const Char = styled.div`
  margin: 10px;
  font-weight: bold;
  color: #1e1d40;
`

const Character = (props) => {
  return <Char>{props.children}</Char>
}

export default Character
