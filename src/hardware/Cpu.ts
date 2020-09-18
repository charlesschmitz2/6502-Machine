import {System} from "../System";
import {Hardware} from "./Hardware";
import { ClockListener } from "./imp/ClockListener";

export class Cpu extends Hardware implements ClockListener{

    private system : System;
    private cpuClockCount: number;

    constructor(system : System) {  
        super();

        this.system = system;

        this.debug = true;
        
        this.ID=0;
        this.name="CPU";
        this.cpuClockCount = 0;
    
    }//constructor

    public pulse() : void {

        this.cpuClockCount++;

        let dateTime = new Date().getTime();
        console.log("[HW - " + this.name + " ID : " + this.ID + " - " + dateTime + "] : " + " received clock pulse - CPU Clock Count: " + this.cpuClockCount);
        
    }//pulse

}//CPU
