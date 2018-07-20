function theBeatlesPlay(am,ai){   //array of musicians, instruments
  var n = []                      //empty array n
  for (var i = 0; i< am.length; i++){     //loop through musicians Array
    n.push(`${am[i]} plays ${ai[i]}`)     //appends 'musician plays instrument' to array n
  }
  return n
}

function johnLennonFacts(af){       //array of facts
  var nf=[]                         //empty array nf
  while (af.length>0){              //while fact array is not empty
    nf.push(`${af.shift()}!!!`)     //removes item from fact array and appends to array nf
  }
  return nf
}

function iLoveTheBeatles(n){        //n is a number
  var x = []                        //empty array x
  do{x.push('I love the Beatles!')  //appends to empty array
    n++                             //while adding to n
  }
  while (n<15)            //adds 15-n times, once if n>=15
  return x
}