import styled from "styled-components"

const Nav = styled.nav`
  width: 100%;
  background-color: #4ab0d9;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &.fixed {
    overflow: hidden;
    position: fixed;
    top: 0;
    margin-bottom: 50px;
  }
`

const Navbar = (props) => {
  return <Nav {...props}>{props.children}</Nav>
}

export default Navbar
