



export const convertToBase64Image = (image : any)=>{
    const file = image[0];
    console.log("this is file:" , file);
    
    let ImageData = null;
    if(file){
        const reader = new FileReader();
        reader.onloadend = ()=>{
            console.log(reader.result);
            ImageData = reader.result;
        }
        reader.readAsDataURL(file);
    }
    console.log(ImageData);
    
    return ImageData;
}