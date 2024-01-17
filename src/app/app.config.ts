import { Injectable } from '@angular/core';
import * as mod from '@common/models';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  cryptochains: mod.CryptofontChain[] = [];
  cryptonetworks: mod.CryptoChain[] = [];
  cryptochain?: mod.CryptofontChain;
  activenetwork?: mod.CryptoChain;
  cryptoConfigs: any = {
    cryptofont: {
      chains: [
        { id: 1, chain: 'Ethereum' },
        { id: 56, chain: 'BSC' }, // Binance Smart Chain
        { id: 137, chain: 'Polygon' },
        { id: 1101, chain: 'Polygon zkEVM' },
        { id: 10, chain: 'Optimism' },
        { id: 42161, chain: 'Arbitrum' },
        { id: 43114, chain: 'Avalanche' },
        { id: 1399811149, chain: 'Solana' },
        { id: 369, chain: 'Pulsechain' },
        { id: 59144, chain: 'Linea' },
        { id: 7700, chain: 'Canto' },
        { id: 25, chain: 'Cronos' },
        { id: 250, chain: 'Fantom' },
      ],
    },
    rapidapi: {
      options: {
        method: 'GET',
        url: 'https://cryptofonts-token-icon-api1.p.rapidapi.com', // /:chainid/:tokenid
        headers: {
          'X-RapidAPI-Key': '8b5d27b84bmshb42f0711727251fp15e988jsn5dbc073eac96',
          'X-RapidAPI-Host': 'cryptofonts-token-icon-api1.p.rapidapi.com',
        },
      },
      params: {
        chainid: '1', // ethereum, etc...
        tokenid: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', // uniswap
      },
    },
  };

  schemaPerson: any = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Michael Lowenstein',
    jobTitle: 'Senior Software Engineer',
    address: { '@type': 'PostalAddress', addressLocality: 'Calgary', addressRegion: 'AB' },
    knowsLanguage: [],
    description:
      'Versatile Senior Software Engineer experienced in the development of cross-platform software ranging from internal utility applications and microservices to full stack enterprise-scale web applications, serving a global audience. Driven by a love for problem-solving, whether it be a Proof-of-Concept demo for a prospective client, re-writing an authentication framework to ensure the security of internal infrastructure and client data, or planning, designing and constructing a new platform from the first line of code.\nDecisive leader and reliable team builder with results-focused and motivated approach,. Develops custom software solutions for variety of client needs and believes that high quality software requires high quality documentation - both for the end users and for the engineers maintaining the product. Strong advocate for a well-rounded perspective when developing software - rather than “can we”, we should consider asking “should we”.',
    hasOccupation: [
      {
        '@type': 'Role',
        hasOccupation: [
          { '@type': 'Occupation', name: 'Senior Software Engineer' },
          { '@type': 'Occupation', name: 'Software Engineer' },
          { '@type': 'Occupation', name: 'Software Develop & Data Analyst' },
          { '@type': 'Occupation', name: 'Freelance Software Developer' },
        ],
      },
    ],
    worksFor: [
      { '@type': 'Organization', name: 'FullStack Labs' },
      { '@type': 'Organization', name: 'Peloton Computer Enterprises' },
      { '@type': 'Organization', name: 'SIA Wealth Management' },
      { '@type': 'Organization', name: 'National Neon Inc.' },
    ],
    alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'University of Calgary' }],
  };

  title: string = 'Contact Michael Lowenstein, Calgary';

  bio: any = {
    name: 'description',
    content: ` Michael Lowenstein, Versatile Senior Software Engineer experienced in the development of cross-platform software ranging from internal utility applications and microservices to full stack enterprise-scale web applications, serving a global audience. Driven by a love for problem-solving, whether it be a Proof-of-Concept demo for a prospective client, re-writing an authentication framework to ensure the security of internal infrastructure and client data, or planning, designing and constructing a new platform from the first line of code.
    Decisive leader and reliable team builder with results-focused and motivated approach,. Develops custom software solutions for variety of client needs and believes that high quality software requires high quality documentation - both for the end users and for the engineers maintaining the product. Strong advocate for a well-rounded perspective when developing software - rather than “can we”, we should consider asking “should we” `,
  };

  browserEventHandler: any = () => {
    function getAssetsHost(t) {
      let s = 'localhost:3000',
        e = 'assets',
        l = 'bold' === t.split('.')[0] ? '' : t.split('.')[0],
        o = t.replace(l, ''),
        $ = /^qa|^reg|^stg/.test(l.split('-')[0]),
        a = '' === l ? e + '.' : $ ? l.split('-')[0] + '-' + e : e;
      return t !== s ? a + o : s;
    }
    const hostUrl = getAssetsHost(location.host);
    function InitializeMetricsForPage(e, f, a) {
      (null == a || void 0 == a) && (a = { useDevJs: !1 }),
        ('' == a.commonScriptsUrl || void 0 == a.commonScriptsUrl) &&
        (a.commonScriptsUrl = location.protocol + '//' + hostUrl + '/blob/common'),
        ('' == a.clientEventsAPIUrl || void 0 == a.clientEventsAPIUrl) &&
        (a.clientEventsAPIUrl = location.protocol + '//' + location.host + '/clientevents');
      var c =
        a.commonScriptsUrl +
        '/scripts/splashEventStream' +
        (!0 == a.useDevJs ? '' : '.min') +
        '.js?v=' +
        (void 0 == a.besVer ? 'latest' : a.besVer),
        d =
          a.commonScriptsUrl +
          '/scripts/splashMetrics' +
          (!0 == a.useDevJs ? '' : '.min') +
          '.js?v=' +
          (void 0 == a.muVer ? 'latest' : a.muVer),
        b = [];
      b.push(loadDynamicScriptFileAsync(c, !0)),
        b.push(loadDynamicScriptFileAsync(d, !0)),
        Promise.all(b).then(function () {
          var b = MetricsUtil.ClassInitializers.getNewConfigurationObject(a.MuCfg);
          (b.Value_PortalCD = e),
            (b.Value_ProductCD = f),
            (b.splashEventsUrl = c),
            (b.useForcePushForAllEvents = void 0 == a.useForcePushForAllEvents || a.useForcePushForAllEvents),
            (b.SplashConfig.AjaxDetails.eventsPostEndpointUrl =
              a.clientEventsAPIUrl + '/' + b.SplashConfig.AjaxDetails.eventsPostEndpointUrl),
            MetricsUtil.initializeAsync(window, b);
        });
    }
    function loadDynamicScriptFileAsync(a, b) {
      return new Promise(function (e, f) {
        try {
          var c = document.createElement('script');
          (c.src = a),
            (c.onload = e),
            (c.async = null == b || null == b || b),
            (c.onerror = function (a) {
              f(a, c);
            });
          var d = document.getElementsByTagName('script')[0];
          d.parentNode.insertBefore(c, d);
        } catch (g) {
          f(g);
        }
      });
    }
    var addParamsData = { MuCfg: { enableWebVitals: true } };
    InitializeMetricsForPage('PRS', 'PWB', addParamsData);
  };

  trackingHandler: any = () => {
    window.globalCompVars = window.globalCompVars || {};
    window.ssr_profile = true;
    try {
      if (typeof TS != 'undefined') {
        TS.Track('PWB', 'PRS', undefined, 'true', 'true', '', 'true');
      } else {
        var funcPointer = setInterval(callTrackingApi, 10);
        function callTrackingApi() {
          if (typeof TS != 'undefined') {
            clearInterval(funcPointer);
            TS.Track('PWB', 'PRS', undefined, 'true', 'true', '', 'true');
          }
        }
      }
    } catch (err) {
      console.log('visitor error: ' + err);
    }
  };

  schemaRouteData: any = {
    useruid: '1c2711ad-1232-42c9-be85-3b74b739cb33',
    portalSettings: {
      apiUrl: 'https://api-personalwebsite.bold.pro/v1/',
      portalId: 207,
      portalCd: 'PRS',
      blobContainer: 'prs',
      portalName: 'bold.pro',
      builderUrl: 'https://bold.pro',
      googleRecaptchaSiteKey: '6LeHHCYdAAAAAKmrZaWyssFxTcQQaiPdUydDwqEv',
      tosUrl: 'https://bold.pro/terms',
      privPolicyUrl: 'https://bold.pro/privacy-policy',
      visitorServiceUrl: 'https://assets.bold.pro/visitor/',
      resourceurl: '/blobcontent/pwb/prs/',
      contactUrl: 'https://bold.pro/contact',
      baseUrl: 'https://bold.pro',
      isProfileDomain: true,
      isJTTheme: null,
      userStatus: null,
      configEnviroment: 'prod',
      countrySpecificUrl: 'https://bold.pro',
      pwApiUrlV1: 'https://bold.pro/pwb/api/v1/',
      publishedWebsiteUrl: "https://bold.pro'/my/'",
      isIntlPortal: false,
      cultureCD: 'en',
    },
    publishStatus: 'PUBS',
    isSampleUrl: false,
    resumeIndex: 0,
    activeCountry: 'ca',
    countryList: [],
    urlCountryCode: null,
    shouldWebsiteShow: true,
    canonicalUrl: 'https://ca.bold.pro',
    indexable: true,
    showContactCTA: true,
    doc: {
      sections: [
        {
          sectionTypeCD: 'PICT',
          paragraphs: [
            {
              docDatas: [
                { charValue: '', fieldCD: 'FRFM', dateTimeValue: null },
                {
                  charValue: '/blobcontent/pwb/background-images/Generic/fallback/Template1/@x1/1920px.png',
                  fieldCD: 'BIMG',
                  dateTimeValue: null,
                },
                {
                  charValue: '/blobcontent/pwb/background-images/Generic/fallback/carousel/@x1/carousel.webp',
                  fieldCD: 'TIMG',
                  dateTimeValue: null,
                },
              ],
              index: null,
              id: '106a84c2-294f-48ae-b807-f2b49697c9a0',
              category: null,
            },
          ],
          index: 0,
          name: 'Photo',
          id: 'b383ec51-b814-4269-97cf-0e6d0d208cd8',
        },
        {
          sectionTypeCD: 'PICT',
          paragraphs: [
            {
              docDatas: [
                {
                  charValue: '/photos/p/ca/f8/f8e3f802-f061-42b3-a4c2-ad060572ae8a.jpeg',
                  fieldCD: 'PURL',
                  dateTimeValue: null,
                },
              ],
              index: 0,
              id: '3cd21607-2751-41af-8019-a8ff8f452709',
              category: null,
            },
          ],
          index: 1,
          name: 'Picture',
          id: '2bf393c6-7e27-41d2-887a-f166149f476f',
        },
        {
          sectionTypeCD: 'NAME',
          paragraphs: [
            {
              docDatas: [
                { charValue: 'Michael', fieldCD: 'FNAM', dateTimeValue: null },
                { charValue: 'Lowenstein', fieldCD: 'LNAM', dateTimeValue: null },
              ],
              index: 0,
              id: '5af9ef62-da13-4d64-b92d-ff40f6616730',
              category: null,
            },
          ],
          index: 2,
          name: 'Name',
          id: '3da255ba-5471-4159-b693-d3c9b12fe130',
        },
        {
          sectionTypeCD: 'CNTC',
          paragraphs: [
            {
              docDatas: [
                { charValue: '', fieldCD: 'STRT', dateTimeValue: null },
                { charValue: 'AB', fieldCD: 'STAT', dateTimeValue: null },
                { charValue: 'Calgary', fieldCD: 'CITY', dateTimeValue: null },
                { charValue: 'T2W 1B6', fieldCD: 'ZIPC', dateTimeValue: null },
                { charValue: '', fieldCD: 'CNTY', dateTimeValue: null },
                { charValue: '', fieldCD: 'HPHN', dateTimeValue: null },
                { charValue: '403-667-0161', fieldCD: 'CPHN', dateTimeValue: null },
                { charValue: 'mlo2gs@webmail.wiki', fieldCD: 'EMAI', dateTimeValue: null },
                { charValue: '', fieldCD: 'WEB1', dateTimeValue: null },
                { charValue: 'Calgary, AB T2W 1B6', fieldCD: 'ADDR', dateTimeValue: null },
                { charValue: 'linkedin.com/in/mlo2gs', fieldCD: 'SOCL', dateTimeValue: null },
              ],
              index: 0,
              id: '49f4b3d4-1350-41a0-8c2d-5df36eb83e78',
              category: null,
            },
          ],
          index: 3,
          name: 'Contact',
          id: 'a6557669-8ad6-400e-96f7-c17daacd274f',
        },
        {
          sectionTypeCD: 'SUMM',
          paragraphs: [
            {
              docDatas: [
                {
                  charValue:
                    '<p>Versatile Senior Software Engineer experienced in the development of cross-platform software ranging from internal utility applications and microservices to full stack enterprise-scale web applications, serving a global audience. Driven by a love for problem-solving, whether it be a Proof-of-Concept demo for a prospective client, re-writing an authentication framework to ensure the security of internal infrastructure and client data, or planning, designing and constructing a new platform from the first line of code.</p>\n<p>Decisive leader and reliable team builder with results-focused and motivated approach,. Develops custom software solutions for variety of client needs and believes that high quality software requires high quality documentation - both for the end users and for the engineers maintaining the product. Strong advocate for a well-rounded perspective when developing software - rather than “can we”, we should consider asking “should we”.</p>',
                  fieldCD: 'FRFM',
                  dateTimeValue: null,
                },
              ],
              index: 0,
              id: '1149c70f-895a-46f6-b709-96137fd42c26',
              category: null,
            },
          ],
          index: 4,
          name: 'Summary',
          id: 'a8cf63b5-2be6-4867-a0b6-5c31130413cd',
        },
        {
          sectionTypeCD: 'OVVW',
          paragraphs: [
            {
              docDatas: [
                { charValue: '8', fieldCD: 'NMBR', dateTimeValue: null },
                { charValue: 'years of professional experience', fieldCD: 'FRFM', dateTimeValue: null },
              ],
              index: null,
              id: 'fc9ade66-4f86-4b54-a707-d83bf8b04dd0',
              category: 'EXPR',
            },
          ],
          index: 5,
          name: 'Overview',
          id: 'e88a74d4-1d51-4750-85fb-3576369ff1a7',
        },
        {
          sectionTypeCD: 'EXPR',
          paragraphs: [
            {
              docDatas: [
                { charValue: '6 2023', fieldCD: 'JSTD', dateTimeValue: '2023-06-05T06:00:00Z' },
                { charValue: 'Current', fieldCD: 'EDDT', dateTimeValue: '2023-12-19T06:17:02.072Z' },
                { charValue: 'FullStack Labs', fieldCD: 'COMP', dateTimeValue: null },
                { charValue: 'Senior Software Engineer', fieldCD: 'JTIT', dateTimeValue: null },
                { charValue: 'Arlington (Remote)', fieldCD: 'JCIT', dateTimeValue: null },
                { charValue: '', fieldCD: 'JLOC', dateTimeValue: null },
                { charValue: 'Virginia', fieldCD: 'JSTA', dateTimeValue: null },
                { charValue: '', fieldCD: 'JCNT', dateTimeValue: null },
                {
                  charValue:
                    '<ul>\n  <li>Authored a new Onboarding &amp; Technical Documentation package for new engineers joining the company</li>\n  <li>Wrote user manuals and other documentation for roll-out in customer training sessions.</li>\n  <li>Mentored and performed regular code reviews for junior developers and engineers.</li>\n  <li>Engaged directly with stakeholders to understand the needs of the end-users in order to optimize the balance between prioritizing client deliverables and managing technical debt on enterprise scale in-production software.</li>\n  <li>Met with product owners, design engineers stakeholders and customers throughout system development lifecycle to review and refine goals, expectations and priorities.</li>\n  <li>Created cloud-native instances and test, staging and production environments, optimizing products to work in distributed computing environments.</li>\n  <li>Primary cloud technologies of focus included (AWS) DynamoDB, CodeDeploy, EC2 Console, Lambda Functions, RDS Postgres Databases, (GCP)</li>\n  <li>Design, documentation and distribution of remote virtual machine instances to serve as development environments across remote engineering teams.</li>\n  <li>Regularly performed codebase reviews, static code analysis, and load testing to gather metrics and make objective evaluations of our software internally - this R&amp;D-style of analysis often led to presentations of proposed solutions to the challenges our team was facing in delivering features efficiently.</li>\n  <li>Developed automated test suites using linux shell scripting, python, and javascript/typescript libraries such as Jest, Mocha, Jasmine, Puppeteer. Cucumber and Playwright</li>\n  <li>End-to-End Test Automation frameworks written for Angular web applications using Cypress</li>\n  <li>Introduction of automation tools to enhance workflows and required processes that rely on manual and/or out-dated tools.</li>\n  <li>Researching, planning and architecting new Authentication Servers and Infrastructure from scratch - .NET and Node.js ecosystems, modern web frameworks (React, Next, Vue and Angular - specialty in v5-v17), implementing OAuth2.0 + OIDC Protocols for Identity and Access Management via Auth0, Passport, and FusionAuth.</li>\n  <li>Designed and implemented reusable components and user interfaces for web-based applications - collaboration with UX Designers</li>\n  <li>Conducted full lifecycle software development from planning to deployment and maintenance (Angular 14-17, Node.Js Express + Typescript Web API + PostgreSQL).</li>\n  <li>Integration of third-party APIs into existing systems - realtime-communication, audit-logs, scheduled backups and job-runners for long-running processes.</li>\n  <li>Optimization of database and query structure and for improved performance (PostgreSQL, DynamoDB) as well as introducing new server-side caching to existing web APIs which resulted in upwards of 90% performance improvements.</li>\n  <li>Troubleshooting of post-release software faults to support live service and installed software patch design - Pingdom, Papertrail Logs, Sentry Error Monitoring.</li>\n  <li>Refactoring and/or rewriting existing applications in out-dated technology - experienced high-pressure, high-priority and time-sensitive projects such as the internal employee-time-tracking and client-billing sync service. Skills and concepts put to use here included ETL architecture and NestJS/Server-Side Typescript + GraphQL + PostgreSQL + Shell-Scripting via Cron-Jobs</li>\n  <li>Participated in deployments to production involving multiple development teams, database migrations - notably, I have also gained experience in failed major releases to production, which was as valuable of an experience as any of the skills I have practiced throughout my career.</li>\n</ul>',
                  fieldCD: 'JDES',
                  dateTimeValue: null,
                },
                { charValue: '', fieldCD: 'JCTR', dateTimeValue: null },
                { charValue: '', fieldCD: 'JDFM', dateTimeValue: null },
              ],
              index: 0,
              id: 'c66517ec-4fcc-4c45-89a7-217cff83c6d1',
              category: null,
            },
            {
              docDatas: [
                { charValue: '5 2018', fieldCD: 'JSTD', dateTimeValue: '2018-05-05T06:00:00Z' },
                { charValue: '5 2022', fieldCD: 'EDDT', dateTimeValue: '2022-05-05T06:00:00Z' },
                { charValue: 'Peloton Computer Enterprises', fieldCD: 'COMP', dateTimeValue: null },
                { charValue: 'Software Engineer', fieldCD: 'JTIT', dateTimeValue: null },
                { charValue: 'Calgary', fieldCD: 'JCIT', dateTimeValue: null },
                { charValue: '', fieldCD: 'JLOC', dateTimeValue: null },
                { charValue: 'Alberta', fieldCD: 'JSTA', dateTimeValue: null },
                { charValue: '', fieldCD: 'JCNT', dateTimeValue: null },
                {
                  charValue:
                    '<p>1 Year - ProdView Software Developer of new web application for scheduling tasks and operations to be used by oil and gas companies</p>\n<ul>\n  <li>Individual project - ASP.NET API + Angular 7, Cosmos DB</li>\n</ul>\n<p>1 Year - CORE Software & Infrastructure Development Team:</p>\n<ul>\n  <li>Building PoC demo applications</li>\n  <li>Research & Development of new technologies & collaborated on the construction of the current enterprise identity management server</li>\n</ul>\n<p>2 Years - LandView Software Engineer developing and maintaining the Land Management System used by our clients - oil & gas companies</p>\n<ul>\n  <li>Daily bug monitoring and feature development - Perl, Python, Rust & Javascript</li>\n  <li>Linux Server & Database management - PostgreSQL & FreeBSD</li>\n</ul>',
                  fieldCD: 'JDES',
                  dateTimeValue: null,
                },
                { charValue: '', fieldCD: 'JCTR', dateTimeValue: null },
                { charValue: '', fieldCD: 'JDFM', dateTimeValue: null },
              ],
              index: 1,
              id: 'fb84a0d8-0ba9-4f2f-aa16-5cdd0cc6e4af',
              category: null,
            },
            {
              docDatas: [
                { charValue: '5 2017', fieldCD: 'JSTD', dateTimeValue: '2017-05-05T06:00:00Z' },
                { charValue: '5 2018', fieldCD: 'EDDT', dateTimeValue: '2018-05-05T06:00:00Z' },
                { charValue: 'SIA Wealth Management', fieldCD: 'COMP', dateTimeValue: null },
                { charValue: 'Software Develop & Data Analyst', fieldCD: 'JTIT', dateTimeValue: null },
                { charValue: 'Calgary', fieldCD: 'JCIT', dateTimeValue: null },
                { charValue: '', fieldCD: 'JLOC', dateTimeValue: null },
                { charValue: 'Alberta', fieldCD: 'JSTA', dateTimeValue: null },
                { charValue: '', fieldCD: 'JCNT', dateTimeValue: null },
                {
                  charValue:
                    '<p>Paid Summer Internship before my third year of Computer Science:</p>\n<ul>\n  <li>Focused on rebuilding a legacy software application using modern a web app<br>\nframework</li>\n  <li>Primary role was designing the User Settings Console, and a suite of financial<br>\nmarket visualization tools</li>\n  <li>Stock Market Analysis & Visualization Charts and Calculators</li>\n  <li>MSSQL Server, ASP.NET (C-Sharp), Javascript, jQuery & Bootstrap</li>\n  <li>Was offered a position following the end of my internship</li>\n</ul>',
                  fieldCD: 'JDES',
                  dateTimeValue: null,
                },
                { charValue: '', fieldCD: 'JCTR', dateTimeValue: null },
                { charValue: '', fieldCD: 'JDFM', dateTimeValue: null },
              ],
              index: 2,
              id: '560e39a7-682f-4fd9-bb9b-c8898fc0290f',
              category: null,
            },
            {
              docDatas: [
                { charValue: '9 2015', fieldCD: 'JSTD', dateTimeValue: '2015-09-05T06:00:00Z' },
                { charValue: '5 2017', fieldCD: 'EDDT', dateTimeValue: '2017-05-05T06:00:00Z' },
                { charValue: 'National Neon Inc.', fieldCD: 'COMP', dateTimeValue: null },
                { charValue: 'Freelance Software Developer', fieldCD: 'JTIT', dateTimeValue: null },
                { charValue: 'Calgary', fieldCD: 'JCIT', dateTimeValue: null },
                { charValue: '', fieldCD: 'JLOC', dateTimeValue: null },
                { charValue: 'Alberta', fieldCD: 'JSTA', dateTimeValue: null },
                { charValue: '', fieldCD: 'JCNT', dateTimeValue: null },
                {
                  charValue:
                    '<p>During my second and third year of Computer Science, I designed and built an Inventory Management & Invoice Automation System for a local sign manufacturing company, National Neon.</p>\n<ul>\n  <li>The company has been using paper invoices, hand-written and manually<br>\ncalculated by one of the managers</li>\n  <li>The web application provided opportunity for improving company’s productivity<br>\nand process of creating custom signs for clients with a user-friendly interface</li>\n  <li>Great first experience in dealing with clients directly as a developer</li>\n</ul>',
                  fieldCD: 'JDES',
                  dateTimeValue: null,
                },
                { charValue: '', fieldCD: 'JCTR', dateTimeValue: null },
                { charValue: '', fieldCD: 'JDFM', dateTimeValue: null },
              ],
              index: 3,
              id: 'c595b61d-5d3a-4c24-80aa-b9a626b50f45',
              category: null,
            },
          ],
          index: 6,
          name: 'Experience',
          id: '3323392a-585e-49c7-8793-ad4b1f1814d5',
        },
        {
          sectionTypeCD: 'EDUC',
          paragraphs: [
            {
              docDatas: [
                { charValue: 'Bachelor of Science', fieldCD: 'DGRE', dateTimeValue: null },
                { charValue: 'Kinesiology & Computer Science', fieldCD: 'STUY', dateTimeValue: null },
                { charValue: 'University of Calgary', fieldCD: 'SCHO', dateTimeValue: null },
                { charValue: 'Calgary, AB', fieldCD: 'SCIT', dateTimeValue: null },
                { charValue: '', fieldCD: 'SSTA', dateTimeValue: null },
                { charValue: '', fieldCD: 'SCNT', dateTimeValue: null },
                { charValue: '04/2017', fieldCD: 'GRYR', dateTimeValue: '2017-04-05T06:00:00Z' },
                { charValue: 'Calgary, AB', fieldCD: 'SCLO', dateTimeValue: null },
                { charValue: '', fieldCD: 'FRFM', dateTimeValue: null },
                { charValue: '', fieldCD: 'GRST', dateTimeValue: null },
                { charValue: '', fieldCD: 'GRED', dateTimeValue: null },
                { charValue: 'other', fieldCD: 'EDTP', dateTimeValue: null },
                { charValue: '', fieldCD: 'EGRD', dateTimeValue: null },
                { charValue: '', fieldCD: 'ENST', dateTimeValue: null },
                { charValue: '', fieldCD: 'GDFM', dateTimeValue: null },
                { charValue: '', fieldCD: 'GRHN', dateTimeValue: null },
                { charValue: '', fieldCD: 'ESTS', dateTimeValue: null },
                { charValue: '', fieldCD: 'GRIP', dateTimeValue: null },
                { charValue: '', fieldCD: 'GRPA', dateTimeValue: null },
              ],
              index: 0,
              id: '4010c6ef-a305-4e76-8dc7-d8570cb1b6d5',
              category: null,
            },
          ],
          index: 7,
          name: 'Education and Training',
          id: 'dab99b22-ed2f-414e-adf3-7b92d7bbbcb0',
        },
        {
          sectionTypeCD: 'HILT',
          paragraphs: [
            {
              docDatas: [
                {
                  charValue:
                    '<p><strong>Proficient in a wide variety of programming languages and stacks:</strong></p>\n<ul>\n  <li>Development of small applications using Java, C/C++, Rust, Go</li>\n  <li>Strong background in Perl scripting and MVC Catalyst application development</li>\n  <li>Broad range of experience using the ASP.NET and .NET Core stacks, including applications in C#, F#, Blazor and VB.NET</li>\n  <li>Regularly make use of Python for scripting and automation, backend development using Flask and Django, machine learning projects using TensorFlow and Anaconda</li>\n  <li>A special passion for mathematical programming, data mining and analytics as well as Web Assembly for integrating such features with more traditional web application features</li>\n</ul>\n<p><strong>Expertise in Full Stack Modern Web Development:</strong></p>\n<ul>\n  <li>Planning, design and implementation of enterprise Angular web applications from the command line to production</li>\n  <li>Managed, maintained and developed large scale React.js, Next.js and Vue applications</li>\n  <li>Broad range of experience developing Web API - REST, GraphQL, Websockets</li>\n  <li>Written Authentication Systems from the ground up, using Node.js (typescript and javascript), and ASP.NET/Core stacks to implement OAuth2 + OIDC Protocols for securing user information and company data.</li>\n  <li>Authored multiple ETL services and scheduled services such as job runners and automated backups with linux shell scripting and NestJS typescript applications</li>\n</ul>\n<p><strong>Comfortable with a wide range of DevOps roles and responsibilities:</strong></p>',
                  fieldCD: 'SKC1',
                  dateTimeValue: null,
                },
                {
                  charValue:
                    '<ul>\n  <li>Designing CI/CD pipelines and managing deployments to production via GitHub Actions, Docker/Kubernetes, Terraform</li>\n  <li>Experience constructing cloud services and infrastructure across various platforms including Google Cloud, Digital Ocean, Microsoft Azure and Amazon Web Services</li>\n  <li>Database Management responsibilities such as automating backups, analyzing query plans for optimizing performance at scale, and overseeing migrations between client instances</li>\n  <li>Extensive experience working with both relational - MS SQL, PostgreSQL - and NoSQL - DynamoDB, CosmosDB, MongoDB and Firebase</li>\n</ul>\n<p><strong>Technical Writing and Verbal Communication:</strong></p>\n<ul>\n  <li>Frequently providing feature demonstrations and/or preparing presentations for clients, managers and team members</li>\n  <li>Author of multiple End-User and Technical (internal) Documentation packages</li>\n  <li>Experienced in writing Help Center User Guides, drafting release notes and/or changelogs following new releases, and preparing architectural/feature proposals based on my analysis of a given codebase to clients, supervisors and stakeholders.</li>\n</ul>\n<p><strong>Projects currently being worked on for fun:</strong></p>\n<ul>\n  <li>Web3 Applications including self-custody cryptocurrency wallets, capable of running in the browser or as a desktop application</li>\n  <li>Familiar with Smart Contract Development with Solidity and Hyperledger Fabric</li>\n  <li>Fascinated by the innovation that is blockchain technology and enjoy exploring its lesser-known applications (peer-to-peer communication, supply-chain/inventory management, healthcare)</li>\n  <li>Automation is a guilty pleasure of mine - automated test frameworks, organizing shell scripts to automate repetitive tasks throughout the work day, or setting up recurring self-notifications in the form of emails, text-messages or chatbots are some examples of hobby projects I like to work on</li>\n</ul>',
                  fieldCD: 'SKC2',
                  dateTimeValue: null,
                },
                { charValue: '', fieldCD: 'RATV', dateTimeValue: null },
                { charValue: '', fieldCD: 'RATT', dateTimeValue: null },
                { charValue: '', fieldCD: 'PTTL', dateTimeValue: null },
              ],
              index: 0,
              id: 'bbec7915-9b82-4e6d-85ab-c3edea2966a0',
              category: null,
            },
          ],
          index: 8,
          name: 'Skills',
          id: '9b6e9864-b4ec-4cb1-b87e-6c2eadcb0fd6',
        },
        {
          sectionTypeCD: 'ACCM',
          paragraphs: [
            {
              docDatas: [
                {
                  charValue:
                    "<ul>\n  <li>Prior to beginning my career in software, I dedicated the majority of my life to athletics and academics</li>\n  <li>Multiple National Record Holder for Mens 15-17 Years between the years of 2005-2008</li>\n  <li>Canadian Men's Swimming Olympic Trials Finalist (Montreal, QC - 2016)</li>\n</ul>",
                  fieldCD: 'FRFM',
                  dateTimeValue: null,
                },
              ],
              index: 0,
              id: '43e79daf-eece-467d-b2a6-3c9d96af8e1a',
              category: null,
            },
          ],
          index: 9,
          name: 'Accomplishments',
          id: 'd84d6d99-0965-481b-8516-4d0e518c7a06',
        },
        {
          sectionTypeCD: 'CUST',
          paragraphs: [
            {
              docDatas: [{ charValue: 'References available upon request.', fieldCD: 'FRFM', dateTimeValue: null }],
              index: 0,
              id: '419075ac-dbd5-44e0-9b09-05e47bb34a4a',
              category: null,
            },
          ],
          index: 10,
          name: 'References',
          id: '6cda13b8-8e87-4ada-be69-cfd4f2c055ff',
        },
        {
          sectionTypeCD: 'TIME',
          paragraphs: [
            {
              docDatas: [
                { charValue: 'Bachelor of Science', fieldCD: 'DGRE', dateTimeValue: null },
                { charValue: 'Kinesiology & Computer Science', fieldCD: 'STUY', dateTimeValue: null },
                { charValue: 'University of Calgary', fieldCD: 'SCHO', dateTimeValue: null },
                { charValue: '', fieldCD: 'FRFM', dateTimeValue: null },
                { charValue: '', fieldCD: 'GRST', dateTimeValue: null },
                { charValue: '', fieldCD: 'GRED', dateTimeValue: null },
              ],
              index: null,
              id: '6486b937-51b4-45c3-b802-0abab185606f',
              category: 'EDUC',
            },
            {
              docDatas: [
                { charValue: '9 2015', fieldCD: 'JSTD', dateTimeValue: '2015-09-05T06:00:00Z' },
                { charValue: '5 2017', fieldCD: 'EDDT', dateTimeValue: '2017-05-05T06:00:00Z' },
                { charValue: 'National Neon Inc.', fieldCD: 'COMP', dateTimeValue: null },
                { charValue: 'Freelance Software Developer', fieldCD: 'JTIT', dateTimeValue: null },
              ],
              index: 1,
              id: '4f52c8d1-07b6-4f77-847d-892073ccd856',
              category: 'EXPR',
            },
            {
              docDatas: [
                { charValue: '5 2017', fieldCD: 'JSTD', dateTimeValue: '2017-05-05T06:00:00Z' },
                { charValue: '5 2018', fieldCD: 'EDDT', dateTimeValue: '2018-05-05T06:00:00Z' },
                { charValue: 'SIA Wealth Management', fieldCD: 'COMP', dateTimeValue: null },
                { charValue: 'Software Develop & Data Analyst', fieldCD: 'JTIT', dateTimeValue: null },
              ],
              index: 2,
              id: 'c25ea87d-c84d-4f93-adc3-2b5ef1a64fd7',
              category: 'EXPR',
            },
            {
              docDatas: [
                { charValue: '5 2018', fieldCD: 'JSTD', dateTimeValue: '2018-05-05T06:00:00Z' },
                { charValue: '5 2022', fieldCD: 'EDDT', dateTimeValue: '2022-05-05T06:00:00Z' },
                { charValue: 'Peloton Computer Enterprises', fieldCD: 'COMP', dateTimeValue: null },
                { charValue: 'Software Engineer', fieldCD: 'JTIT', dateTimeValue: null },
              ],
              index: 3,
              id: 'ddbdaef4-7731-4496-bc99-10c798bfca75',
              category: 'EXPR',
            },
            {
              docDatas: [
                { charValue: '6 2023', fieldCD: 'JSTD', dateTimeValue: '2023-06-05T06:00:00Z' },
                { charValue: 'Current', fieldCD: 'EDDT', dateTimeValue: '2023-12-19T06:17:02.072Z' },
                { charValue: 'FullStack Labs', fieldCD: 'COMP', dateTimeValue: null },
                { charValue: 'Senior Software Engineer', fieldCD: 'JTIT', dateTimeValue: null },
              ],
              index: 4,
              id: '00c353a4-5648-4b4d-b3d3-014c4416a1e9',
              category: 'EXPR',
            },
          ],
          index: 11,
          name: 'Timeline',
          id: 'd466d30f-84f5-4ece-bc07-882fa58c4e19',
        },
      ],
      skinCD: 'PR1L',
      preferences: [
        { docPreferenceTypeCD: 'EMBD', value: '1' },
        { docPreferenceTypeCD: 'RUPL', value: '0' },
        { docPreferenceTypeCD: 'RBRWZ', value: '1' },
        { docPreferenceTypeCD: 'PREF', value: '11' },
        { docPreferenceTypeCD: 'SKMDL', value: '1' },
        { docPreferenceTypeCD: 'POPCT', value: '0' },
        { docPreferenceTypeCD: 'CERTF', value: '0' },
        { docPreferenceTypeCD: 'DASE', value: '0' },
        { docPreferenceTypeCD: 'SYNT', value: '0' },
        { docPreferenceTypeCD: 'SLGI', value: '0' },
        { docPreferenceTypeCD: 'EXPMDL', value: '0' },
        { docPreferenceTypeCD: 'TWEM', value: '86' },
        { docPreferenceTypeCD: 'SSTR', value: 'Senior Software Engineer' },
        { docPreferenceTypeCD: 'DSED', value: '0' },
        { docPreferenceTypeCD: 'FGRYR', value: '1' },
        { docPreferenceTypeCD: 'NEXL', value: '0' },
        { docPreferenceTypeCD: 'STYP', value: 'J' },
        {
          docPreferenceTypeCD: 'BMJS',
          value:
            '{"job":{"CompanyLogoUrl":null,"Source":null,"JobScore":0,"PostalCode":null,"StatusCd":null,"JobTitle":"Senior Software Engineer","Company":"Teradata Corporation","Url":null,"City":null,"State":null,"Country":"US","Date":null,"Description":null,"Id":"56af158f7033ec1f2c05aa0dfd920a5f","ONET":null}}',
        },
      ],
      publishStatusCd: 'PUBS',
    },
  };

  constructor() { }

  getCryptoChains(): mod.CryptofontChain[] {
    return this.cryptoConfigs.chains;
  }

  getCryptoNetworks(): mod.CryptoChain[] {
    this.cryptochains = this.getCryptoNetworks();
    const networks: mod.CryptoChain[] = [];
    this.cryptochains.forEach((chain: mod.CryptofontChain) => {
      networks.push({
        active: false,
        chain: chain.chain,
        id: chain.id,
      });
    });
    return networks;
  }

  setChain(id: number): void {
    const chains = this.getCryptoChains();
    this.cryptonetworks = this.getCryptoNetworks();
    this.cryptochain = chains.find((chain: mod.CryptofontChain) => {
      return chain.id === id;
    });
    this.cryptonetworks.forEach((network: mod.CryptoChain) => {
      if (network.id === this.cryptochain.id) {
        network.active = true;
        this.activenetwork = network;
      } else {
        network.active = false;
      }
    });
  }

  getChain(): mod.CryptoChain {
    if (!this.activenetwork) {
      this.setChain(1);
    }
    return this.activenetwork;
  }
}
