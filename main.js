function calculateSolution(){
    
    var a= parseFloat(document.getElementById('aInput').value);
    var b= parseFloat(document.getElementById('bInput').value);

    var solution=a**2 + b**2;


    document.getElementById('result').innerText='Result: Y=' + solution;

}