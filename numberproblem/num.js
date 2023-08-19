async function primes(set) {
    var response = await fetch("http://20.244.56.144/numbers/primes");
    var data=await response.json()
    //console.log(data.numbers);
    var ar=data.numbers;
    await ar.forEach((item)=>{
        set.add(item);
    })
    
}
 async function fibo(set){
    var response = await fetch("http://20.244.56.144/numbers/fibo");
    var data=await response.json()
    var ar=data.numbers;
    await ar.forEach((item)=>{
        set.add(item);
    })
    var ar=data;
   // console.log(set);
}

async function odd(set){

    var response = await fetch("http://20.244.56.144/numbers/odd");
    var data=await response.json()
    var ar=data.numbers;
    await arr.forEach((item)=>{
        set.add(item);
    })
   // console.log(set);
}
async function even(set){
    var response = await fetch("http://20.244.56.144/numbers/rand");
    var data=await response.json()
    var ar=data.numbers;
    await ar.forEach((item)=>{
        set.add(item);
    })
    //console.log(set);
  } 
  async function func(){
  let set=new Set();
  await primes(set);
  await fibo(set);
  await odd(set);
  await even(set);
    var ar=[]
  for( const val in set){
    ar.unshift(val);
  }
  console.log(ar);
  ar.sort();
  console.log(ar);
  }
  func();
