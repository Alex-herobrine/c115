function setup()
{
canvas=createCanvas(300,300);
canvas.center();
}

function take_snapshot()
{
save('myfilterimage.png');
}

function preload();

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });
