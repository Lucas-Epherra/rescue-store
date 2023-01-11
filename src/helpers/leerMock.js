import items from '../data/mock.json'



export const leerMock = () => {
    
    return new Promise((resolve, reject) => {

        setTimeout( () => {
          resolve(items)
        }, 3000)
  
      })
}