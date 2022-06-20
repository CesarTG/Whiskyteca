const promesa = (time, task) =>{

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(task)            
        }, time);
    })
}

export default promesa;