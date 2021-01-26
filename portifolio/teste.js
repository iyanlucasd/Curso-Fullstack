alert("Bem vindo");
var nome = prompt("nome");
var idade = prompt("idade");
var bool = confirm("confirm: " + idade +" ?");
var string;
if (bool) {
    string = "sim"
} else {
    string = "não"
}

alert(nome+ " " + idade + " "+ string);