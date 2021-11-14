let text = "";

for (let i = 100; i < 200; i++) {
  text="";
  if (i % 3 == 0 ) text += "Loopy";
  if (i % 4 == 0) text +="Lighthouse";
  if ((i% 3!= 0 ) && (i % 4 != 0) )
   text=i; 
   console.log(text);
   text="";
}
