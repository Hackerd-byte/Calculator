(function(){
    let save='',answer;
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let equal=document.getElementById('equal');
    let clear=document.getElementById('clear');
    let mrcall=document.getElementById('mrc');
    let memoryminus=document.getElementById('mmin');
    let memoryadd=document.getElementById('madd');
    let input=document.getElementById('input');

    const ans=()=>{
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
    };

    const addition=()=>{
        save+=`+${eval(screen.value)}`;
        screen.value="";
    };

    const minus=function(e){
        save+=`-${eval(screen.value)}`;
        screen.value='';
    };
    const memoryrecall=function(e){
        if(save === ''){
            screen.value+='';
        }
        else{
            screen.value+=save;
            answer=eval(screen.value);
            screen.value=answer;
        }
    };

    const memoryclear=function(e){
        save='';
        screen.value=save;
    };


    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value += value;          
        })
    });


    equal.addEventListener('click',ans);
    memoryadd.addEventListener('click',addition);
    memoryminus.addEventListener('click',minus);
    mrcall.addEventListener('click',memoryrecall);
    mrcall.addEventListener('dblclick',memoryclear);
    
    input.addEventListener('keydown',function(e){
        switch(e.code){
            case 'Enter':
                e.preventDefault();
                ans();
                break;

            case "KeyZ":
                e.preventDefault();
                screen.value='';
                break;
            case "KeyP":
                e.preventDefault();
                addition();
                break;
            case "KeyQ":
                e.preventDefault();
                minus();
                break;
            case "KeyM":
                e.preventDefault();
                memoryrecall();
                break;
            case "KeyN":
                e.preventDefault();
                memoryclear();
                break;
        }
    });
    
    clear.addEventListener('click',(e)=>{
        screen.value='';
    })
})();