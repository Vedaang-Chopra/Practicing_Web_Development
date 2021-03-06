const fs=require('fs');
fs.writeFile(__dirname+'/file.txt',
    'Hello this is my first txt file on which file writing via NodeJs is done!!!!..........................................',
    function(err){
    if(err)
        return console.error("file couldn't be read");                    //When we use throw err the program crashes but if we use
    console.log('This file is written..............................')    //return console.error("file couldn't be read"); program would work.
    })
fs.writeFile(__dirname+'/file1.txt',
    'Hello this is my first txt file on which file writing via NodeJs is done!!!!..........................................' +
    '\n Trying to append into file............................ ',
    function(err){
        if(err)
            throw err;
        console.log('This file is written..............................')
    })
fs.appendFile(__dirname+'/file1.txt',
    ' \n Again Trying to append into file............................ ',
    'utf8',
    function(err){
        if(err)
            throw err;
        console.log('This file is written..............................')
    })

fs.writeFile(__dirname+'/web.html',' <html>\n' +
    '    <head>\n' +
    '        <title>NODEJS FILE WRITING</title>\n' +
    '    </head>\n' +
    '    <body>\n' +
    '    Yo this is an html file\n' +
    '    </body>\n' +
    '    \n' +
    '    </html>\'',function(err){
    if(err)
        throw err;
    console.log("File is written");
})
//In nodejs ecosystem the file after been read, pushes the data in the callback function arguments.The first argument is error and second is the
//data obtained from the file.This is a general rule that first argument would be error and second would be data.It is called as error
// first callback rule
fs.readFile(__dirname+'/file.txt',function(err,data)            //First parameter is the error if encountered and second is the data of the
{                                                                 //  file.
   if(err)
       throw err;
    console.log("File has been read");
    console.log(data.toString());               //Here data is the buffer value. thus console.log(data) prints the buffer.
});
//Note-For writing large data we use fs.write()
/*******************************************************************************************************/
//Using Path.....................................................
const path=require('path');              //This path API is used to provide the facility of making a path specific to the enviornment(OS) we are
console.log("Using Path....................................................."); //working on currently.
console.log(__dirname);         //__dirname-points to the current directory
console.log(path.join('aa','b'));
console.log(path.join('__dirname','file.txt'));                //Event though we introduced slashes yet the path remains unchanged in joining.
console.log(path.join('__dirname','/file.txt'));
console.log(path.join('__dirname/','/file.txt'));