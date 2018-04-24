serial.onDataReceived(serial.delimiters(Delimiters.NewLine), () => {
    OLED.showString(serial.readLine())
})
input.onButtonPressed(Button.AB, () => {
    MuseLoRa.getDeviceID()
})
input.onButtonPressed(Button.A, () => {
    MuseLoRa.sendmsg("12345678")
})
input.onButtonPressed(Button.B, () => {
    MuseLoRa.sendcmsg("12345678")
})
