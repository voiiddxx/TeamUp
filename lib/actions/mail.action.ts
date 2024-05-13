// "use server"

// import KoalaWelcomeEmail from "@/emails/WelcomeMail";
// import { render } from "@react-email/components";


// const resend = new Resend(process.env.RESEND_API_KEY);
// export const SendWelcomMail = async  ()=>{
//     console.log("This is working");
    
//     try {
//         const {data , error} = await resend.emails.send({
//             from: 'Acme <onboarding@resend.dev>',
//     to: ['ursfan8102003@gmail'],
//     subject: 'Hello world',
//     html:render(KoalaWelcomeEmail({useremail:"nnd" , userFirstname:"sdknd"}))
//         }) ;
//         if(error){
//             console.log("THis is the error" , error);
//         }
//         if(data){
//             console.log("THis is Data" , data);
            
//         }
//     } catch (error) {
        
//     }
// }