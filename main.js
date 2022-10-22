rightEyeX=0;
rightEyeY=0;

function preload() {
    specs = loadImage('https://i.postimg.cc/7PgR7vfK/specs1.png');
}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Intialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        rightEyeX = results[0].pose.rightEye.x;
        rightEyeY = results[0].pose.rightEye.y;
        console.log("rightEye x = " + rightEyeX);
        console.log("rightEye y = " + rightEyeY);
    }
}

function draw() {
    image(video, 25, 25, 300, 300);
    image(specs, rightEyeX, rightEyeY, 80, 70);
}

function take_snapshot() {
    save('myFilterImage.png');
}