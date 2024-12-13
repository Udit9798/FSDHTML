import React from 'react'
import Student from './Student'
 import photo from './udit.jpeg'
import StateHandling from './StateHandling'
import ImageManipulation from './imagemanipulation'
import UseEffectWork from './UseEffectWork'
import Registration from './Registration'
import Login from './Login'

                                       //part of businees logic
function App() {
   
  // const studentdata=[{
  //   image:photo,
  //   name:"Saurabh Yadav",
  //   roll:"145",
  //   college:"ABES"
  // },
  //   {
  //     image:photo,
  //   name:"Sachin Yadav",
  //   roll:"146",
  //   college:"ABES"
  //   },
    

  //  { image:photo,  
  //   name:"Gaurav Yadav",
  //   roll:"147",
  //   college:"ABES"  
  //  }
  

  // ]
  return(
    <div>
      <div>
        <h2 style={{color:'red'}}>Hello React JS</h2>
        <h2>Login Form</h2>

        <Login />
        <br></br>
        <h2>Registration Form</h2>
        <Registration />


             <div>
              {/* <UseEffectWork /> */}
              </div>
             <div>
              {/* <ImageManipulation/> */}
             </div>
             {/* {
               {
                studentdata.map((ele)=>{
                  return(
                     <Student data ={ele}/>
                  )
                })
                 }
                } */}
            {/* //  < Student data={studentdata}/> */}
              </div>  


              {/* Here Start StateHandling */}
            
              
           
          <div>
           {/* <Student image={<img src={photo} height={100} width={100} />} name="Saurabh"  roll="145"  college="ABESEC"/>          way to use component */}
        </div>
      </div>
  )
}

export default App