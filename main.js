noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristx = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{ 
    background("#969A97");
    document.getElementById("sqaure_sites").innerHTML = "The font size is: "+ difference + "px"
    fill("red");
    textSize(difference);
    text("Durgesh Undefined", 50, 400)
    
}

function modelLoaded()
{
    console.log("tHe MOdEl  Is TOtaLly LoAddded");
}

function gotPoses(results)
{
 if (results.length > 0)
 {
    console.log(results)
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("NoseX = " + noseX + ", NoseY = " + noseY );

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log(" Left Wrist X = " + leftWristX + ", Right Wrist X " + rightWristX + ", difference = " + difference);

 }   
}