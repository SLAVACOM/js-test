import ChildComponent from "@/core/component/child.component";
import renderService from "@/core/services/render.service";

import template from './button.template.html'
import styles from './button.module.scss'

export class Button extends ChildComponent{
    
    render(){
        this.element = renderService.htmlToElement(template, [], styles)
        return this.element
    }
}