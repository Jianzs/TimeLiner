$(document).ready(main);


function main() {
	$.timeliner({});  //timeliner.js
	
	setTime();
	setInterval(setTime, 1000);

}

function setTime() {
	var startTime = new Date();
	startTime.setFullYear(2015,9,22);
	startTime.setHours(21,50,00,00);
	var nowTime = new Date();
	var timeDiff = nowTime-startTime;
	var days = Math.floor(timeDiff/(24*3600*1000));

	var leave1=timeDiff%(24*3600*1000)    //计算天数后剩余的毫秒数
	var hours=Math.floor(leave1/(3600*1000))
	//计算相差分钟数
	var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
	var minutes=Math.floor(leave2/(60*1000))
	 

	//计算相差秒数
	var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
	var seconds=Math.round(leave3/1000)


	$('#time').text("那一夜后的 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+"   秒");
}

