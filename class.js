class Cookie{
  constructor(color){
    this.color=color
  }
  getColor(){
    return console.log(this.color)
  }
  setColor(color){
    this.color = color
  }
}

let c1 = new Cookie('Green')
let c2 = new Cookie('Blue')

c1.setColor('red')
c1.getColor()
c2.getColor()
