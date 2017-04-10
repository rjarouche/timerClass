function classTimerUp(limit,obj,execFunction)
{
    if(typeof(execFunction)!="function"){
	  console.log('parameter function is not a function');
	  return false;
    }
	  
  this.time = 0;
  this.seconds = 0;
  this.limit = limit; 
  this.pObj = obj;
  this.funcE = execFunction;
  this.vStop =false;
    //transform arguments in a stantard array
  this.args = Array.prototype.slice.call(arguments);
  this.args = this.args.splice(3,this.args.length);
}



classTimerUp.prototype = Object.create(baseTimer.prototype);
classTimerUp.prototype.constructor = classTimerUp;


classTimerUp.prototype.start = function ()
{
        
        if(this.vStop){
            return false;
        }
        //if time is not zero 
       if((this.time) < this.limit){
           
           if(this.pObj != null){
             this.pObj.innerHTML = this.formatTime(this.time);   
           }
           
           setTimeout(this.start.bind(this),1000);
             this.time++;

        }else{
            this.funcE.apply(null,this.args);
        }
}
