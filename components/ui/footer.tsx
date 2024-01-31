import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <svg
                    width="134"
                    height="44"
                    viewBox="0 0 134 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.175665 28.3637C1.3896 35.6637 12.1751 41.7451 17.4161 43.8733C14.0692 40.2101 7.37532 31.9798 7.37532 28.3637C7.37532 23.8436 13.8001 19.6625 16.835 14.4079C19.2628 10.2041 14.2091 3.74792 11.3787 1.04528C11.863 2.38247 12.4248 5.92699 10.7976 9.40748C7.37532 18.1087 -1.34175 19.2387 0.175665 28.3637Z"
                      fill="white"
                    />
                    <path
                      d="M13.6387 28.3637C10.8751 34.172 16.4475 40.7281 19.5792 43.2801C19.6976 42.8092 17.4161 37.7429 19.5792 32.6578C22.4965 25.7999 30.0472 25.0584 30.7575 17.0069C31.3257 10.5658 19.9774 2.6179 13.219 0C16.9964 1.51612 24.4091 6.36206 23.8409 13.6168C23.1306 22.6853 17.0932 21.1033 13.6387 28.3637Z"
                      fill="white"
                    />
                    <path
                      d="M46.082 37H40.8867V13.9141C40.8867 12.3255 41.1927 10.9909 41.8047 9.91016C42.4167 8.81641 43.2891 7.98958 44.4219 7.42969C45.5547 6.86979 46.8893 6.58984 48.4258 6.58984C48.9336 6.58984 49.4154 6.6224 49.8711 6.6875C50.3398 6.7526 50.8021 6.84375 51.2578 6.96094L51.1602 10.8867C50.9128 10.8216 50.6393 10.776 50.3398 10.75C50.0534 10.724 49.7344 10.7109 49.3828 10.7109C48.6797 10.7109 48.0807 10.8346 47.5859 11.082C47.0911 11.3294 46.7135 11.694 46.4531 12.1758C46.2057 12.6445 46.082 13.224 46.082 13.9141V37ZM50.3594 15.8672V19.5781H37.7031V15.8672H50.3594ZM66.1211 31.9805V15.8672H71.3164V37H66.4336L66.1211 31.9805ZM66.7852 27.6055L68.3867 27.5664C68.3867 28.9857 68.2305 30.2943 67.918 31.4922C67.6055 32.6901 67.1172 33.7318 66.4531 34.6172C65.8021 35.4896 64.9753 36.1732 63.9727 36.668C62.9701 37.1497 61.7852 37.3906 60.418 37.3906C59.3763 37.3906 58.4258 37.2474 57.5664 36.9609C56.707 36.6615 55.9648 36.1992 55.3398 35.5742C54.7279 34.9362 54.2526 34.1224 53.9141 33.1328C53.5755 32.1302 53.4062 30.9258 53.4062 29.5195V15.8672H58.5625V29.5586C58.5625 30.2617 58.6406 30.8477 58.7969 31.3164C58.9661 31.7852 59.194 32.1693 59.4805 32.4688C59.7799 32.7552 60.125 32.9635 60.5156 33.0938C60.9193 33.2109 61.349 33.2695 61.8047 33.2695C63.0547 33.2695 64.0378 33.0221 64.7539 32.5273C65.4831 32.0195 66.0039 31.3424 66.3164 30.4961C66.6289 29.6367 66.7852 28.6732 66.7852 27.6055ZM81.0234 20.2031V37H75.8672V15.8672H80.7305L81.0234 20.2031ZM80.2617 25.6719H78.6797C78.6797 24.2005 78.8555 22.8464 79.207 21.6094C79.5716 20.3724 80.1055 19.2982 80.8086 18.3867C81.5117 17.4622 82.3776 16.7461 83.4062 16.2383C84.4479 15.7305 85.6523 15.4766 87.0195 15.4766C87.9701 15.4766 88.8424 15.6198 89.6367 15.9062C90.431 16.1797 91.1146 16.6159 91.6875 17.2148C92.2734 17.8008 92.7227 18.569 93.0352 19.5195C93.3477 20.457 93.5039 21.5833 93.5039 22.8984V37H88.3477V23.4258C88.3477 22.4362 88.2044 21.6615 87.918 21.1016C87.6445 20.5417 87.2474 20.151 86.7266 19.9297C86.2057 19.6953 85.5807 19.5781 84.8516 19.5781C84.0443 19.5781 83.3477 19.7409 82.7617 20.0664C82.1888 20.3789 81.7135 20.8151 81.3359 21.375C80.9714 21.9349 80.6979 22.5794 80.5156 23.3086C80.3464 24.0378 80.2617 24.8255 80.2617 25.6719ZM93.1133 24.7148L90.9844 25.1055C90.9974 23.7773 91.1797 22.5339 91.5312 21.375C91.8828 20.2031 92.3971 19.181 93.0742 18.3086C93.7643 17.4232 94.6172 16.7331 95.6328 16.2383C96.6615 15.7305 97.8464 15.4766 99.1875 15.4766C100.229 15.4766 101.167 15.6263 102 15.9258C102.846 16.2122 103.569 16.6745 104.168 17.3125C104.767 17.9375 105.223 18.7513 105.535 19.7539C105.861 20.7565 106.023 21.9805 106.023 23.4258V37H100.828V23.4062C100.828 22.3776 100.685 21.5898 100.398 21.043C100.125 20.4961 99.7279 20.1185 99.207 19.9102C98.6862 19.6888 98.0742 19.5781 97.3711 19.5781C96.6549 19.5781 96.0299 19.7148 95.4961 19.9883C94.9753 20.2487 94.5326 20.6133 94.168 21.082C93.8164 21.5508 93.5495 22.0977 93.3672 22.7227C93.1979 23.3346 93.1133 23.9987 93.1133 24.7148ZM120.145 37.3906C118.543 37.3906 117.104 37.1302 115.828 36.6094C114.552 36.0885 113.465 35.3659 112.566 34.4414C111.681 33.5039 110.997 32.4167 110.516 31.1797C110.047 29.9297 109.812 28.5885 109.812 27.1562V26.375C109.812 24.7474 110.047 23.2695 110.516 21.9414C110.984 20.6003 111.648 19.4479 112.508 18.4844C113.367 17.5208 114.396 16.7786 115.594 16.2578C116.792 15.737 118.113 15.4766 119.559 15.4766C121.056 15.4766 122.378 15.7305 123.523 16.2383C124.669 16.7331 125.626 17.4362 126.395 18.3477C127.163 19.2591 127.742 20.3529 128.133 21.6289C128.523 22.8919 128.719 24.2917 128.719 25.8281V27.9961H112.156V24.4414H123.641V24.0508C123.615 23.2305 123.458 22.4818 123.172 21.8047C122.885 21.1146 122.443 20.5677 121.844 20.1641C121.245 19.7474 120.47 19.5391 119.52 19.5391C118.751 19.5391 118.081 19.7083 117.508 20.0469C116.948 20.3724 116.479 20.8411 116.102 21.4531C115.737 22.0521 115.464 22.7682 115.281 23.6016C115.099 24.4349 115.008 25.3594 115.008 26.375V27.1562C115.008 28.0417 115.125 28.862 115.359 29.6172C115.607 30.3724 115.965 31.0299 116.434 31.5898C116.915 32.1367 117.488 32.5664 118.152 32.8789C118.829 33.1784 119.598 33.3281 120.457 33.3281C121.538 33.3281 122.514 33.1198 123.387 32.7031C124.272 32.2734 125.04 31.6419 125.691 30.8086L128.289 33.5039C127.846 34.1549 127.247 34.7799 126.492 35.3789C125.75 35.9779 124.852 36.4661 123.797 36.8438C122.742 37.2083 121.525 37.3906 120.145 37.3906Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <div className="text-gray-400">
                Made in San Francisco, CA<br/>
                contact@fumedev.com
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks 
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 2nd block *
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Web Studio
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      DynamicBox Flex
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Programming Forms
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block 
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Nostrud exercitation
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Visual mockups
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Nostrud exercitation
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Visual mockups
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Nostrud exercitation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 4th block 
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Consectetur adipiscing
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Labore et dolore
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Consectetur adipiscing
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Labore et dolore
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Consectetur adipiscing
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              {/* <li>
                <Link
                  href="/"
                  className="flex justify-center items-center text-teal-600 bg-gray-800 hover:text-gray-100 hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-teal-600 bg-gray-800 hover:text-gray-100 hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-teal-600 bg-gray-800 hover:text-gray-100 hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-teal-600 bg-gray-800 hover:text-gray-100 hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li> */}
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-teal-600 bg-gray-800 hover:text-gray-100 hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Linkedin"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; Fume Technologies, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
