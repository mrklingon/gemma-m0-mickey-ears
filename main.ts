input.touchD1.onEvent(ButtonEvent.Up, function () {
    strip.stopAllAnimations()
    strip.showAnimation(light.sparkleAnimation, 3000)
})
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.D0, 30)
strip.setBrightness(30)
forever(function () {
    strip.showAnimation(light.colorWipeAnimation, 3000)
    strip.showAnimation(light.rainbowAnimation, 4000)
    strip.showAnimation(light.cometAnimation, 4000)
    strip.showAnimation(light.runningLightsAnimation, 3000)
})
