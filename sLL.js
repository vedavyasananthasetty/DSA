class Node{
 constructor(value){
  this.value=value
  this.next=null
 } 
}
//creating a node with a value and pointer to next node. Initially it is null
class linkedList{
  constructor(value){
    const newNode = new Node(value)
    this.head=newNode
    this.tail= this.head
    this.length = 1
  } // creating a new linked list with a node, head and tail. We will also calculate the length of the Linked list.

  push(value){//to push the value into a LL. Checks for null and not null conditions
    const newNode = new Node(value)
    if(!this.head){ //checks if head is empty. 
      this.head = newNode
      this.tail=newNode
    } else { //if already exists then we assign tail to the new node
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop(){
    //check for null condition
    if(!this.head) return undefined
    //now for the condition where there are nodes already
    let temp = this.head //creating two variables to make the iterations easier
    let pre = this.head
    while(temp.next){
      pre = temp
      temp=temp.next
    }
    this.tail=pre
    this.tail.next=null
    this.length--
    if(this.length===0){ // if only one element exist
      this.head=null
      this.tail=null
    }
   return temp
  }

  unshift(value){
    const newNode = new Node(value)
    if(!this.head){ //check if the head is empty. Point to new node
      this.head=newNode
      this.tail=newNode
    } else { // make the new node point to the node where head is pointing and then make the head point to new node
      newNode.next = this.head
      this.head=newNode
    }
    this.length++
    return this
  }


  shift(){// chk for 3 conditions if null, if one and if many
    if(!this.head) return undefined
    let temp = this.head // setting a temp var to head and make the head point to its next and then changing the temp.next to null to break the list
    this.head = this.head.next
    temp.next=null
    this.length--
    if(this.length===0){ //chks if length is 0 then simply tail is null
      this.tail=null
    }
    return temp
  }


  get(index){ // check if the index is in valid range. run temp = temp.next until i = index.
    if(index < 0 || index >= this.length){
      return undefined
    } 
      let temp= this.head
      for(let i=0;i<index;i++){
        temp = temp.next
      }
      return temp
    
  }

  set(index,value){ // set a value at a particular index. We can use the get function to get the value and store in a temp. now if temp is not null, we can set temp.value =  value.
    if(index < 0 || index > this.length){
      return undefined
    }
    let temp = this.get(index)
    if(temp){
      temp.value = value
      return true
    }
    return false

  }

  insert(index,value){ //chk for 3 conditions
    if(index===0) return this.unshift(value)
    if(index===this.length) return this.push(value)
    if(index < 0 || index >= this.length) return false
    const newNode= new Node(value)
    const temp = this.get(index-1)
    newNode.next = temp.next
    temp.next = newNode
    this.length++
    return true
  }

  remove(index){
    if(index===0) return this.shift()
    if(index < 0 || index >= this.length) return undefined
    if(index===this.length-1) return this.pop()
    const before = this.get(index-1)
    const temp = before.next
    before.next = temp.next
    temp.next = null
    this.length--
    return temp 

  }

  reverse(){
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let next = temp.next
    let prev = null
    for(let i=0;i<this.length;i++){
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next
    }
    return this
  }


}


let newLL = new linkedList(4)
newLL.push(3)
newLL.push(23)
newLL.push(7)

newLL.unshift(4)


newLL.shift()
console.log(newLL)