import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Nitesh Gautam. I am a Bachelor's student at the Industrial Engineering and
              Management department of LUT University.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "System Administration / Cloud Computing / Penetration Testing"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm looking for an internship for 2024. I'm open to collaboration on any kind of project."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:gautamnitesh960@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                gautamnitesh960@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/Kyouma960"
                target="_blank"
                rel="noreferrer"
              >
                @Kyouma960
              </a>
            </li>
            <li>
              Resume:{" "}
              <a
                className="text-blue-300"
                href="https://resume.gautamnitesh.me"
                target="_blank"
                rel="noreferrer"
              >
                https://resume.gautamnitesh.me
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">studying</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">internship</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
