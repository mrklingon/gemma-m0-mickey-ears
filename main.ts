input.touchD1.onEvent(ButtonEvent.Up, function () {
    strip.stopAllAnimations()
    magic(spell)
    pixel.setColor(pixel.rgb(randint(10, 120), randint(10, 120), randint(10, 120)))
    spell += 1
    if (spell > 3) {
        spell = 0
    }
})
function magic (num: number) {
    if (num == 0) {
        strip.showAnimation(light.sparkleAnimation, 3000)
    }
    if (num == 1) {
        strip.showAnimation(light.rainbowAnimation, 4000)
    }
    if (num == 2) {
        strip.showAnimation(light.cometAnimation, 4000)
    }
    if (num == 32) {
        strip.showAnimation(light.runningLightsAnimation, 3000)
    }
}
let spell = 0
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.D0, 30)
strip.setBrightness(30)
spell = 0
