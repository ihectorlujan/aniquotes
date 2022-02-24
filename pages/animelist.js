import getAllAnimes from "../src/getAllAnimes"
import { useEffect, useState } from "react"
import Navbar from "../components/navbar/Navbar"
import OutlineButton from "../components/buttons/OutlineButton"
import Link from "next/link"
import Quote from "../components/cards/Quote"
import Container from "../components/container/Container"
import Anime from "../components/animes/Anime"
import Grid from "../components/animes/Grid"
import Title from "../components/cards/Title"

const Animelist = () => {
  const [animes, setAnimes] = useState([])

  useEffect(async () => {
    setAnimes(await getAllAnimes())
  }, [])

  return (
    <Container>
      <Navbar className="fixed">
        <h1>Aniquotes!</h1>
        <Link href={"/"}>
          <a>
            <OutlineButton className="btn danger">Go back!</OutlineButton>
          </a>
        </Link>
      </Navbar>

      <Quote className="all">
        <Title>All animes available!</Title>
        <Grid>
          {animes.sort().map((anime) => (
            <Anime key={anime}>{anime}</Anime>
          ))}
        </Grid>
      </Quote>
    </Container>
  )
}

export default Animelist
