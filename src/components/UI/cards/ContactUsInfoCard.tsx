import Btn from "../buttons/Btn";

function ContactUsInfoCard() {
  return (
    <div className="font-poppins shadow-dark-gray flex flex-col gap-4 place-self-end rounded-xl px-[22px] py-[26px] xl:w-[569px]">
      <h2 className="text-[30px] leading-[45px] font-semibold">
        <span className="contact-us-title-right text-gray-medium-900 font-semibold">
          Contact us
        </span>{" "}
        and vist our workshop
      </h2>
      <p className="text-gray-medium-900 text-[18px] leading-[27px] font-normal break-all">
        Have a question or need help? We’re here to listen, assist, and make
        your experience better. Your feedback matters—reach out anytime .
      </p>

      <ul className="space-y-4">
        <li className="flex items-center gap-2.5">
          <img src="/icons/call.svg" alt="call icon" width={24} height={24} />
          <h4 className="text-gray-medium-900 font-montserrat text-base leading-6 font-medium">
            (+888) 123 456 765
          </h4>
        </li>

        <li className="flex items-center gap-2.5">
          <img src="/icons/clock-gray.svg" alt="clock icon" />
          <div className="space-y-2.5">
            <h4 className="text-gray-medium-900 font-poppins text-base leading-6 font-normal">
              Monday - Friday <span>11:00 AM - 12:00 PM</span>
            </h4>
            <h4 className="text-gray-medium-900 font-poppins text-base leading-6 font-normal">
              Saturday <span>07:00 AM - 08:00 PM</span>
            </h4>
          </div>
        </li>
      </ul>

      <Btn to="/contact-us" className="font-poppins w-full rounded-lg">
        Contact us
      </Btn>
    </div>
  );
}

export default ContactUsInfoCard;
