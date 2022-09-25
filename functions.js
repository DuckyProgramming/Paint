function paint(layer){
    layer.stroke(info.color[0],info.color[2],info.color[1])
    layer.strokeWeight(10)
    layer.line(mouseX,mouseY,pmouseX,pmouseY)
}