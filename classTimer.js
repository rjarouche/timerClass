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

    this.seconds = seconds;
    this.time = seconds;
    this.pObj = obj;
    this.funcE = execFunction;
    this.vStop =false;
    //transform arguments in a stantard array
    args = Array.prototype.slice.call(arguments);
    this.args = args.splice(3,args.length);
}

classTimer.prototype = Object.create(baseTimer.prototype);
classTimer.prototype.constructor = classTimer;

classTimer.prototype.start = function (){

        if(this.vStop){
            return false;
        }

        //if time is not zero
       if((this.time -1) >= 0){

            if(this.pObj != null){
                  this.pObj.innerHTML = this.formatTime(this.time);
            }

            setTimeout(this.start.bind(this),1000);
            this.time--;

        }else{
           this.funcE.apply(null,this.args);
        }
}


