
export class Ascii {

/*----Decode----*/
    public static fetchAsciiLetter(byte: number): string {
        let returnValue = "null";

        switch (byte) {
     //--special characters
            case(0x0A):
                returnValue = "\n";
                break;
            case(0x20):
                returnValue = " ";
                break;
            case(0x21):
                returnValue = "!";
                break;
            case(0x22):
                returnValue = '"';
                break;
            case(0x23):
                returnValue = "#";
                break;
            case(0x24):
                returnValue = "$";
                break;
            case(0x25):
                returnValue = "%";
                break;
            case(0x26):
                returnValue = "&";
                break;
            case(0x28):
                returnValue = "(";
                break;
            case(0x29):
                returnValue = ")";
                break;
            case(0x2A):
                returnValue = "*";
                break;
            case(0x2B):
                returnValue = "+";
                break;
            case(0x2C):
                returnValue = "'";
                break;
            case(0x2D):
                returnValue = "-";
                break;
            case(0x2E):
                returnValue = ".";
                break;
            case(0x2F):
                returnValue = "/";
                break;
            case(0x3A):
                returnValue = ":";
                break;
            case(0x3B):
                returnValue = ";";
                break;
            case(0x3C):
                returnValue = "<";
                break;
            case(0x3D):
                returnValue = "=";
                break;
            case(0x3E):
                returnValue = ">";
                break;
            case(0x3F):
                returnValue = "?";
                break;
            case(0x40):
                returnValue = "@";
                break;
            case(0x60):
                returnValue = "`";
                break;
            case(0x7B):
                returnValue = "{";
                break;
            case(0x7C):
                returnValue = "|";
                break;
            case(0x7D):
                returnValue = "}";
                break;
            case(0x7E):
                returnValue = "~";
                break;
            case(0x5B):
                returnValue = "[";
                break;
            case(0x5C):
                returnValue = "\\";
                break;
            case(0x5D):
                returnValue = "]";
                break;
            case(0x5E):
                returnValue = "^";
                break;
            case(0x5F):
                returnValue = "_";
                break;
                
    //--Numbers
            case(0x30):
                returnValue = "0";
                break;
            case(0x31):
                returnValue = "1";
                break;
            case(0x32):
                returnValue = "2";
                break;
            case(0x33):
                returnValue = "3";
                break;
            case(0x34):
                returnValue = "4";
                break;
            case(0x35):
                returnValue = "5";
                break;
            case(0x36):
                returnValue = "6";
                break;
            case(0x37):
                returnValue = "7";
                break;
            case(0x38):
                returnValue = "8";
                break;
            case(0x39):
                returnValue = "9";
                break;

    //--Uppercase Letters
            case(0x41):
                returnValue = "A";
                break;
            case(0x42):
                returnValue = "B";
                break;
            case(0x43):
                returnValue = "C";
                break;
            case(0x44):
                returnValue = "D";
                break;
            case(0x45):
                returnValue = "E";
                break;
            case(0x46):
                returnValue = "F";
                break;
            case(0x47):
                returnValue = "G";
                break;
            case(0x48):
                returnValue = "H";
                break;
            case(0x49):
                returnValue = "I";
                break;
            case(0x4A):
                returnValue = "J";
                break;
            case(0x4B):
                returnValue = "K";
                break;
            case(0x4C):
                returnValue = "L";
                break;
            case(0x4D):
                returnValue = "M";
                break;
            case(0x4E):
                returnValue = "N";
                break;
            case(0x4F):
                returnValue = "O";
                break;
            case(0x50):
                returnValue = "P";
                break;
            case(0x51):
                returnValue = "Q";
                break;
            case(0x52):
                returnValue = "R";
                break;
            case(0x53):
                returnValue = "S";
                break;
            case(0x54):
                returnValue = "T";
                break;
            case(0x55):
                returnValue = "U";
                break;
            case(0x56):
                returnValue = "V";
                break;
            case(0x57):
                returnValue = "W";
                break;
            case(0x58):
                returnValue = "X";
                break;
            case(0x59):
                returnValue = "Y";
                break;
            case(0x5A):
                returnValue = "Z";
                break;

        //--Lowercase Letters
            case(0x61):
                returnValue = "a";
                break;
            case(0x62):
                returnValue = "b";
                break;
            case(0x63):
                returnValue = "c";
                break;
            case(0x64):
                returnValue = "d";
                break;
            case(0x65):
                returnValue = "e";
                break;
            case(0x66):
                returnValue = "f";
                break;
            case(0x67):
                returnValue = "g";
                break;
            case(0x68):
                returnValue = "h";
                break;
            case(0x69):
                returnValue = "i";
                break;
            case(0x6A):
                returnValue = "j";
                break;
            case(0x6B):
                returnValue = "k";
                break;
            case(0x6C):
                returnValue = "l";
                break;
            case(0x6D):
                returnValue = "m";
                break;
            case(0x6E):
                returnValue = "n";
                break;
            case(0x6F):
                returnValue = "o";
                break;
            case(0x70):
                returnValue = "p";
                break;
            case(0x71):
                returnValue = "q";
                break;
            case(0x72):
                returnValue = "r";
                break;
            case(0x73):
                returnValue = "s";
                break;
            case(0x74):
                returnValue = "t";
                break;
            case(0x75):
                returnValue = "u";
                break;
            case(0x76):
                returnValue = "v";
                break;
            case(0x77):
                returnValue = "w";
                break;
            case(0x78):
                returnValue = "x";
                break;
            case(0x79):
                returnValue = "y";
                break;
            case(0x7A):
                returnValue = "z";
                break;

            }//Switch


        return returnValue;

    }//fetchAsciiLetter

/*----Encode----*/
    public static fetchHexValue(asciiLetter: string): number {
        let returnValue = null;

        switch (asciiLetter) {
     //--special characters
            case("\n"):
                returnValue = 0x0A;
                break;
            case(" "):
                returnValue = 0x20;
                break;
            case("!"):
                returnValue = 0x21;
                break;
            case('"'):
                returnValue = 0x22;
                break;
            case("#"):
                returnValue = 0x23;
                break;
            case("$"):
                returnValue = 0x24;
                break;
            case("%"):
                returnValue = 0x25;
                break;
            case("&"):
                returnValue = 0x26;
                break;
            case("("):
                returnValue = 0x28;
                break;
            case(")"):
                returnValue = 0x29;
                break;
            case("*"):
                returnValue = 0x2A;
                break;
            case("+"):
                returnValue = 0x2B;
                break;
            case("'"):
                returnValue = 0x2C;
                break;
            case("-"):
                returnValue = 0x2D;
                break;
            case("."):
                returnValue = 0x2E;
                break;
            case("/"):
                returnValue = 0x2F;
                break;
            case(":"):
                returnValue = 0x3A;
                break;
            case(";"):
                returnValue = 0x3B
                break;
            case("<"):
                returnValue = 0x3C;
                break;
            case("="):
                returnValue = 0x3D;
                break;
            case(">"):
                returnValue = 0x3E;
                break;
            case("?"):
                returnValue = 0x3F;
                break;
            case("@"):
                returnValue = 0x40;
                break;
            case("`"):
                returnValue = 0x60;
                break;
            case("{"):
                returnValue = 0x7B;
                break;
            case("|"):
                returnValue = 0x7C;
                break;
            case("}"):
                returnValue = 0x7D;
                break;
            case("~"):
                returnValue = 0x7E;
                break;
            case("["):
                returnValue = 0x5B;
                break;
            case("\\"):
                returnValue = 0x5C;
                break;
            case("]"):
                returnValue = 0x5D;
                break;
            case("^"):
                returnValue = 0x5E;
                break;
            case("_"):
                returnValue = 0x5F;
                break;
                
    //--Numbers
            case("0"):
                returnValue = 0x30;
                break;
            case("1"):
                returnValue = 0x31;
                break;
            case("2"):
                returnValue = 0x32;
                break;
            case("3"):
                returnValue = 0x33;
                break;
            case("4"):
                returnValue = 0x34;
                break;
            case("5"):
                returnValue = 0x35;
                break;
            case("6"):
                returnValue = 0x36;
                break;
            case("7"):
                returnValue = 0x37;
                break;
            case("8"):
                returnValue = 0x38;
                break;
            case("9"):
                returnValue = 0x39;
                break;

    //--Uppercase Letters
            case("A"):
                returnValue = 0x41;
                break;
            case("B"):
                returnValue = 0x42;
                break;
            case("C"):
                returnValue = 0x43;
                break;
            case("D"):
                returnValue = 0x44;
                break;
            case("E"):
                returnValue = 0x45;
                break;
            case("F"):
                returnValue = 0x46;
                break;
            case("G"):
                returnValue = 0x47;
                break;
            case("H"):
                returnValue = 0x48;
                break;
            case("I"):
                returnValue = 0x49;
                break;
            case("J"):
                returnValue = 0x4A;
                break;
            case("K"):
                returnValue = 0x4B;
                break;
            case("L"):
                returnValue = 0x4C;
                break;
            case("M"):
                returnValue = 0x4D;
                break;
            case("N"):
                returnValue = 0x4E;
                break;
            case("O"):
                returnValue = 0x4F;
                break;
            case("P"):
                returnValue = 0x50;
                break;
            case("Q"):
                returnValue = 0x51;
                break;
            case("R"):
                returnValue = 0x52;
                break;
            case("S"):
                returnValue = 0x53;
                break;
            case("T"):
                returnValue = 0x54;
                break;
            case("U"):
                returnValue = 0x55;
                break;
            case("V"):
                returnValue = 0x56;
                break;
            case("W"):
                returnValue = 0x57;
                break;
            case("X"):
                returnValue = 0x58;
                break;
            case("Y"):
                returnValue = 0x59;
                break;
            case("Z"):
                returnValue = 0x5A;
                break;

        //--Lowercase Letters
            case("a"):
                returnValue = 0x61;
                break;
            case("b"):
                returnValue = 0x62;
                break;
            case("c"):
                returnValue = 0x63;
                break;
            case("d"):
                returnValue = 0x64;
                break;
            case("e"):
                returnValue = 0x65;
                break;
            case("f"):
                returnValue = 0x66;
                break;
            case("g"):
                returnValue = 0x67;
                break;
            case("h"):
                returnValue = 0x68;
                break;
            case("i"):
                returnValue = 0x69;
                break;
            case("j"):
                returnValue = 0x6A;
                break;
            case("k"):
                returnValue = 0x6B;
                break;
            case("l"):
                returnValue = 0x6C;
                break;
            case("m"):
                returnValue = 0x6D;
                break;
            case("n"):
                returnValue = 0x6E;
                break;
            case("o"):
                returnValue = 0x6F;
                break;
            case("p"):
                returnValue = 0x70;
                break;
            case("q"):
                returnValue = 0x71;
                break;
            case("r"):
                returnValue = 0x72;
                break;
            case("s"):
                returnValue = 0x73;
                break;
            case("t"):
                returnValue = 0x74;
                break;
            case("u"):
                returnValue = 0x75;
                break;
            case("v"):
                returnValue = 0x76;
                break;
            case("w"):
                returnValue = 0x77;
                break;
            case("x"):
                returnValue = 0x78;
                break;
            case("y"):
                returnValue = 0x79;
                break;
            case("z"):
                returnValue = "z";
                break;

            }//Switch


        return returnValue;

    }//fetchHexValue
    
}//Ascii