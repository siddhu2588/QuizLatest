var col1=0, col2=0, col3=0, col4=0, col5=0, col6=0, col7=0, col8=0, col9=0, col10=0;
var c1=0, c2=0, c3=0, c4=0, c5=0, c6=0, c7=0, c8=0, c9=0, c10=0;
var m = 0;
var i=0;
var g=0, s=0, a=0, j=0, idi=0;
var gp=0, sp=0, ap=0, jp=0, ip=0;
var f=0;
var min=0;

function cal1(i){
    var count1=0;
    if(i==1 && count1<1)
    {count1=count1+1;
    col1=col1+1;
    g=g+1;
    }
    else
   { count1=0;
    col1=0;
    } c1=count1;
   
}

function cal2(i){
    var count2=0;
    if(i==4 && count2<1){

   count2= count2+1;
   col2=col2+1;
   s=s+1;}
   else{
   count2=0;
   col2=0;}

   c2=count2;
   
}

function cal3(i){
    var count3=0;
    if(i==3 && count3<1){
    count3=count3+1;
    col3=col3+1;
a=a+1;}
    else{
    count3=0;
    col3=0;}

    c3=count3;
}

function cal4(i){
    var count4=0;
    if(i==1 && count4<1){
    count4=count4+1;
    col4=col4+1;
a=a+1;}
    else{
    count4=0;
    col4=0;}
    c4=count4;
}

function cal5(i){
    var count5=0;
    if(i==2  && count5<1){
    count5=count5+1;
    col5=col5+1;
s=s+1;}
    else{
    count5=0;
    col5=0;}
    c5=count5;
}

function cal6(i){
    var count6=0;
    if(i==3 && count6<1){
    count6=count6+1;
    col6=col6+1;
g=g+1;}
    else{
    count6=0;
    col6=0;}

    c6=count6;
}

function cal7(i){
    var count7=0;
    if(i==1 && count7<1){
    count7=count7+1;
    col7=col7+1;
j=j+1;}
    else{
    count7=0;
    col7=0;}
    c7=count7;
}

function cal8(i){
    var count8=0;
    if(i==2 && count8<1){
    count8=count8+1;
    col8=col8+1;
j=j+1;}
    else{
    count8=0;
    col8=0;}

    c8=count8;
}

function cal9(i){
    var count9=0;
    if(i==1 && count9<1){
    count9=count9+1;
    col9=col9+1;
idi=idi+1;}
    else{
    count9=0;
    col9=0}

    c9=count9;
}

