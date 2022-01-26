(() => {

    total = 0;
    inputNum = "";
    clac = "+";
    flg = 0;
    $display = document.getElementById('display');

    addNum = (data) => {
        flg = 0;
        inputNum += data;
        $display.textContent = inputNum;
    } 

    calcNum = (data) => {
        if(flg == 0){
            flg = 1;
            work = total + clac + inputNum;
            total = eval(work);
            $display.textContent = total;
            inputNum = "";
        }
        if(data == '='){
            flg = 0;
            inputNum = "";
        } else {
            clac = data;
        }
    }

    allClear = ()=>{
        total = 0;
        inputNum = "";
        clac = "+";
        flg = 0;
        $display.textContent = 0;
    }

})();