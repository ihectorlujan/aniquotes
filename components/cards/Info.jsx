import styled from "styled-components"

const I = styled.div`
  margin: 20px;
  padding: 15px;
  width: 80%;
  border: 1px solid;
  border-color: #1e1d40;
  border-radius: 5px;
  background-color: white;
  color: black;
`

const Info = (props) => {
  return <I>{props.children}</I>
}

export default Info
