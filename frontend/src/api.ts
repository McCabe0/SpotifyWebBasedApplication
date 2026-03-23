export async function getHello() {
  const res = await fetch('http://localhost:8080/hello')
  return res.json()
}