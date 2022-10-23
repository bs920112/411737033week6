function setup() {
  createCanvas(windowWidth, windowHeight);//建置和螢幕大小一樣的畫布
  
  }
function draw() {
  background(0)//將背景色彩設為黑色
  noFill()//繪製的圖形不填充顏色
  stroke(((frameCount%255)+(frameCount*3))%255,frameCount%255,frameCount*100%255);//圖形框線顏色會依照指定的規則做變換
  rectMode(CENTER)//將方形中心置中對齊圓形中心
  //ellipse(25,25,50)//畫一個xy位於25，直徑50的圓
  //rect(25,25,50)//畫一個xy位於25，長寬50的方形
  //ellipse(50,50,25)//畫一個xy位於50，直徑25的圓
	
  //ellipse(75,25,50)
  //rect(75,25,50)
  //ellipse(100,50,25)
 
  //ellipse(125,25,50)
  //rect(125,25,50)
  //ellipse(150,50,25)
  
  //ellipse(175,25,50)
  //rect(175,25,50)
  //ellipse(200,50,25)
  
  //ellipse(225,25,50)
  //rect(225,25,50)
  //ellipse(250,50,25)
    
  //ellipse(275,25,50)
  //rect(275,25,50)
  //ellipse(300,50,25)
     
  //ellipse(325,25,50)
  //rect(325,25,50)
  //ellipse(350,50,25)
  
  //ellipse(25,75,50)
  //rect(25,75,50)
  //ellipse(50,100,25)
  //將以上概念轉換使用for迴圈撰寫程式
  for (var i=0;i<(width/50);i++){//設置i=0的變數，當k小於螢幕寬度除以50時，i+1
    for (var j=0;j<(height/50);j++){//設置j=0變數，當p小於螢幕高度除以50時，j+1
    
    ellipse(25+(50*i),25+(50*j),50+mouseX/50)//座標圓心(25+(50*i),25+(50*j)，產生一個直徑為50+滑鼠x軸除以50的圓
    rect(25+(50*i),25+(50*j),50+mouseX/50)//產生一個座標(25+(50*i),25+(50*j)，長寬為50+滑鼠x軸除以50的方形
    ellipse(50+(50*i),50+(50*j),25+mouseX/50)//座標(50+(50*i),50+(50*j),25)產生一個直徑為25+滑鼠x軸除以50的圓
    }
    }
    }
  