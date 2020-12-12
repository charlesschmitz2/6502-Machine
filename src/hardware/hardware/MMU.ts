import {Hardware} from "./Hardware";
import {System} from "../System";
import { Memory } from "./Memory";
import {Cpu} from "./Cpu";



export class MMU extends Hardware{
    pcRead(programCounter: number): number {
        throw new Error("Method not implemented.");
    }

    private system : System;  
    private _memory : Memory;
    private memoryClockCount: number;
    public dateTime = new Date().getTime();

    private lowOrderByte: number;
    private highOrderByte: number;

    constructor(system : System, _memory : Memory) {  
        super(0, "MMU");

        this.ID=0;
        this.name="MMU";
        this.system = system;
        this._memory = _memory; 
        this.memoryClockCount = 0;

        
        //Inputting all values for lab 3
        this.writeImmediate(0x0000, 0xA9);
        this.writeImmediate(0x0001, 0x0D);
        this.writeImmediate(0x0002, 0xA9);
        this.writeImmediate(0x0003, 0x1D);
        this.writeImmediate(0x0004, 0xA9);
        this.writeImmediate(0x0005, 0x2D);
        this.writeImmediate(0x0006, 0xA9);
        this.writeImmediate(0x0007, 0x3F);
        this.writeImmediate(0x0008, 0xA9);
        this.writeImmediate(0x0009, 0xFF);
        this.writeImmediate(0x000A, 0x00);
        this.writeImmediate(0x000B, 0x00);
        this.writeImmediate(0x000C, 0x00);
        this.writeImmediate(0x000D, 0x00);
        this.writeImmediate(0x000E, 0x00);
        this.writeImmediate(0x000F, 0x00);

        this.memoryDump(0x00, 0x0f);
        
        //this.readLittleEndian();
    }//constructor 

     /*---------Getters/Setters---------*/
     public getMMUMemoryAddressRegistrar(){
        return this._memory.getMemoryAddressRegistrar();
    }//getMAR

    public setMMUMemoryAddressRegistrar(val){
        this._memory.setMemoryAddressRegistrar(val);
    }//setMAR

    public getMMUMemoryDataRegistrar(){
        return this._memory.getMemoryDataRegistrar();
    }//getMDR

    public setMMUMemoryDataRegistrar(val){
        this._memory.setMemoryDataRegistrar(val)
    }//setMDR

    /*---------Read and Write Mehtods---------*/
    public read(): void{
        this._memory.read();
    }//read memory 

    public write(): void{
        this._memory.write();
    }//writes memory 

    public readLittleEndian(): void{
        let high = this.getHighOrderByte;
        let low = this.getLowOrderByte;
        let littleEndianNum = low + "" + high;
        
        this._memory.setMemoryAddressRegistrar(parseInt(littleEndianNum));
    
        //set low order 
        //set high order 
        //read

    }//readLittleEndianForm

    //Low and High order bytes should be set to use to format in little endian
    public setHighOrderByte(num: number): void{
        this.highOrderByte = num;
    }//setHighOrderByte
    public setLowOrderByte(num: number): void{
        this.lowOrderByte = num;
    }//setLowOrderByte
    public getHighOrderByte(): number{
        return this.highOrderByte;
    }//getHighOrderByte
    public getLowOrderByte(): number{
        return this.lowOrderByte;
    }//getLowOrderByte

    //take address and input data and set the addr in MAR, set the data in MDR, write it to memory 
    public writeImmediate(addr: number, data: number): void{
        this._memory.setMemoryAddressRegistrar(addr);
        this._memory.setMemoryDataRegistrar(data);
        this._memory.write();
    }//writeImmediate 

    //sets the MAR to the given address number and reads memory. returns the MDR value
    public readImmediate(addr: number): number {
        this._memory.setMemoryAddressRegistrar(addr);
        this._memory.read();
        
        return(this._memory.getMemoryDataRegistrar());
    }

    /*---------Memory Dump Mehtod---------*/
    //shows the contents of memory starting at the first parameter and ending at the second. 
    public memoryDump(fromAddr: number, toAddr: number){
        
        console.log("[HW - " + this.name + " ID : " + this.ID + " - " + this.dateTime + "] : " + "Initialized Memory");
        console.log("[HW - " + this.name + " ID : " + this.ID + " - " + this.dateTime + "] : " + "Memory Dump Debug");
        console.log("[HW - " + this.name + " ID : " + this.ID + " - " + this.dateTime + "] : " + "-------------------------------------");
        
        while(fromAddr <= toAddr){
            this._memory.setMemoryAddressRegistrar(fromAddr);
            this._memory.read();
            console.log("[HW - " + this.name + " ID : " + this.ID + " - " + this.dateTime + "] : " + "Addr " + this.toHexFormat(fromAddr,2) + " | " + this.toHexFormat(this._memory.getMemoryDataRegistrar(),2));
            fromAddr++;
        }
        console.log("[HW - " + this.name + " ID : " + this.ID + " - " + this.dateTime + "] : " + "-------------------------------------");
        console.log("[HW - " + this.name + " ID : " + this.ID + " - " + this.dateTime + "] : " + "Memory Dump Complete\n\n");
    }//memoryDump

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
    

}//MMU