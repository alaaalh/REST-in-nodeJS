
const fs = require('fs');
const tasks = JSON.parse(fs.readFileSync('./Database.json'))
const processTwo = process.argv[2]

if(processTwo ==='get'){
    console.log(tasks)
}
else if (processTwo ==='add'){
    const newTask = process.argv[3]
    tasks.push({task : newTask})
    fs.writeFileSync('./Database.json',JSON.stringify(tasks))
}
else if (processTwo ==='delet'){
    const delet = process.argv[3]
    tasks.splice(delet,1)
    fs.writeFileSync('./Database.json',JSON.stringify(tasks)) 
}
else if (processTwo === 'update'){
    const update = process.argv[3];
    const addNewValue=process.argv[4]
    tasks.splice(update,1);
    tasks.splice(update , 0 , {task : addNewValue})
    fs.writeFileSync('./Database.json',JSON.stringify(tasks)) 
}






