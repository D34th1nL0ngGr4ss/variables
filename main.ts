input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(350)
    Jim += 1
    basic.showString("JIM")
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(350)
    Jefs_TIE += 1
    basic.showString("TIE")
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(350)
    Bill += 1
    basic.showString("BILL")
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("JIM")
    basic.pause(200)
    basic.showNumber(Jim)
    basic.pause(500)
    basic.clearScreen()
    basic.showString("BILL")
    basic.pause(200)
    basic.showNumber(Bill)
    basic.pause(500)
    basic.clearScreen()
    basic.showString("JEF'S TIE")
    basic.pause(200)
    basic.showNumber(Jefs_TIE)
    basic.pause(500)
    basic.clearScreen()
})
let Jefs_TIE = 0
let Bill = 0
let Jim = 0
Jim = 0
Bill = 0
Jefs_TIE = 0
