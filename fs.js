const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;

const fileOps = async () =>{
    try{
        // const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'),'utf8')
        // console.log(data);
        // await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'), data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nAdding more content');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'newPromiseWrite.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'newPromiseWrite.txt'),'utf8')
        console.log(newData);
    } catch(err){
        console.log(err);
    }
}

fileOps();

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'),'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// console.log("hello");

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Writing to file',(err) => {
//     if(err) throw err;
//     console.log('Write complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nadding another text',(err) => {
//         if(err) throw err;
//         console.log('Append complete');

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newreply.txt'),(err) => {
//             if(err) throw err;
//             console.log('Rename complete');
//         })
//     })
// })



process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})

