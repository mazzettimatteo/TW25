function cambiaStato(nomefile){
    const urlImmagine=`/images/${nomefile}`
    history.pushState(null, "", urlImmagine)

    document.getElementById("foto").src=urlImmagine
}


alfonso=function(){
    cambiaStato("unnamedd.jpg")
}

jack=function(){
    cambiaStato("saint-jack.png")
}

beanos=function(){
    cambiaStato("xe30mrc1rhd31.jpg")
}