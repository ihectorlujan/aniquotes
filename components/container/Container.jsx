import styled from "styled-components"

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Container = (props) => {
  return <Content>{props.children}</Content>
}

export default Container
