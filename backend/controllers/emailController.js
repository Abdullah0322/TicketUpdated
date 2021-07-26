import Hello  from "./hello_template.js";
import mailer from 'nodemailer'
import ejs from "ejs"
import htmlToText from 'html-to-text';

import {google} from 'googleapis'

import path from 'path'

const __dirname = path.resolve()

const CLIENT_ID = '807669913381-mk2cci6qqnkv9gjn4d6a2s41jq079t1t.apps.googleusercontent.com';
const CLEINT_SECRET = 'd0c0YQ3wesgJltUUKbmcpuCy';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04ilEdhBFvk56CgYIARAAGAQSNwF-L9Ir0orcAqsXUXvauuKwCPQlMku9aEh7reDDLksPqEHI46AfaTbly3WBQhRjqVtzut5hAZc';

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