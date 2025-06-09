function extrairSetores(doc){
    let div = document.querySelector("#res");
    doc.querySelectorAll(".home-course-title").forEach(tituloSetor => {
        div.appendChild(tituloSetor);
        div.appendChild(doc.querySelector(".home-course-text")).style.color = "red";
    })
}

function capturarSite(){
    //Utilizado uma página diferente do site da Fatec, diferenciando-se da usada em aula
     fetch("https://fatecrl.edu.br/setores")
        .then(resp => {
            if(resp.status != 200){
                throw new Error("Problemas no servidor")
            }

            return resp.text(); 
        })
        .then(text => {
            let d = new DOMParser();
            let doc = d.parseFromString(text, "text/html");
            extrairSetores(doc);
        })
        .catch(erro => {
            document.querySelector("#res").innerHTML = erro.message;
        })
}

function load(){
    document.querySelector("#btn").addEventListener("click", capturarSite)
}

window.onload = load;