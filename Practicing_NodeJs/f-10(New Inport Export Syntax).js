//File extensions are important for browser running as it is important because browser requests from server for exact file.
//import {num} from './f-10(Module for Import Export).js';            //Importing Method 1 (same name variables).
                                                                    //Num is the name of variable exported from library.
import * as lib from './f-10(Module for Import Export).js';         //Importing method 2 (Import everything and use it as object).
                                                                    //Here lib acts as an object and has every export of library to access.

import x from './f-10(Module for Import Export).js';                 //Importing method 3 (Importing/Accessing default variables of library).
                                                                     //In this manner x can only access default variables which were
                                                                     //exported from library.
import {num,default as y} from './f-10(Module for Import Export).js';   //Here in a single line everything is exported


console.log(num);
console.log(lib.fun());
console.log(x.p+x.q);
console.log(y.q+y.r+y.x);
