/*
   Class made by Rodrigo Sartori Jarouche
   http://rodrigojarouche.blogspot.com
   Email: rjarouche@gmail.com
   Licenced by MIT license
*/
baseTimer = {}; //or Object.create(null); or new Object();


baseTimer.prototype  =  {   //Object.create(null,{...}); or new Object({...});
    stop : function(){
             this.vStop = true;
    },
    resume: function(){
        if(this.vStop){
           this.vStop = false;
           this.start();
        }
    },
    reset: function(){
        this.time = this.seconds;
        this.resume();
    },
    formatTime: function(seconds){
        hour = this.leftZero(Math.round(seconds/3600));
        min = this.leftZero(Math.floor((seconds%3600)/60));
        sec = this.leftZero((seconds%3600)%60);

        if(hour == '00'){
            formatedNumber = min+":"+sec;
        }else{
            formatedNumber = hour+":"+min+":"+sec;
        }
        return formatedNumber;
    },
    leftZero: function(number){  
        if (number <= 9){
          number = "0"+ number;
        }
        return number;
    }
};











