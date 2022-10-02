function startClassification(){
    manipulator.meetDevices.getUsermedia
    ({Audio:true});
    classifier=ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/6X-RoItNx/model.json', modelReady);  
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(){
    
} 