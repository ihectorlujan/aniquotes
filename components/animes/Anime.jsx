import styled from "styled-components"

const A = styled.span`
  color: black;
  padding: 0px 10px;
`
const Anime = (props) => {
  return <A>{props.children}</A>
}

export default Anime
