// import statements for hardware
import {Cpu} from "./hardware/Cpu";
import {Hardware} from "./hardware/Hardware";
import { Memory } from "./hardware/Memory";
import {Clock} from "./hardware/Clock";
import {MMU} from "./hardware/Memory";


/*
    Constants
 */
// Initialization Parameters for Hardware
// Clock cycle interval
const CLOCK_INTERVAL= 500;               // This is in ms (milliseconds) so 1000 = 1 second, 100 = 1/10 second
                                        // A setting of 100 is equivalent to 10hz, 1 would be 1,000hz or 1khz,
                                        // .001 would be 1,000,000 or 1mhz. Obviously you will want to keep this
                                        // small, I recommend a setting of 100, if you want to slow things down
                                        // make it larger.


export class System extends Hardware{
    public dateTime = new Date().getTime();

    public _CPU : Cpu = null;
    public _Hardware : Hardware = null;
    public _Memory : Memory = null;
    public _Clock : Clock = null;
    public _MMU : MMU = null;
       
    
    public running: boolean = false;

    constructor() {
    super();
        //console.log("Hello TSIRAM!");

        this.ID =0;
        this.name = "SYSTEM";     
        
        this._CPU = new Cpu(this);
        //Initialize the MMU that is within memory 
        this._MMU = new MMU(this);
        
        //Initializes the RAM memory and 
        this._Memory = new Memory(this);
        

    
        /*
        Start the system (Analogous to pressing the power button and having voltages flow through the components)
        When power is applied to the system clock, it begins sending pulses to all clock observing hardware
        components so they can act on each clock cycle.
         */

        this.startSystem();


        }//constructor 

    public startSystem(): boolean {
        console.log("----CREATING HARDWARE COMPONENTS----")
        this._CPU.log("CREATED");
        this.log("CREATED");

        //Lab 3 - When memory is created it should show the total addressable space in the log: NOTE - This could also be done within the memory constructor 
        //but I chose to put it here so that when outputted in the console the first thing that shows up are each HW component being created, then the 
        //total addressable space is displayed, then the memory is displayed...
        var memoryAddressSpace = this._Memory.MemoryAddressRegistrar.length.toString(10);
        this._Memory.log("CREATED - Addressable Space : " + memoryAddressSpace);

        console.log("\n----DISPLAYING MEMORY, BEGINNING CLOCK PULSE----")
        this._Memory.displayMemory(0x14);
       
        //commented out so easier to read output for lab 3 without continuous cycle
        this._Clock = new Clock(CLOCK_INTERVAL, this);

        return true;
    }

    public stopSystem(): boolean {

        return false;

    }
}

let system: System = new System();

