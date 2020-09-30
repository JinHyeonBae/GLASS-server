import nodemailer from "nodemailer";
import smtpTransporter from "nodemailer-smtp-transport";

export const sendVerificationEmail = (fullName: string, key: string) => {
  // url
  // https, http조심
  let url = "http://localhost:5000/verification/" + key;

  // 옵션
  let mailOpt = {
    from: "kimmins3483@gmail.com",
    to: "kms334488@naver.com",
    subject: "이메일 인증을 진행해주세요.",
    html:
      "<h1>이메일 인증을 위해 URL을 클릭해주세요.</h1><br>" +
      `<a href="${url}">${fullName} 님, 인증하기</a>`,
  };
  const smtpTransport = nodemailer.createTransport(
    smtpTransporter({
      service: "Gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "kimmins3483@gmail.com",
        pass: "smk334488",
      },
    })
  );

  // 전송
  smtpTransport.sendMail(mailOpt, function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log("============= email has been sent. ==================");
    }
    smtpTransport.close();
  });
};
