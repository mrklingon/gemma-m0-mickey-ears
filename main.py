input.onGesture(Gesture.Shake, function () {
    strip.stopAllAnimations()
    strip.showAnimation(light.sparkleAnimation, 3000)
})
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.D3, 49)
strip.setBrightness(30)
forever(function () {
    strip.showAnimation(light.rainbowAnimation, 3000)
    strip.showAnimation(light.runningLightsAnimation, 3000)
    strip.showAnimation(light.cometAnimation, 3000)
    strip.showAnimation(light.theaterChaseAnimation, 3000)
    strip.showAnimation(light.colorWipeAnimation, 3000)
})
