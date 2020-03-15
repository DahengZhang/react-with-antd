import jsonp from 'jsonp';

export default class JSONP {
    static fetch (options) {
        return new Promise((resolve, reject) => {
            jsonp(options.url, {
                param: 'callback'
            }, (err, resoponse) => {
                if (err || resoponse.status === '0') {
                    reject(err || resoponse.info)
                }
                resolve(resoponse.lives[0])
            })
        })
    }
}