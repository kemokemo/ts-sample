import * as fs from 'fs'
import parse, { HTMLElement, Node } from 'node-html-parser';

//
// Functions
// 
function walkNode(nodes: Node[], boxID: String, counter: number) : number {
  nodes.forEach((n)=>{
    if(n.childNodes.length != 0){
      counter = walkNode(n.childNodes, boxID, counter);
    }

    let elem = n as HTMLElement;
    if(elem == undefined || elem == null){
      return;
    }
    const cName = elem.classNames;
    if(cName == undefined || !IsTargetClass(cName)){
      return;
    }

    elem.setAttribute('id', `${boxID}-${cName}-${counter}`);
    console.log(`class: ${cName}, id: ${boxID}-${cName}-${counter}`);
    counter++;
  })
  return counter;
}

const myClasses = ['myBox', 'myCheck', 'myNote'];

function IsTargetClass(cName: string): boolean {
  return myClasses.includes(cName)
}

//
// Main
//
let htmlData = fs.readFileSync("dist/source.html", "utf-8");
const root = parse(htmlData);

root.querySelectorAll('.myBox').forEach((elem, i)=>{
  const boxID = `box${i+1}`;
  elem.setAttribute('id', boxID)

  if(elem.childNodes.length != 0){
    walkNode(elem.childNodes, boxID, 1);
  }
})

console.log(root.toString())

fs.writeFileSync("dist/target.html", root.toString());
