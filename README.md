# Browser

![1_RL0pnuf_hmLJ76oY6DViZw](https://github.com/user-attachments/assets/87697ffa-6e59-4ce2-9f37-98e9473562a8)

## The ui is the layer we cannot manipulate it includes the settings and the address bar

## The Browser engine is responsible

the bridge between ui layer and render engine it takes the parsed or formatted data .

## rendering engine 
parsing -> render tree -> layout -> paint 

### parsing - transalating a doc into a structure that code can use.

- conventional 
 js and css  
in the parsing process there will be lexers and parser 

flex lex yacc bison webkit uses flex as lexer and bison as parser

lexer creates token and parser req tokens use token and store token aplies synatx rules 

- unconventional

in html html is not context free grammar 

#### parsing DOM Tree

look for the opening tag then look for the closing  tag thats how the tree is created.

### render tree 

render tree is generate while the DOM tree is constructed .
visual elemnts in the order which they are going to be generated.
render object is rectangle
switch case if dom element needs to be displated and how 
 --- renser none
---- render inline
----render block 
-----render inline block 
-----render list item 

### layout 

- calculates position and size 
- recursive process start at root  ie html
- dirty bit system -  a system that makes sure that browser dont need to do the full layou ton ecery interaction

global layout affects all renders screen soze
incremental - dirty bit

### paint 
paint(
global and incremental(dirty bit)
bg bg image border children and oultline

  
