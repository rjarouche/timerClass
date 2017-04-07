/*
   Class made by Rodrigo Sartori Jarouche
   http://rodrigojarouche.blogspot.com
   Email: rjarouche@gmail.com
   Licenced by MIT license
*/

function classTimer(seconds,obj,execFunction)
{
    if(typeof(execFunction)!="function"){
	  console.log('parameter function is not a function');
	  return false;
    }
	  
    var seconds = seconds;
    var time = seconds;
    var pObj = obj;
    var funcE = execFunction;
    var vStop =false;
    //transform arguments in a stantard array
    var args = Array.prototype.slice.call(arguments);
    args = args.splice(3,args.length);
    //function to start
    this.start = function ()
    {
        
        if(vStop){
            return false;
        }
        
        //if time is not zero 
       if((time -1) >= 0){
           
		   if(pObj != null){
			 pObj.innerHTML = formatTime(time);   
		   }
           
           setTimeout(this.start.bind(this),1000);
		     time--;

        }else{
           funcE.apply(null,args);
        }
    }
    
    //function to stop counter
    this.stop = function()
    {
        vStop = true;
    }
    
    //function to resume counter
    this.resume= function()
    {
        if(vStop){
           vStop = false;
           this.start();
        }

    }
    
    //function to reset counter
    this.reset= function()
    {
        time = seconds;
        this.resume();
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








  



