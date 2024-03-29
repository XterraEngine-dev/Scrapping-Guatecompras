var nodemailer = require('nodemailer');
require('dotenv/config');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL || 'eliusincalj@gmail.com', // generated ethereal user
        pass: process.env.PASSWORD || 'runnmbfbxqhhmujv', // generated ethereal password
    },
});

transporter.verify().then(()=>{
    console.log("Ready for send emails");
});

function sendEmail (concursos){
    try{
        transporter.sendMail({
            from: '"Concursos Guatecompras" <admon@dxlatam.com>', // sender address
            to: process.env.EMAIL_SEND || "edavila@dxlatam.com, rtorres@dxlatam.com", // list of receivers
            subject: "Concursos Guatecompras", // Subject line
            html: getTemplate(concursos), // html body
          }, function(error, info){
              if(error){
                  console.log(error);
              }else{
                  console.log("Message sent succefull");
              }
          });
    }catch(error){
        console.log(error);
    }
}

function getTemplate(concursos){
    let template = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
     <head> 
      <meta charset="UTF-8"> 
      <meta content="width=device-width, initial-scale=1" name="viewport"> 
      <meta name="x-apple-disable-message-reformatting"> 
      <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
      <meta content="telephone=no" name="format-detection"> 
      <title>Nuevo mensaje</title> 
      <!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]--> 
      <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
      <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]--> 
      <!--[if !mso]><!-- --> 
      <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"> 
      <!--<![endif]--> 
      <style type="text/css">
    #outlook a {
        padding:0;
    }
    .ExternalClass {
        width:100%;
    }
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height:100%;
    }
    .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
    }
    a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
        line-height:inherit!important;
    }
    .es-desk-hidden {
        display:none;
        float:left;
        overflow:hidden;
        width:0;
        max-height:0;
        line-height:0;
        mso-hide:all;
    }
    [data-ogsb] .es-button {
        border-width:0!important;
        padding:15px 25px 15px 25px!important;
    }
    @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
    </style> 
     </head> 
     <body style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
      <div class="es-wrapper-color" style="background-color:#F4F4F4"> 
       <!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                    <v:fill type="tile" color="#f4f4f4"></v:fill>
                </v:background>
            <![endif]--> 
       <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
         <tr class="gmail-fix" height="0" style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0"> 
           <table cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px" height="0"><img src="https://fjimem.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px" alt width="600" height="1"></td> 
             </tr> 
           </table></td> 
         </tr> 
         <tr style="border-collapse:collapse"> 
          <td valign="top" style="padding:0;Margin:0"> 
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
             <tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;background-color:#052944" bgcolor="#052944" align="center"> 
               <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
                 <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"> 
                   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" valign="top" style="padding:0;Margin:0;width:540px"> 
                       <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:5px;font-size:0px"><img src="https://fjimem.stripocdn.email/content/guids/CABINET_3d7914803fa5608b6bc645d190590cb3/images/4281619815176906.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="205"></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0"> 
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                       <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFFFFF;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="center" style="Margin:0;padding-bottom:5px;padding-top:10px;padding-left:30px;padding-right:30px"><h1 style="Margin:0;line-height:58px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:48px;font-style:normal;font-weight:normal;color:#111111">Concursos encontrados</h1></td> 
                         </tr> 
                         <tr style="border-collapse:collapse"> 
                          <td bgcolor="#ffffff" align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px"> 
                           <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td style="padding:0;Margin:0;border-bottom:1px solid #FFFFFF;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table> 
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
             <tr style="border-collapse:collapse"> 
              <td align="center" style="padding:0;Margin:0"> 
               <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF"> 
                 <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0"> 
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                       <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#FFFFFF" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                         <tr style="border-collapse:collapse"> 
                          <td class="es-m-txt-l" bgcolor="#ffffff" align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">Se han encontrado nuevos concursos en los cuales aplicar.</p></td> 
                         </tr> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:22px;color:#666666;font-size:18px">A continuación tienes el listado de concursos:</p></td> 
                         </tr> `;

    for(let concurso of concursos){
        template += `<tr style="border-collapse:collapse"> 
        <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:22px;color:#4E4C4C;font-size:18px">No. Operación:&nbsp; <strong><span style="font-size:14px" id="no_operacion">`+concurso.no_operacion+`&nbsp;</span></strong><br>Titulo<strong>:&nbsp;<span style="font-size:14px">`+concurso.titulo+`</span></strong><br>Entidad que publica<strong>:&nbsp;<span style="font-size:14px">`+concurso.entidad_publica+`</span></strong><br>Fecha de publicación:&nbsp;<strong><span style="font-size:14px">`+concurso.fecha_publicacion+`</span></strong><br>Fecha límite de oferta:&nbsp;<strong><span style="font-size:14px">`+concurso.fecha_limite_oferta+`</span></strong><br>Estatus: <strong style="font-size:14px">`+concurso.estatus+`</strong></p></td> 
        </tr> 
        <tr style="border-collapse:collapse"> 
        <td align="center" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;font-size:0px"> 
        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
            <tr style="border-collapse:collapse"> 
            <td style="padding:0;Margin:0;border-bottom:1px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px"></td> 
            </tr> 
        </table></td> 
        </tr> `;
    }

    template+=`         </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td align="left" bgcolor="#ffffff" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px;background-color:#FFFFFF"> 
                   <!--[if mso]><table style="width:540px" cellpadding="0" cellspacing="0"><tr><td style="width:350px" valign="top"><![endif]--> 
                   <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:350px"> 
                       <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px"><br>Att.<br>Equipo DxLatam</p></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table> 
                   <!--[if mso]></td><td style="width:20px"></td><td style="width:170px" valign="top"><![endif]--> 
                   <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;width:170px"> 
                       <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr class="es-mobile-hidden" style="border-collapse:collapse"> 
                          <td align="center" style="padding:0;Margin:0;padding-top:30px;font-size:0px"><img class="adapt-img" src="https://fjimem.stripocdn.email/content/guids/CABINET_3d7914803fa5608b6bc645d190590cb3/images/4281619815176906.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="170"></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table> 
                   <!--[if mso]></td></tr></table><![endif]--></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <br>
       <br>
      </div>  
     </body>
    </html>`;
    return template;
}

function getTemplateNotFoundConcourses(){
  let template = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content="telephone=no" name="format-detection">
      <title></title>
      <!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]-->
      <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
      <!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
      <!--[if !mso]><!-- -->
      <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet">
      <!--<![endif]-->
  </head>
  
  <body>
      <div class="es-wrapper-color">
          <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f4f4f4"></v:fill>
        </v:background>
      <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
              <tbody>
                  <tr class="gmail-fix" height="0">
                      <td>
                          <table width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                              <tbody>
                                  <tr>
                                      <td cellpadding="0" cellspacing="0" border="0" style="line-height: 1px; min-width: 600px;" height="0"><img src="https://fjimem.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png" style="display: block; max-height: 0px; min-height: 0px; min-width: 600px; width: 600px;" alt width="600" height="1"></td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr>
                  <tr>
                      <td class="esd-email-paddings" valign="top">
                          <table class="es-content esd-header-popover" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" style="background-color: #052944;" esd-custom-block-id="6340" bgcolor="#052944" align="center">
                                          <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p20t es-p30r es-p30l" align="left">
                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="540" class="esd-container-frame" align="center" valign="top">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-image es-m-txt-c es-p5t" style="font-size: 0px;"><a target="_blank"><img src="https://fjimem.stripocdn.email/content/guids/CABINET_c9fee5cfbe5e4407f9fcd4246d831188/images/horizontal_on_transparent_by_logaster.png" alt style="display: block;" width="205"></a></td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td class="esd-structure" align="left">
                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="esd-container-frame" width="600" valign="top" align="center">
                                                                          <table style="background-color: #ffffff; border-radius: 4px; border-collapse: separate;" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td class="esd-block-text es-p10t es-p5b es-p30r es-p30l" align="center">
                                                                                          <h1>Concursos no encontrados</h1>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="esd-block-spacer es-p5t es-p5b es-p20r es-p20l" bgcolor="#ffffff" align="center">
                                                                                          <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                                                                                              <tbody>
                                                                                                  <tr>
                                                                                                      <td style="border-bottom: 1px solid #ffffff; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                  </tr>
                                                                                              </tbody>
                                                                                          </table>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center">
                                          <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="rgba(0, 0, 0, 0)">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure" align="left">
                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="esd-container-frame" width="600" valign="top" align="center">
                                                                          <table style="border-radius: 4px; border-collapse: separate; background-color: #ffffff;" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td class="esd-block-text es-p20t es-p20b es-p30r es-p30l es-m-txt-l" bgcolor="#ffffff" align="left">
                                                                                          <p>No se han encontrado nuevos concursos en los cuales aplicar para el día de hoy.</p>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-spacer es-p10t es-p10b es-p20r es-p20l" style="font-size: 0px;">
                                                                                          <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                              <tbody>
                                                                                                  <tr>
                                                                                                      <td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td>
                                                                                                  </tr>
                                                                                              </tbody>
                                                                                          </table>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td class="esd-structure es-p20t es-p20b es-p30r es-p30l" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
                                                          <!--[if mso]><table width="540" cellpadding="0" cellspacing="0"><tr><td width="352" valign="top"><![endif]-->
                                                          <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="352" class="esd-container-frame es-m-p20b" align="left">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="left" class="esd-block-text">
                                                                                          <p><br>Att.<br>Equipo DxLatam</p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <!--[if mso]></td><td width="20"></td><td width="168" valign="top"><![endif]-->
                                                          <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="168" align="left" class="esd-container-frame">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr class="es-mobile-hidden">
                                                                                      <td align="center" class="esd-block-image es-p30t" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://fjimem.stripocdn.email/content/guids/CABINET_c9fee5cfbe5e4407f9fcd4246d831188/images/horizontal_on_transparent_by_logaster.png" alt style="display: block;" width="168"></a></td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <!--[if mso]></td></tr></table><![endif]-->
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </body>
  
  </html>`;
  return template;
}

function sendEmailNotFoundCourses (){
  try{
      transporter.sendMail({
          from: '"Concursos Guatecompras" <admon@dxlatam.com>', // sender address
          to: process.env.EMAIL_SEND || "edavila@dxlatam.com, rtorres@dxlatam.com", // list of receivers
          subject: "Concursos Guatecompras", // Subject line
          html: getTemplateNotFoundConcourses(), // html body
        }, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log("Message sent succefull");
            }
        });
  }catch(error){
      console.log(error);
  }
}

module.exports = {
    "sendEmail" : sendEmail,
    "sendEmailNotFoundCourses" : sendEmailNotFoundCourses
}
