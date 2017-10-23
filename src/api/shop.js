const _products = [
    { "id": 1, "title": "法拉利", "price": 55555, "count": 2 },
    { "id": 2, "title": "平板电脑Apple", "price": 500.01, "count": 10 },
    { "id": 3, "title": "IPnoneX", "price": 1000.99, "count": 5 }
]
export default {
    getProducts(cb) { // 此处cb为commit 
        setTimeout(() => cb(_products), 100)
    },
    buyProducts(products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1) ?
            cb(): errorCb()
        }, 100)
    }
}