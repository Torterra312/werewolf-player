radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == Player) {
        basic.showString("Werewolf")
        TownWerewolf = 2
    } else {
        basic.showString("Town")
        TownWerewolf = 1
    }
    Game_On = 1
    Night_Time = 1
    if (receivedNumber == 100 * Player) {
        Dead = 1
    }
})
input.onButtonPressed(Button.A, function () {
    if (Player_Option == 1) {
        Player_Option = Player_Amount
    } else {
        Player_Option += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Night_Time == 1) {
        Player_Choice = Player_Option
        radio.sendNumber(Player_Option * 100)
        Player_Choice = 0
        Night_Time = 0
    } else {
        Player_Choice = Player_Option
        radio.sendNumber(Player_Option * 10000)
        Player_Choice = 0
        Night_Time = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (Player_Option == Player_Amount) {
        Player_Option = 1
    } else {
        Player_Option += 1
    }
})
radio.onReceivedValue(function (name, value) {
    Player_Amount = value
})
let Player_Amount = 0
let Player_Option = 0
let Player_Choice = 0
let Dead = 0
let Night_Time = 0
let Game_On = 0
let TownWerewolf = 0
let Player = 0
radio.setGroup(173)
Player = 2
TownWerewolf = 1
Game_On = 0
Night_Time = 0
Dead = 0
Player_Choice = 0
Player_Option = Player
basic.forever(function () {
    if (Dead == 1) {
        basic.showString("You Died")
    } else {
        if (Night_Time == 1) {
            if (Player_Choice != 0) {
                basic.showString("ZZZ")
            } else if (TownWerewolf == 2) {
                basic.showNumber(Player_Option)
            } else {
                basic.showString("ZZZ")
            }
        } else {
            basic.showNumber(Player_Option)
        }
    }
})
