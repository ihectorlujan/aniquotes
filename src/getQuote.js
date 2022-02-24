const getQuote = async () => {
  const request = await fetch("https://animechan.vercel.app/api/random")
  const response = await request.json()
  return response
}

export default getQuote
