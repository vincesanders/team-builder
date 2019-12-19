import React, {useState} from "react";

function MemberCard(props) {

    let member = props.member;
    let editFunction = props.editFunction;

    let cardColors = "green blue pink orange yellow".split(" ");
    let cardColor = cardColors[props.member.id % (cardColors.length)];

    return (

        <div className={"memberCard " + cardColor} key={member.name}>
            <h3 className="memberName">{member.name} (ID {member.id})</h3>
            <p className="memberEmail">{member.email}</p>
            <p className="memberRole">{member.role}</p>
            <p className="edit"><a href="#" onClick={editFunction}>(edit)</a></p>
        </div>


    )

}

export default MemberCard;