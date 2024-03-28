
function SimulationPage(){
    var isShowWrapper = document.getElementById("O-Wrapper")
    console.log(isShowWrapper)
    console.log(isShowWrapper.style.display)

    // isShowWrapper.style.display("none")

    if(isShowWrapper.style.display === "grid"){
        isShowWrapper.style.display = "none"

        // bikin element nya disini terus append ke <div class="Kredit-m">
        
        // let SimulationElement = document.createElement('div')
        // document.createTextNode

    }

    // else {
    //     isShowWrapper.style.display = "grid"
    // }
}
