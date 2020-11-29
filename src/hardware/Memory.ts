import {Hardware} from "./Hardware";
import {System} from "../System";
import { ClockListener } from "./imp/ClockListener";



export class Memory extends Hardware implements ClockListener{

    public dateTime = new Date().getTime();

    private memory = new Array(0x10000);
    //represent 256 per element 
    // 2^16 of addressable memory 
    //each value inputed is 2^8

    private system : System;  
    private memoryClockCount: number;
    
    private MAR: number //16 bit Memory Address Registrar 
    private MDR: number; //8 bit Memory Data Registrar

    //MAR MDR not array just


    constructor(system : System) {  
        super(0, "MEMORY");

        this.ID=0;
        this.name="RAM";
        this.system = system; 
        this.memoryClockCount = 0;

        this.initializeMemory();
        this.initializeMAR();
        this.initializeMDR();

        //Testing
        //console.log(this.memory);
        //console.log(this.MAR);
        //console.log(this.MDR);

        //this.read();
        //this.write();

        //Testing
        //this.reset();       
     
    }//constructor 

    public initializeMemory(): void {
        var i = 0;
        while(i<0x10000){
            this.memory[i] = 0x00;
            i++;
        }//while
        
    }//initializeMemory

    public hexValue (number : number, length : number): void {
        
        console.log("[HW - " + this.name + " ID : " + this.ID + " - " + this.dateTime + "] : " + number + " Contains Value: " + number.toString(length).toUpperCase().padStart(4, "00") + " [hexValue Conversion]");
        
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
            
            console.log("[HW - " + this.name + " ID : " + this.ID + " - " + this.dateTime + "] : " + " Invalid Number " + " Contains Value: Error : [hexValue Conversion]");
        }//else
        
    }//displayMemory

    public pulse() : void {

        this.memoryClockCount++;

        //console.log("[HW - " + this.name + " ID : " + this.ID + " - " + this.dateTime + "] : " + " received clock pulse");
        
    }//pulse

   
    //reset, pulse ^^, setters/getters for MDR and MAR, read, write - lab 3

    /*---------Getters/Setters---------*/
        public getMemoryAddressRegistrar(){
            return this.MAR;
        }//getMAR

        public setMemoryAddressRegistrar(val){
            this.MAR = val;
        }//setMAR

        public getMemoryDataRegistrar(){
            return this.MDR;
        }//getMDR

        public setMemoryDataRegistrar(val){
            this.MDR = val;
        }//setMDR


    /*---------Reset Method---------*/
    //Resets MAR,MDR, and Memory by filling all values in it with 0x00
        public reset(): void{
            
            this.initializeMAR();
            console.log("--MAR RESET--");
            this.initializeMDR();
            console.log("--MDR RESET--");
            this.initializeMemory();
            console.log("--Memory RESET--");

        }//reset

    /*---------Initialize Methods for MAR and MDR---------*/
    //Also called within reset to reinitialize 
        public initializeMAR(): void {
            this.MAR = 0x0000;
            
        }//initializeMAR

        public initializeMDR(): void {
            this.MDR = 0x00;
            
        }//initializeMemory

     /*---------Read and Write Methods---------*/
     //Read will read memory at the location in the MAR and Update the MDR
     //Write will write the contents of MDR to memory at the location indicated by the MAR
     //Here I used this.***, but could also use the getters and setters from above
        public read(): void{
            //console.log("\n----READING MEMORY[MAR] INTO MDR----")
                this.MDR = this.memory[this.MAR];

            //Testing       
            //console.log(this.MDR);
            //console.log(this.MAR);
            //console.log(this.memory);
        }//read

        public write(): void{
            //console.log("\n----WRITING MDR[MAR] INTO MEMORY----")
            this.memory[this.MAR] = this.MDR;
        }//write 

}//Memory Class
