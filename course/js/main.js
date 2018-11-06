var list = [
    {"desc":"rice","amount":"1","value":"5.40"},
    {"desc":"beer","amount":"12","value":"1.99"},
    {"desc":"steak","amount":"1","value":"15.10"}
];
//retorna a SOMA do parâmetro 'value' do Array list
function getTotal(list) {
    var  total = 0;
    for (var key in list){
        total += list[key].value * list[key].amount;
    }
    return total;
}
//alimenta a LISTAGEM NA TELA
function setList(list){ 
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for(var key in list){
        table += '<tr><td>'+ formatDesc(list[key].desc) +'</td><td>'+ list[key].amount+'</td><td>'+ formatValue(list[key].value)+'</td><td> <buton class="btn btn-default" onclick="setUpdate('+key+');">Edit</buton>Delete</td></tr>'
            //console.log(key)
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}
//trata FORMATA a lista de produtos
function formatDesc(desc){
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1); 
    return str;
}
//trata FORMATA a istagem dos valores dos produtos
function formatValue(value){
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".",",");
    str = "$" + str;
    return str;
}
//Adiciona UM NOVO Dado na lista de produtos
function addData(){
var desc =  document.getElementById("desc").value;
var amount =  document.getElementById("amount").value;
var value =  document.getElementById("value").value;
//ordena a listagem dos produtos na tela
list.unshift ({"desc":desc, "amount":amount, "value":value});
setList(list);
}
//ATUALIZA UM PRODUTO pelo ID
function setUpdate(id){
    var obj = list[id];
    document.getElementById("desc").value = obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";
    
    document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="'+id+'">';
}
//RESETA o formulario na chamada da function no ID
function resetForm(){
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";
    document.getElementById("inputIDUpdate").innerHTML = "";

}
//Pega os Dados informados no imput, e seta-os no Array list(banco)
function upDateData(){ 
    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list[id] = {"desc":desc, "amount":amount, "value":value };
    resetForm();
    setList(list);
}




setList(list);
//console.log()
