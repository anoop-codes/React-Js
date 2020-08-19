const getAddress = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('India')
    }, 4000)
});

const getName = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('anoop kumar')
    }, 4000)
});


function warpFunction(promise) {
    let status = 'pending...';
    let result = null;
    let suspender = promise.then((r) => {
        status = 'success..';
        result = r;
    }).catch((error) => {
        status = 'error '
        result = error
    })
}