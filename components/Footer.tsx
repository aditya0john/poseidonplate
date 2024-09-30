"use client";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState({
    numberCopied: false,
    mailCopied: false,
  });

  const copyPhoneNumber = () => {
    const num = "123-456-7890";

    navigator.clipboard
      .writeText(num)
      .then(() => {
        console.log(copied);
        setCopied((prevCopied) => ({
          ...prevCopied,
          numberCopied: true,
        }));

        alert("Phone number copied");

        if (confirm("DO YOU WANT TO OPEN THIS NUMBER ?")) {
          window.open("tel:" + num, "_self");
        }
      })
      .catch((error) => {
        alert("Failed to copy phone number: " + error.message);
        console.error(error);
      });
  };

  const copyMail = () => {
    const mail = "pundiryash227@gmail.com";

    navigator.clipboard
      .writeText(mail)
      .then(() => {
        alert("mail copied");
        setCopied((prevCopied) => ({
          ...prevCopied,
          mailCopied: true,
        }));
      })
      .catch((error) => {
        alert("Failed to copy mail: " + error.message);
        console.error(error);
      });
  };

  const handleCopyClick = () => {
    copyPhoneNumber();
  };

  return (
    <div
      id="footer"
      className="min-h-[30vh] bg-gray-200 mx-auto flex items-center justify-around select-none py-10"
    >
      <span>
        <ul className="font-semibold text-black/[0.8] flex flex-col gap-1 capitalize">
          <li>Poseidon Plate</li>
          <li className="text-sm text-black/[0.5]">
            a restaurant like no other,
            <br /> offering your tastebuds the taste,
            <br /> you will never forget
          </li>
          <li className="tracking-tight">address</li>
          <li className="text-sm text-black/[0.5]">Goa belt</li>
        </ul>
      </span>
      <span>
        <ul className="font-semibold text-black/[0.8] uppercase flex justify-center">
          Contact us
        </ul>
        <ul className="wrapper py-10">
          <button onClick={handleCopyClick}>
            <li className="icon Telephone">
              <span className="tooltip">Telephone</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <i className="fab fa-facebook-f"></i>
              </span>
            </li>
          </button>
          <button onClick={copyMail}>
            <li className="icon email">
              <span className="tooltip">Email</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <i className="fab fa-twitter"></i>
              </span>
            </li>
          </button>
        </ul>
      </span>

      <span>
        <ul className="font-semibold text-black/[0.8] uppercase flex justify-center">
          follow us on
        </ul>

        <ul className="wrapper py-10">
          <Link href="https://www.instagram.com/poseidonplate_?utm_source=qr&igsh=ZzBkOHAxZHp0dHQz">
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="black" stroke-width="1.5">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
                    />
                    <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m17.5 6.51l.01-.011"
                    />
                  </g>{" "}
                  <li className="icon facebook">
                    <span className="tooltip">Facebook</span>
                    <span>
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 8 19"
                        stroke="black"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <i className="fab fa-facebook-f"></i>
                    </span>
                  </li>
                </svg>
                <i className="fab fa-instagram"></i>
              </span>
            </li>
          </Link>

          <Link href="https://www.facebook.com/profile.php?id=61566484715981&mibextid=rS40aB7S9Ucbxw6v">
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <span>
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                  stroke="black"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <i className="fab fa-facebook-f"></i>
              </span>
            </li>
          </Link>
        </ul>
      </span>
    </div>
  );
};

export default Footer;
