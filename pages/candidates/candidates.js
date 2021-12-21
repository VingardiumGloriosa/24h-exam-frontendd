    
    async function showAll(){
        let response = await fetch('http://localhost:9090/api/candidates');
        const candidateArray = await response.json();
        const candidateParagraph = document.querySelector(".candidates-paragraph");

        candidateArray.forEach(candidate => {
            var p = document.createElement("p");
            p.className="candidate-info"; 
            p.innerHTML = "Name : "+candidate.first_name+" "+candidate.last_name + "<br>Party : " + candidate.partyId;
            candidateParagraph.append(p);
        });
    }

    async function showById(partyID){
        console.log(partyID);
        let response = await fetch('http://localhost:9090/api/candidates/party/'+partyID);
        const candidateArray = await response.json();
        const candidateParagraph = document.querySelector(".candidates-paragraph");

        candidateArray.forEach(candidate => {
            if(candidate.partyId === partyID){
               var p = document.createElement("p");
            p.className="candidate-info"; 
            p.innerHTML = "Name : "+candidate.first_name+" "+candidate.last_name + "<br>Party : " + candidate.partyId;
            candidateParagraph.append(p); 
            }
        });
    }

    function wipe(){
        const candidateInf = document.querySelectorAll(".candidate-info");
        for (let i = 0, len = candidateInf.length; i < len; i++) {
            candidateInf[i].remove();
          }

    }

    document.getElementsByClassName("btn")[0].addEventListener("click", showAll);    
    document.getElementsByClassName("btn")[6].addEventListener("click", wipe);