function cal10(i){
    var count10=0;
    if(i==2 && count10<1){
    count10=count10+1;
    col10=col10+1;
idi=idi+1;}
    else{
    count10=0;
    col10=0;}

    c10=count10;
}
function showres(){
    // alert("Your Score is " + (c1+c2+c3+c4+c5+c6+c7+c8+c9+c10))
    var a= document.getElementsByClassName("corr1");
    var b= document.getElementsByClassName("corr2");
    var c= document.getElementsByClassName("corr3");
    var d= document.getElementsByClassName("corr4");
    var e= document.getElementsByClassName("corr5");
    var f= document.getElementsByClassName("corr6");
    var g= document.getElementsByClassName("corr7");
    var h= document.getElementsByClassName("corr8");
    var i= document.getElementsByClassName("corr9");
    var j= document.getElementsByClassName("corr10");
    document.getElementById("timerbody").style.display="none";
    document.getElementById("caar").style.display="block";
    marks=(c1+c2+c3+c4+c5+c6+c7+c8+c9+c10);
    percent=(marks/10)*100;
    // document.getElementById("corrans").style.display = "block";

    document.getElementById("sub").style.display="none";  
   
    document.getElementById("score").innerHTML="Your Score is : " + marks;
    // alert(col1);

    if(col1>0){
        // console.log("hello");
       a[0].style.color="green";
       a[1].style.color="green";
       a[2].style.color="green";
       a[3].style.color="green";
        }
        else{
            a[0].style.color="red";
            a[1].style.color="red";
            a[2].style.color="red";
            a[3].style.color="red";
            // document.getElementById("corr").style.color="red";
        }


    if(col2>0){
        // console.log("hello");
           b[0].style.color="green";
           b[1].style.color="green";
           b[2].style.color="green";
           b[3].style.color="green";
            }
            else{
                b[0].style.color="red";
                b[1].style.color="red";
                b[2].style.color="red";
                b[3].style.color="red";
                // document.getElementById("corr").style.color="red";
            }




        if(col3>0){
             // console.log("hello");
            c[0].style.color="green";
            c[1].style.color="green";
            c[2].style.color="green";
            c[3].style.color="green";
         }
         else{
            c[0].style.color="red";
            c[1].style.color="red";
            c[2].style.color="red";
            c[3].style.color="red";
            // document.getElementById("corr").style.color="red";
            }


       if(col4>0){
        // console.log("hello");
                   d[0].style.color="green";
                   d[1].style.color="green";
                   d[2].style.color="green";
                   d[3].style.color="green";
                    }
                    else{
                        d[0].style.color="red";
                        d[1].style.color="red";
                        d[2].style.color="red";
                        d[3].style.color="red";
                        // document.getElementById("corr").style.color="red";
                    }

                    if(col5>0){
                        // console.log("hello");
                       e[0].style.color="green";
                       e[1].style.color="green";
                       e[2].style.color="green";
                       e[3].style.color="green";
                        }
                        else{
                            e[0].style.color="red";
                            e[1].style.color="red";
                            e[2].style.color="red";
                            e[3].style.color="red";
                            // document.getElementById("corr").style.color="red";
                        }

                        if(col6>0){
                            // console.log("hello");
                           f[0].style.color="green";
                           f[1].style.color="green";
                           f[2].style.color="green";
                           f[3].style.color="green";
                            }
                            else{
                                f[0].style.color="red";
                                f[1].style.color="red";
                                f[2].style.color="red";
                                f[3].style.color="red";
                                // document.getElementById("corr").style.color="red";
                            }

                            if(col7>0){
                                // console.log("hello");
                               g[0].style.color="green";
                               g[1].style.color="green";
                               g[2].style.color="green";
                               g[3].style.color="green";
                                }
                                else{
                                    g[0].style.color="red";
                                    g[1].style.color="red";
                                    g[2].style.color="red";
                                    g[3].style.color="red";
                                    // document.getElementById("corr").style.color="red";
                                }

                                if(col8>0){
                                    // console.log("hello");
                                   h[0].style.color="green";
                                   h[1].style.color="green";
                                   h[2].style.color="green";
                                   h[3].style.color="green";
                                    }
                                    else{
                                        h[0].style.color="red";
                                        h[1].style.color="red";
                                        h[2].style.color="red";
                                        h[3].style.color="red";
                                        // document.getElementById("corr").style.color="red";
                                    }

                                    if(col9>0){
                                        // console.log("hello");
                                       i[0].style.color="green";
                                       i[1].style.color="green";
                                       i[2].style.color="green";
                                       i[3].style.color="green";
                                        }
                                        else{
                                            i[0].style.color="red";
                                            i[1].style.color="red";
                                            i[2].style.color="red";
                                            i[3].style.color="red";
                                            // document.getElementById("corr").style.color="red";
                                        }


                                        if(col10>0){
                                            // console.log("hello");
                                           j[0].style.color="green";
                                           j[1].style.color="green";
                                           j[2].style.color="green";
                                           j[3].style.color="green";
                                            }
                                            else{
                                                j[0].style.color="red";
                                                j[1].style.color="red";
                                                j[2].style.color="red";
                                                j[3].style.color="red";
                                                // document.getElementById("corr").style.color="red";
                                            }



}
 










 function start() {

    document.getElementById("ans").style.display = "none";
     document.getElementById("caar").style.display = "none";
     document.getElementById("myProgress").style.display = "none";

     document.getElementById("myFailure").style.display = "none";
     document.getElementById("sitest").style.display = "none";
     document.getElementById("sistudy").style.display = "none";
     document.getElementById("pertest").style.display = "none";
     document.getElementById("perstudy").style.display = "none";
     document.getElementById("pltest").style.display = "none";
     document.getElementById("plstudy").style.display = "none";
     document.getElementById("avgtest").style.display = "none";
     document.getElementById("avgstudy").style.display = "none";
     document.getElementById("caltest").style.display = "none";
     document.getElementById("calstudy").style.display = "none";

    // document.getElementById("corrans").style.display = "none";
    var min = 4;
    var sec = 59;
    var hello =setInterval(function() {
       
      document.getElementById("timer").innerHTML = "0" +min + " : " + sec;
      sec--;
      if (sec == 00) {
        if(min>0){
            min--
            sec = 60;
            }
            
        if(min==0 && sec==0){
            // alert("time over"); 
            stop();
        }
        
        // if (min == 0 && sec==0) {
        //     //     alert("time over");
        //      stop();
        //       }
      }
     
    }, 1000);

    //

}



  function stop(){
    //   clearInterval(hello);
    document.getElementById("timerbody").style.display="none";
    
    
    showres();
  }


  function ar(){

    
    // marks=(c1+c2+c3+c4+c5+c6+c7+c8+c9+c10);
    
    var percent = (marks/10)*100;
    
    // marks=(c1+c2+c3+c4+c5+c6+c7+c8+c9+c10);
    document.getElementById("ans").style.display="block";
    document.getElementById("caar").style.display="none";
    // document.getElementById("pro").style.display="block";
    document.getElementById("myProgress").style.display="block";
    document.getElementById("myFailure").style.display="block";
    
    document.getElementById("bear").innerHTML= "Your Percentage is : " + percent + " %";
    
    if(percent<=39){
        document.getElementById("pnt").innerHTML="* Your score is too low & you need to work hard. It is suggested to attempt more such tests to improve the score. *";
    }

    if(percent>39 && percent<=69){
        document.getElementById("pnt").innerHTML="* Your score is average, you can work harder & score better. *";
    }


    if(percent>69 && percent<=89){
        document.getElementById("pnt").innerHTML="* Your score is above average & you can still do better. *";
    }

    if(percent>=90){
        document.getElementById("pnt").innerHTML="* Your score is good. Keep it up! *";
    }



}

  


