function add1042S(){
  var newcontent = '<br><p style="font-size: 1.5em;">Another form</p> <br>'+
                   '<div class="form-group">'+
                    '<label for="sbox2" class="col-sm-6 control-label">Box 2: Gross income</label>'+
                     '<input type="number" step="0.01" class="col-sm-6" id="sbox2" name="6_exempt[]" placeholder="Box 2">'+
                   '</div>'+
                   '<div class="form-group">'+
                     '<label for="sbox7" class="col-sm-6 control-label">Box 7: Federal tax withheld</label>'+
                     '<input type="number" step="0.01" class="col-sm-6" id="sbox7" name="18b_federal_tax[]" placeholder="Box 7">'+
                   '</div>'+
                   '<div class="form-group">'+
                     '<label for="sbox21" class="col-sm-6 control-label">Box 21: State income withheld</label>'+
                     '<input type="number" step="0.01" class="col-sm-6" id="sbox21" name="11_state_tax[]" placeholder="Box 21">'+
                   '</div>';
 
  var anotherS = document.createElement("div");
  anotherS.innerHTML=newcontent;
  document.getElementById("toBeAdded").appendChild(anotherS);
};


function calculate(){
  var line3 = 0;
  if(parseFloat(document.getElementsByName("3_income")[0].value)){
    line3 += parseFloat(document.getElementsByName("3_income")[0].value);
  }

  var line18a = 0;
  if(parseFloat(document.getElementsByName("18a_federal_tax")[0].value)){ 
    line18a += parseFloat(document.getElementsByName("18a_federal_tax")[0].value);
  }

  var fedaralWithheld = document.getElementsByName("18b_federal_tax[]");
  var line18b = 0;
  for (var i = fedaralWithheld.length - 1; i >= 0; i--) {
    if (parseFloat(fedaralWithheld[i].value)){
      line18b += parseFloat(fedaralWithheld[i].value);
    }
  }
  var stateWithheld = document.getElementsByName("11_state_tax[]");
  var line11 = 0;
  for (var i = stateWithheld.length - 1; i >= 0; i--) {
    if (parseFloat(stateWithheld[i].value)){
      line11 += parseFloat(stateWithheld[i].value);
    }
  }
  var exempt = document.getElementsByName("6_exempt[]");
  var line6 = 0;
  for (var i = exempt.length - 1; i >= 0; i--) {
    if(parseFloat(exempt[i].value)){
      line6 += parseFloat(exempt[i].value);
    }
  }
  document.getElementById("result").innerHTML =  '<div class="bs-callout" style="font-size: 1.5em">' +"Line 3: " + line3 + "<br>" + "Line 6: " + line6 + "<br>"+ "Line 11: " + line11 + "<br>" + "Line 18a: " + line18a + "<br>" + "Line 18b: " + line18b + "<br>" + "</div>";
  return false;
};