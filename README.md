<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CabbitKheema/read-assist-backend">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">read-assist-backend</h3>

  <p align="center">
    Express.js backend APIs retrieving word meanings via text/voice for <a href="https://github.com/CabbitKheema/read-assist"><strong>read-assist</strong></a> PWA.
    <br />
    <a href="https://github.com/CabbitKheema/read-assist-backend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/CabbitKheema/read-assist-backend">View Demo</a>
    &middot;
    <a href="https://github.com/CabbitKheema/read-assist-backend/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/CabbitKheema/read-assist-backend/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#deployment">Deployment</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Encountering unfamiliar words while reading books can disrupt the immersive experience, forcing readers to pause and search for meanings through dictionaries or online tools. The read-assist-backend APIs solve this problem by offering quick access to word definitions, origins, and usage contexts via text input or audio transcription. Integrated into the [read-assist][read-assist-url] PWA, it ensures users can effortlessly stay focused on their reading while resolving any doubts about word meanings. I think this is a great solution for all book readers.

Here's why:

* From typing to speaking, the API supports various ways users interact with it.
* The `/find-word-definition` endpoint provides comprehensive definitions, origins, and usage contexts, saving time and effort.
* The `/transcribe-word` endpoint handles audio file uploads, transcribing spoken words and providing their definitions. This is especially helpful for understanding unfamiliar words heard in conversations or audio content.
* By integrating into the [read-assist][read-assist-url] PWA, users can stay engaged with their reading while resolving their doubts instantly.

