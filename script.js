
function SimulationPage(){
    var KreditMenuInitialStyle = document.getElementById("Kredit-Menu-Initial")
    var MobilBaruStyle = document.getElementById("Mobil-Baru")
    var BigNote = document.getElementById("big-note")
    var SimulateButton = document.getElementById("Simulate-Button")
    // console.log(isShowWrapper.style.display)

    

    if (KreditMenuInitialStyle.style.display === "inline"){
        KreditMenuInitialStyle.style.display = "none"
        MobilBaruStyle.style.display = "inline"
        BigNote.style.display = "inline"
        SimulateButton.style.display = "flex"
    }


}

function PembayaranUtama(){
    var selectElementMobilBaru = document.getElementById("angsuran-mobil-baru")
    var TotalPembayaranUtamaStyle = document.getElementById("Total-Pembayaran-Utama")
    var AngsuranPerBulanStyle = document.getElementById("Angsuran-Perbulan")
    var selectedValue = selectElementMobilBaru.value


    
    if(selectedValue === "Total-Pembayaran-Utama" ){
        TotalPembayaranUtamaStyle.style.display = "flex"
        // console.log("SELECTED!!")
    }
    if(selectedValue === "Pilih-Tipe-Perhitungan" ){
        TotalPembayaranUtamaStyle.style.display = "none"
        // console.log("SELECTED!!")
    }
    if(selectedValue === "Pilih-Tipe-Perhitungan" ){
        TotalPembayaranUtamaStyle.style.display = "none"
        // console.log("SELECTED!!")
    }

}



function backToMainPage(){
    var KreditMenuInitialStyle = document.getElementById("Kredit-Menu-Initial")
    var MobilBaruStyle = document.getElementById("Mobil-Baru")
    var BigNote = document.getElementById("big-note")

    if (KreditMenuInitialStyle.style.display === "none"){
        KreditMenuInitialStyle.style.display = "inline"
        MobilBaruStyle.style.display = "none"
        BigNote.style.display = "none"
        SimulateButton.style.display = "none"
    }
}
    


