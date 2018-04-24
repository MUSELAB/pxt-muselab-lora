namespace MuseLoRa {
    let flag = true;

    export enum region {
        //% blockId="AS923"
        //% block="AS923"
        AS923,
        //% blockId="US915" 
        //% block="US915"
        US915,
        //% blockId="EU434"
        //% block="EU434"
        EU434,
        //% blockId="EU868"
        //% block="EU868"
        EU868,
        //% blockId="AU920"
        //% block="AU920"
        AU920
    }

    export enum inputPin {
        //% block="Pin0"
        P0,
        //% block="Pin1"
        P1,
        //% block="Pin2"
        P2,
        //% block="Pin12"
        P12
    }

    export enum channel {
        //% block="CH0"
        CH0 = 0,
        //% block="CH1"
        CH1 = 1,
        //% block="CH2"
        CH2 = 2,
        //% block="CH3"
        CH3 = 3,
        //% block="CH4"
        CH4 = 4,
        //% block="CH5"
        CH5 = 5,
        //% block="CH6"
        CH6 = 6,
        //% block="CH7"
        CH7 = 7
    }

    export enum dataRange {
        //% block="DR0"
        DR0 = 0,
        //% block="DR1"
        DR1 = 1,
        //% block="DR2"
        DR2 = 2,
        //% block="DR3"
        DR3 = 3,
        //% block="DR4"
        DR4 = 4,
        //% block="DR5"
        DR5 = 5,
        //% block="DR6"
        DR6 = 6,
        //% block= DR7"
        DR7 = 7,
        //% block="DR8"
        DR8 = 8,
        //% block="DR9"
        DR9 = 9,
        //% block="DR10"
        DR10 = 10,
        //% block="DR11"
        DR11 = 11,
        //% block="DR12"
        DR12 = 12,
        //% block="DR13"
        DR13 = 13,
        //% block="DR14"
        DR14 = 14,
        //% block="DR15"
        DR15 = 15
    }

    export enum modes {
        //% block="TEST"
        TEST,
        //% block="LWOTAA"
        LWOTAA,
        //% block="LWABP"
        LWABP
    }

    export enum classes {
        //% block="A"
        A,
        //% block="B"
        B,
        //% block="C"
        C
    }
	
	// -------------- 1. Initialization ----------------
    //%blockId=muselab_initialize_lora
    //%block="Initialize LoRa Shield"
	//% weight=61	
	//% blockGap=7	
    export function initLoRa() {
        serial.redirect(
            SerialPin.P16,
            SerialPin.P8,
            BaudRate.BaudRate9600
        );
    }
	
    // -------------- 2. Send Message ----------------
	//% blockId=muselab_send_message
	//% block="Send unconfirmed message %msg"   
	//% weight=58	
	//% blockGap=7	
    export function sendmsg(msg: string): void {
        serial.writeLine("AT+MSG="+msg); 
    }
	
    // -------------- 3. Send Confirmed Message ----------------
	//% blockId=muselab_send_confirmed_message
	//% block="Send confirmed message %cmsg"   
	//% weight=59	
	//% blockGap=7	
    export function sendcmsg(cmsg: string): void {
        serial.writeLine("AT+CMSG="+cmsg); 
    }
    
    // -------------- 4. Start sensing service ----------------
    //% blockId=muselab_send_pin
    //% block="Send Value of %readPin"
    //% weight=60
    //% blockGap=7
    export function sendPin(readPin: inputPin): void {
        switch (readPin) {
            case inputPin.P0:
                serial.writeLine("AT+CMSG=" + pins.analogReadPin(AnalogPin.P0));
                break;
            case inputPin.P1:
                serial.writeLine("AT+CMSG=" + pins.analogReadPin(AnalogPin.P1));
                break;
            case inputPin.P2:
                serial.writeLine("AT+CMSG=" + pins.analogReadPin(AnalogPin.P2));
                break;
            case inputPin.P12:
                serial.writeLine("AT+CMSG=" + pins.analogReadPin(AnalogPin.P12));
                break;
        }
		
    }
	
    // -------------- 5. Set Region ----------------
    //% subcategory=Settings
	//% blockId=muselab_set_region
	//% block="Select your region %region"
	//% weight=57
	//% blockGap=7	
    export function setRegion(regions: region): void {
		
        switch (regions) {
            case region.AS923:
                serial.writeLine("AT+FDEFAULT=RISINGHF")
                basic.pause(2000)
                serial.writeLine("AT+RESET")
                basic.pause(2000)
                serial.writeLine("AT+DR=AS923")
                basic.pause(2000)
                serial.writeLine("AT+RESET")
                basic.pause(2000)
                serial.writeLine("AT+DR=DR2")
                basic.pause(2000)
                serial.writeLine("AT+RXWIN2=923.4,DR0")
                basic.pause(2000)
                serial.writeLine("AT+CH=0,922.600000,DR2,DR5")
                basic.pause(2000)
                serial.writeLine("AT+CH=1,922.800000,DR2,DR5")
                basic.pause(2000)
                serial.writeLine("AT+CH=2,923.000000,DR2,DR5")
                basic.pause(2000)
                serial.writeLine("AT+CH=3,923.200000,DR2,DR5")
                basic.pause(2000)
                serial.writeLine("AT+CH=4,923.400000,DR2,DR5")
                basic.pause(2000)
                serial.writeLine("AT+CH=5,923.600000,DR2,DR5")
                basic.pause(2000)
                serial.writeLine("AT+CH=6,923.800000,DR2,DR5")
                basic.pause(2000)
                serial.writeLine("AT+CH=7,924.000000,DR2,DR5")
                basic.pause(2000)
                serial.writeLine("AT+reset")
                break;
            case region.US915:
                serial.writeLine("AT+DR=US915")
                basic.pause(5000)
                break;
            case region.EU868:
                serial.writeLine("AT+DR=EU868")
                basic.pause(5000)
                break;
            case region.EU434:
                serial.writeLine("AT+DR=EU434")
                basic.pause(5000)
                break;
            case region.AU920:
                serial.writeLine("AT+DR=AU920")
                basic.pause(5000)
                break;
        }
    }

    // -------------- 6. Device ID ----------------
    //% subcategory=Settings
    //% blockId=muselab_get_deviceid
	//% block="Enquire Device Address"
	//% weight=56	
	//% blockGap=7	
    export function getDeviceID(): void {
        serial.writeLine("AT+ID=?"); 
    }


    // -------------- 7. LoRa NWKSKEY ----------------
    //% subcategory=Settings
    //% blockId=muselab_set_nwkskey
	//% block="Set Network Session Key %nwkskey"   
	//% weight=55		
	//% blockGap=7	
    export function setNWKSKEY(nwkskey: string): void {
        serial.writeLine("AT+KEY=NWKSKEY,"+nwkskey); 
    }
	
	// -------------- 8. LoRa APPSKEY ----------------
    //% subcategory=Settings
    //% blockId=muselab_set_appskey
	//% block="Set App Session Key %appskey"   
	//% weight=54		
	//% blockGap=7	
    export function setAPPSKEY(appskey: string): void {
        serial.writeLine("AT+KEY=APPSKEY,"+appskey); 
    }

// -------------- 9. Set Channel ----------------
    //% subcategory=Settings
    //% blockId=muselab_set_channel
	//% block="Set Channel %chan | to frequency %freq"   
	//% weight=53		
	//% blockGap=7	
    export function setChannel(chan: channel, freq: string): void {
        serial.writeLine("AT+CH=" + chan + "," + freq); 
    }
    

// -------------- 10. Set Channel and DR ----------------
    //% subcategory=Settings
    //% blockId=muselab_set_drchannel
	//% block="Set Channel %chan | to frequency %freq | and DR to %dr"   
	//% weight=52		
	//% blockGap=7	
    export function setDRChannel(chan: channel, freq: string, dr: dataRange): void {
        serial.writeLine("AT+CH=" + chan + "," + freq + "," + dr); 
    }
    
    

// -------------- 11. Set Channel and DR range ----------------
    //% subcategory=Settings
    //% blockId=muselab_set_channel_dr_from_to
	//% block="Set Channel %chan | to frequency %freq | and DR Range from %dr | to %dr2"   
	//% weight=51		
	//% blockGap=7	
    export function setDRangeChannel(chan: channel, freq: string, dr: dataRange, dr2: dataRange): void {
        serial.writeLine("AT+CH=" + chan + "," + freq + "," + dr + "," + dr2); 
    }

// -------------- 12. Data Range ----------------
    //% subcategory=Settings
    //% blockId=muselab_set_datarange
	//% block="Set DR to %dr"   
	//% weight=50		
	//% blockGap=7	
    export function setDR(dr: dataRange): void {
        serial.writeLine("AT+DR=" + dr); 
    }

// -------------- 13. Reset ----------------
    //% subcategory=Settings
    //% blockId=muselab_reset_module
    //% block="Reset LoRaWan Module"   
    //% weight=49		
    //% blockGap=15	
    export function resetModule(): void {
        serial.writeLine("AT+RESET"); 
    }

// -------------- 14. Set Port ----------------
    //% subcategory=Settings
    //% blockId=muselab_set_port
    //% block="Set transmission port to %port" | Range: 0-255  
    //% weight=48		
    //% blockGap=7	
    export function setPort(port: number): void {
        serial.writeLine("AT+PORT=" + port); 
    }

// -------------- 15. Custom Command ----------------
    //% subcategory=Settings
    //% blockId=muselab_custom_command
    //% block="Send custom command %ATCommand"   
    //% weight=47		
    //% blockGap=7	
    export function sendATCommand(ATCommand: string): void {
        serial.writeLine(ATCommand); 
    }

// -------------- 16. Set Mode ----------------
    //% subcategory=Settings
    //% blockId=muselab_set_mode
    //% block="Set Mode to %mode"   
    //% weight=46		
    //% blockGap=7	
    export function setMode(mode: modes): void {
        switch (mode) {
            case modes.TEST:
                serial.writeLine("AT+MODE=TEST");
                break;
            case modes.LWOTAA:
                serial.writeLine("AT+MODE=LWOTAA");
                break;
            case modes.LWABP:
                serial.writeLine("AT+MODE=LWABP");
                break;
        }
            
    }

    // -------------- 17. Set Class ----------------
    //% subcategory=Settings
    //% blockId=muselab_set_class
    //% block="Set class to %_class"   
    //% weight=45		
    //% blockGap=7	
    export function setClass(_class: classes): void {
        switch (_class) {
            case classes.A:
                serial.writeLine("AT+CLASS=A"); 
                break;
            case classes.B:
                serial.writeLine("AT+CLASS=B");     
                break;
            case classes.C:
                serial.writeLine("AT+CLASS=C");     
                break;    
        }
        
    }

}
