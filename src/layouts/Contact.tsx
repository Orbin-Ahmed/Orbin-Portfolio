import Card from "@/components/Card";
import HText from "@/components/HText";
import emailIcon from "@/assets/email.png";
import linkedinIcon from "@/assets/linkedin.png";
import messengerIcon from "@/assets/messenger.png";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type ContactProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

function Contact({ setSelectedPage }: ContactProps) {
  const inputStyles = `mb-5 w-full rounded-lg bg-inherit border-2 border-form-border
  px-5 py-3 placeholder-primary-200 leading-tight shadow focus:outline-none focus:shadow-outline`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="Contact" className="bg-gray-50">
      <motion.div
        className="flex items-center flex-col py-12 w-3/5 mx-auto"
        onViewportEnter={() => setSelectedPage("contact")}
      >
        <HText subHeader="Get In Touch" header="Contact Me" />
        {/* Contact Me Area */}
        <div className="flex gap-8 ms:flex-row flex-col">
          {/* Contact Info Area */}
          <div>
            <p className="text-xl font-semibold mb-4 text-center">
              Contact Info
            </p>
            <Link to={"mailto:acantoahmed67@gmail.com"}>
              <Card
                icon={emailIcon}
                header="Email"
                subHeader="acantoahmed67@gmail.com"
                title="Write me"
                className="md:p-4 p-2 m-2"
                arrowRight={true}
              />
            </Link>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/orbin-ahmed-acanto/"}
            >
              <Card
                icon={linkedinIcon}
                header="LinkedIn"
                subHeader="orbin-ahmed-acanto"
                title="Write me"
                className="md:p-4 p-2 m-2"
                arrowRight={true}
              />
            </Link>
            <Link
              target="_blank"
              to={"https://www.facebook.com/acanto.ahmed.1/"}
            >
              <Card
                icon={messengerIcon}
                header="Messenger"
                subHeader="acanto.ahmed.1"
                title="Write me"
                className="md:p-4 p-2 m-2"
                arrowRight={true}
              />
            </Link>
          </div>
          {/* Contact Info Area end */}
          {/* Form area started */}
          <div>
            <p className="text-xl font-semibold mb-4 text-center">
              Write me your project
            </p>
            {/* Contact form */}
            <div>
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/d3134b918fa2f691760dc6de2df62e3a "
                method="POST"
              >
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="NAME"
                  required={true}
                  name="name"
                />

                <input
                  className={inputStyles}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-primary-200">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}

                <textarea
                  className={twMerge(inputStyles, "resize-none mb-2")}
                  placeholder="MESSAGE"
                  rows={4}
                  cols={50}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="text-primary-200">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    text="Submit"
                    className="bg-button-secondary hover:bg-button-primary md:m-0 md:py-2 m-0"
                  />
                </div>
              </form>
            </div>
            {/* Contact form end */}
          </div>
        </div>
        {/* Contact Me Area */}
      </motion.div>
    </section>
  );
}

export default Contact;
