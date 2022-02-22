export default function users(fail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(fail) {
                reject('epic fail');
            } else {
                resolve({
                    users: [
                        {id: 0, name: 'first'},
                        {id: 1, name: 'second'},
                        {id: 2, name: 'third'}
                    ]
                });
            }
        }, 2000);
    });
}