Thanks to all the tools and technologies mentioned in <a href="#acknowledgments">Acknowledgments</a> section below without which this project would've been incomplete! 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Node][Node.js]][Node-url]
* [![JavaScript][JavaScript]][JavaScript-url]
* [![Express][Express.js]][Express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

1. Download and install Node.js by going through their [official website](https://nodejs.org/en/download)
   > NPM is included with Node.js installation.

2. Update npm
   ```sh
   npm install npm@latest -g
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation 🌱 <a id="installation"></a>

1. Clone the repo
   ```sh
   git clone https://github.com/CabbitKheema/read-assist-backend.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```

3. Get a free API Key at [Free API Key by Groq Cloud](https://console.groq.com/keys)
   
4. Save this in root directory in a file titled `.env` and **follow the commented instructions** prefixed with ```//``` below
   
   ```js
   PORT=3000
   GROQ_API_KEY=// Paste the API KEY copied from step 3 
   GROQ_TEXT_MODEL=llama-3.3-70b-versatile
   GROQ_AUDIO_MODEL=whisper-large-v3-turbo

   MAX_AUDIO_DURATION_IN_SECONDS=15
   AUDIO_FILE_SIZE_LIMIT_IN_MB=3

   ORIGIN_URL=// This is the URL that makes the request. Eg. http://localhost:5000

   POSTMAN_WORKING_DIRECTORY=./tests/resources
   POSTMAN_TEST_REPORT_FILE_PATH=./tests/reports/report.html

   POSTMAN_COLLECTION_FILE_PATH=./collections/Read_Assist_Backend_Tests.postman_collection.json
   POSTMAN_GLOBALS_FILE_PATH=./globals/workspace.postman_globals.json
   POSTMAN_ENVIRONMENT_FILE_PATH=./local_environment/read_assist_backend_local.postman_environment.json
   ```

5. Assume `report.html` to be unchanged to avoid pushing an updated `report.html` to base which would delete the template <a id="assume-unchanged"></a>

   ```sh
   git update-index --assume-unchanged .\tests\reports\report.html
   ```

   > To reverse this assumption, run the following command:

   ```sh
   git update-index --no-assume-unchanged .\tests\reports\report.html
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Deployment 🚀 <a id="deployment"></a>

* Start the server

   ```
   node server.js

   Server is running on port 3000
   running a collection...
   collection run completed.
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

[Read Assist Backend Tests Collection](https://www.postman.com/science-physicist-1938228/workspace/read-assist/collection/41172600-bc0af1e9-b249-4415-af88-5dfbc6efb759?action=share&creator=41172600&active-environment=41172600-d7a3beb2-5d06-448b-b351-9d68620b0e50) contains test cases for the [read-assist-backend][read-assist-backend-url], a service powering the [read-assist][read-assist-url] PWA. The backend is built using an Express.js server, providing APIs for retrieving word meanings and transcriptions through both text and voice inputs.

Click this to fork the collection to you local postman workspace,

[![Run In Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/41172600-bc0af1e9-b249-4415-af88-5dfbc6efb759?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D41172600-bc0af1e9-b249-4415-af88-5dfbc6efb759%26entityType%3Dcollection%26workspaceId%3D83711707-5270-464c-8e5e-00a5e3fd2209#?env%5Bread_assist_backend_local%5D=W3sia2V5IjoiQkFDS0VORF9VUkwiLCJ2YWx1ZSI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiY29tcGxldGVTZXNzaW9uVmFsdWUiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJzZXNzaW9uSW5kZXgiOjB9XQ==)  

_For better understanding, please refer to the [Read Assist Backend Tests Documentation](https://www.postman.com/science-physicist-1938228/read-assist/documentation/08isa39/read-assist-backend-tests)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

### **Phase 1: Initial Setup**
- **Day 1: 16-01-2024**
  - [x] Set up a simple Node.js server using Express.js
  - [x] Created a basic server structure to handle HTTP requests

### **Phase 2: API Development**
- **Day 2: 17-01-2025**
  - [x] Migrated the word-to-definition API from frontend to backend
  - [x] Created services for word definition lookup
  - [x] Set up controllers, routes, and `server.js`
  - [x] Implemented input validation: Words longer than 100 characters return a `400 Bad Request`
  - [x] Integrated `dotenv` for environment variables and `cors` for cross-origin requests

- **Day 3: 18-01-2025**
  - [x] Added transcription service to transcribe audio to text using `groq-sdk`
  - [x] Replaced storing audio files on the server with the `Groq.toFile` API
  - [x] Consolidated transcription and word definition controllers into a single router file
  - [x] Implemented `multer` middleware for managing file uploads
  - [x] Improved error handling for unsupported audio file types

### **Phase 3: Error Handling and Validation**
- **Day 4: 19-01-2025**
  - [x] Introduced audio duration and file size validation for uploads
  - [x] Implemented middleware to restrict audio duration to `0 < audioDuration <= 15` seconds
  - [x] Reduced audio file size limit from 5MB to 3MB

- **Day 5: 20-01-2025**
  - [x] Added input validation middleware:
    - [x] **`checkAudioClipValidity.js`**: Validates audio duration, file type, and size
    - [x] **`checkInputTextValidity.js`**: Ensures text input is non-empty and within 1-100 characters
  - [x] Enhanced error messages for invalid inputs
  - [x] Tested validation logic using Postman

### **Phase 4: Testing and Reporting**
- **Day 6: 21-01-2025**
  - [x] Integrated `newman` for running Postman tests post-deployment
  - [x] Generated detailed test reports using `newman-reporter-htmlextra`
  - [x] Hosted test reports at `backendDomain/report/v1/test-report`

- **Day 7: 22-01-2025**
  - [x] Added new test cases for `/test-report` and `/is-alive` endpoints

### **Phase 5: Documentation**
- **Day 9-11: 24-01-2025 to 26-01-2025**
  - [x] Updated the README.md file:
    - [x] Added prerequisites, installation steps, roadmap, and usage details
    - [x] Included markdown badges for better visual appeal
    - [x] Referenced best practices for creating a README
  - [x] Set up Git to assume `report.html` files are unchanged locally to avoid unnecessary pushes (<a href="#assume-unchanged">changes</a>)

---

### **Pending Tasks**
  - [ ] Add support for image-based word recognition
  - [ ] Improve test automation and monitoring

See the [open issues](https://github.com/CabbitKheema/read-assist-backend/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/CabbitKheema/read-assist-backend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=CabbitKheema/read-assist-backend" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Prajwal K - [@CabbitKheema](https://twitter.com/CabbitKheema) - <mrprajwalkrishnamurthy@gmail.com> - [HackerRank](https://www.hackerrank.com/profile/CabbitKheema)

Project Link: [https://github.com/CabbitKheema/read-assist-backend](https://github.com/CabbitKheema/read-assist-backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [My rough Roadmap Document](https://docs.google.com/document/d/1S-hJlncxmdiUkleG3nYwzgEcqARJOaIUQYmx6Qjvmno/edit?usp=sharing)
* [Creating Your First Backend with Node.js](https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0)
* [Express.js Documentation](https://devdocs.io/express/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [cors](https://www.npmjs.com/package/cors)
* [multer](https://www.npmjs.com/package/multer)
* [Groq Documentation](https://console.groq.com/docs/overview)
* [newman](https://github.com/postmanlabs/newman)
* [newman-reporter-htmlextra](https://github.com/DannyDainton/newman-reporter-htmlextra)
* [MARKDOWN SYNTAX](https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf)
* [Best README template by Othneil Drew](https://github.com/othneildrew/Best-README-Template/tree/main?tab=readme-ov-file#installation)
* [Markdown Guide | Basic Syntax](https://markdownguide.offshoot.io/basic-syntax/)
* [List of useful Markdown Badges](https://ileriayo.github.io/markdown-badges/)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[read-assist-url]: https://github.com/CabbitKheema/read-assist
[read-assist-backend-url]: https://github.com/CabbitKheema/read-assist-backend
[contributors-shield]: https://img.shields.io/github/contributors/CabbitKheema/read-assist-backend.svg?style=for-the-badge
[contributors-url]: https://github.com/CabbitKheema/read-assist-backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CabbitKheema/read-assist-backend.svg?style=for-the-badge
[forks-url]: https://github.com/CabbitKheema/read-assist-backend/network/members
[stars-shield]: https://img.shields.io/github/stars/CabbitKheema/read-assist-backend.svg?style=for-the-badge
[stars-url]: https://github.com/CabbitKheema/read-assist-backend/stargazers
[issues-shield]: https://img.shields.io/github/issues/CabbitKheema/read-assist-backend.svg?style=for-the-badge
[issues-url]: https://github.com/CabbitKheema/read-assist-backend/issues
[license-shield]: https://img.shields.io/github/license/CabbitKheema/read-assist-backend.svg?style=for-the-badge
[license-url]: https://github.com/CabbitKheema/read-assist-backend/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mr-prajwal-k
[product-screenshot]: images/screenshot.png
[Node.js]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white
[Node-url]: https://nodejs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[JavaScript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
