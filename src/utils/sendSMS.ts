import Twilio from "twilio";

const TWILIO_SID = "AC57a4cddb07638e42fcb946e4a7903f44"
const TWILIO_TOKEN = "570308d30a9ca1606406b4e334be010b"
const TWILIO_PHONE = "+12408001512"

const twilioClient = Twilio(TWILIO_SID, TWILIO_TOKEN);

export const sendSMS = (to: string, body: string) => {
    return twilioClient.messages.create({
        body,
        to,
        from: TWILIO_PHONE
    });
};

export const sendVerificationSMS = (to: string, key: string) =>
    sendSMS(to, `Your verification key is: ${key}`);

