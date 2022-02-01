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
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Werewolf Go") {
        if (Game_On == 1) {
        	
        }
    }
})
radio.onReceivedValue(function (name, value) {
    Player_Amount = value
})
let Player_Amount = 0
let Dead = 0
let Night_Time = 0
let Game_On = 0
let TownWerewolf = 0
let Player = 0
radio.setGroup(173)
Player = 1
TownWerewolf = 1
Game_On = 0
Night_Time = 0
Dead = 0
basic.forever(function () {
    if (Dead == 1) {
        basic.showString("You Died")
    }
    if (Night_Time == 1) {
        if (TownWerewolf == 2) {
        	
        } else {
            basic.showString("ZZZ")
        }
    } else {
    	
    }
})
