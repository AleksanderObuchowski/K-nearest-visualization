colors = ["red","blue","green","orange","violet","yellow","purple","brown","pink","cyan","gray"]




function Knearest(n){
centroids = []
//CREATING CENTROIDS
for(var i =0 ; i< n; i++){
  index=  int(random(0,Plist.length))
c = new Centroid(Plist[index].x,Plist[index].y,i)
centroids.push(c)}

//print("No of centroids")

//print(centroids.length)
//MAIN LOOP
for(var a =0 ;a<100;a++){
print(a)
for(var i=0;i<Plist.length;i++){
  //print("point")
  var min = 490000
  for(var j=0;j<centroids.length;j++){
      //print("centroid")
      d = distance(Plist[i].x,Plist[i].y,centroids[j].x,centroids[j].y)

      //print(d)
      //print(min)
      if(min>d){
        //print("mniejsze")
        min=d
        var min_index=j
      }
      else{
        //print("wieksze")
      }

  }
  Plist[i].num=min_index


}



//CHANGING POSITION OF CENTROIDS
for (var j=0;j<centroids.length;j++){
  //print("changing position of centorid")
  var sum_x=0
  var sum_y=0
  var number=0
//print("centroid")
  //print(j)
  for (var i =0;i<Plist.length;i++){

    //print(Plist[i].num==j)
    if(Plist[i].num==j){
      sum_x+=Plist[i].x
      sum_y+=Plist[i].y
      number+=1
      //print(number)
    }


}
  //print(sum_x)
  //print(sum_y)
  if(sum_x==0){
    centroids[j].x= random(50,600)
    centroids[j].y= random(50,600)
  }
  else{
  var mean_x= sum_x/number
  var mean_y= sum_y/number
  centroids[j].x= mean_x
  centroids[j].y= mean_y
  //print(centroids[j].x)
  //print(centroids[j].y)
}
}


}
}

function run(){
  Knearest(nslider.value())
}

function reset(){
  Plist= []


}

class Points {
  constructor(x,y) {
    this.x=x
    this.y=y
    this.color = (50)
    this.num=10
  }
  display(){
    fill(colors[this.num])
    stroke(1)
    ellipse(this.x,this.y,10)

  }
}

class Centroid{
  constructor(x,y,n){
    this.x=x
    this.y=y
    this.n=n
  }
  display(){
    noStroke()
    fill(colors[this.n])
    rect(this.x,this.y,15,15)

  }
}



function setup() {
  canvas = createCanvas(1000,700)
  canvas.id("sketch")
  canvas.parent("canvas")
  Plist= []

  centroids = []


  PlayB= createButton("run")
  PlayB.mousePressed(run)
  PlayB.parent("canvas")
  PlayB.id("play")
  PlayB.class("myButoon")
  ResetB= createButton("reset points")
  ResetB.parent("canvas")
  ResetB.id("reset")
  ResetB.mousePressed(reset)

  Centroidsn= createP("No of centroids:")
  Centroidsn.parent("canvas")
  Centroidsn.id("centroids")

  nslider= createSlider(1,10,2,1)
  nslider.parent("canvas")
  nslider.id("nslider")
}








function draw() {



  Centroidsn.html("No of centroids: " + nslider.value())
  background(42)
  fill(255,255,255,210)
  noStroke()
  rect(0,0,width,height)

    if (Plist.length == 0){
      stroke(0,50)
      fill(0,50)
      textSize(30)
      text("Click to place the points",370,350)

    }
    fill(0)
    noStroke()
    textSize(10)
    
  for(var i =0;i<Plist.length;i++){
    Plist[i].display()

  }
  for(var i =0;i<centroids.length;i++){
    centroids[i].display()

  }
fill("gray")
noStroke()
rect(10,650,15,15)
text("centroid",30,660)
stroke(1)
ellipse(17,675,10,10)
noStroke()
text("point",27,680)

}

function mouseClicked(){
  if(mouseX<1000 && mouseY<700){
  P = new Points(mouseX,mouseY)
  Plist.push(P)
  print(Plist.length)
}

}


function distance(x1,y1,x2,y2){
  return (x1-x2)**2+(y1-y2)**2

}
