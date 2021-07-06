import Hello  from "./hello_template.js";
import mailer from 'nodemailer'

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLEINT_SECRET,
//   process.env.REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

var maillist = [
  'abdullahnaveed71.am@gmail.com',
  'abdullah.naveed@gigalabs.co',
  
];
const getEmailData = (to, name, template,useremail,cc) => {
  
  let data = null;
  console.log('to: ', to);
  console.log('name: ', name);
      data = {
          from:`Ticket Update <${name}> `,
          to,
          cc,
          subject: `Daily Ticket Update`,
          html: Hello(),
          
          
        }
        console.log('data: ', data);
  return data;
  
};

const sendEmail = (to, name, type,useremail,cc) => {
  
    
  const smtpTransport = mailer.createTransport({
    host:"smtp.gmail.com",
    port: 465,
    auth: {
      user: "abdullahnaveed71.am@gmail.com",
     pass:"malikdulli12"
    }
  });
  
  console.log('name: ', name);
  const mail = getEmailData(to, name, type,useremail,cc);
  console.log('mail: ', mail);
  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
        console.log('error: ', error);
      console.log(error);
    } else {
      console.log("email send successfully");
    }
    smtpTransport.close();
  });
};

export{
    sendEmail
}