function removeOdd (Head){
  let current = Head
  let prev =  current
  let next = current.next

  while(current){
    if(current.value % 2 !==0){
      
      prev.next = next  
      current.next = null    
    }else{
      prev= prev.next
    }
    current = next
    next = next.next
  }
  return Head
}