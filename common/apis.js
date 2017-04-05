import { salt } from './keys'

const host = 'http://192.168.1.102:1987'  // https://api.joephon.newteo.com
    , session = `${host}/session/?joephon=${salt}`
    , thought = `${host}/xwm/thought`

export {
    host,
    session,
    thought,
}