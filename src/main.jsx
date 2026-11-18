import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, Play, ShieldCheck, Sparkles, Users, Wrench, X, Mail, MapPin } from 'lucide-react';
import termsPolicy from '../docs/policies/terms-and-conditions.md?raw';
import privacyPolicy from '../docs/policies/privacy-policy.md?raw';
import commercialPolicy from '../docs/policies/commercial-policy.md?raw';
import helpPolicy from '../docs/policies/help-grievance-account-deletion.md?raw';
import './styles.css';

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href={window.location.pathname === '/' ? '#top' : '/'} aria-label="Avenso home"><img className="brand-logo" src="/android-chrome-192x192.png" alt=""/><span>avenso</span></a>;
}

const appImages = {
  employer: [
    ['/images/employer-01-home.png', 'Employer app home with job actions and current jobs'],
    ['/images/employer-02-create-job.png', 'Employer app: choosing a service while creating a job'],
    ['/images/employer-03-review-job.png', 'Employer app: reviewing job details before posting'],
    ['/images/employer-04-contact-credits.png', 'Employer app: contact credit balance and history'],
    ['/images/employer-05-job-posted.png', 'Employer app: job posted confirmation'],
    ['/images/employer-06-applications.png', 'Employer app: reviewing worker applications'],
    ['/images/employer-07-find-worker.png', 'Employer app: Find Worker screen'],
    ['/images/employer-08-interested-workers.png', 'Employer app: workers who expressed interest'],
    ['/images/employer-09-worker-start-code.png', 'Employer app: worker profile and work start code; demonstration contact and code values are obscured'],
    ['/images/employer-10-my-jobs.png', 'Employer app: jobs dashboard'],
    ['/images/employer-11-connected-request.png', 'Employer app: connected work request'],
    ['/images/employer-12-connections.png', 'Employer app: connections list'],
    ['/images/employer-13-profile.png', 'Employer app profile and account settings'],
  ],
  worker: [
    ['/images/worker-01-home.png', 'Avenso Expert home with online and ongoing work status'],
    ['/images/worker-02-request.png', 'Avenso Expert: incoming concrete work request'],
    ['/images/worker-03-work-status.png', 'Avenso Expert: work status and agreed terms'],
    ['/images/worker-04-find-work.png', 'Avenso Expert: responding to an employer work request'],
    ['/images/worker-05-find-jobs.png', 'Avenso Expert: filtering nearby work opportunities'],
    ['/images/worker-06-opportunity-details.png', 'Avenso Expert: opportunity details and offered terms'],
    ['/images/worker-07-my-jobs.png', 'Avenso Expert: applied jobs and current work'],
  ],
};

function AppScreens({ worker = false, compact = false }) {
  const screens = worker ? appImages.worker : appImages.employer;
  if (compact) return <div className={`app-screens ${worker ? 'screens-worker' : 'screens-employer'}`}>
    {screens.slice(0, 3).map(([src, alt], index) => <img key={src} className={`app-screen screen-${index + 1}`} src={src} alt={alt} />)}
  </div>;
  return <div className={`app-gallery ${worker ? 'gallery-worker' : 'gallery-employer'}`} aria-label={worker ? 'Avenso Expert app screenshots' : 'Avenso employer app screenshots'}>
    {screens.map(([src, alt], index) => <figure className={`app-gallery-item ${src.includes('start-code') ? 'contains-demo-secrets' : ''}`} key={src}><img src={src} alt={alt} loading="lazy"/><figcaption>{String(index + 1).padStart(2, '0')} / {String(screens.length).padStart(2, '0')}</figcaption>{src.includes('start-code') && <><span className="screen-redaction redaction-phone" aria-hidden="true"/><span className="screen-redaction redaction-code" aria-hidden="true"/></>}</figure>)}
  </div>;
}

function SiteFooter() {
  return <footer className="footer"><div className="footer-main"><div className="footer-brand"><Brand light/><p>Making it easier for people<br/>and work to find each other.</p></div><div className="footer-note"><span className="footer-flower">✳</span><p>Good work happens<br/>when people connect.</p><a href="/#top">Back to top ↑</a></div></div><div className="footer-bottom"><span>© 2026 Avenso. Made with care.</span><div><a href="/terms-and-conditions">Terms &amp; Conditions</a><a href="/privacy-policy">Privacy Policy</a><a href="/commercial-policy">Commercial Policy</a><a href="/help-grievance-account-deletion">Help, Grievance &amp; Account Deletion</a></div></div></footer>;
}

