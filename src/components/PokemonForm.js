import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({setCards, cards}) {

  const [name,setName]=useState("")
  const [hp,setHp] = useState(null)
  const [frontUrl, setFrontUrl]=useState("")
  const [backUrl, setBackUrl]= useState("")

  function handleNameChange(e){
    setName(e.target.value)
  }
function handleHpChange(e){
    setHp(e.target.value)
}
function handleFrontUrl(e){
  setFrontUrl(e.target.value)
}

function handleBackUrl(e){
  setBackUrl(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  fetch("http://localhost:3001/pokemon",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
      },
      body:JSON.stringify({
        name:e.target[0].value,
        hp:e.target[1].value,
        frontUrl:e.target[2].value,
        backUrl:e.target[3].value
      })  
})
.then(res=>res.json())
.then(data=>setCards([...cards,data]))
}
  
// const [formData, setFormData]=useState({
//   name:"",
//   hp:0,
//   frontUrl:"",
//   backUrl:""
// })

  // function handleChange(e){
  // const {name,value} = e.target
  // setFormData((prev)=>({...prev,[name]:value}))
  //   }

    // fetch("http://localhost:3001/pokemon",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json",
    //     Accept:"application/json"
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(res=>res.json())
    // .then(data=>setCards(data))

     

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleNameChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleHpChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={handleFrontUrl}
          
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
           value ={backUrl}
           onChange={handleBackUrl}
           
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
