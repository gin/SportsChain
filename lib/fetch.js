import fetch from 'isomorphic-fetch'

export default async function (pathname) {
  // Pass hash in pathname
  const u = `https://ipfs.io/ipfs/${pathname}`
  const res = await fetch(u)
  return res.json()
}