function ContactPage() {
  return <><header className="header"><div className="nav-wrap"><Brand/><a className="nav-cta" href="/">Back to home <ArrowUpRight size={16}/></a></div></header><main className="contact-page"><div className="section-kicker">Avenso is here to listen <span>✳</span></div><h1>Let’s talk about<br/><em>making work connect.</em></h1><p>Questions about Avenso, the apps, or working with us? Send us a note and we’ll be glad to hear from you.</p><div className="contact-details"><a href="mailto:napshotpriyanshu@gmail.com"><Mail/><span><small>Email</small>napshotpriyanshu@gmail.com</span><ArrowUpRight/></a><div><MapPin/><span><small>Based in</small>India</span></div></div></main><SiteFooter/></>;
}

const policyDocuments = {
  terms: { title: 'Terms & Conditions', version: 'Version 1.0', effectiveDate: '18 November 2026', applies: 'Avenso Employer App, Avenso Worker App, and related website functions where expressly stated.', source: termsPolicy, start: /^#{0,3}\s*PART A\s+\|/m },
  privacy: { title: 'Privacy Policy', version: 'Version 1.0', effectiveDate: '18 November 2026', applies: 'Employer App, Worker App, and applicable public website/support channels.', source: privacyPolicy, start: /^#{0,3}\s*P01\s{2}/m },
  commercial: { title: 'Commercial Policy', version: 'Version 1.0', effectiveDate: '18 November 2026', applies: 'Primarily Employer App accounts. Worker wage arrangements remain directly between Employer and Worker.', source: commercialPolicy, start: /^#{0,3}\s*C01\s{2}/m },
  help: { title: 'Help, Grievance & Account Deletion', version: 'Version 1.0', effectiveDate: '18 November 2026', applies: 'Avenso app users seeking support, submitting a grievance, or requesting account-deletion assistance.', source: helpPolicy, start: /^#{0,3}\s*H01\s{2}/m },
};

function safeId(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function policyBlocks(document) {
  const text = document.source;
  const startIndex = text.search(document.start);
  const body = (startIndex >= 0 ? text.slice(startIndex) : text)
    .split('\n')
    .filter(line => !/^AVENSO(?:\s+[|•].*Page\s*)?$/.test(line.trim()))
    .join('\n');
  const blocks = [];
  let paragraph = [];
  const flush = () => {
    const content = paragraph.join(' ').trim();
    if (content) blocks.push({ type: 'paragraph', content });
    paragraph = [];
  };
  for (const line of body.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) { flush(); continue; }
    if (/^#{0,3}\s*PART [A-Z]\s+\|/.test(trimmed)) { flush(); blocks.push({ type: 'part', content: trimmed.replace(/^#{0,3}\s*/, '') }); continue; }
    if (/^#{0,3}\s*[AEWPCH]\d{2}\s{2,}/.test(trimmed)) { flush(); blocks.push({ type: 'section', content: trimmed.replace(/^#{0,3}\s*/, '') }); continue; }
    if (/^[-•]\s+/.test(trimmed)) { flush(); blocks.push({ type: 'list-item', content: trimmed.replace(/^[-•]\s+/, '') }); continue; }
    paragraph.push(trimmed);
  }
  flush();
  return blocks.map((block, index) => block.type === 'section' ? { ...block, id: safeId(block.content) } : { ...block, key: index });
}

function PolicyText({ children }) {
  return children.split(/(\{\$\[.*?\]\}|\*\*.*?\*\*)/g).map((part, index) => part.startsWith('{$[') ? <mark className="policy-note-mark" key={index}>{part}</mark> : part.startsWith('**') ? <strong key={index}>{part.slice(2, -2)}</strong> : part);
}

function PolicyPage({ document }) {
  const blocks = policyBlocks(document);
  const sections = blocks.filter(block => block.type === 'section');
  return <><header className="header"><div className="nav-wrap"><Brand/><a className="nav-cta" href="/">Back to home <ArrowUpRight size={16}/></a></div></header><main className="policy-page policy-page-full"><div className="section-kicker">Avenso policies</div><h1>{document.title}</h1><div className="policy-meta"><div><small>Effective from</small><b>{document.effectiveDate}</b></div><div><small>Version</small><b>{document.version}</b></div><div><small>Applies to</small><b>{document.applies}</b></div></div><details className="policy-toc"><summary>Contents <span>{sections.length} sections</span></summary><nav>{sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.content}</a>)}</nav></details><article className="policy-document">{blocks.map((block, index) => {
    if (block.type === 'part') return <h2 className="policy-part" key={index}>{block.content}</h2>;
    if (block.type === 'section') return <h3 id={block.id} key={block.id}>{block.content.replace(/\s{2,}/g, ' ')}</h3>;
    if (block.type === 'list-item') return <p className="policy-list-item" key={index}><span>•</span><PolicyText>{block.content}</PolicyText></p>;
    const subheading = block.content.match(/^(\d+\.\d+)\s+([^.]*)\.\s*(.*)$/);
    if (subheading) return <div className="policy-clause" key={index}><h4>{subheading[1]} · {subheading[2]}</h4>{subheading[3] && <p><PolicyText>{subheading[3]}</PolicyText></p>}</div>;
    return <p key={index}><PolicyText>{block.content}</PolicyText></p>;
  })}</article></main><SiteFooter/></>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(0);
  const faqs = [
    ['What is Avenso?', 'Avenso is building a simpler way for employers and skilled workers to connect. The apps help employers post work requests and find workers, while workers can create a profile and explore suitable opportunities.'],
    ['How do I get started?', 'Choose the app that fits you. Employers can use Avenso to post requests or search for workers. Workers can use Avenso – Expert to set up a work profile and browse opportunities.'],
    ['Is Avenso – Expert free for workers?', 'Yes. The worker app is free to use. Opportunities, offered pay, and job status come from the shared Avenso service.'],
    ['Which languages are available?', 'Both apps currently support English and Hindi. Some names and descriptions entered by users or supplied by the service may appear in their original language.'],
  ];
  const path = window.location.pathname;
  if (path === '/contact') return <ContactPage/>;
  if (path === '/terms-and-conditions') return <PolicyPage document={policyDocuments.terms}/>;
  if (path === '/privacy-policy') return <PolicyPage document={policyDocuments.privacy}/>;
  if (path === '/commercial-policy') return <PolicyPage document={policyDocuments.commercial}/>;
  if (path === '/help-grievance-account-deletion') return <PolicyPage document={policyDocuments.help}/>;
  return <>
    <header className="header" id="top"><div className="nav-wrap"><Brand/><nav className={menuOpen?'nav nav-open':'nav'}><a href="#how-it-works" onClick={()=>setMenuOpen(false)}>How it works</a><a href="#apps" onClick={()=>setMenuOpen(false)}>Our apps</a><a href="#about" onClick={()=>setMenuOpen(false)}>Our story</a><a href="#faq" onClick={()=>setMenuOpen(false)}>FAQs</a><a className="nav-cta" href="/contact" onClick={()=>setMenuOpen(false)}>Contact us <ArrowUpRight size={16}/></a></nav><button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button></div></header>
    <main>
      <section className="hero"><div className="hero-inner"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot"/> A better way to get work done</div><h1>Work finds a way.<br/><em>People find each other.</em></h1><p>Avenso brings people who need work done together with skilled workers ready to do it. Clear, thoughtful connections—right from your phone.</p><div className="hero-actions"><a className="button button-dark" href="#apps">Explore Avenso <ArrowRight size={17}/></a><a className="text-link" href="#how-it-works"><span className="play-icon"><Play size={12} fill="currentColor"/></span> See how it works</a></div><div className="hero-proof"><div className="proof-avatars"><span>A</span><span>R</span><span>M</span><span>+</span></div><span>Made for the people who keep<br/>our homes and neighbourhoods going.</span></div></div>
      <div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="sun-shape"/><div className="hero-sticker sticker-top"><span>✳</span> Local work, made simpler</div><div className="hero-sticker sticker-bottom"><span className="sticker-check"><Check size={12}/></span> A little closer to the right fit</div><div className="hero-phone employer-hero"><AppScreens compact/></div><div className="hero-phone worker-hero"><AppScreens worker compact/></div><div className="hero-spark spark-a">✳</div><div className="hero-spark spark-b">✦</div></div></div><a className="scroll-cue" href="#how-it-works"><ArrowDown size={14}/> Scroll to explore</a></section>
      <section className="trust-strip"><div><span className="trust-icon"><ShieldCheck size={18}/></span><span>Built around clear expectations</span></div><i/><div><span className="trust-icon"><Users size={18}/></span><span>For employers and skilled workers</span></div><i/><div><span className="trust-icon"><Sparkles size={18}/></span><span>Simple by design, useful by nature</span></div></section>
      <section className="intro section" id="how-it-works"><div className="section-kicker">A connection that works both ways <span>✳</span></div><div className="intro-heading"><h2>Good work starts<br/>with a <em>good connection.</em></h2><p>Finding the right person—or the right opportunity—should feel straightforward. Avenso gives both sides a clear place to begin.</p></div><div className="path-cards"><article className="path-card employer-card"><div className="path-top"><span className="path-icon"><Wrench size={19}/></span><span className="path-label">For employers</span><span className="path-number">01</span></div><h3>Get the help<br/>you’re looking for.</h3><p>Share what needs doing, find local workers, and keep your requests organised in one place.</p><a href="#employer-app">Find your app <ArrowRight size={16}/></a><div className="path-illustration"><div className="illustration-circle">⌂</div><span className="ill-star">✳</span><div className="ill-card">Your next project<br/><b>starts here.</b><span>↗</span></div></div></article>
      <article className="path-card worker-card"><div className="path-top"><span className="path-icon"><Sparkles size={19}/></span><span className="path-label">For skilled workers</span><span className="path-number">02</span></div><h3>Your skills deserve<br/>to be seen.</h3><p>Create your work profile, explore opportunities, and manage requests that come your way.</p><a href="#worker-app">Explore opportunities <ArrowRight size={16}/></a><div className="path-illustration worker-illustration"><div className="illustration-circle">✦</div><span className="ill-star">✳</span><div className="ill-card">Good work is<br/><b>within reach.</b><span>↗</span></div></div></article></div></section>
      <section className="apps section" id="apps"><div className="apps-heading"><div><div className="section-kicker">Two apps. One shared purpose.</div><h2>The right tools for<br/><em>your side of the work.</em></h2></div><p>Different experiences, working together through the Avenso service. Choose the one that feels like you.</p></div>
      <article className="app-feature employer-feature" id="employer-app"><div className="app-feature-copy"><span className="app-tag"><span className="tag-dot"/> Avenso for employers</span><h3>Bring your next<br/>to-do to life.</h3><p>Post a work request, search for a local worker, and keep track of your hiring requests as they move forward.</p><ul><li><Check size={15}/> Post the work you need done</li><li><Check size={15}/> Find workers for your requirements</li><li><Check size={15}/> Keep requests and connections together</li></ul><p className="availability-note">App store links will appear here when the apps are published.</p></div><div className="app-feature-visual employer-visual"><div className="visual-blob"/><AppScreens/><span className="app-visual-star">✳</span></div></article>
      <article className="app-feature worker-feature" id="worker-app"><div className="app-feature-visual worker-visual"><div className="visual-blob"/><AppScreens worker/><span className="app-visual-star">✳</span></div><div className="app-feature-copy"><span className="app-tag"><span className="tag-dot tag-amber"/> Avenso – Expert</span><h3>Let your skills<br/>open new doors.</h3><p>Show what you do best, find opportunities nearby, and keep up with work requests from one simple app.</p><ul><li><Check size={15}/> Build a profile around your skills</li><li><Check size={15}/> Explore work that fits your preferences</li><li><Check size={15}/> Review requests and offered terms</li></ul><p className="availability-note">Free for workers. App store links will appear here when available.</p></div></article></section>
      <section className="manifesto"><div className="manifesto-inner"><div className="manifesto-mark">“</div><div><div className="section-kicker">A belief we’re building on</div><blockquote>When people can find each other with a little more clarity, <em>good things get done.</em></blockquote><p>That’s the idea behind Avenso. A more approachable way to bring local work and skilled people together.</p></div><span className="manifesto-spark">✳</span></div></section>
      <section className="about section" id="about"><div className="about-art"><div className="about-circle founder-portrait"><div className="founder-photo-wrap"><img className="founder-photo" src="/images/founder-priyanshu-narwaria.png" alt="Priyanshu Narwaria, founder of Avenso"/></div><div className="about-sun">✳</div></div><div className="about-doodle">✳</div></div><div className="about-copy"><div className="section-kicker">Meet our founder</div><h2>Priyanshu Narwaria<br/><em>Founder, Avenso</em></h2><p className="founder-education">B.Tech graduate in Electronics and Communication Engineering from NIT Kurukshetra.</p><h3 className="vision-title">Vision &amp; inspiration</h3><p className="founder-vision-lede">Make skill easier to see. Make work easier to understand. Bring people together with clarity, dignity, and choice.</p><p>Inspired by the skilled people who keep everyday life moving, Priyanshu is building Avenso to close the distance between a person who needs work done and a worker ready to do it. The apps give each side a clear place to describe what they need, show what they can do, and decide whether an opportunity fits.</p></div></section>
      <section className="faq section" id="faq"><div className="faq-heading"><div className="section-kicker">A few things you might be wondering</div><h2>Good questions.<br/><em>Clear answers.</em></h2><p>Still curious? We’re happy to talk it through.</p><a className="text-link" href="#contact">Get in touch <ArrowRight size={16}/></a></div><div className="faq-list">{faqs.map(([q,a],i)=><article className={`faq-item ${openFaq===i?'faq-active':''}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span className="faq-index">0{i+1}</span><b>{q}</b><ChevronDown size={18}/></button>{openFaq===i&&<p>{a}</p>}</article>)}</div></section>
      <section className="contact" id="contact"><div className="contact-inner"><div><div className="section-kicker">Let’s start a conversation <span>✳</span></div><h2>Have a question?<br/><em>We’re all ears.</em></h2><p>Whether you’re looking for workers, looking for work, or just want to know more—we’d love to hear from you.</p></div><a className="contact-button" href="/contact"><span>Contact us</span><span className="contact-arrow"><ArrowUpRight size={22}/></span><small>View contact details</small></a><div className="contact-orbit"/></div></section>
    </main>
    <SiteFooter/>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
