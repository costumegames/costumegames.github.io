if ($("#countdown").length > 0) {
  jQuery(document).ready(function(){	
    //var dateParts = $('#countdown').data("date") .match(/(\d+)-(\d+)-(\d+) (\d+):(\d+)/);
    
	dateFuture1 = new Date($('#countdown').data("date"))
	GetCount(dateFuture1, 'countdown');
  });
}	
function GetCount(ddate,iid){
    dateNow = new Date();	//grab current date
    amount = ddate.getTime() - dateNow.getTime();	//calc milliseconds between dates
    delete dateNow;

    // if time is already past
    if(amount < 0){
        document.getElementById(iid).innerHTML="";
    }
    // else date is still good
    else{
        days=0;hours=0;mins=0;secs=0;out="";

        amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

        days=Math.floor(amount/86400);
        if(days > 1) {amount=amount%(days*86400);}
        hours=Math.floor(amount/3600);
        amount=amount%3600;

        mins=Math.floor(amount/60);
        amount=amount%60;

        secs=Math.floor(amount);

        //if(hours != 0){out += "<span>" + hours +((hours==1)?"<br /><small>hour</small>":"<small>hours</small>")+"</span>";}
        out += "<span>" + days +((days==1)?"<br /><small>day</small>":"<small>days</small>")+"</span>";
        out += "<span>" + hours +((hours==1)?"<br /><small>hour</small>":"<small>hours</small>")+"</span>";
        out += "<span>" + mins +((mins==1)?"<small>min</small>":"<br /><small>mins</small>")+"</span>";
        out += "<span>" + secs +((secs==1)?"<small>sec</small>":"<br /><small>secs</small>")+"</span>";
        out = out.substr(0,out.length-2);
        document.getElementById(iid).innerHTML=out;

        setTimeout(function(){GetCount(ddate,iid)}, 1000);
    }
}