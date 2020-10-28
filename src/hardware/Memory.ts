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
    
    private MAR =  new Array(0x10000); //16 bit Memory Address Registrar 
    private MDR = new Array(0x100); //8 bit Memory Data Registrar


    constructor(system : System) {  
        super();

        this.ID=0;
        this.name="RAM";
        this.system = system; 
        this.memoryClockCount = 0;

        this.initializeMemory();
        this.initializeMAR();
        this.initializeMDR();

        
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
        
        console.log("[HW - " + this.name + " ID : " + this.ID + " - " + this.dateTime + "] : " + number + " Contains Value: " + number.toString(length).toUpperCase().padStart(2, "00") + " [hexValue Conversion]");
        
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

        console.log("[HW - " + this.name + " ID : " + this.ID + " - " + this.dateTime + "] : " + " received clock pulse");
        
    }//pulse

   
    //reset, pulse ^^, setters/getters for MDR and MAR, read, write - lab 3

    /*---------Getters/Setters---------*/
        get MemoryAddressRegistrar(){
            return this.MAR;
        }//getMAR

        set MemoryAddressRegistrar(val){
            this.MAR = val;
        }//setMAR

        get MemoryDataRegistrar(){
            return this.MDR;
        }//getMDR

        set MemoryDataRegistrar(val){
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
            var i = 0;
            while(i<0x10000){
                this.MAR[i] = 0x00;
                i++;
            }//while
            
        }//initializeMAR

        public initializeMDR(): void {
            var i = 0;
            while(i<0x100){
                this.MDR[i] = 0x00;
                i++;
            }//while
            
        }//initializeMemory

     /*---------Read and Write Methods---------*/
     //Read will read memory at the location in the MAR and Update the MDR
     //Write will write the contents of MDR to memory at the location indicated by the MAR
        public read(): void{

        }//read

        public write(): void{

        }//write 

}//Memory Class





export class MMU extends Hardware{

    
    private system: System;

    constructor(system : System){
        super();

        this.ID=0;
        this.name="MMU";
        this.system = system;
    
    }//constructor



}//MMU Class