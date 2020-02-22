export const getUser = async (url, options) => {
  return await fetch(url, options)
    .then(res => {
      if (!res.ok) {
        throw Error("Error! No 200 Status Code Found.")
      }
      return res.json()
    })
}
