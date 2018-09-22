let n
let size = $('.images > img').length 
$('.info > span:last-child').text(size)
reset()

var timeId = setTimer()
$('.window').on('mouseenter', () => {
    window.clearInterval(timeId)
})
$('.window').on('mouseleave', () => {
    timeId = setTimer()
})





// 封装函数
function setTimer () {
    return setInterval(() => {
        makeLeave(getImage(n)).one('transitionend', (event) => {
            makeEnter($(event.currentTarget))
        })
        makeCurrent(getImage(n+1))
        n ++
        
    }, 2000)
}
function getImage (n) {
    return $(`.images > img:nth-child(${x(n)})`)
}
function x (n) {
    if (n > size) {
        n = n % size
        if (n === 0) {
            n = size
        }
    }
    return n
}
function reset () {
    n = 1
    $(`.images > img:nth-child(${n}`).addClass('current').siblings().addClass('enter')
}
function makeCurrent ($node) {
    $node.removeClass('enter leave').addClass('current')
    $('.info > span:first-child').text( $node.index()+1 )
    return $node
}
function makeLeave ($node) {
    $node.removeClass('enter current').addClass('leave')
    return $node
}
function makeEnter ($node) {
    $node.removeClass('current leave').addClass('enter')
    return $node
}