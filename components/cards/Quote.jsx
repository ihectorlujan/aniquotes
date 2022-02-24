import styled from "styled-components"

const QuoteCard = styled.section`
  width: 60%;
  border-radius: 5px;
  box-shadow: 1px 1px 10px #777;
  color: white;
  background-color: #4ab0d9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px;
  padding: 10px;

  &.all {
    margin-top: 80px;
  }
`

const Quote = (props) => {
  return <QuoteCard {...props}>{props.children}</QuoteCard>
}

export default Quote
