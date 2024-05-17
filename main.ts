input.onPinPressed(TouchPin.P0, function () {
    basic.showString("Bru stop")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("That doesnt do anything")
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("https://makecode.microbit.org/#editor")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("What are you trying to find")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Neither does that")
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("Dont continue")
})
input.onGesture(Gesture.Shake, function () {
    response = randint(1, 10)
    if (response == 1) {
        basic.showString("Most Likely")
    } else if (response == 2) {
        basic.showString("Go away")
    } else if (response == 3) {
        basic.showString("Skibidi Toilet")
    } else if (response == 4) {
        basic.showString("Its a one in 10 Chance")
    } else if (response == 5) {
        basic.showString("No")
    } else if (response == 6) {
        basic.showString("Yes")
    } else if (response == 7) {
        basic.showString("Why do you ask? ")
    } else if (response == 8) {
        basic.showString("Definitely not")
    } else if (response == 9) {
        basic.showString("Try again")
    } else if (response == 10) {
        basic.showString("Well mabye")
    } else {
        basic.showString("How did you get this?")
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("Are you going to try anything")
})
let response = 0
basic.showString("Shake to play")
