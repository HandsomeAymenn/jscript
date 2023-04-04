exports.dbconnect = async function(param,action){

 
  //function dbconnect(param){
   const mongoose = require('mongoose');
  //student schema should match the class object passed to nodejs from rest client
  //and the underlying document structure also
    const studentSchema= new mongoose.Schema({
     name: String,
     age: Number,
   },{
     capped: { size: 1024 },
    // bufferCommands: false,
    // autoCreate: false // disable `autoCreate` since `bufferCommands` is false
   })
    
  
   // errors check https://mongoosejs.com/docs/faq.html#callback_never_executes for docs
    mongoose.connect('mongodb://127.0.0.1:27017/mydb',
    { useNewUrlParser: true ,
  
    })
     .then(() => { console.log('Connected to database!')
    
     const student = mongoose.model("student", studentSchema);
     if (action  == "create"){
       console.log(action);
     createstudent(param,student);
     }  
    
     if (action  == "update"){
       console.log(action);
       updatestudent(param,student);
     }  
   }
     )
     .catch(err => console.error('Connection error:', err));    
   }

  


    let createstudent = (param,u) =>{


       const student = new u({ name: param.name, age: param.age });
       student.save()
       .then(() => console.log('student record created in mongodb created!'))
      .catch(err => console.error('Error creating student:', err));
     //}
     }

     let updatestudent =  async (param,u) => {


        const student1  = await  u.findByIdAndUpdate(param.id,{age:param.age});
        console.log('student record updated in mongodb created!');
     }


    

    


     //create new student from schema
  //   const student = mongoose.model("student", studentSchema);
   // Create a new student
   //const student = new student({ name: 'Virat200', age: 35 });

//create new student   const student = new student({ name: param.name, age: param.age });
  
    //to find all students  const students = await student.find();
//find particular student  const students = await    student.findById("6422a0f7b3f518b7ec02f072");
//update an student  const student1  = await  student.findByIdAndUpdate("6422a0f7b3f518b7ec02f072",{age:50});
//const student = await    student.findById("6424080f488ae28005b2bd4d");
//student.deleteOne({name:"Virat200"})
//above deletes an student
  //  console.log(students);

//   student.save()
   //  .then(() => console.log('student record created in mongodb created!'))
 //   .catch(err => console.error('Error creating student:', err));
   //}
   //}
  

 //  dbconnect("test");