/*
   Class made by Rodrigo Sartori Jarouche
   Based on http://stackoverflow.com/questions/32307483/in-javascript-how-to-create-an-accurate-timer-with-milliseconds
   http://rodrigojarouche.blogspot.com
   Email: rjarouche@gmail.com
   Licenced by MIT license
*/
          function classTimerAcc(interval,obj,pre,execFunction)
         {
                if(typeof(execFunction)!="function"){
                 console.log('parameter function is not a function');
                 return false;
                }
                 
                var interval = interval; 
                var pObj = obj;
                var funcE = execFunction;
                var pre = pre;
                var vStop =false;
                var oldElapsedTime = 0;
                
                if(!pre){
                    pre = 100;
                }
                
                //transform arguments in a stantard array
                var args = Array.prototype.slice.call(arguments);
                args = args.splice(4,args.length);
                
                
                var startTime = Date.now();
                var timexec;

                this.start = function() {
                        var elapsedTime = Date.now() - startTime;
                        
                         if(vStop){
                            oldElapsedTime += elapsedTime;
                            return false;
                         }
                        
                         time = ( (elapsedTime + oldElapsedTime) / 1000).toFixed(0);
                         
                         if(pObj != null){
                             pObj.innerHTML = formatTime(time);   
                         }
                         
                         if (time % interval == 0 && timexec != time &&  time != 0 ){
                              funcE.apply(null,args);
                              timexec  =  time;
                         }
                         setTimeout(this.start.bind(this),pre);
                }
                
               this.stop = function()
               {
                 vStop = true;
               }
               
               this.resume = function()
               {
                 if(vStop){
                    vStop = false;
                    startTime = Date.now();
                    this.start();
                 }
               }
               
               this.reset = function()
               {
                    vStop = false;
                    oldElapsedTime = 0;
                    startTime = Date.now();
                    this.start();

               }
                              
             //function to format the number to 00:00:00 or 00:00
             function formatTime(seconds)
             {
                 hour = leftZero(Math.round(seconds/3600));
                 min = leftZero(Math.floor((seconds%3600)/60));
                 sec = leftZero((seconds%3600)%60);

                 if(hour == '00'){
                     formatedNumber = min+":"+sec;
                 }else{
                     formatedNumber = hour+":"+min+":"+sec;
                 } 
                 return formatedNumber;
             }
          
             // just for put or not a left zero
             function leftZero(number)
             {
                 if (number <= 9){
                   number = "0"+ number;
                 }
                 return number;
             }
         }