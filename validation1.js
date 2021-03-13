function validate1(){
    valCheck = true;
    var f = checkName(document.forms["personal information"]["Fname"].value);
    var l = checkName(document.forms["personal information"]["Lname"].value);
    var gender = checkDrop(document.forms["personal information"]["gender"].value);
    var state = checkDrop(document.forms["personal information"]["state"].value);
    var image1 = getImage(Boolean(f), "Fname");
    var labelNotifyFname = getNotification(Boolean(f),"Fname");
    var image2 = getImage(Boolean(l), "Lname");
    var labelNotifyLname = getNotification(Boolean(l),"Lname");
    var image3 = getImage(Boolean(gender),"gender");
    var labelNotifyGender = getNotification(Boolean(gender), "gender");
    var image4 = getImage(Boolean(state), "state");
    var labelNotifyState = getNotification(Boolean(state), "state");
    document.getElementById("First").appendChild(image1);
    document.getElementById("First").appendChild(labelNotifyFname);
    document.getElementById("Last").appendChild(image2);
    document.getElementById("Last").appendChild(labelNotifyLname);
    document.getElementById("Gender").appendChild(image3);
    document.getElementById("Gender").appendChild(labelNotifyGender);
    document.getElementById("State").appendChild(image4);
    document.getElementById("State").appendChild(labelNotifyState);
    var all = allTrue(Boolean(f),Boolean(l),Boolean(gender),Boolean(state));
    if(all == true){
        setTimeout(()=>window.location.href = "validation2.html", 2000);
        
    }

   

}
function checkName(name){
    var tmp = true;
    var i = 0;
    if(name.length == 0){
        valCheck = false;
        return false;
    }
    while(i<name.length){
        if(!alphaNumCheck(name[i])){
            valCheck = false;
            return false;
        }
        i++;
    }
    return true;

}
function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        label.setAttribute( 'class', 'errorMessage' );
      }
    if(ID == "Fname" || ID == "Lname"){
        label.innerHTML = bool ? "" : "Names should be in form xxxxxx, where x should be alphanumeric!";
        return label;
    }
    if(ID == "gender" || ID == "state"){
        label.innerHTML = bool ? "" : "You must select one of the given options.";
        return label;
    }
}
function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}
function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}
function checkDrop(entry){
    if(entry == "empty"){
        return false;
    }else{
        return true;
    }
}
function allTrue(f, l, g, s){
    if(f && l && g && s){
        return true;
    }
    return false;
}
