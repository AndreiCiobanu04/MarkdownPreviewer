import React, {useState}  from 'react';
import Editor from './components/editor';
import Previewer from './components/previewer';
import marked from 'marked'

const initialState = `
This is a paragraph
 # Heading
 ## Heading 2
 **bold**
 > salut
 - list item 1
 - list item 2
 - list item 3
  [visit this website](https://www.youtube.com/?gl=RO&hl=ro)
this is an inline \`<div></div>\`

this is a block of code
\`\`\`
let x=1;
\`\`\`

![React](https://reactjs.org/)
`



const App = () => 
{
  
const [text, setText] = useState(initialState);
//console.log(text);

return (
<>
<Editor setText={setText} text={text} />
<Previewer text={text} />
</>
)
}
 














export default App;
