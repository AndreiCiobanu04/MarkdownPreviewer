import React from 'react'

import {Form} from 'react-bootstrap';


const Editor = ({text, setText}) => (
    <div>
<Form.Group  align="center">
<Form.Label>Markdown Input</Form.Label>
<textarea value={text} id="editor" onChange={(e)=>setText(e.target.value)} componentClass="textarea" placeholder="EnterMarkdown"></textarea>
</Form.Group>
</div>



)


export default Editor