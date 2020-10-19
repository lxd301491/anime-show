import anime from "./anime.es.js";

var seekProgressEl = document.querySelector('.progress');
seekProgressEl.oninput = function() {
  animation.seek(animation.duration * (seekProgressEl.value / 100));
};

var flightRadius = 350;
var originGround = 50;
var originVertical = 17;
var originHorizontal = 30;
var attenuate = .8;
var scaleRate = .6;
var scaleRadius = 20;

var animation = anime.timeline({
    autoplay: true
})

// step 1
animation
    .add({
        targets: '#orangutan-ball',
        right: 0,
        top:{
            value: originGround - originHorizontal  + '%',
            duration: 0,
            easing: 'linear'
        },
        rotate: '0turn',
        duration: 0,
        easing: 'linear',
    })
    .add({
        targets: '#orangutan-ball',
        right: originVertical + '%',
        top:{
            value: originGround + '%',
            duration: flightRadius,
            easing: 'easeInCubic'
        },
        duration: flightRadius,
        easing: 'linear',
    })
    .add({
        targets: '#orangutan-ball',
        right: originVertical + '%',
        top: originGround + '%',
        scaleY: [
            {
                value: scaleRate,
                duration: scaleRadius,
                easing: 'easeOutCubic'
            },
            {
                value: 1,
                duration: scaleRadius,
                easing: 'easeInCubic'
            }
        ],
        duration: scaleRadius * 2,
        easing: 'linear',
    })
    .add({
        targets: '#orangutan-ball',
        right: originVertical * (1 + attenuate) + '%',
        top: [
            {
                value: originGround - originHorizontal * attenuate + '%',
                duration: flightRadius,
                easing: 'easeOutCubic'
            },
            {
                value: originGround + '%',
                duration: flightRadius,
                easing: 'easeInCubic'
            }
        ],
        duration: flightRadius * 2,
        easing: 'linear',
    })
    .add({
        targets: '#orangutan-ball',
        right: originVertical * (1 + attenuate) + '%',
        top: originGround + '%',
        scaleY: [
            {
                value: scaleRate,
                duration: scaleRadius,
                easing: 'easeOutCubic'
            },
            {
                value: 1,
                duration: scaleRadius,
                easing: 'easeInCubic'
            }
        ],
        duration: scaleRadius * 2,
        easing: 'linear',
    })
    .add({
        targets: '#orangutan-ball',
        right: originVertical * (1 + attenuate + Math.pow(attenuate, 2)) + '%',
        top: [
            {
                value: originGround - originHorizontal * Math.pow(attenuate, 2) + '%',
                duration: flightRadius,
                easing: 'easeOutCubic'
            },
            {
                value: '50%',
                duration: flightRadius,
                easing: 'easeInCubic'
            }
        ],
        duration: flightRadius * 2,
        easing: 'linear',
    })
    .add({
        targets: '#orangutan-ball',
        right: originVertical * (1 + attenuate + Math.pow(attenuate, 2)) + '%',
        top: originGround + '%',
        scaleY: [
            {
                value: scaleRate,
                duration: scaleRadius,
                easing: 'easeOutCubic'
            },
            {
                value: 1,
                duration: scaleRadius,
                easing: 'easeInCubic'
            }
        ],
        duration: scaleRadius * 2,
        easing: 'easeOutExpo',
    })
    .add({
        targets: '#orangutan-ball',
        right: originVertical * (1 + attenuate +  Math.pow(attenuate, 2)  +  Math.pow(attenuate, 3)) + '%',
        top: [
            {
                value: originGround - originHorizontal * Math.pow(attenuate, 3) + '%',
                duration: flightRadius,
                easing: 'easeOutCubic'
            },
            {
                value: originGround + '%',
                duration: flightRadius,
                easing: 'easeInCubic'
            }
        ],
        duration: flightRadius * 2,
        easing: 'linear',
    })
    .add({
        targets: '#orangutan-ball',
        right: originVertical * (1 + attenuate +  Math.pow(attenuate, 2)  +  Math.pow(attenuate, 3)) + '%',
        top: originGround + '%',
        scaleY: [
            {
                value: scaleRate,
                duration: scaleRadius,
                easing: 'easeOutCubic'
            },
            {
                value: 1,
                duration: 300,
                easing: 'spring(2, 80, 10, 0)'
            }
        ],
        duration: scaleRadius * 4,
        complete: function(anim) {
            $('div [data-step="1"]').hide();
            $('div [data-step="2"]').show();
        }
    })
// step2
   .add({
    targets: '#orangutan',
    translateX: {
        value: '-50%',
        duration: 10
    },
    translateY: {
        value: '-50%',
        duration: 10
    },
    scale: {
        value: 1,
        duration: 200,
        delay: 10,
        easing: 'spring(2, 120, 10, 0)'
    },
    duration: 200
   })

