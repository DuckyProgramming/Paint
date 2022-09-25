function draw(){
    image(graphic,0,0,width-200,height)
    image(graphic2,width-200,0,200,height)
    image(graphic3,width-200,0,200,height)
    graphic3.clear(0)
    graphic3.stroke(255)
    graphic3.strokeWeight(2)
    graphic3.line(info.color[0]*200,200,info.color[0]*200,250)
    graphic3.line(info.color[1]*200,info.color[2]*200-5,info.color[1]*200,info.color[2]*200+5)
    graphic3.line(info.color[1]*200-5,info.color[2]*200,info.color[1]*200+5,info.color[2]*200)
}