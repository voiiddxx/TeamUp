



export const convertToBase64Image = (image : any)=>{
    const file = image[0];
    let ImageData;
    if(file){
        const reader = new FileReader();
        reader.onloadend = ()=>{
            ImageData = reader.result;
        }
        reader.readAsDataURL(file);
    }
    return ImageData;
}