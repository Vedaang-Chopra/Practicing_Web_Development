const fs=require('fs');
const path=require('path');
const EventEmitter=require('events');
const event=new EventEmitter();
/*
event.on('written',(fileno)=>{                                    //Constructing an event written to tell that data writing is been done.
    console.info(`File ${fileno} has been written`);
});
fs.writeFile(path.join(__dirname,'Files','file3.txt'),                  //Three file writing events.
    "This is some data to be written in file.",
    ()=>{
    event.emit('written',3)
    });
fs.writeFile(path.join(__dirname,'Files','file5.txt'),                  //These file writing events are asynchronous in nature.
    "This is some data to be written in file.",                 //Helps in making changes easily.
    ()=>{
        event.emit('written',4)
    });
fs.writeFile(path.join(__dirname,'Files','file4.txt'),
    "This is some data to be written in file.",
    ()=>{
        event.emit('written',5)
    });
event.emit('written',0);        //This task is synchronous in nature as event.emit condition is called synchronously.
                                //This is pushed into event loop first.
*/
/**************************************/
// Writing Files Sequentualy yet asynchronously............................................................
event.on('written',(fileno)=>{
    if (fileno>=8)
        return;
       console.info(`File ${fileno} has been written`);
    fileno=fileno+1;
    fs.writeFile(path.join(__dirname,'Files',`filename${fileno}.txt`),
        "This writing data into file sequentialy.",
        ()=>{
            event.emit('written',fileno)
        });

});
event.emit('written',0);