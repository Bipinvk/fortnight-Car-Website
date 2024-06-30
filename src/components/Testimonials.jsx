import React from "react";

const Testimonials = ({ id }) => {
  const testimonials = [
    {
      text: "I found my dream car at a great price on this platform. The process was smooth and straightforward.",
      user: "Emily T.",
      company: "Happy Car Buyer",
      image: "url_to_emily_image",
    },
    {
      text: "Selling my old car was hassle-free with this platform. I got a fair price and the transaction was quick.",
      user: "John S.",
      company: "Satisfied Seller",
      image: "url_to_john_image",
    },
    {
      text: "Excellent customer service! They helped me throughout the buying process and ensured everything went smoothly.",
      user: "Sophia M.",
      company: "First-time Buyer",
      image: "url_to_sophia_image",
    },
  ];

  return (
    <div id={id} className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are Saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
