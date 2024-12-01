import { BookingFormValues } from "@/lib/definitions";
import getUrl from "@/utils/getUrl";

interface Values {
  booking: BookingFormValues;
  email: string;
}

const SEND_URL = getUrl("/api/send");

export const sendEmail = async (values: Values) => {
  try {
      const response = await fetch(SEND_URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
      });

      if (response.ok) {
          console.log('Email sent successfully!');
      } else {
          const errorDetails = await response.json();
          console.error('Error sending email:', errorDetails.message);
      }
  } catch (error) {
      console.error('There was a problem sending the email:', error);
  }
};