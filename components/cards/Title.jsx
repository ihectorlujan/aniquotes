import styled from "styled-components"

const Card = styled.div`
  padding: 20px 0px;
  border-radius: 4px;
  font-size: 24px;
  font-weight: 500;
  border-color: #1e1d40;
  color: #1e1d40;
  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = (props) => {
  return <Card>{props.children}</Card>
}

export default Title
