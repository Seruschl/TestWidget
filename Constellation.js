// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-purple; icon-glyph: magic;

const width=125
const h=5
const w = new ListWidget()
w.backgroundColor=new Color("#222222")

const now = new Date()
const weekday = now.getDay() == 0 ? 6 : now.getDay() - 1
const minutes=now.getMinutes() 

getwidget(6, 1, "Amber")
getwidget(6, 6, "Barbara")
getwidget(6, 2, "Beidou")
getwidget(6, 4, "Bennett")
getwidget(6, 1, "Chongyun")
getwidget(6, 4, "Diona")

Script.setWidget(w)
Script.complete()
w.presentLarge()

function getwidget(total, haveGone, str) {
  
  switch (str) {
    case "Amber":
      mainColor = new Color("#71bbd4");
      break;
    case "Barbara":
      mainColor = new Color("#71bbd4")
      break;
    case "Beidou":
      mainColor = new Color("#71bbd4")
    case "Bennett":
      mainColor = new Color("#71bbd4");
      break;
    case "Chongyun":
      mainColor = new Color("#71bbd4")
      break;
    case "Diona":
      mainColor = new Color("#71bbd4")
  }
  const titlew = w.addText(str, haveGone + "/" + total)
  titlew.textColor = mainColor
  titlew.font = Font.boldSystemFont(10)
  
  const titleee = w.addText(haveGone + "/" + total)
  titleee.textColor = new Color("#ffffff")
  titleee.font = Font.boldSystemFont(10)

  w.addSpacer(5)
  const imgw = w.addImage(creatProgress(total,haveGone))
  imgw.imageSize=new Size(width, h)
  w.addSpacer(6)
}


function creatProgress(total,havegone){
const context =new DrawContext()
context.size=new Size(width, h)
context.opaque=false
context.respectScreenScale=true
context.setFillColor(new Color("#48484b"))
const path = new Path()
path.addRoundedRect(new Rect(0, 0, width, h), 3, 2)
context.addPath(path)
context.fillPath()
context.setFillColor(new Color("#ffd60a"))
const path1 = new Path()
path1.addRoundedRect(new Rect(0, 0, width*havegone/total, h), 3, 2)
context.addPath(path1)
context.fillPath()
return context.getImage()
}
