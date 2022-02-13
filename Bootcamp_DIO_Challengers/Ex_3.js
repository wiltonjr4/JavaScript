/*
CHALLENGE

Read an integer value X. Then present the 6 consecutive odd values
starting from X, one value per line, including the X if applicable
*/

let num = parseInt(gets());

let init = num % 2 === 0 ? num + 1 : num;

for ( i = 0; i < 6; i++) {
 
  print(init)
  
  init += 2

}