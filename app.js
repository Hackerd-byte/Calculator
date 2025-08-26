function ans(num){

}

(function(){
    let save='',answer;
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let equal=document.getElementById('equal');
    let clear=document.getElementById('clear');
    let memoryrecall=document.getElementById('mrc');
    let memoryminus=document.getElementById('mmin');
    let memoryadd=document.getElementById('madd');
    
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value += value; 
            if (screen.value>=2^(53-1)){
                screen.value=BigInt(screen.value);
            }           
        })
    });
    equal.addEventListener('click',function(e){
        try{
            if(screen.value === ''){
                screen.value="Please enter";
            }else{
                answer=eval(screen.value);
                screen.value=answer;
            }
        }
        catch(err){
            screen.value=err.value;
        }
    });
    // document.addEventListener('keyup',function(e){
    //     // console.log(`Key:${e.}`);
    //     switch(e.key){
    //         case "undefined":
    //             try{
    //                 if(screen.value === ''){
    //                     screen.value="Please enter";
    //                 }else{
    //                     answer=eval(screen.value);
    //                     screen.value=answer;
    //                 }
    //             }
    //             catch(err){
    //                 screen.value=err.value;
    //             }
    //             break;
    //         }
    //     })
    memoryminus.addEventListener('click',function(e){
        save+=`-${eval(screen.value)}`;
        screen.value='';
    });
    memoryadd.addEventListener('click',function(e){
        save+=`+${eval(screen.value)}`;
        screen.value='';
    });

    memoryrecall.addEventListener('click',function(e){
        if(save === ''){
            screen.value+='';
        }
        else{
            screen.value+=save;
            answer=eval(screen.value);
            screen.value=answer;
        }
    });
    memoryrecall.addEventListener('dblclick',function(e){
        save='';
    })
    clear.addEventListener('click',function(e){
        screen.value="";
    });

    
})();