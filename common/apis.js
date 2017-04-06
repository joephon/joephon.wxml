import { salt } from './keys'

const host = 'http://192.168.1.104:1987'  // https://api.joephon.newteo.com
    , session = `${host}/session/?joephon=${salt}`
    , thought = `${host}/xwm/thought`
    , thoughts = `${host}/xwm/thought/list/show`

export {
    host,
    session,
    thought,
    thoughts,
}