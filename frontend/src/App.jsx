import axios from "axios";
import { useEffect, useState } from "react";
import { Moon, Plus, Trash } from "lucide-react";

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [users, setUsers] = useState([]);

  const handleBtn = ()=>{
    if(!title && !content) return;
    const added = {
      id: Date.now(),
      title: title,
      content: content
    }

    setUsers([...users, added]);
    setTitle('')
    setContent('')
  }

  const handleDel = (id)=>{
    const deleted = users.filter((user)=> user.id !== id);

    setUsers(deleted)
  }

  return (
    <div className="px-6 sm:px-8 lg:px-16 bg-gray-50 sm">
      <div className="flex justify-between items-center py-5">
        <h1 className="text-2xl font-semibold rounded-xl">
          LIFE OS
        </h1>
        <div className="flex gap-3 items-center">
          <div className="bg-orange-500 p-2 sm:p-3 cursor-pointer text-white rounded-xl">
            <Plus size={18} />
          </div>
          <div className="p-2 sm:p-3 bg-white cursor-pointer border-gray-200 shadow text-gray-500 rounded-xl">
            <Moon size={18} />
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-xl font-semibold">Notes</h1>
        <p className="text-sm pb-5 text-gray-500">
          Quiet workspace for study notes, project briefs, and reading
          highlights.
        </p>

        <div className="border bg-white p-8 flex flex-col gap-5 shadow rounded-xl border-gray-300">
          <input  placeholder="Note title..." className="border bg-gray-100 font-semibold text-sm outline-none px-4 py-3 rounded-xl border-gray-300" type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
          <input value={content} onChange={(e)=> setContent(e.target.value)} placeholder="Capture your thoughts or meetings right away..." className="overflow-hidden border bg-gray-100 text-sm outline-none px-5 pt-5 pb-15 rounded-xl border-gray-300"  />
          <button onClick={handleBtn} className="font-['Arial'] text-sm bg-orange-600 rounded-xl w-25 sm:w-40 text-white py-2 cursor-pointer">
            Save Note
          </button>
        </div>
      </div>

      <div>
        {users.map((user)=>(
          <div key={user.id} className="flex justify-between bg-white items-center border font-['Arial'] p-6 my-6  rounded-xl border-gray-300 shadow">
            <div>
              <h1 className="leading-10 font-semibold">{user.title}</h1>
              <p className="text-sm text-gray-600 pt-3">{user.content}</p>
            </div>
            <div onClick={()=> handleDel(user.id)} className="text-gray-400 hover:text-red-500 cursor-pointer">
              <Trash size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

//const [tnames, setTnames] = useState("");
// const [tasks, setTasks] = useState([]);

// const addTask = () => {
//   if (!tnames.trim()) return;

//   const added = {
//     id: Date.now(),
//     text: tnames,
//   };

//   setTasks([...tasks, added]);
//   setTnames("");
// };

// const handleDelete = (id)=>{
//   const deleted = tasks.filter((task)=> task.id !== id);
//   setTasks(deleted)
// }

//backup code
// const[text, setText] = useState("");
//   const[notes, setNotes] = useState([]);

//   const loadNotes = async()=>{
//     const res = await axios.get("http://localhost:3000/notes");
//     setNotes(res.data);
//   };

//   useEffect(()=>{
//     loadNotes();
//   },[])

//   const addNote = async()=>{
//     await axios.post("http://localhost:3000/notes", {
//       text,
//     });

//     setText("");
//     loadNotes();
//   };

//   const deleteNote = async (id) =>{
//     await axios.delete(`http://localhost:3000/notes/${id}`);
//     loadNotes();
//   }

//   return(
//     <div>
//       <input
//         value={text}
//         placeholder='Enter Note'
//         onChange={(e)=>setText(e.target.value)}
//         className='border p-2 mx-5 rounded-lg'
//       />

//       <button onClick={addNote} className='border px-6 py-2 rounded-lg mt-5'>Add</button>

//       <hr />

//       {notes.map(note => (
//         <div key={note._id}>
//           <span className='text-3xl font-bold'>
//           {note.text}

//           </span>
//           <button className='border px-4 py-2 rounded-lg ml-5' onClick={()=>deleteNote(note._id)}>Delete</button>
//         </div>
//       ))}
//     </div>
