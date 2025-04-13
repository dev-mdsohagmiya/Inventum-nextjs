export default function Process() {
  return (
    <div className="bg-dl text-ll pt-28 pb-10">
      <h1
        className={`mx-auto text-5xl md:text-7xl text-center lg:w-max font-bold bg-clip-text text-transparent bg-pg`}
      >
        Admission Process
      </h1>
      <p className={`mx-auto text-center text-ll py-5 text-xl max-w-7xl px-5`}>
        Admission to Inventum International ensures that your child receives an
        innovative, high-quality, globally recognised education that suits their
        learning style and personal situation. Inventum International also
        provides an added unique focus on future technologies, well-being and
        mindset development ensuring that our learners are academically strong,
        open-minded, confident and future-ready. To secure your child’s place at
        Inventum International, the following steps must be completed:
      </p>
      <ol class="max-lg:max-w-md max-md:ml-10 lg:mx-10 max-lg:mx-auto relative text-ll max-lg:border-l-2 border-dd lg:grid lg:grid-cols-4 lg:border-t-2 mt-10 ">
        <li class="mb-20 ml-12">
          <span class="max-lg:absolute flex items-center justify-center w-16 h-16 bg-dd rounded-full max-lg:-left-8 lg:-mt-8 ">
            <img
              alt=""
              className="rounded-lg w-10 h-10"
              src={
                "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fphone-receiver-silhouette.webp?alt=media&token=710aeb0d-0ddd-4e3e-8842-b08729f5ba9c&_gl=1*1mc2tt0*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTMzODcuNTUuMC4w"
              }
            ></img>
          </span>
          <h3 class="font-medium text-transparent bg-clip-text text bg-pg w-max">
            Book
          </h3>
          <p class="text-sm">
            Book a discovery call to ask any questions regarding our online
            school.
          </p>
        </li>
        <li class="mb-20 ml-12">
          <span class="max-lg:absolute flex items-center justify-center w-16 h-16 bg-dd rounded-full max-lg:-left-8 lg:-mt-8 ">
            <svg
              aria-hidden="true"
              class="w-12 h-12 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 class="font-bold text-transparent bg-clip-text text bg-pg w-max">
            Apply
          </h3>
          <p class="text-sm">
            Complete and submit the application form (including the one-time
            registration fee) and ensure that you have read and agreed to our
            Terms and Conditions.
          </p>
        </li>
        <li class="mb-20 ml-12">
          <span class="max-lg:absolute flex items-center justify-center w-16 h-16 bg-dd rounded-full max-lg:-left-8 lg:-mt-8">
            <svg
              aria-hidden="true"
              class="w-12 h-12 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 class="font-medium text-transparent bg-clip-text text bg-pg w-max">
            Onboard
          </h3>
          <p class="text-sm">
            We will have an onboarding call to show you how everything works.
            You can already start studying and learning after this call!
          </p>
        </li>
        <li class="ml-12 pb-10">
          <span class="max-lg:absolute flex items-center justify-center w-16 h-16 bg-dd rounded-full max-lg:-left-8 lg:-mt-8 ">
            <svg
              aria-hidden="true"
              class="w-12 h-12  "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 class="font-medium text-transparent bg-clip-text text bg-pg w-max">
            Pay
          </h3>
          <p class="text-sm">
            Once the previous steps are done, payment of fees is arranged.
          </p>
        </li>
      </ol>
    </div>
  );
}
