import {System} from "../System";
import { Cpu } from "./Cpu";
import { ClockListener } from "./imp/ClockListener";
import { Memory } from "./Memory";

export class Hardware {

    public ID : Number = 0;
    public name : String = "HARDWARE";
    public debug : boolean = true;
    
    

    constructor() {
        

    }//constructor

    public log (message : String) : void {
        if(this.debug){
            let dateTime = new Date().getTime();
            message = "CREATED";
            console.log("[HW - " + this.name + " ID : " + this.ID + " - " + dateTime + "] : " + message);
        }//if
    }//log
    
    
}

/*   -------IGNORE THIS CODE, IT IS WRONG BUT KEPT SOME OF IT IN CASE IT COULD BE USEFUL LATER FOR CONSOLE INPUT------

public debug : boolean = true;
    public _log : string;
    import * as readline from 'readline';
    import * as _DebugMessage from 'readline';
    main() {
        this.debug = this.debugFunction(); 
           
        if(this.debug==true)
            {
                //Message for hardware class------
                let _readline = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                _readline.question('\nInput Message for System : ', (input : string) => {
                    input.toLowerCase;
                    if (input == ''){
                        console.log("\nMessage Defaulted to 'Created'");
                        input = "Created"
                        console.log(this.log(input));
                        _readline.close();
                    }
                    else {
                        console.log("\nMessage '" + input + "' Confirmed\n");
                        console.log(this.log(input));
                        _readline.close();
                    }
                });
                //----------------------------------
            }//if
            else{
                console.log("Debug Mode is set to False, Logging Disabled");
            }//else
    }

    public debugFunction() : boolean {
        let _debug : boolean = this.debug;

    
        //Message for Debugging Mode-----------
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        rl.question('Would you like to toggle Debug to False? [y/n] ', (answer) => {
            switch(answer.toLowerCase()) {
            case 'y':
                _debug =false
                break;
            case 'n':
                console.log('Debug Mode Disabled - Logging Prohibited');
                _debug = true;
                break;
            default:
                console.log('Invalid Input');
            }
            rl.close();
        });

        
        return _debug;
        //--------------------------------------
        }//debug

*/