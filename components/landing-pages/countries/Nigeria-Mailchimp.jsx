import MailchimpSubscribe from "react-mailchimp-subscribe"

export default function MailchimpForm() {
    const url = "https://inventumonline.us9.list-manage.com/subscribe/post?u=6e1c62a48544933d268dac8c8&amp;id=dfc02d5f8a&amp;f_id=00a1d7e1f0"




    const CustomForm = ({ status, message, onValidated }) => {
        let email, firstName, lastName, phone, interestedIn, contactMethod, howDidYouHear;
        const submit = () =>
            email &&
            firstName &&
            lastName &&
            phone &&
            interestedIn &&
            contactMethod &&
            howDidYouHear &&
            email.value.indexOf("@") > -1 &&
            
            onValidated({
                EMAIL: email.value,
                FNAME: firstName.value,
                LNAME: lastName.value,
                PHONE: phone.value,
                MMERGE7: interestedIn.value,
                MMERGE8: contactMethod.value,
                MMERGE9: howDidYouHear.value
            });
      
        return (
          <div
          >
            <div className="max-w-lg mx-auto space-y-6 p-6">
                <div className="lg:flex lg:gap-6">
                    <div className="space-y-2 lg:w-1/2">
                        <label htmlFor="mce-FNAME" className="block text-gray-200 text-sm font-medium">
                        First Name
                        </label>
                        <input
                        type="text"
                        name="FNAME"
                        required
                        id="mce-FNAME"
                        ref={node => (firstName = node)}
                        className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div className="space-y-2 lg:w-1/2">
                        <label htmlFor="mce-LNAME" className="block text-gray-200 text-sm font-medium">
                        Last Name
                        </label>
                        <input
                        type="text"
                        name="LNAME"
                        id="mce-LNAME"
                        required
                        ref={node => (lastName = node)}
                        className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>
                </div>
                <div className="lg:flex lg:gap-6">
                <div className="space-y-2 lg:w-1/2">
                    <label htmlFor="mce-EMAIL" className="block text-gray-200 text-sm font-medium">
                        Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        required
                        ref={node => (email = node)}
                        className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>
                    <div className="space-y-2 lg:w-1/2">
                        <label htmlFor="mce-PHONE" className="block text-gray-200 text-sm font-medium">
                        Phone Number
                        </label>
                        <input
                        type="text"
                        name="PHONE"
                        id="mce-PHONE"
                        required
                        ref={node => (phone = node)}
                        className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="mce-MMERGE7" className="block text-gray-200 text-sm font-medium">
                    Interested in
                    </label>
                    <select
                    name="MMERGE7"
                    id="mce-MMERGE7"
                    ref={node => (interestedIn = node)} 
                    required
                    className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                    <option value="" className="text-gray-900">Select an option</option>
                    <option value="IGCSE" className="text-gray-900">IGCSE</option>
                    <option value="A-Levels" className="text-gray-900">A-Levels</option>
                    </select>
                </div>

                <div className="space-y-3">
                    <strong className="block text-gray-200 text-sm font-medium">Preferred Contact Method</strong>
                    <div className="flex flex-wrap gap-3">
                    {["Whatsapp", "Email", "Phone Call", "SMS"].map((method, index) => (
                        <label key={index} className="flex items-center space-x-2 text-gray-200">
                        <input ref={node => (contactMethod = node)} required type="radio" name="MMERGE8" value={method} className="form-radio text-green-400" />
                        <span>{method}</span>
                        </label>
                    ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="mce-MMERGE9" className="block text-gray-200 text-sm font-medium">
                    How Did You Hear About Us?
                    </label>
                    <select
                    required
                    ref={node => (howDidYouHear = node)}
                    name="MMERGE9"
                    id="mce-MMERGE9"
                    className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                    <option value="" className="text-gray-900">Select an option</option>
                    <option value="Instagram" className="text-gray-900">Instagram</option>
                    <option value="Facebook Ad" className="text-gray-900">Facebook Ad</option>
                    <option value="Referral" className="text-gray-900">Referral</option>
                    <option value="Google Search" className="text-gray-900">Google Search</option>
                    </select>
                </div>
                </div>
            <button onClick={submit} className={`${status === "sending" ? "brightness-80" : status === "error" ? "bg-red-500" : "bg-pg"} text-white p-3 rounded-md hover:brightness-90 active:translate-y-1`}>
              Submit
            </button>
            <div className="mt-4">

                {status === "sending" && <div>sending...</div>}
                {status === "error" && (
                    <div
                    dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
                {status === "success" && (
                    <>
                <div
                    dangerouslySetInnerHTML={{ __html: message }}
                    />
                </>

                )}
            </div>
          </div>
        );
      };

    return (
        <div className="bg-dl pt-32 p-5 text-center text-white">
            <h1 className="text-5xl font-bold bg-pg bg-clip-text text-transparent">Subscribe to our newsletter</h1>
            <p className="text-xl">Get the latest updates and free value from our newsletter.</p>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                  />
                )}
            />
        </div>
    )
}