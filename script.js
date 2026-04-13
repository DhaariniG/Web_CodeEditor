const htmlInput = document.getElementById("html_code");
const cssInput = document.getElementById("css_code");
const jsInput = document.getElementById("js_code");

const output = document.getElementById("preview");

function run(){
    let html = htmlInput.value ;
    let css = cssInput.value ;
    let js = jsInput.value;

    let previewDoc = output.contentDocument || output.contentWindow.document;

    previewDoc.body.innerHTML = html + "<style>" + css + "</style>";

    try{
        output.contentWindow.eval(js);
    } catch(err){
        console.error("JS Error: "+err);
    }

}


htmlInput.addEventListener("keyup", run);
cssInput.addEventListener("keyup", run);
jsInput.addEventListener("keyup", run);