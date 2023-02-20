import './App.css';
import Person from './Component/Profile/Profili';

function App() {
  const data={
    fullName:"Talbi Hend", 
    bio:"I'm hend talbi.I'm a student, I am currently a beginner  in the field of web development and I have the ambition to become a very competent developer.", 
    profession:"Student",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0aldcA4UMF-sf3uhnSbDTTkrNF8v35bXKzQ&usqp=CAU"
  }
  const handleName=(h)=>alert(h.fullName)
  return (
    <div className="App">
     <Person Hend={data} handle={handleName}>
     <img src={data.image} alt={data.fullName}/>

     </Person>
    </div>
  );
}

export default App;
