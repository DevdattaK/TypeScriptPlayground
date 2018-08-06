function UIComponent(html : string){
    console.log(`passed html string ${html} \n`);

    return function(target){
        console.log(`Value of the component body: \n ${target}.`);
    }
}


@UIComponent('<html> incomplete html')
class UIClass{
    constructor(name : string){};
}