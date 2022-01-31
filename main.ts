radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == Player) {
        basic.showString("Werewolf")
    } else {
        basic.showString("Town")
    }
})
let Player = 0
radio.setGroup(173)
Player = 1
