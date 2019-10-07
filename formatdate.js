function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  
  var dateparts = userDate.split("/");
  
  var tmpDay = "";
  var tmpMonth = "";
  var tmpYear = "";
  
  // Month part
  if(dateparts[0] < 10)
    {
      tmpMonth = tmpMonth.concat("0", dateparts[0]);
    }
  else
    {
    tmpMonth = dateparts[0];
    }
  
  // Days part
  if(dateparts[1] < 10){   
    tmpDay = tmpDay.concat("0", dateparts[1]);
  }
  else
    {
    tmpDay = dateparts[1];
    }
    
  // Year part
  tmpYear = dateparts[2];
  
  var tmpReverse = "";
  
  tempReverse = tmpReverse.concat(tmpYear, tmpMonth, tmpDay);

  
  return tempReverse;
   
  }