(()=>{"use strict";var t;!function(t){t[t.Stopped=1]="Stopped",t[t.Started=2]="Started",t[t.Paused=3]="Paused",t[t.Resumed=4]="Resumed"}(t||(t={}));class e{constructor(e,n,i,s,o,r){this.secondsTimerInput=e,this.minutesTimerInput=n,this.hoursTimerInput=i,this.timerDisplay=s,this.startOrPauseCountdownBtnEle=o,this.resetCountdownTimerBtnEle=r,this.countdownTimerId=0,this.countdownValSec=0,this.countdownTimerState=t.Stopped,o.addEventListener("click",this.startOrPauseCountdownBtnClickHandler.bind(this)),r.addEventListener("click",this.resetCountdownTimerBtnClickHandler.bind(this))}prefixNumWithZeros(t,e=2){let n=t.toString();for(;n.length<e;)n="0"+n;return n}displayCounterVal(){if(this.countdownValSec<=0)throw"Internal countdownValSec should be > 0";const t=this.prefixNumWithZeros(Math.floor(this.countdownValSec/3600)),e=this.prefixNumWithZeros(Math.floor(this.countdownValSec%3600/60)),n=this.prefixNumWithZeros(Math.floor(this.countdownValSec%3600%60));this.timerDisplay.ele.innerHTML=t+":"+e+":"+n}startTimer(){console.log("Seconds start = "+this.countdownValSec),this.countdownTimerId=window.setInterval(this.countdownTimerCb.bind(this),1e3),this.displayCounterVal()}stopTimerAndClearDisplay(e){this.countdownValSec=0,this.countdownTimerState=t.Stopped,e&&(this.secondsTimerInput.ele.value="",this.minutesTimerInput.ele.value="",this.hoursTimerInput.ele.value=""),this.timerDisplay.ele.innerHTML="--:--:--",clearInterval(this.countdownTimerId)}countdownTimerCb(){if(this.countdownValSec<=0)throw"Internal countdownValSec should be > 0";this.countdownValSec--,0===this.countdownValSec?this.stopTimerAndClearDisplay(!1):(console.log("In countdownTimerCb() -> "+this.countdownValSec),this.displayCounterVal())}validateForPositiveInputVal(t,e){return t.value?parseInt(t.value)<=0||parseInt(t.value)>e?(alert(`Invalid. Enter value between 1-${e} for ${t.name}`),{isNotEmptyAndIsValid:!1,isEmpty:!1}):{isNotEmptyAndIsValid:!0,isEmpty:!1}:{isNotEmptyAndIsValid:!1,isEmpty:!0}}startOrPauseCountdownBtnClickHandler(){if(this.countdownTimerState==t.Stopped){const e=this.validateForPositiveInputVal(this.secondsTimerInput.ele,this.secondsTimerInput.maxVal),n=this.validateForPositiveInputVal(this.minutesTimerInput.ele,this.minutesTimerInput.maxVal),i=this.validateForPositiveInputVal(this.hoursTimerInput.ele,this.hoursTimerInput.maxVal);if(e.isEmpty&&n.isEmpty&&i.isEmpty)alert("Invalid. Enter a countdown value");else{this.countdownValSec=0;let s=!1;e.isNotEmptyAndIsValid&&(this.countdownValSec=parseInt(this.secondsTimerInput.ele.value),s=!0),n.isNotEmptyAndIsValid&&(this.countdownValSec+=60*parseInt(this.minutesTimerInput.ele.value),s=!0),i.isNotEmptyAndIsValid&&(this.countdownValSec+=3600*parseInt(this.hoursTimerInput.ele.value),s=!0),s&&(this.countdownTimerState=t.Started,this.startTimer())}}else this.countdownTimerState==t.Started||this.countdownTimerState==t.Resumed?(this.countdownTimerState=t.Paused,clearInterval(this.countdownTimerId)):this.countdownTimerState==t.Paused&&(this.countdownTimerState=t.Resumed,this.startTimer())}resetCountdownTimerBtnClickHandler(){console.log(`Seconds stop = ${this.countdownValSec}`),this.stopTimerAndClearDisplay(!0)}}function n(t){const e=document.getElementById(t);if(e)return e;throw`Element: ${t} not found in DOM`}const i=n("secondsTimerInput"),s=n("minutesTimerInput"),o=n("hoursTimerInput"),r=n("timerDisplay"),a=n("startOrPauseCountdownBtn"),l=n("resetCountdownTimerBtn"),u=n("secondsTimerInput2"),d=n("minutesTimerInput2"),m=n("hoursTimerInput2"),h=n("timerDisplay2"),c=n("startOrPauseCountdownBtn2"),p=n("resetCountdownTimerBtn2");new e({ele:i,maxVal:60},{ele:s,maxVal:60},{ele:o,maxVal:24},{ele:r,fieldSize:2},a,l),new e({ele:u,maxVal:60},{ele:d,maxVal:60},{ele:m,maxVal:24},{ele:h,fieldSize:2},c,p)})();