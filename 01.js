// function

function minhaFuncion (){
    //  Este
    this.name = "Adilson"
    this.date = "07/12/1999"
};

console.log(new minhaFuncion());

// arrows function

const minhaArrowFunction = () => {
    // Irá adicionar essas propriedades no escopo geral
    this.name = "Adilson";
    this.date = "07/12/1999";
};
minhaArrowFunction();

// console.log( new minhaArrowFunction()) -- RESULTADO DA QUE A ARROW FUNCTION NÃO É CONSTRUCTOR
console.log(this)