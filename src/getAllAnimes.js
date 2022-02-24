const getAllAnimes = async () => {
  const request = await fetch(
    "https://animechan.vercel.app/api/available/anime"
  )
  const response = await request.json()
  return response
}

export default getAllAnimes
