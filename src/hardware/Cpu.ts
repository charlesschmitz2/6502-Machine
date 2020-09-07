import {System} from "../System";
import {Hardware} from "./Hardware";

export class Cpu extends Hardware{

    private system : System;

    constructor(system : System) {  
        super();

        this.system = system;

        this.debug = true;
        
        this.ID=0;
        this.name="CPU";
    
    }
}
