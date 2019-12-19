import React, {useState, useEffect} from "react";

function Form(props) {

    // get state variables from parent
    let currentTeam = props.team;
    let setTeam = props.setTeam;
    let isEditing = props.isEditing;

    // store current number of team members into state variable
    const[currentTeamCount, setCurrentTeamCount] = useState(props.team.length);

    let count = props.team.length;

    // default values for input fields
    const blankEntry = {
        name: "",
        email: "",
        role: "",
        id: currentTeamCount
    };

    // set default input to be a blank entry
    const [input, setInput] = useState(blankEntry);

    // on form submission, prevent default behavior
    function submitForm(element) {
        
        element.target.preventDefault();
    }

    // take user's current input and update state variable "input"
    function storeInput(element) {

        // setCurrentTeamCount(currentTeamCount + 1);
        count++;
        setInput({...input, [element.target.name]: element.target.value});
        setInput({...input, id: count});
        
    }

    // add the new team member's info to the state variable "currentTeam"
    // also increment "currentTeamCount" by 1
    function addMember() {
        setTeam([...currentTeam, input]);
        // setCurrentTeamCount(currentTeamCount + 1);



        console.log(currentTeamCount);
    }


    // update button text based on whether user is adding or editing a team member
    const [buttonText, setButtonText] = useState("");
    useEffect(() =>
    {
      if (isEditing)
        { setButtonText("Edit"); }
      else
        { setButtonText("Add"); }

    }, [isEditing]);

    return (

        <form name="teamForm" onSubmit={submitForm}>
            <label htmlFor="inputName">Name:</label>
            <input type="text" name="name" onChange={storeInput}/>

            <label htmlFor="inputEmail">Email:</label>
            <input type="text" name="email"  onChange={storeInput}/>

            <label htmlFor="inputName">Role:</label>
            <input type="text" name="role"  onChange={storeInput}/>

            <input type="button" onClick={addMember} value={buttonText} />

        </form>


    )

}

export default Form;