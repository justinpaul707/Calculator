function buttonclick(val){
    document.getElementById("output").value=document.getElementById("output").value+val;


}
function ouputClear(){
    document.getElementById("output").value=""
}
function equalClick(){
    var text=document.getElementById("output").value
    var result=eval(text)
    document.getElementById("output").value=result
}