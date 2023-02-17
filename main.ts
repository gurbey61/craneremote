input.onButtonPressed(Button.A, function () {
    channel += 10
    radio.setGroup(channel)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("R")
    basic.showNumber(channel)
})
input.onButtonPressed(Button.B, function () {
    channel += 1
    radio.setGroup(channel)
})
input.onGesture(Gesture.Shake, function () {
    radio.setGroup(0)
})
let channel = 0
channel = 0
radio.setGroup(channel)
basic.forever(function () {
    radio.sendNumber(Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 180))
})
