# Muselab LoRaWan plugin 

A PXT plugin library for Muselab LoRaWan module

## Blocks

### 1. Initialized LoRa Shield

```sig

```

Used to setinitialized required serial communication settings

### 2. Send Value of Pin0

```sig

```

Read analog value of the selected Pin (P0, P1, P2 or P12) and send the value as a confirmed message

### 3. Send confirmed message

```sig

```

Sending a message and request the server to confirm having received the payload

### 4. Send unconfirmed message

```sig

```

Sending a message WITHOUT requesting the server to confirm having received the payload

### 5. Select your region

```sig

```

Setting the operatinig frequency (AS923, US915, EU434, EU868, AU920)

### 6. Set Device Address

```sig

```

If used, it we will change the device specific address (MAC Address).

### 7. Set Network Session Key

```sig

```

Set the Network Session Key is used for ABP authentification between the node and the network.

### 8. Set Application Session Key

```sig

```

Appskey is used for encryption and decryption of the payload

## License

MIT

## Supported targets

* for PXT/calliope
* for PXT/microbit

(The metadata above is needed for package search.)