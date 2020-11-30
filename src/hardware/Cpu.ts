import { sys } from "typescript";
import {System} from "../System";
import {Hardware} from "./Hardware";
import { ClockListener } from "./imp/ClockListener";
import { Interrupt } from "./imp/Interrupt";
import { InterruptController } from "./InterruptController";
import { MMU } from "./MMU";
import { VirtualKeyboard } from "./VirtualKeyboard";

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

    public cpuMode: string = null;
    public interrupt: Interrupt;
    public interruptController: InterruptController = new InterruptController(0);
    public vkb: VirtualKeyboard = new VirtualKeyboard(this.interruptController)



    constructor(system : System, _mmu : MMU) {  
        super(0, "CPU");

        this.system = system;
        this._mmu = _mmu;

        this.debug = true;
        
        this.ID=0;
        this.name="CPU";
        this.cpuClockCount = 0;

    
    }//constructor

    public pulse() : void {

        this.cpuClockCount++;

        //let dateTime = new Date().getTime();
        //console.log("[HW - " + this.name + " ID : " + this.ID + " - " + dateTime + "] : " + " received clock pulse - CPU Clock Count: " + this.cpuClockCount);
        
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

        this.log("CPU STATE | MODE " + this.cpuMode + " PC: " + this.toHexFormat(this.programCounter,4) + " IR: " + this.instructionRegister + 
        " Acc: " +  this.toHexFormat(this.instructionRegister,2) + " xReg: " + this.toHexFormat(this.xReg,2) +
        " yReg: " + this.toHexFormat(this.yReg,2) + " zFlag: " + this.zFlag + " Step: " + this.cpuStepCounter);

    }//pulse

//--Case 0
    public fetch(): void {
        //console.log("FETCH"); --Testing
        //this.instructionRegister = this._mmu.pcRead(this.programCounter); **Gives error for some reason
        this.programCounter++;
        this.cpuStepCounter = 1;
    }//fetch

//--Case 1
    public decode1(): void {
        //console.log("DECODE1"); --Testing
        switch (this.instructionRegister){
            case(0xA9):
            //load the accumulator with a constant
                this.execute1();
                break;
            case(0xAD):
            //Load the accumulator from memory    
                break;
            case(0x8D):
            //store the accumulator in memory    
                break;
            case(0x8A):
            //Load the accumulator from the X register     
                break;
            case(0x98):
            //Load the accumulator from the Y register
                break;
            case(0x6D):
            //Add with carry, dont need to perform carry here just add
                break;
            case(0xA2):
            //Load the X register with a constant     
                break;
            case(0xAE):
            //Load the X register from memory 
                break;
            case(0xAA):
            //Load the X register with a from the accumulator
                break;
            case(0xA0):
            //Load the Y register from constant
                break;
            case(0xAC):
            //Load the Y register from the memory
                break;
            case(0xA8):
            //Load the Y register from the accumulator
                break;
            case(0xEA):
            //No Operation
                break;
            case(0x00):
            //Break
                break;
            case(0xEC):
            //Compare a byte in memory to the X register. Sets the Z flag if equal 
                break;
            case(0xD0):
            //Branch n bytes if Z flag = 0                
                break;
            case(0xEE):
            //Increment the value of a byte     
                break;
            case(0xFF):
                if (this.xReg == 0x01){
                    console.log(this.yReg);
                }
                else if (this.xReg == 0x02) {
                    console.log("0x00");
                }
                break;
            
        }
        this.cpuStepCounter = 2; //if need decode 2 set to 3, otherwise set to 4
    }//decode1
 //--Case 2
    public decode2(): void {
        //console.log("DECODE2"); --Testing

        //here would put those steps that require more than one decode pulse cycle
        this.cpuStepCounter = 3;
    }//decode2

 //--Case 3
    public execute1(): void {
        //console.log("EXECUTE1"); --Testing
        //or this.cpuStepCounter = 4; depending on the instruction if 2 executes are needed set to 4, otherwise set to 5


        this.cpuStepCounter = 4;
    }//execute

 //--Case 4
    public execute2(): void {
        //console.log("EXECUTE2"); --Testing
        //or this.cpuStepCounter = 4; depending on the instruction if 2 executes are needed


        this.cpuStepCounter = 5;
    }//execute

 //--Case 5
    public writeBack(): void {
        //console.log("WRITEBACK"); --Testing
        this.cpuStepCounter = 6;
    }

 //--Case 6
    public interruptCheck(): void {
        //console.log("INTERRUPTCHECK"); --Testing
        if (this.interrupt != null){
            this.log("CPU acting on interrupt - IRQ: " + this.interrupt.irq + " from: " + this.interrupt.name);
            this.log("CPU sees the buffer containing: " + this.interrupt.outputBuffer);

            this.cpuMode = "Kernal";

            this.interrupt.outputBuffer.dequeue();
            this.interrupt = null;
        }
        this.cpuStepCounter = 0;
    }//interruptCheck

/*----CPU Functions used within above steps----*/
    public pcRead(pc: number): number{
        //get the instruction at memory at the location of the program counter
        return (this._mmu.readImmediate(pc));
    }//pcRead

    public setMMU(_mmu: MMU){
        this._mmu = _mmu;
    }//setMMU

    public setInterrupt(interrupt: Interrupt): void {
        this.interrupt = interrupt;
    }//setInterrupt

    public getCurrentCPUStep(): number {
        return this.cpuStepCounter;
    }//getCurrentCPUStep



//Extra formatting, also in MMU
    public toHexFormat(num : number, places : number){
        if(places == 8){
            return num.toString(16).toUpperCase().padStart(2, "00000000")
        }//00000000
        else if(places == 4){
            return num.toString(16).toUpperCase().padStart(2, "0000")
        }//0000
        else{
            return num.toString(16).toUpperCase().padStart(2, "00")
        }//default = 2 (00)

    }//hexFormatting

}//CPU
