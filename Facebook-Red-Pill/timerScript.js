var time = 0 ;

document.writeln("<div id='timer'></div>");
function startTimer()
{
	var timer = document.getElementById('timer');
	setInterval(function(){ time+=1;  timer.innerHTML = formatTime(time); }, 1000);
}

function formatTime(secs) 
{
	var minutes = Math.floor(secs / 60);
	var seconds = secs - minutes * 60;
	var hours = Math.floor(secs / 3600);
	minutes = minutes >= 60 ? minutes - 60 : minutes; 
	return  str_pad_left(hours,'0',2)+':'+ str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
}
function str_pad_left(string,pad,length) {return (new Array(length+1).join(pad)+string).slice(-length); }

startTimer(); 