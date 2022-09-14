input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    for (let index = 0; index < 2; index++) {
        basic.showString("Hello!")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        `)
    for (let index = 0; index < 2; index++) {
        basic.showString("Good")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . # . # .
        . . . . .
        . # # # .
        `)
    for (let index = 0; index < 2; index++) {
        basic.showString("Hi")
    }
})
