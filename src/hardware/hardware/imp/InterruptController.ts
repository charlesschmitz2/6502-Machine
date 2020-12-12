import { Hardware } from "../Hardware";
import { Queue } from "../util/Queue";
import { Interrupt } from "./Interrupt";




export class InterruptController extends Hardware implements Interrupt {
    irq: number;
    priority: Interrupt.Priority;
    inputBuffer: Queue<any>;
    outputBuffer: Queue<any>;

    constructor (identificationNumber: number){
        super(identificationNumber, "IRC");
    }//constructor

    public addInterruptInput(interrupt: Interrupt): void {
        this.inputBuffer.enqueue(interrupt);
    }//addInterruptInput
    public addInterruptOutput(interrupt: Interrupt): void {
        this.outputBuffer.enqueue(interrupt);
    }//addInterruptInput

    public isEmpty(): boolean {
        if(this.inputBuffer.isEmpty()){
            return true;
        }
        else{
            return false;
        }
    }//isEmpty
    public isFull(): boolean {
        if(this.inputBuffer.isFull()){
            return true;
        }
        else{
            return false;
        }
    }//isEmpty




    
}