import Hello  from "./hello_template.js";
import mailer from 'nodemailer'
import ejs from "ejs"
import htmlToText from 'html-to-text';



import path from 'path'

const __dirname = path.resolve()

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
const getEmailData = (to, name, cc, ticketData) => new Promise(async(resolve, reject) => {
  {
    const html= await ejs.renderFile(`${__dirname}/views/email.ejs`, {
      ticketData
  })
    
    let data = null;
    console.log('to: ', to);
    console.log('name: ', name);
        data = {
            from:`Ticket Update <${name}> `,
            to,
            cc,
            // subject: `Daily Ticket Update`,
            html,
            text: htmlToText.fromString(html)
            
          }
          console.log('data: ', data);
     resolve(data);
    
  }
});

const sendEmail = async(to, name, cc, ticketData) => {
  
    
  const smtpTransport = mailer.createTransport({
    host:"smtp.gmail.com",
    port: 587,
    auth: {
      user: "abdullahnaveed71.am@gmail.com",
     pass:"malikdulli12"
    }
  });
  
  // console.log('name: ', name);
  const mail = await getEmailData(to, name,cc, ticketData);
  console.log('mail: ', mail);
  
  
  // return
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