"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

export default function Footer() {
  return (
    <footer className="bg-[#121c2e] text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column - Logo and Text */}
          <div className="space-y-6">
            <a href="/">
              <div className="flex items-center gap-2 sm:gap-5 ">
                <img
                  src="/static/media/logo-icon.82bde376334f01e5f8c5657f7e6495bf.svg"
                  className="xl:w-10 w-6"
                  alt=""
                />
                <img
                  id="navbar-image"
                  src="data:image/png;base64,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"
                  alt=""
                  className="xl:w-60 w-48 m-0 p-0"
                />
              </div>
            </a>

            <p className="text-gray-300 text-sm">
              If you would like to learn more, you can fill in our Enquiry Form
              or Book a Call. Our team will be glad to answer your questions and
              offer any support needed.
            </p>

            <div class="flex space-x-4">
              <a
                className="h-max hover:scale-105"
                href="https://www.facebook.com/profile.php?id=100090229178312"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} size="xl" />
              </a>
              <a
                className="h-max hover:scale-105"
                href="https://twitter.com/InventumOnline"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} size="xl" />
              </a>
              <a
                className="h-max hover:scale-105"
                href="https://www.instagram.com/inventum_international/?next=%2"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} size="xl" />
              </a>
              <a
                className="h-max hover:scale-105"
                href="https://www.linkedin.com/company/inventum-international-online-school/posts/?feedView=all&viewAsMember=true"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="xl" />
              </a>
              <a
                className="h-max hover:scale-105"
                href="https://www.tiktok.com/@inventuminternational"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "tiktok"]} size="xl" />
              </a>
            </div>
          </div>

          {/* Middle Column - Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Link</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-gray-300 hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="why-us" className="text-gray-300 hover:text-white">
                    Why us
                  </a>
                </li>
                <li>
                  <a
                    href="journeys-and-fees"
                    className="text-gray-300 hover:text-white"
                  >
                    Journey & Fees
                  </a>
                </li>
                <li>
                  <a
                    href="well-being"
                    className="text-gray-300 hover:text-white"
                  >
                    Well-being
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-300 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://issuu.com/cobussteyn/docs/inventum_international_general_conditions_2023-24?fr=sMTI5NjQzMDU3Mjc"
                    className="text-gray-300 hover:text-white"
                  >
                    General Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-use"
                    className="text-gray-300 hover:text-white"
                  >
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Awards */}
          <div>
            <h3 className="text-xl text-center font-medium mb-4">
              Accreditations
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex justify-center">
                <img
                  src="/images/Award1.png"
                  alt="Award 1"
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/Award2.png"
                  alt="Award 2"
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/Award3.png"
                  alt="Award 3"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <img
                src="/images/cambridge.png"
                alt="Cambridge Assessment International Education"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          Copyright © 2025 Inventum International. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
