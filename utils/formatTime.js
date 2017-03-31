export default time => {
    let minute, second

    if (time > 3599) return '59\' 59"'

    else if(time >= 60) {
        minute = Math.floor(time / 60) + '\''
        second = time % 60 + '"'
    } 
    
    else {
        minute = ''
        second = time + '"'
    }

    return minute + ' ' + second
}