audiodescript = document.getElementById('audiodescription')
darkmode = document.getElementById('darkmode')


audiodescript.addEventListener('submit', toggleAD)
darkmode.addEventListener('submit', toggleDM)


function toggleAD() {
    if(audiodescript.checked){
        audiodescript.value = "True"
        console.log("audiodescript.value", audiodescript.value)
    }
    else{
        audiodescript.value = "False"
        console.log("audiodescript.value", audiodescript.value)
    }

}

function toggleDM() {
    if(darkmode.checked){
        darkmode.value = "True"
        console.log("darkmode.value", darkmode.value)
    }
    else{
        darkmode.value = "False"
        console.log("darkmode.value", darkmode.value)
    }

}

