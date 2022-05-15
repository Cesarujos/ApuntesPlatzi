const fetchData = require('../promise/fetchData.js')
const API = 'https://rickandmortyapi.com/api/character/'

const getFromApi = async () => {
  const data1 = await fetchData(API)
  const { count } = data1.info
  const { id } = data1.results[0]

  const data2 = await fetchData(`${API}/${id}`)
  const { name } = data2
  const { url } = data2.origin

  const data3 = await fetchData(url)
  const { dimension } = data3

  console.log(count)
  console.log(name)
  console.log(dimension)
}
getFromApi()