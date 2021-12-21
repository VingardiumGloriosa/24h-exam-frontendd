async function showAllParties(){
    let response = await fetch('http://localhost:9090/api/parties');
    const partyArray = await response.json();
    const partyParag = document.querySelector(".close");
    
    partyArray.forEach(party => {
        var p = document.createElement("p");
        p.className="party-info"; 
        p.innerHTML = "Party : "+party.partyName+" "+ ", PartyID : " + party.partyId;
        partyParag.append(p);
    });
}

    async function showAllCand(){
    let response = await fetch('http://localhost:9090/api/candidates/all');
    const candArr = await response.json();
    const partyParag = document.querySelector(".close");
    
    candArr.forEach(candidate => {
        var p = document.createElement("p");
        p.className="party-info"; 
        p.innerHTML = "CandidateID : "+candidate.candidateId+" "
            + ", Candidate : " + candidate.first_name+" "+candidate.last_name
            + ", PartyId : " + candidate.party.partyId
            + ", Party : " + candidate.party.partyName;
        partyParag.append(p);
    });
    }

    async function vote(e){
        e.preventDefault();
        const form = document.querySelector('#new-vote');
        console.log(form.getElementsByClassName("candidateID")[0].value)
        console.log(form.getElementsByClassName("partyID")[0].value)
        const response = await fetch('http://localhost:9090/api/votes/vote/'+
                        form.getElementsByClassName("partyID")[0].value+"/"+
                        form.getElementsByClassName("candidateID")[0].value, {
          method: 'POST',
        });
        alert("Your vote has been counted!")
    }

function deleteParties(){
    const partyParag = document.querySelectorAll(".party-info");
        for (let i = 0, len = partyParag.length; i < len; i++) {
            partyParag[i].remove();
          }
}

const candidateForm = document.getElementById('new-vote');
candidateForm.addEventListener("submit", vote);

var modal = document.getElementsByClassName("myModal")[0];
var btn1 = document.getElementsByClassName("myBtn")[0];
var btn2 = document.getElementsByClassName("myBtn")[1];
var span = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
  modal.style.display = "block";
  showAllParties();
}

btn2.onclick = function() {
    modal.style.display = "block";
    showAllCand();
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    deleteParties();
  }
}
