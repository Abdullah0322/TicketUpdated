import Hello  from "./hello_template.js";
import mailer from 'nodemailer'
import ejs from "ejs"
import htmlToText from 'html-to-text';

import {google} from 'googleapis'

import path from 'path'

const __dirname = path.resolve()

const CLIENT_ID = process.env.CLIENT_ID;
const CLEINT_SECRET = process.env.CLEINT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
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
  
  const accessToken = await oAuth2Client.getAccessToken();

  const smtpTransport = mailer.createTransport({
    service: 'gmail',

    auth: {
      type: 'OAuth2',
      user: 'abdullah.naveed@gigalabs.co',
      clientId: CLIENT_ID,
      clientSecret: CLEINT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
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