const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try{
        const data = await(fetchData(url_api))
        console.log(data.info.count)
        const data1 = await(fetchData(`${API}${data.results[0].id}`))
        console.log(data1.name)
        const data2 = await(fetchData(data1.origin.url))
        console.log(data2.dimension)
    }catch(error){
        console.error(error)
    }
}

console.log('antes');
anotherFunction(API);
console.log('despues')