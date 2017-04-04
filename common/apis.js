import { salt } from './keys'

const host = 'http://192.168.1.100:1987'  // https://api.joephon.newteo.com
    , session = `${host}/session/?joephon=${salt}`

export {
    host,
    session,
}