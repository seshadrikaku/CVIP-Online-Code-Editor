function run(){
    let html = document.getElementById("html-edit").value;
    let css = document.getElementById("css-edit").value;
    let js = document.getElementById("js-edit").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = html + "<style>"+css+"</style>"; 
    output.contentWindow.eval(js);
}