function move(){
    if (m == 0) {
        m = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= percent) {
            clearInterval(id);
            m = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            // document.getElementById("percdis").innerHTML= width + "%";
            elem.innerHTML = width*1+"% Success";
            
          }
        }
      }}


      function fmove(){
        if (i == 0) {
            i = 1;
            var eleme = document.getElementById("FailBar");
            var width = 1;
            var id1 = setInterval(frame, 10);
            function frame() {
              if (width >= (100-percent)) {
                clearInterval(id);
                i = 0;
              } else {
                width++;
                eleme.style.width = width + "%";
                // document.getElementById("percdis").innerHTML= width + "%";
                eleme.innerHTML = width*1+"% Failure";
                
              }
            }
          }}

    
function pc(){
    anychart.onDocumentReady(function() {



        gp=(g/2)*100;
        ap=(a/2)*100;
        sp=(s/2)*100;
        jp=(j/2)*100;
        ip=(idi/2)*100;

        

        if(gp==0 && ap==0 && sp==0 && jp==0 & ip==0){
            f=100;
        }





        // set the data
        // var data = [
        //     {x: "Simple Interest", value: gp},
        //     {x: "Profit & Loss", value: sp},
        //     {x: "Percentage", value: ap},
        //     {x: "Calendar", value: jp},
        //     {x: "Average", value: ip},
        //     {x: "Failure", value: f}

        var data = [
            {x: "Datatype", value: gp},
            {x: "Strings", value: sp},
            {x: "Storage Classes", value: ap},
            {x: "File Handling", value: jp},
            {x: "Variable decleration and Scope", value: ip},
            {x: "Failure", value: f}
                       
            
        ];
      
        // create the chart
        var chart = anychart.pie();
      
        // set the chart title
        chart.title("Performance: Categorized on the basis of different topics");
      
        // add the data
        chart.data(data);
      
        // display the chart in the container
        chart.container('container');
        chart.draw();
      


        

      }); 
}

  
function para(){
        gp=(g/2)*100;
        ap=(a/2)*100;
        sp=(s/2)*100;
        jp=(j/2)*100;
        ip=(idi/2)*100;

        if((gp<=ap) && (gp<=sp) && (gp<=jp) && (gp<=ip)){
            document.getElementById("sistudy").style.display="block";
            document.getElementById("sitest").style.display="block";
        
        }
    
            if(((ap<=gp) && (ap<=sp) && (ap<=jp) && (ap<=ip))){
            document.getElementById("perstudy").style.display="block";
            document.getElementById("pertest").style.display="block";}
    
            if((sp<=gp) && (sp<=ap) && (sp<=jp) && (sp<=ip)){
            document.getElementById("plstudy").style.display="block";
            document.getElementById("pltest").style.display="block";
        }
    
            if((jp<=gp) && (jp<=ap) && (jp<=sp) && (jp<=ip)){
            document.getElementById("calstudy").style.display="block";
            document.getElementById("caltest").style.display="block";
        }
    
            if((ip<=gp) && (ip<=ap) && (ip<=sp) && (ip<=jp)){
            document.getElementById("avgstudy").style.display="block";
            document.getElementById("avgtest").style.display="block";

        }


document.getElementById("para").innerHTML= "You have scored " + percentage + "% in the test you have appeared for. This test was divided into different parts, which are as follows: <br> *Datatype <br>*Strings<br>*Storage classes<br>*File Handling <br>*Variable decleration and scope. <br><br> As " + g + " questions are correct, hence you have scored "+ gp +"% in the Datatype section. Similarly you have scored "+ sp + "% , "+ ap+ "%, " + jp +"%, and "+ ip + "% in Strings, Storage class, File handling and Variable decleration and scope respectively. For the pictorial representation, you can refer to the pie chart shown above.<br><br> We suggest you to appear for the test again for more improvement. Moreover, you can also refer to different sections of the quiz." 
    

}
