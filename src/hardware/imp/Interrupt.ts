import { Queue } from "../util/Queue";


export interface Interrupt {

    irq: number;
    priority: Interrupt.Priority;
    name: String;
    inputBuffer: Queue<any>;
    outputBuffer: Queue<any>; 

}//Interrupt interface 

export namespace Interrupt {
    export const enum Priority {
        NONE = -1,
        REGULAR = 0,
        HIGH = 1,
        VERY_HIGH = 2
    }//Priority 
}//Interrupt namespace