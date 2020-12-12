import { System } from "../System";
import { Hardware } from "./Hardware";
import { Interrupt } from "./imp/Interrupt";
import { Queue } from "./util/Queue";

export class  InterruptController extends Hardware implements Interrupt {
    irq: number;
    priority: Interrupt.Priority;
    inputBuffer: Queue<any>;
    outputBuffer: Queue<any>;

    constructor(identificationNumber: number){
        super(0, "INTERRUPT_CONTROLLER");
    }

}