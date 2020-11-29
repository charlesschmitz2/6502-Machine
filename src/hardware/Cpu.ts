import { sys } from "typescript";
import {System} from "../System";
import {Hardware} from "./Hardware";
import { ClockListener } from "./imp/ClockListener";
import { MMU } from "./MMU";

export class Cpu extends Hardware implements ClockListener{

    private system : System;
    private _mmu : MMU;
    public cpuClockCount: number;
    private cpuStepCounter: number = 0;

    public programCounter: number = 0x00; //should I have a low and high order program counter??
    public accumulator: number = 0x00;
    public instructionRegister: number = 0x00;
    public xReg: number = 0x00;
    public yReg: number = 0x00;
    public zFlag: number = 0;



    constructor(system : System, _mmu : MMU) {  
        super();

        this.system = system;
        this._mmu = _mmu;

        this.debug = true;
        
        this.ID=0;
        this.name="CPU";
        this.cpuClockCount = 0;
    
    }//constructor

    public pulse() : void {

        this.cpuClockCount++;

        let dateTime = new Date().getTime();
        console.log("[HW - " + this.name + " ID : " + this.ID + " - " + dateTime + "] : " + " received clock pulse - CPU Clock Count: " + this.cpuClockCount);
        
        //switch case statments. This is our pipeline for the CPU -- Remember "Only 1 step of the pipeline is accomplished during any single clock pulse!""
        switch (this.cpuStepCounter) {
            case 0:
                this.fetch();
                break;
            case 1:
                this.decode1();
                break;
            case 2:
                this.decode2();
                break;
            case 3:
                this.execute1();
                break;
            case 4: 
                this.execute2();
                break;
            case 5:
                this.writeBack();
                break;
            case 6:
                this.interruptCheck();
                break;
        }//switch


    }//pulse

//--Case 0
    public fetch(): void {
        console.log("FETCH");
        this.cpuStepCounter = 1;
    }//fetch

//--Case 1
    public decode1(): void {
        console.log("DECODE1");
        this.cpuStepCounter = 2; //if need decode 2 set to 3, otherwise set to 4
    }//decode1
 //--Case 2
    public decode2(): void {
        console.log("DECODE2");
        this.cpuStepCounter = 3;
    }//decode2

 //--Case 3
    public execute1(): void {
        console.log("EXECUTE1");
        //or this.cpuStepCounter = 4; depending on the instruction if 2 executes are needed set to 4, otherwise set to 5
        this.cpuStepCounter = 4;
    }//execute

 //--Case 4
    public execute2(): void {
        console.log("EXECUTE2");
        //or this.cpuStepCounter = 4; depending on the instruction if 2 executes are needed
        this.cpuStepCounter = 5;
    }//execute

 //--Case 5
    public writeBack(): void {
        console.log("WRITEBACK");
        this.cpuStepCounter = 6;
    }

 //--Case 6
    public interruptCheck(): void {
        console.log("INTERRUPTCHECK");
        this.cpuStepCounter = 0;
    }//interruptCheck

}//CPU
