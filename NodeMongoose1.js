exports.dbconnect = function(param){

 
  //function dbconnect(param){
      const mongoose = require('mongoose');
     
       const studentSchema= new mongoose.Schema({
        name: String,
        age: Number,
      },{
        capped: { size: 1024 },
        //bufferCommands: false,
        //autoCreate: false // disable `autoCreate` since `bufferCommands` is false
      })
       
     
      // errors check https://mongoosejs.com/docs/faq.html#callback_never_executes for docs
       mongoose.connect('mongodb://127.0.0.1:27017/mydb',
       { useNewUrlParser: true ,
     
       })
        .then(() =>  {console.log('Connected to database!');
        
            const student = mongoose.model("student", contactSchema);
            if (action  ="create"){
              createstudent(param,student)

        }  
        
        
        
      }
        )
        .catch(err => console.error('Connection error:', err));
      // Create a new student
      //const student = new student({ name: 'Virat1', age: 30 });
        
        let createstudent = (param,u) =>{
          
          
          const student = new u({ name: param.name, age: param.age });  
          student.save()
          .then(() => console.log('student record created in mongodb created!'))
          .catch(err => console.error('Error creating student:', err));
          //}
        }
        }
     
   
      //dbconnect("test");
  