export const getUser = async (email, password) => {
  const url = 'https://rancid-tomatillos.herokuapp.com/api/v1/login';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error("Error! No 200 Status Code Found.")
  }
  const user = await res.json();
  return user
}
