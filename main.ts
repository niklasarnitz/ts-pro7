import { Presentation } from './generated/ts/presentation'
import {readFileSync} from 'fs'

const file = readFileSync('10000.pro');

const presentation =  Presentation.decode(file);

function convertToPlain(rtf) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "")
    return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
}

presentation.cues.forEach(cue => {
    cue.actions[0].slide?.presentation?.baseSlide?.elements.forEach(element => {
        console.log(convertToPlain(element.element?.text?.rtfData.toString()))
    })
})