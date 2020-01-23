function calculate(){
    let inp_1 = document.getElementById('inp-1').value;
    let inp_2 = document.getElementById('inp-2').value;
    let inp_3 = document.getElementById('inp-3').value;
    let inp_4 = document.getElementById('inp-4').value;
    let inp_5 = document.getElementById('inp-5').value;
    let inp_6 = document.getElementById('inp-6').value;
    let inp_7 = document.getElementById('inp-7').value;
    let inp_8 = document.getElementById('inp-8').value;    
    let answer_1 = document.getElementById('answer_1')
    let answer_2 = document.getElementById('answer_2')
    let answer_3 = document.getElementById('answer_3')
    let answer_4 = document.getElementById('answer_4')

    //   if(document.getElementById('add')){
           if (inp_1 !== "" && inp_2 !== ""){
           answer_1.style.display = 'block'
            answer_1.innerHTML = parseInt(inp_1)+ parseInt(inp_2);
        }

             if((inp_1 == "" && inp_2 !=="") || (inp_2 == "" && inp_1 !=="")){
                
                 alert('please enter both the numbers to be added');
             }
    //   }

       //if(document.getElementById('sub')){
           if(inp_3 !== "" && inp_4 !== ""){
           answer_2.style.display = 'block'
            answer_2.innerHTML = inp_3-inp_4;}

            if((inp_3 == "" && inp_4 !=="") || (inp_4 == "" && inp_3 !=="")){
                
                alert('please enter both the numbers to be subtracted');
            }
       //}

       //if(document.getElementById('prod')){
           if(inp_5 !== "" && inp_6 !== ""){
           answer_3.style.display = 'block'
            answer_3.innerHTML = inp_5*inp_6;}
            if((inp_5 == "" && inp_6 !=="") || (inp_6 == "" && inp_5 !=="")){
                
                alert('please enter both the numbers to be multiplied');
            }
       //}

       //if(document.getElementById('divide')){
           if(inp_7 !== "" && inp_8 !== ""){
           answer_4.style.display = 'block'
            answer_4.innerHTML = inp_7/inp_8;}
            if((inp_7 == "" && inp_8 !=="") || (inp_8 == "" && inp_7 !=="")){
                
                alert('please enter both the numbers to be divided');
            }
       //}



        
 }