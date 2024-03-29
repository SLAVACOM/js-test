class RQuery {
    
    /**
     * 
     * @param {string|HTMLElement} selector 
     */    
    constructor(selector){
        if (typeof selector === 'string'){
            this.element = document.querySelector(selector)
            if (!this.element){
                throw new Error(`Element ${selector} not found!`)
            }
        } else if (selector instanceof HTMLElement){
            this.element = selector
        } else{
            throw new Error('Invalid selector type')
        }

    }

    /**
     * 
     * @param {string} selector 
     * @returns {RQuery}
     */
    find(selector){
        const element = new RQuery(this.element.querySelector(selector))

        if (element){
            return element
        } else {
            throw new Error(`Element ${selector} not found!`)
        }
    }


    /**
     * 
     * @param {HTMLElement} childElement 
     * @returns {RQuery}
     */
    append(childElement){
        this.element.appendChild(childElement)
        return this
    }

    /**
     * 
     * @param {HTMLElement} newElement 
     * @returns {RQuery}
     */
    before(newElement){
        if(!(newElement instanceof HTMLElement)){
            throw new Error('Element must be an HTMLElement')
        }

        console.log(this.element.parentElement)

        const parentElement = this.element.parentElement
        if(parentElement){
            parentElement.insertBefore(newElement,this.element)
            return this
        } else{
            throw new Error('Element does not have a parent element')
        }
    }


    html(htmlContent){
        if(typeof htmlContent === 'undefined'){
            return this.element.innerHTML
        } else {
            this.element.innerHTML = htmlContent
            return this
        }

    }



    /**
     * 
     * @param {string} property 
     * @param {string} value
     * @returns {RQuery} 
     */
    css(property, value){
        if (typeof property !== 'string' || typeof value !== 'string'){
            throw new Error('property and value must be strings')
        }

        this.element.style[property] = value
        return this
    }
}

export function $R(selector){
    return new RQuery(selector)
}