setTimeout(function () {
    $('.images > img:first-child').css({
        transform: 'translateX(-100%)'
    })
    $('.images > img:nth-child(2)').css({
        transform: 'translateX(-100%)'
    })
    $('.images > img:first-child').one('transitionend', function (event) {
        $(event.currentTarget).addClass('right').css({transform: 'none'})
    })
}, 2000)

setTimeout(function () {
    $('.images > img:nth-child(2)').css({
        transform: 'translateX(-200%)'
    })
    $('.images > img:nth-child(3)').css({
        transform: 'translateX(-100%)'
    })
    $('.images > img:nth-child(2)').one('transitionend', function (event) {
        $(event.currentTarget).addClass('right').css({transform: 'none'})
    })
}, 4000)

setTimeout(function () {
    $('.images > img:nth-child(3)').css({
        transform: 'translateX(-200%)'
    })
    $('.images > img:nth-child(4)').css({
        transform: 'translateX(-100%)'
    })
    $('.images > img:nth-child(3)').one('transitionend', function (event) {
        $(event.currentTarget).addClass('right').css({transform: 'none'})
    })
}, 6000)

setTimeout(function () {
    $('.images > img:nth-child(4)').css({
        transform: 'translateX(-200%)'
    })
    $('.images > img:nth-child(5)').css({
        transform: 'translateX(-100%)'
    })
    $('.images > img:nth-child(4)').one('transitionend', function (event) {
        $(event.currentTarget).addClass('right').css({transform: 'none'})
    })
}, 8000)

setTimeout(function () {
    $('.images > img:last-child').css({
        transform: 'translateX(-200%)'
    })
    $('.images > img:first-child').css({
        transform: 'translateX(-100%)'
    })
    $('.images > img:last-child').one('transitionend', function (event) {
        $(event.currentTarget).addClass('right').css({transform: 'none'})
    })
}, 8000)