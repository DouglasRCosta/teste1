
window.onload = function(){
  var cell = document.querySelectorAll('td');
  var col = document.querySelectorAll('tr');
  var eixoX;
  var eixoY;
  var eixoXB;
  var eixoYB;
  console.log(col.length);
    for (let i=0;i<cell.length;i++){
      document.querySelectorAll('td')[i].addEventListener("mouseover", function() {
        if(this.cellIndex == (col.length-1)/2){
          eixoY = 0;
        }else if(this.cellIndex > (col.length-1)/2){
          eixoY = ((this.cellIndex - (col.length-1)/2) * 10)*1;
        }else if(this.cellIndex < (col.length-1)/2){
          eixoY = (((col.length-1)/2- this.cellIndex) * 10)*-1;
        }
        document.querySelector("#iii").style.transform = "perspective(500px) rotateY("+eixoY+"deg) rotateX("+eixoX+"deg)"; 
    });
    }
    for (let i=0;i<col.length;i++){
      document.querySelectorAll('tr')[i].addEventListener("mouseover", function() {

        if(this.sectionRowIndex == (col.length-1)/2){
          eixoX = 0;
        }else if(this.sectionRowIndex > (col.length-1)/2){
          eixoX = ((this.sectionRowIndex - (col.length-1)/2) * 10)*-1;
        }else if(this.sectionRowIndex < (col.length-1)/2){
          eixoX = (((col.length-1)/2 - this.sectionRowIndex) * 10)*1;
        }
        document.querySelector("#iii").style.transform = "perspective(500px) rotateY(".concat(eixoY).concat("deg) rotateX(").concat(eixoX).concat("deg)");
    });
    }
    for (let i=0;i<cell.length;i++){
      document.querySelectorAll('td')[i].addEventListener("mouseout", function() {
        eixoX = 0;
        eixoY = 0;
        document.querySelector("#iii").style.transform = "perspective(500px) rotateY("+eixoY+"deg) rotateX("+eixoX+"deg)"; 
    });
     }
     for (let i=0;i<cell.length;i++){
      document.querySelectorAll('td')[i].addEventListener("mouseover", function() {
        if(this.cellIndex == (col.length-1)/2){
          eixoYB = 0;
        }else if(this.cellIndex > (col.length-1)/2){
          eixoYB = ((this.cellIndex - (col.length-1)/2) * 4)*1;
        }else if(this.cellIndex < (col.length-1)/2){
          eixoYB = (((col.length-1)/2- this.cellIndex) * 4)*-1;
        }
        document.querySelector("#ig").style.transform = "perspective(500px) rotateY("+eixoYB+"deg) rotateX("+eixoXB+"deg)"; 
        document.querySelector("#borda").style.transform = "perspective(500px) rotateY("+eixoYB/2+"deg) rotateX("+eixoXB/2+"deg)"; 
    });
    }
    for (let i=0;i<col.length;i++){
      document.querySelectorAll('tr')[i].addEventListener("mouseover", function() {

        if(this.sectionRowIndex == (col.length-1)/2){
          eixoXB = 0;
        }else if(this.sectionRowIndex > (col.length-1)/2){
          eixoXB = ((this.sectionRowIndex - (col.length-1)/2) * 4)*-1;
        }else if(this.sectionRowIndex < (col.length-1)/2){
          eixoXB = (((col.length-1)/2 - this.sectionRowIndex) * 4)*1;
        }
        document.querySelector("#ig").style.transform = "perspective(500px) rotateY(".concat(eixoYB).concat("deg) rotateX(").concat(eixoXB).concat("deg)");
        document.querySelector("#borda").style.transform = "perspective(500px) rotateY("+eixoYB/2+"deg) rotateX("+eixoXB/2+"deg)"; 
    });
    }
    for (let i=0;i<cell.length;i++){
      document.querySelectorAll('td')[i].addEventListener("mouseout", function() {
        eixoXB = 0;
        eixoYB = 0;
        document.querySelector("#ig").style.transform = "perspective(500px) rotateY("+eixoYB+"deg) rotateX("+eixoXB+"deg)"; 
        document.querySelector("#borda").style.transform = "perspective(500px) rotateY("+eixoYB+"deg) rotateX("+eixoXB+"deg)"; 
    });
  }
        document.querySelector('#tab').addEventListener("mouseover", function() {
        document.querySelector("#blur").style.cssText = "filter:blur(300px); border-radius :73% 27% 47% 53% / 67% 12% 88% 33% ";
      });
        document.querySelector('#tab').addEventListener("mouseout", function() {
          document.querySelector("#blur").style.cssText = "filter:blur(10px); border-radius :73% 27% 47% 53% / 67% 12% 88% 33% ";
  });
}