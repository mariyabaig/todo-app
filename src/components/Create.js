import React,{useState} from "react";

const Create = () => {

const create = ()=>{
console.log("clicked")
    }

    const [todo, setTodo] = useState({
    title:"", input:""

    })

    const setData = (e) => {
       
        const { name, value } = e.target;
        setTodo((p) => {
          return {
            ...p,
            [name]: value,
            
          };
          
        });
        console.log(setTodo)
      };
    
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col  ">
          <div className="mb-1 xl:w-96">
            <input
              type="text"
              className="
         form-control
         block
         w-full
         px-3
         py-1.5
         text-base
         font-normal
        
         bg-grayed bg-clip-padding
         border border-solid border-org
         rounded
         transition
         ease-in-out
        
       "
              id="title"
              name="title"
              placeholder="Create Title"
              onChange={setData}
              value={todo.title}
            />
          </div>
          <div className=" xl:w-96">
            <input
              type="text"
              className="
         form-control
         block
         w-full
         px-3
         py-1.5
         text-base
         font-normal
        
         bg-grayed bg-clip-padding
         border border-solid border-org
         rounded
         transition
         ease-in-out
         mt-1
        
       "
              id="input"
              name="input"
              placeholder="Input"
              onChange={setData}
              value={todo.input}
            />
          </div>
          </div>
          <button onClick={create} className="flex flex-col text-beige w-20 h-20 border-2 border-org mx-2 rounded items-center justify-center"> +
          </button>
       
          
     
      </div>
      <div className="flex items-center justify-center">
      <div className="border-org text-beige border-2 items-center justify-center my-16 bg-grayed h-96 w-3/4 flex flex-col">
        No Tasks
      </div>
      </div>
    
    </>
  );
};

export default Create;
