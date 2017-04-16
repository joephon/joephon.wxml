class Base {
    constructor(source) {
        this.source = source
    }

    get(start, success, fail, data = {}) {
      start()
       wx.request({
         url: this.source,
         data,
         method: 'GET', 
         success,
         fail,
       }) 
    }

    post(start, success, fail, data = {}) {
      start()
       wx.request({
         url: this.source,
         data,
         method: 'POST', 
         success,
         fail,
       }) 
    }
}

export default class Http extends Base {
    constructor(source, id) {
        super(source)
        this.id = id
    }

    getById(start, success, fail, data = {}) {
      start()
       wx.request({
         url: `${this.source}${this.id}`,
         data,
         method: 'GET', 
         success,
         fail,
       })         
    }

    postById(start, success, fail, data = {}) {
      start()
       wx.request({
         url: `${this.source}${this.id}`,
         data,
         method: 'POST', 
         success,
         fail,
       })         
    }
}

