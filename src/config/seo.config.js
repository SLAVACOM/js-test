const SITE_NAME = "SLC BANK"

export const getTitle = (title) =>{
    return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}