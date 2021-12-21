async function getAllVotes(){
    let response = await fetch('http://localhost:9090/api/votes');
    const voteArray = await response.json();
    const votePar = document.querySelector(".final-votes");

    response = await fetch('http://localhost:9090/api/parties');
    const partyArr = await response.json();

    let counterA=0;
    let counterC=0;
    let counterF=0;
    let counterO=0;
    let counterV=0;

    let counterFail=0;

    voteArray.forEach(vote => {
        switch(vote.party.partyId) {
            case "A": 
            counterA++;
            break;
            case "C":
                counterC++;
            break;
            case "F":
                counterF++;
            break;
            case "O":
                counterO++;
            break;
            case "V":
                counterV++;
            break;
            default:
                counterFail++;
        }
    });

    partyArr.forEach(party => {
        var h3 = document.createElement("h3");
        h3.innerHTML=party.partyName;
        var p = document.createElement("p");
        switch(party.partyId) {
            case "A": 
            p.innerHTML="Votes counted : "+counterA;            
            break;
            case "C":
                p.innerHTML="Votes counted : "+counterC;            
                break;
            case "F":
                p.innerHTML="Votes counted : "+counterF;            
                break;
            case "O":
                p.innerHTML="Votes counted : "+counterO;            
                break;
            case "V":
                p.innerHTML="Votes counted : "+counterV;            
                break;
            default:
                counterFail++;
        }
        votePar.appendChild(h3);
    votePar.appendChild(p);
    });

    if(counterFail>0){
        p.innerHTML=counterFail+" people voted for a non-existing party";
        votePar.appendChild(p);
    }
   
}

getAllVotes();
