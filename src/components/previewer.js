import React from 'react'

import {Form} from 'react-bootstrap';
import marked from 'marked'
const Previewer = ({text}) => {
    console.log(text)
let markdown = marked(text);
return (
<Form.Group  align="center">
<Form.Label>Markdown Output</Form.Label>
<label id="preview" dangerouslySetInnerHTML={{__html:markdown}}></label>
</Form.Group>
);
}

export default Previewer



