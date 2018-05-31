   function getrandomcolor(){
                
                var letters='0123456789ABCDEF'.split('');
                var color='#';
                for(var i=0;i<6;i++)
                    {
                        color+=letters[Math.floor(Math.random()*16)];
                    }
                return color;
            }
            
                
                   var start1 = new Date().getTime();
                    var start2 = new Date().getTime();
              var min=1000000;
                function makeshape(){
                    var top = Math.random()*400;
                    var left = Math.random()*800;
                    var width =Math.random()*200;
                    var height =Math.random()*200;
                  
                    if(Math.random()>0.5)
                        {
                            document.getElementById("rect").style.borderRadius= Math.random()*100 + "%";
                             document.getElementById("circ").style.borderRadius=Math.random()*50 + "%";
                        }
                    else
                        {
                             document.getElementById("rect").style.borderRadius= Math.random()*90 + "%";
                             document.getElementById("circ").style.borderRadius=Math.random()*70 + "%";
                        }
                    document.getElementById("rect").style.top= top+"px";
                    document.getElementById("rect").style.left= left+"px";
                    document.getElementById("rect").style.width= width+"px";
                    document.getElementById("rect").style.height=height+"px";
                    document.getElementById("rect").style.background=getrandomcolor();    
                     
                    document.getElementById("circ").style.top= top+"px";
                    document.getElementById("circ").style.left= left+"px";
                    document.getElementById("circ").style.width= width+"px";
                    document.getElementById("circ").style.height=height+"px";
                      document.getElementById("circ").style.background=getrandomcolor();    
                    document.getElementById("rect").style.display="block";
                     document.getElementById("circ").style.display="block";
                      start1 = new Date().getTime();
                    start2 = new Date().getTime();        
                    
                }
            
            function appearafterdelay(){
            setTimeout(makeshape,1000);
            }
            
            document.getElementById("rect").onclick=function(){
                
                var end1 = new Date().getTime();
                var timeTaken = (end1 - start1)/1000;  
                if(min > timeTaken)
                    {
                        min=timeTaken;
                    }
                document.getElementById("rect").style.display="none";
                document.getElementById("time").innerHTML="Time Taken" + " rectangle:"+ timeTaken +"sec";
                 document.getElementById("best").innerHTML="Best Time " + " rectangle:"+ min+"sec";
                appearafterdelay();
            }
            document.getElementById("circ").onclick=function(){
                
                    var end2 = new Date().getTime();
                    var timeTaken = (end2-start2)/1000;    
                 if(min>timeTaken)
                    {
                        min=timeTaken;
                    }
                    document.getElementById("circ").style.display="none";
                        document.getElementById("time").innerHTML= "Time Taken "+"circle:"+ timeTaken +"sec";  
                     document.getElementById("best").innerHTML="Best Time " + " circle:"+ min+"sec";
                 appearafterdelay();
    
        
            }
            