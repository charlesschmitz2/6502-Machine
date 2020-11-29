import { System } from "../System";
import { Cpu } from "./Cpu";
import {Hardware} from "./Hardware";
import { ClockListener } from "./imp/ClockListener";
import { Memory } from "./Memory";

export class Clock extends Hardware {
    
    private clockListenerHardWare :ClockListener [] = new Array();
    private system : System;

    constructor(clockInterval, system : System) { 

        super();
        this.system = system;

        //pass it the system like with CPU, so can access _CPU and _Memory from systems class and then add to array
        //then call the pulse and have that interval going
        
        //adds Cpu and Memory from the systems class to the list of hardware components that are clocklisteners
        this.addHardware();

        var that = this;
        setInterval(() => that.clockPulse(), clockInterval);
        
        
        //create array of clocklisteners, iterate through, call pulse 

        
    
    }//constructor 

    public addHardware() : void {
        this.clockListenerHardWare.push(this.system._CPU)
        this.clockListenerHardWare.push(this.system._Memory)
    }


    public clockPulse(){
        for(var i = 0; i < this.clockListenerHardWare.length; i++){
            this.clockListenerHardWare[i].pulse();
         }    
    }

}//Clock