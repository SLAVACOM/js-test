import { BaseScreen } from "@/core/component/base-screen.component";
import renderService from "@/core/services/render.service";

export class Auth extends BaseScreen{
    constructor(){
        super({title: 'Auth'})
    }

    render(){
        const element = renderService.htmlToElement(template, [], styles)
        return element.outerHTML
    }
}