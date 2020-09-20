import {Hardware} from "./Hardware";
import {System} from "../System";
import { ClockListener } from "./imp/ClockListener";

export class Memory extends Hardware implements ClockListener{

    private memory = new Array(0x10000);
    //represent 256 per element 
    // 2^16 of addressable memory 
    //each value inputed is 2^8

    private system : System;  
    private memoryClockCount: number;  

    constructor(system : System) {  
        super();
        this.initializeMemory();
        

        this.ID=0;
        this.name="RAM";
        this.system = system; 
        this.memoryClockCount = 0;       

    }//constructor 

    public initializeMemory(): void {
        var i = 0;
        while(i<0x10000){
            this.memory[i] = 0x00;
            i++;
        }//for
    }//initializeMemory

    public hexValue (number : number, length : number): void {
        let dateTime = new Date().getTime();
        console.log("[HW - " + this.name + " ID : " + this.ID + " - " + dateTime + "] : " + number + " Contains Value: " + number.toString(length).toUpperCase().padStart(2, "0") + " [hexValue Conversion]");
        
        //doesnt need to pad each time, might want to adjust padding 
        //[HW - RAM id: 0 - 1597551725249]: Address : 10000 Contains Value: ERR [hexValue conversion]: number undefined
    }//hexValue

    public displayMemory(numItemsOfArray): void {
        if(numItemsOfArray <= 0xffff){
            for(var i = 0x0000; i < numItemsOfArray; i++){
                this.hexValue(i,16);
            }//for
        }//if
        else{
            let dateTime = new Date().getTime();
            console.log("[HW - " + this.name + " ID : " + this.ID + " - " + dateTime + "] : " + " Invalid Number " + " Contains Value: Error : [hexValue Conversion]");
        }//else
        
    }//displayMemory

    public pulse() : void {

        this.memoryClockCount++;

            let dateTime = new Date().getTime();
        console.log("[HW - " + this.name + " ID : " + this.ID + " - " + dateTime + "] : " + " received clock pulse");
        
    }//pulse

}//Memory Class