const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('hey!')
        }else{
            reject('upss!!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err))


    const somethingWillHappen2 = () => {
        return new Promise((resolve, reject) => {
            if(true){
                setTimeout(() => {
                    resolve('hey!')
                }, 2000)
            }else{
                const error = new Error('Ups!!');
                reject(error)
            }
        })
    }
    

    somethingWillHappen2()
    .then(resolve => console.log(resolve))
    .catch(err => console.log(err))

    Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.error(err)
    })