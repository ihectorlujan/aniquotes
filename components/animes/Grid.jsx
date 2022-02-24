import styled from "styled-components"
const Wrap = styled.div`
  overflow-y: scroll;
  height: 800px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`

const Grid = (props) => {
  return <Wrap>{props.children}</Wrap>
}

export default Grid
