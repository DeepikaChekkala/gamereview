const search=() =>{
    const searchbox=document.getElementById("search-item").value.toUpperCase();
    const storeitems=document.getElementById("game-list")
    const game=document.querySelectorAll(".game")
    const pname=document.getElementsByTagName("h2")
    const pname1=document.getElementsByTagName("h3")
    for(var i=0;i<pname.length;i++){
        
             let match=game[i].getElementsByTagName('h2')[0];
             let match1=game[i].getElementsByTagName('h3')[0];
          
             if(match || match1){
                let textvalue= match.textContent || match.innerHTML
                let textvalue1=match1.textContent || match1.innerHTML
                if(textvalue.toUpperCase().indexOf(searchbox)>-1){
                    game[i].style.display="";
                
                }else if(textvalue1.toUpperCase().indexOf(searchbox)>-1){
                    game[i].style.display="";
                }
                else{
                    game[i].style.display="none";
                 
                }
            }
            
        }
    }
   
