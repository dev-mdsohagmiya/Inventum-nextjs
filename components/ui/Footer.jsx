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
                  src="/images/logo-icon.82bde376334f01e5f8c5657f7e6495bf.svg"
                  className="xl:w-10 w-6"
                  alt=""
                />
                <img
                  id="navbar-image"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAg4AAABVCAMAAAAWs5wWAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAABjUExURf///////////////////////////////////////////////////////////////9YAf9YAf9YAf9YAf9YAf9YAf9YAf9YAf9YAf9YAf9YAf9YAf9YAf9YAf9YAf////9YAfzLPn1QAAAAfdFJOUwBQgGAgENAw8KDgQLDAkHAwYIBAcFAgoPDA0LAQ4JBpzHJTAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAAd0SU1FB+cCDBACB0f3ORMAAAABb3JOVAHPoneaAAAN8klEQVR42u2b6barKgyArUO1tnaw89z3f8rbSkISwHF7115nl/w4ax8hkISPCEiDwIsXL168ePHixYuXn8gkjOLftmF8SaJwkvy2Ef+eJNPnW6LfNmNsSbO3V1n622b8czJ7VvLX8kNeeZX/thn/nGQKh/n7z2T+EV5YPZgnQYx/CEnhodKTQupcSbUTY8Om6KYsE0jb5tY2+11VefXUaiJPYJux04rUWZBSVyjClNR8Ett1dMR4DVNis5pychIuiqJYrtKgsdeEjDV6lZY4B/QtU8JhXv0VskIsS9UfKzkMGeSV+dMWUp8ylRB7eDpljk1ZJpB2brkQmiof25gZoXbQbDN0WlE4C4pAR0hLNqNWi8rXxDSLRxMhnYkapoTQFrd4vmCdhqyTqiZ/J87JWGOcxDM9su5g5szZyKFUOHLvqnq2CFpw0N6Pg4MMMMXYeFpQ10qNx2wsHD6PU9HhohEHeDFnST8ckoWskYWGm4xCBw4RqImUUYdDEL7hKWLmLAucVoImJ1wxx8IWHFhSGQMHc5lTOHFIPqGfJUyNxWxEHJ5ZJMxYNuCAKQsfdsQhzWxjEuk8UejAIQelGX9Yi0NgNMXzMSnlVjeKkDxox4F6HQUHmfUmT0vF5P1pxmxMHHD2wMBQbrVx0K3mfXBw0EBsY6+aQhuHiVbi86gHDvS6JyV7Zhbae6WXFVwEDjrf6BBhNeXqFP6XdsJB5KgE2W/HgWKGGhH0mwsHlvoNyh1aBqanOEyFGBjbVy00rooZ2T32FkkcYtTKFmG4nGILC4mDptDGQVdxrgpNicOPRJL9maWUyIIAVpeZ2wShzmC2QmQumjrhkFsLNhuHeeXWXFTRMTM1QtMB9yrF9DRiuzKKelbna6TtEMvrlqhAu7iAjBfCF+o1rcEhpV4zFrc6HJg+S4WRpTQzWpyRD+04IMzj4MBe0LHuweia9UQ4YMxGwgHz+FIMDI611UaVBLKZPQ5NUbHXc0BVLnHAkbHGQvW3rP5lO8N+OEBF9jcEHluEbBE7TbBxgBEcCQdaJNOauwsOGLOxcAiW9H8aGEihZhtKd5ny6dGOw8JwmPyJjF6nTgvVsC3UZpPtDHvikMWmktxrhszxLjgo68fCoZDVO+MAMRsNh8iJg5ozZhsFzJ8pzaN2HGDWSUtyIor3OqsHdgJJgs4QeuKgXvdcCVaoE27SnDUxtc/reHtVuhsLB/QrpyfdcFAx64jDTByY9sCBLb61rzGOYcQmUisOEHR59LZSAbV6XdkW6qyQGpZ3xmEKMV6YSnyvGbG55th+hbxPdvgyBg4ZNiYetOKwyChmHXEwB9jGYWbiMCX2DV9nejJl5gg3RCXkcZZkVQmm4BGmMyBt4Uo3bUS6Mw4FbnRDQ2lFVrBdZjsOeA4+HQcHZcZnLaL2YIuiEw4hLuzn4+GQMm/BE3jXv3Or9FVl/epVuzSD0IqDOEASYwk1l5pCw8Jco2ckpe446IOLSCrB2fdM18zkGNbiAIpvzTFwALpSWGZlcUccAorZODgkuNFMmScJsL8wfGX/i0XwuuBgLmIsHAJNobEVZgzgF6beOGAeyFKpRHvNmbCyDQd9sLYaBQc0E7+4dcWBYvZDHNQxlD4RKoQn6OtS+srfEMqOyGWrG4fW7BBoCiUOPLxqNiytJtpxwG8tuVSCd1aEfySiCX4qKY4tAjqBKXrjwD9Q4adLWCVX1uVBdxwwZtZXjhoc+KlkWgM+7sHIE6wz5b6KVK2yb+6y1Y2DsXZIKfy6JlI45a7MuTYkpWQADsn0yWQuzcxNZls2moQmSAMO1sTlHiEOSSZs64wDHfh2w6FuoylpSE1PIl4MbeS2ouNLjh0V6FB+tYMVtLPmk7syc/S6GoCDiDgpwaJirgpTRxN1OAT8G20DDpaZK9a2vtiw0k0tgj44yJiNgsNMfltkB7jcV1dWof7azx3E24Kt4XivK6vp2NVrPgQHftTNlOBbjxG9LjjwfNOEw9RwX1XgZ5pUCxJ1DxzEzB0DBzo85p5YvhZPl8R1vdlo8XGDRxOzV0ahcmXp7DUaggMPnDlXebNdceCJugkHcAGjLO5ZEA4pb6kPDjxmg3FQB25qzPVrnXuS5NJX5zQ1b0U1f7OgEOG6zo4fUWhneBJ+MNsdB8YWe7VTD7mziXoc2MxqwgEGGi6VAH4ZDxszjoekIw4sZoNxEPkTK9XcUQhpBPnKVBXG7Thofmeq8gTtn9u9EoUFBc/udT4IB3rd25NXWu+67xBZOFC+acJB59Wc3SgQt4cYlzwkXXGgmLXiIO47VHsLESFgNXV5Inzln/sElKFlq90W2csjghvGmntTlYVKkV8OUWgtaGimzL9lCw6JBLESnfb4t3PXQim0cdCgN+IQ2ykOEzK/IxuRpf1woJi14iCFlu9yVw+3LwxPsIVQ/y0+YkY8iM2nMc7bUDNXTbahD/htNS0pcWk3WbTgoA3ho7Uw7OmDAybqRhyCuem+vuQorkyvwjAehIOO2Y9xiNl1B8uTmfYV3rDinik8izrgEKRTy5aZu6a4P6iK5OV3WqgPwAHHWfzs4UmE9cYBEl8zDkEqN+n6mqjzBv0AHDBmP8ZBLHStExT9PnBMU7n4aTurTQxz8kldTZyuhR4U+S2UktIQHOD1KEbLvkPbHQfINy04BMmKgCjYpBoLB5i5P8cBgp+J80GUGH1Vzshpim/dSRcc3rWXFJEp/wGlVVNRWKCPxvE2JKWwHgf2sx3HL3js3+o4flzk+hVWrLXnljZTTmt+DBRH1V3HiaNrq27qeszMtC02f7cVm467fh+VOCKUUJHtCfrq/sHTvMFAV1RSFRHzqVUzAQtdP73Cp6nrZ3D+96xevHjx4sWLFy9evHjx4sWLFy9evHjx4sWLFy9evHjx4sWLl39d1pvyLZv1b9thyXZXGbatK9kfBnm6r/H0sP+U7ra9mvxjcjieXiCn45oVVI+O7EFZPSmp8GUEjlc4f/68NBVKKS3DtlcqPW9urGRPJffyxps/M3VVgTfIPbVAOpR33ep1zwrOLlf/qNyOclSuFCb1YEN1++PAaeqJw82oc9phyfYiC0rWfAMOB6PB4010V8rSC7n2RThsTy9DTnpivMwhH4ADo6kfDre7WeEh2uFyvgXtOGxsT9dUeX2xWtUGfQ8Om5dDcAQxajpfDMGBqvTDwa4BZhxt1dfl1opDo6fB+uQoPQpTvgCHNQX0fKb5AZ7zYFcyCAdNk1347pRkI1rag/b1s7Y7n2igdy6T23HYu9R0fqBUdH9bYhL6LThgFE5lNWSHEubIXY2/DssV6g/CQdNkFzZEWOWAO6K0P8NMRoBPuxuZ3P6yuJ3QU6b20ktdXJmqlfRtg3Ssuxn7RwTewhf9Njhc+LSgtFny+n1xQJp64aAqsPX9lj+nhPUx+ciar8HhYaqtuadQ86TtwfX1uZuxf0TUFDmxFTbkC/WIcICpORCHV1lT2AcHJQdzWD9bAt63GwdIDnemdoBHn7+vtjNXlh6+BAd4n4qYb9nwMxzUS3YoDqq5AThczMMBmOWuw6cmHDYOa+nZTf314KUA0KOTsX9DHjQ/SFQSrfIvG081sQbjUNE0YO3wNmQvTgeswwyz78tWy45wUK1dpMId7dm7GHuQypfgcLYnhZhkkJhfOjADcLgQTc0bTcO2LZVcjnQi6chnsu+Xs2FlxU4qPNBTK68wA8jYP4/DxRVbFYbT508VEFyUHwfhsCeaeuFgHC9cYBvqmseibzcOTmM3SMHRNS1AZx18DQ7OIG3NIOq93W4IDluiqR8OuExAuW+ZSS7pjcMWcTgzw1zR+RIc7t1w0Ad62yE4aJo2PXEItkalje71FjikNw57xOHqcQiCmlmxwyCxqQgT9cTj1hkHTdPZKuSnki4DDzuxHj3U9Mr7duNw1zxZCnVrhzVpfwkOzvW2GvLq5IgCcuXx7YuDTPsddxZatjvd+Q6XOw9XxaaNJnOKRLeleD3JnKOmxb2fsf+0wLRd82cHHXmOw+1iDWgPHARNfXEI6NuzXvWdXG+LJhxgzymWoFC8lz5rUQnl2NvYf1fg+EWkhzMLHIVTfPHrjwOnaQAO7A0GYygOHra8bzcOh5dZiDZVZMGfnJZSw/I1OOBm7ljzhOHAzwH648Bp6orDjm+A9SYAJi0z+XYUJ+g13yyuDjV6AmmSHX3Dk3tHY/+GHPC7HriK14xgnnAc2IflATgwmrricHqdCQh69+OH6vOamXykvmtwOKCa6akiAP8Hi80Dvt32HY39I6LvhNwfZfnQKR3eogIHOhfiOPC9waPpHHonteGwueRiW3Y67qrTZkgJG2HG5WMySxbN9x1Kl5o+g9PZ6/QxSccB1p6Oyxm/PXD/k7iuFumUKnHAKWR9/UY5N36WOAptx22olzDsbperzH27OFRP7behnJ7qLYrzrhS+PBzG/va4/V9SNsTI8BwvywzDIRBXKdpw2NrF+uaSrXtfB604uHhgewn7JqW6VFNj7G8P2/8mW2Me3umNbXoOKXUgDre7VdgQ4tIcHnbP1Sy7VuPWepN6b6jdxWpgbV7cppfXN+HwnhgMiPuObektzzc/wQFo6ohDcNvxt8Kp5EcNhwcb2XOHjSY0WXJPjTPKt3fMqNOD7Tq/C4f3QO2On/XRcbcWj9W1AVHx8+DACrm8lQ9bqlDV3d7c2mtb3V653/bl9WPXtbTLtqrosaGLfWiEVnc0C54+DE+xic3D1d+6g61evHjx4sWLFy9evHjx4sWLFy3/AUqm/DJVzhLqAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTAyLTEyVDE2OjAxOjU2KzAwOjAwuE5NqAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wMi0xMlQxNjowMTo1NiswMDowMMkT9RQAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDItMTJUMTY6MDI6MDcrMDA6MDCbpmoYAAAAAElFTkSuQmCC"
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

            <div className="flex space-x-4">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <mask
                    id="mask0_42_574"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x={2}
                    y={2}
                    width={28}
                    height={28}
                  >
                    <path
                      d="M2.66699 2.66602H29.3337V29.3327H2.66699V2.66602Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_42_574)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.66699 16.0738C2.66699 22.7038 7.48144 28.2149 13.7781 29.3327V19.7027H10.4448V15.9993H13.7781V13.036C13.7781 9.70268 15.9259 7.85157 18.9637 7.85157C19.9259 7.85157 20.9637 7.99935 21.9259 8.14713V11.5549H20.2225C18.5925 11.5549 18.2225 12.3693 18.2225 13.4071V15.9993H21.7781L21.1859 19.7027H18.2225V29.3327C24.5192 28.2149 29.3337 22.7038 29.3337 16.0738C29.3337 8.69935 23.3337 2.66602 16.0003 2.66602C8.66699 2.66602 2.66699 8.69935 2.66699 16.0738Z"
                      fill="white"
                    />
                  </g>
                </svg>

                <span className="sr-only">Facebook</span>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M17.3708 2.66602C18.8708 2.67002 19.6321 2.67802 20.2894 2.69668L20.5481 2.70602C20.8468 2.71668 21.1414 2.73002 21.4974 2.74602C22.9161 2.81268 23.8841 3.03668 24.7334 3.36602C25.6134 3.70468 26.3548 4.16335 27.0961 4.90335C27.7744 5.56966 28.299 6.37598 28.6334 7.26602C28.9628 8.11535 29.1868 9.08335 29.2534 10.5033C29.2694 10.858 29.2828 11.1527 29.2934 11.4527L29.3014 11.7113C29.3214 12.3673 29.3294 13.1287 29.3321 14.6287L29.3334 15.6234V17.37C29.3367 18.3426 29.3265 19.3151 29.3028 20.2873L29.2948 20.546C29.2841 20.846 29.2708 21.1407 29.2548 21.4953C29.1881 22.9153 28.9614 23.882 28.6334 24.7327C28.299 25.6227 27.7744 26.429 27.0961 27.0954C26.4298 27.7736 25.6235 28.2983 24.7334 28.6327C23.8841 28.962 22.9161 29.186 21.4974 29.2527L20.5481 29.2927L20.2894 29.3007C19.6321 29.3193 18.8708 29.3287 17.3708 29.3314L16.3761 29.3327H14.6308C13.6578 29.3361 12.6848 29.3259 11.7121 29.302L11.4534 29.294C11.1369 29.282 10.8205 29.2683 10.5041 29.2527C9.08544 29.186 8.11744 28.962 7.26677 28.6327C6.37721 28.2981 5.57136 27.7734 4.90544 27.0954C4.2267 26.4292 3.70159 25.6228 3.36677 24.7327C3.03744 23.8833 2.81344 22.9153 2.74677 21.4953L2.70677 20.546L2.70011 20.2873C2.67553 19.3151 2.66442 18.3426 2.66677 17.37V14.6287C2.66308 13.6561 2.67286 12.6836 2.69611 11.7113L2.70544 11.4527C2.71611 11.1527 2.72944 10.858 2.74544 10.5033C2.81211 9.08335 3.03611 8.11668 3.36544 7.26602C3.70103 6.37561 4.22707 5.56926 4.90677 4.90335C5.57231 4.22541 6.37769 3.70078 7.26677 3.36602C8.11744 3.03668 9.08411 2.81268 10.5041 2.74602C10.8588 2.73002 11.1548 2.71668 11.4534 2.70602L11.7121 2.69802C12.6844 2.67433 13.6569 2.6641 14.6294 2.66735L17.3708 2.66602ZM16.0001 9.33268C14.232 9.33268 12.5363 10.0351 11.2861 11.2853C10.0358 12.5355 9.33344 14.2312 9.33344 15.9993C9.33344 17.7675 10.0358 19.4632 11.2861 20.7134C12.5363 21.9636 14.232 22.666 16.0001 22.666C17.7682 22.666 19.4639 21.9636 20.7142 20.7134C21.9644 19.4632 22.6668 17.7675 22.6668 15.9993C22.6668 14.2312 21.9644 12.5355 20.7142 11.2853C19.4639 10.0351 17.7682 9.33268 16.0001 9.33268ZM16.0001 11.9993C16.5254 11.9993 17.0456 12.1026 17.5309 12.3036C18.0162 12.5045 18.4572 12.7991 18.8287 13.1705C19.2002 13.5418 19.4949 13.9827 19.696 14.468C19.8971 14.9533 20.0007 15.4734 20.0008 15.9987C20.0009 16.524 19.8975 17.0441 19.6965 17.5295C19.4956 18.0148 19.201 18.4558 18.8297 18.8273C18.4583 19.1988 18.0174 19.4935 17.5321 19.6946C17.0469 19.8957 16.5267 19.9993 16.0014 19.9993C14.9406 19.9993 13.9232 19.5779 13.173 18.8278C12.4229 18.0776 12.0014 17.0602 12.0014 15.9993C12.0014 14.9385 12.4229 13.9211 13.173 13.1709C13.9232 12.4208 14.9406 11.9993 16.0014 11.9993M23.0014 7.33268C22.5594 7.33268 22.1355 7.50828 21.8229 7.82084C21.5104 8.1334 21.3348 8.55732 21.3348 8.99935C21.3348 9.44138 21.5104 9.8653 21.8229 10.1779C22.1355 10.4904 22.5594 10.666 23.0014 10.666C23.4435 10.666 23.8674 10.4904 24.18 10.1779C24.4925 9.8653 24.6681 9.44138 24.6681 8.99935C24.6681 8.55732 24.4925 8.1334 24.18 7.82084C23.8674 7.50828 23.4435 7.33268 23.0014 7.33268Z"
                    fill="white"
                  />
                </svg>

                <span className="sr-only">Instagram</span>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M26.4948 3H6.17521C5.33333 3.00078 4.52616 3.33557 3.93086 3.93086C3.33557 4.52616 3.00078 5.33333 3 6.17521V26.4948C3 28.2476 4.42388 29.67 6.17521 29.67H26.4948C27.3367 29.6692 28.1438 29.3344 28.7391 28.7391C29.3344 28.1438 29.6692 27.3367 29.67 26.4948V6.17521C29.6692 5.33333 29.3344 4.52616 28.7391 3.93086C28.1438 3.33557 27.3367 3.00078 26.4948 3ZM23.9582 14.6355C23.0236 14.7263 22.0833 14.5348 21.2586 14.0858C20.563 13.7108 19.9722 13.1679 19.5398 12.5064V19.8317C19.5398 20.9025 19.2223 21.9493 18.6274 22.8396C18.0325 23.7299 17.187 24.4239 16.1977 24.8336C15.2084 25.2434 14.1198 25.3506 13.0696 25.1417C12.0194 24.9328 11.0547 24.4172 10.2976 23.66C9.54039 22.9029 9.02475 21.9382 8.81585 20.888C8.60695 19.8377 8.71417 18.7492 9.12394 17.7599C9.53372 16.7706 10.2276 15.925 11.118 15.3301C12.0083 14.7352 13.055 14.4177 14.1258 14.4177C14.2384 14.4177 14.3481 14.4281 14.4592 14.434V17.1025C14.3481 17.0892 14.2399 17.0684 14.1258 17.0684C13.393 17.0684 12.6901 17.3596 12.1719 17.8778C11.6537 18.396 11.3625 19.0989 11.3625 19.8317C11.3625 20.5646 11.6537 21.2675 12.1719 21.7857C12.6901 22.3039 13.393 22.595 14.1258 22.595C15.652 22.595 17.0003 21.3934 17.0003 19.8673L17.0269 7.42426H19.5798C19.6967 8.53318 20.1994 9.56579 21.0003 10.3417C21.8011 11.1176 22.8491 11.5875 23.9611 11.6692V14.6355"
                    fill="white"
                  />
                </svg>

                <span className="sr-only">TikTok</span>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect
                    x={3}
                    y={3}
                    width="26.67"
                    height="26.67"
                    rx={4}
                    fill="white"
                  />
                  <path
                    d="M9.10133 9H13.8133L18.0067 14.9973L23.04 9H24.5453L18.58 15.8187L25 25H20.2907L15.9107 18.7373L10.504 25H9L15.3373 17.9173L9.10133 9Z"
                    fill="#0D1526"
                  />
                </svg>

                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Middle Column - Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Link</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Why us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Well-being
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Student Login
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    General Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Awards */}
          <div>
            <h3 className="text-xl text-center font-medium mb-4">Awards</h3>
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
