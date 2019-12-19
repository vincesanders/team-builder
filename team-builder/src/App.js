import React, {useState, useEffect} from 'react';
import Form from "./components/Form";
import TeamMembers from "./components/TeamMembers";

function App() {

  let [team, setTeam] = useState([{
    name: "test",
    email: "a@b.com",
    role: "role",
    id: 0
}, {
  name: "test",
  email: "a@b.com",
  role: "role",
  id: 1
}, {
name: "test",
email: "a@b.com",
role: "role",
id: 2
}, {
name: "test",
email: "a@b.com",
role: "role",
id: 3
}, {
name: "test",
email: "a@b.com",
role: "role",
id: 4
}, {
name: "test",
email: "a@b.com",
role: "role",
id: 5
}, {
name: "test",
email: "a@b.com",
role: "role",
id: 6
}, {
name: "test",
email: "a@b.com",
role: "role",
id: 7
}]);


    const [isEditing, setIsEditing] = useState(false);
    const [headerText, setHeaderText] = useState("");

    // update subtitle based on whether user is adding or editing a team member
    useEffect(() =>
    {
      if (isEditing)
        { setHeaderText("Edit An Existing Team Member"); }
      else
        { setHeaderText("Add A New Team Member"); }

    }, [isEditing]);


    // function to add member info
    function editFunction(e) {
      
      if (isEditing)
        {
          setIsEditing(false);
          // e.target.textContent="(stop editing)";
        }
      else
      {
        setIsEditing(true);
        // e.target.textContent="(edit)";
      }
        
    }

  return (
    <div className="App">
      <div className="header">
        <h1>Team Builder</h1>
        <h2>{headerText}</h2>
        <Form team={team} setTeam={setTeam} isEditing={isEditing}></Form>
      </div>
      <TeamMembers team={team} editFunction={editFunction}></TeamMembers>
    </div>
  );
}

export default App;
