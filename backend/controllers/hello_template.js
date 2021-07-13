const Hello = (ticketData) => {
    console.log('ticketData', ticketData)

    return `
      <!DOCTYPE html>
     <html style="margin: 0; padding: 0;">
     
         <head>
             <title>Hello</title>
         </head>
     
             <body style="margin: 0; padding: 0;">
             <p> Click here to view Tickets </p
             <p>https://ticketupdater.herokuapp.com//</p
           <div>
           <table style="width:100%">
           <tr>
             <th>${ticketData[0].headin}</th>
             <th>Lastname</th>
             <th>Age</th>
           </tr>
           <tr>
             <td>Jill</td>
             <td>Smith</td>
             <td>50</td>
           </tr>
           <tr>
             <td>Eve</td>
             <td>Jackson</td>
             <td>94</td>
           </tr>
         </table>
           </div>

             </body>
     
       </html>
      `;
  };
  
export default Hello