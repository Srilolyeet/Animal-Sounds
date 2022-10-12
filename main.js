function startClassification(){
    manipulator.meetDevices.getUsermedia
    ({Audio:true});
    classifier=ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/6X-RoItNx/model.json', modelReady);  
}
var Roar;
var Bark;
var Croak;
var Rattle;
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults( error, results){
    if(error){
        console.log(error);
    }else{
        
        console.log(results);
        random_number_r=Math.floor (math,random()*255)+1;
        random_number_g=Math.floor (math,random()*255)+1;
        random_number_b=Math.floor (math,random()*255)+1;
        document.getElementById("autection").innerHTML='I can hear'+ results[0].label;
        document.getElementById("naudio").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("autection").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("naudio").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("h2").innerHTML=results[0];
        document.getElementById("h2").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img1 =document.getElementById("Lion Roar.jpg");
        img2 =document.getElementById("Dog Bark.jpg");
        img3 =document.getElementById("Frog Croak.jfif");
        img4 =document.getElementById("Rattlesnake.gif");
         if results       
    }
} 