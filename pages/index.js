import Link from "next/link"
import getQuote from "../src/getQuote"
import Quote from "../components/cards/Quote"
import Title from "../components/cards/Title"
import Container from "../components/container/Container"
import { useState } from "react"
import OutlineButton from "../components/buttons/OutlineButton"
import Navbar from "../components/navbar/Navbar"
import Character from "../components/cards/Character"
import Info from "../components/cards/Info"

export default function Home() {
  const [quote, setQuote] = useState({ anime: "", character: "", quote: "" })
  const [isClicked, setIsClicked] = useState(false)

  const getData = async () => {
    setQuote(await getQuote())
  }

  return (
    <Container>
      <Navbar>
        <h1>Aniquotes!</h1>

        <div>
          <OutlineButton
            className="btn primary"
            onClick={() => {
              getData()
              setTimeout(() => {
                setIsClicked(true)
              }, 400)
            }}
          >
            Generate random!
          </OutlineButton>
          <Link href={"/animelist"}>
            <a>
              <OutlineButton className="btn danger">All animes!</OutlineButton>
            </a>
          </Link>
        </div>
      </Navbar>

      {isClicked ? (
        <Quote>
          <Title>{quote.anime}</Title>
          <Character>{quote.character}</Character>
          <Info>{quote.quote}</Info>
        </Quote>
      ) : (
        <div style={{ margin: "40px", width: "600px" }}>
          <h1>Welcome to aniquotes!</h1>
          <h3>
            This is an app for learn the folder structure of Next.js, use
            styled-components within and consume an restful API
            <hr />
            <small>
              *Animechan is a free restful API serving quality anime quotes.
            </small>
          </h3>

          <h4></h4>
        </div>
      )}
    </Container>
  )
}
