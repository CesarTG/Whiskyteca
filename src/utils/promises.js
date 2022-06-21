const promesa = (time, task) =>{

    return new Promise((resolve, reject) => {
        
        setTimeout(() => { 
            if (time > 2000){
                 resolve(task)
            } else{
                reject(console.log("Error, estas borracho, tray again tumorrow!"))
            }                       
        }, time);       
       
    })
}

export default promesa;