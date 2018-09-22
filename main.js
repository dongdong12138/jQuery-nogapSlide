let n
reset()

setInterval(() => {
    
    makeLeave(getImage(n)).one('transitionend', (event) => {
        makeEnter($(event.currentTarget))
    })
    makeCurrent(getImage(n+1))
    n ++
}, 2000)

function getImage (n) {
    return $(`.images > img:nth-child(${x(n)})`)
}

function x (n) {
    if (n > 5) {
        n = n % 5
        if (n === 0) {
            n = 5
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