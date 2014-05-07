box
{ x 2 } box
{ x 4 } box
{ x 6 } box
10 * { x 2 hue 36 }  box

10 * { x 2 } box
1 * { y 2 } 10 * { x 2 rx 6 } box
1 * { y 4 } 10 * { x 2 hue 9 } box
1 * { y 6 } 10 * { x 2 s 0.9 } box

set maxdepth 200
r1
20  * { x -6 ry 10   } r1

rule r1 maxdepth 10 {
   2 * { y -1 } 3 * { rz 15 x 1 b 0.9 h -20  } r2
   { y 1 h 12 a 0.9  rx 36 }  r1
}

rule r2 {
   { s 0.9 0.1 1.1 hue 10 } box // a comment
}

rule r2 w 2 {
   { hue 113 sat 19 a 23 s 0.1 0.9 1.1 } box
}
