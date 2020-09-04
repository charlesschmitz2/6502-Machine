import {System} from "../System";
import * as readline from 'readline';
import * as _DebugMessage from 'readline';
export class Hardware {

    public system_ID : Number = 0;
    public cpu_ID : Number = 0;
    public debug : boolean = true;
    public _log : string;
    

    constructor() {
            this.main();
    }//constructor
    
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

        /*
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

        For some reason the console outputs all of the questions all at once, im not sure how to get it to process only one
        at a time. I attempted some while or if loops, different messages, bunch of stuff but the internet is not really making it to
        clear on how to do what I want so i just commented out the code I couldnt get to work before the due date and debugging
        is always set to true unless you change it within the code. Also based on how you 
        gave the instructions i'm not quite sure where what belongs and some other things so I apologize for that. I'm not sure
        if you want input in the console at all from the user or none at all and just adjusted in the code.Also not sure why all
         my outputs are being printed out twice so sorry about that I will continue to keep learning about 
         typescript/javascript/git just trying to work out the kinks a day at the time, gotta start somewhere I guess :)
        */
        return _debug;
        //--------------------------------------
        }//debug

    

    public log(message : string) {
        let log = "[HW - System id: " + this.system_ID + " - " + Math.random() + " ] : " + message;
        log += "\n[HW - Cpu id: " + this.cpu_ID + " - " + Math.random() + " ] : " + message;
        return log;
    } 


    public debugON(): boolean {

        return true;
    }

    public debugOFF(): boolean {

        return false;

    }

    
    
}