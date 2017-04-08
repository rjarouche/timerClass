# timerClass
<h3>Javascript class for create a timer.</h3><br/> 

Some simple javascript classes (don't need any others javascript libraries!) to create different kind of timers in yor project.<br/>
The usage is like this:<br/>

For classTimer.js, that creates a countdown timer; 

objTimer = new classTimer(seconds,objectPrint,function,[, arg1[, arg2[, ...]]]);<br/>
objTimer.start();<br/>

<h6>seconds:</h6>Time in seconds of countDown timer;<br/>
<h6>objectPrint:</h6> object that the innerHTML will be set to formatted time<br/>
<h6>function:</h6> the function that will be triggered when count be zero.<br/>
<h6>arg1...:</h6> args of the function<br/>
<h6>start()</h6> method starts the timer<br/>
<h6>stop()</h6> method stops the timer<br/>
<h6>reset()</h6> method resets the timer<br/>
<br/>


For classTimerUp.js, that creates a count timer; 

objTimer = new classTimerUp(seconds,objectPrint,function,[, arg1[, arg2[, ...]]]);<br/>
objTimer.start();<br/>

<h6>seconds:</h6>Time in seconds of count timer;<br/>
<h6>objectPrint:</h6> object that the innerHTML will be set to formatted time<br/>
<h6>function:</h6> the function that will be triggered when count be zero.<br/>
<h6>arg1...:</h6> args of the function<br/>
<h6>start()</h6> method starts the timer<br/>
<h6>stop()</h6> method stops the timer<br/>
<h6>reset()</h6> method resets the timer<br/>
<br/>



For classTimerInf.js, that creates a count timer with no limit of time,every interval you want, it's good for a auto-save forms or another kind of listening; 

objTimer = new classTimerInf(interval,objectPrint,function,[, arg1[, arg2[, ...]]]);<br/>
objTimer.start();<br/>

<h6>interval:</h6>Time in seconds of  the interval that executes the function, if you put 5, it will execute de function in every 5 ;<br/>
<h6>objectPrint:</h6> object that the innerHTML will be set to formatted time<br/>
<h6>function:</h6> the function that will be triggered when count be zero.<br/>
<h6>arg1...:</h6> args of the function<br/>
<h6>start()</h6> method starts the timer<br/>
<h6>stop()</h6> method stops the timer<br/>
<h6>reset()</h6> method resets the timer<br/>
<br/>

classTimerAcc.js is equals classTimerInf.js, but it is more accurate, and the 3rd parameters is the precision, if null 100 will be assumed, if you want more precision put p. ex 10

Take a look in the example files!;)<br/>
