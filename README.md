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

5. Assume `report.html` to be unchanged to avoid pushing an updated `report.html` to base which would delete the template

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

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

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
