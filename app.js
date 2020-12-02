////////////setInterval.........

      /////////// setInterval ye repeativey chlta rhta hai call krny pr/////////////

                //   ye be default aik function hai setInterval ye do arguments leta hai hum sey konsa function chlan vo or time
               

                // function timer(){
                //     console.log("Running...")
                // }
                // setInterval(timer,2000)

                //ismy timer function hai or 2000 time hai millisecond me leta hai time 1 second is equal to 1000 millisecond....




///////////setTimeout......

      //////////// setTimeout ye kuch dair k bd chlta hai call krny pr/////////////

                      //   ye be default aik function hai setTimeout ye do arguments leta hai hum sey konsa function chlan or time 

                    //   function timeOut(){
                    //       console.log("running...")
                    //   }
                    //   setTimeout(timeOut,3000)

                // ye 3 second k bd run hoga..



////////both setInterval and setTimeout functions

                // var cont = 0;
                // var interval;
                // function setvalue(){
                //     cont++;
                //     console.log(cont)
                // }
                // interval = setInterval(setvalue,1000)
                // setTimeout(function(){
                //     clearInterval(interval)

                // },10000)





///////////////////STOP WATCH///////////////////////////


          var min = 0;
          var sec = 0;
          var msec = 0;
          var minHeading = document.getElementById("min");
          var secHeading = document.getElementById("sec");
          var msecHeading = document.getElementById("msec");
          var interval = "";
          
          function timer(){
                msec++;
                msecHeading.innerHTML = msec;
                if(msec>=100){
                      sec++;
                      secHeading.innerHTML= sec;
                      msec = 0;
                }
                else if (sec>=60) {
                      min++;
                      minHeading.innerHTML= min;
                      sec = 0;
                }
          }
          function start(){
            interval = setInterval(timer,10);
            var btn = document.getElementById("disable");
            btn.disabled = true;
           
            
           

          }
          function stop(){
                clearInterval(interval)
                var btn = document.getElementById("disable");
                btn.disabled =false;
               
          }
          function reset(){
            var min = 0;
            var sec = 0;
            var msec = 0;
            minHeading.innerHTML= min;
            secHeading.innerHTML= sec;
            msecHeading.innerHTML= msec;
            stop();
            var btn = document.getElementById("disable");
            btn.disabled = false;
            
          }
        
          
     