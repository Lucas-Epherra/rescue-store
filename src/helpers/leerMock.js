import items from '../data/mock.json'



export const leerMock = () => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(items)
    }, 3000)

  })
}

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = items.find((el) => el.id === id)

      resolve(item)
    }, 2000)
  })
}
