# Privacy Policy

*DOC-02  |  VERSION 1.0*

**AVENSO**

Applies to: Employer App, Worker App and applicable public website/support channels.

## Contents

P01 Introduction  /  P02 Personal Data Collected

P03 Role-specific Data  /  P04 Sensitive and Restricted Information

P05 Device and Technical Data  /  P06 How We Collect Data

P07 Purpose of Data Processing  /  P08 Data Sharing and Disclosure

P09 Location and Visibility  /  P10 Storage, Security and Retention

P11 User Rights and Consent  /  P12 Account Deletion

P13 Third-Party Services  /  P14 Children and Age Restrictions

P15 International Data Transfers  /  P16 Changes and Contact

Document owner: Priyanshu Narwaria  |  Effective from: 18 November 2026

### P01  Introduction

Avenso is an India-focused digital marketplace through which individuals, contractors and firms may discover workers, publish work opportunities and connect with one another. This Privacy Policy explains how personal information is handled in the Avenso Employer App, Worker App and any Avenso-operated public website or support channel (together, the “Services”).

Avenso is operated by Priyanshu Narwaria, an individual proprietor based in Gwalior, Madhya Pradesh, India. Correspondence address: . The operator is responsible for this policy and the handling of personal data through the Services. 

This policy is intended for adults aged 18 or above in India. It should be read alongside Avenso’s Terms & Conditions, Subscription, Credits, Payments, Cancellation & Refund Policy, and Help, Grievance & Account Deletion page. Effective from 18 November 2026; version: 1.0.

### P02  Personal Data Collected

We collect information users submit to create and operate accounts, such as name, mobile number, profile photograph or selfie, account type, preferred language and other profile fields made available in the relevant app.

Workers may provide skills, categories, experience, work preferences, expected wages, availability and approximate or selected work locations. Employers may provide personal or business profile details, work requirements and worksite locations.

OTP challenges, login events and security-related account information are processed to authenticate users. An OTP verifies control of a phone number; it is not a government identity check.

### P03  Role-specific Data

For employers, we may process employer account classification (Individual, Contractor or Firm), job categories, job descriptions, worker quantities, offered wages, schedules, work locations, public job postings, direct search requests, worker selections, connection history and credit ledger entries.

For workers, we may process profile information, skills and experience, wage expectations, availability, job interests and applications, responses to work requests, connection history and recorded work events.

Where parties choose to use optional start-work or end-work OTP verification, we may record the related verification status, event time, participating account references and associated work engagement. These records support a reported work timeline but do not independently prove work quality or payment.

Optional start and completion OTP verification is described for the Find Worker flow; the Create Job flow does not use this OTP feature.

### P04  Sensitive and Restricted Information

Worker eligibility review currently involves an uploaded selfie and internal administrator assessment of whether the image appears to contain a genuine face. This is a manual profile review, not third-party identity verification, a criminal-background check or verification against government records.

We may handle precise location coordinates, worksite addresses, contact details, verification outcomes and complaint materials, all of which require careful access controls. Avenso does not maintain government identity-document records or perform government identity verification.

Internal administrators review uploaded selfies and record decisions and reasons. No external identity-verification provider was identified in the reviewed code.

Avenso does not collect or maintain government identity-document records as part of worker registration or profile review.

### P05  Device and Technical Data

When users access the Services, technical records may include device or app identifiers, app version, operating system, IP address, access times, authentication events, error logs and diagnostic information, to the extent collected by the deployed systems.

Where users enable notifications, Avenso may process device push tokens and notification-delivery information. Location and notification permissions are controlled through the relevant device settings, subject to the functionality needed for specific features.

No analytics, crash-reporting or marketing SDK was identified in the reviewed app/web dependencies.

### P06  How We Collect Data

Information is collected directly when a user registers, completes a profile, uploads a selfie, creates a job, expresses interest, sends a request, contacts support or otherwise interacts with Avenso.

Information may also be generated by service activity, such as account authentication, worker matching, search filters, connection creation, credit transactions, notification delivery and optional OTP work events.

We may receive limited information from service providers used to deliver SMS, hosting, maps or notifications. We do not assume third-party identity verification exists in the current launch model.

User data comes mainly from user input and app activity. External sources/services identified in code include MSG91 for OTP SMS, Google Maps and device-native geocoding, Firebase Cloud Messaging, and Google Cloud Storage. Administrators review submitted records and may adjust credit ledgers with recorded reasons; no payment-evidence import was identified.

### P07  Purpose of Data Processing

We use personal information to register and authenticate accounts; display relevant profiles and work opportunities; match employers and workers using category, availability and location; deliver work requests; establish eligible connections; and maintain service and security records.

We also use data to support administrator profile review, detect misuse, operate credit balances, provide notifications, respond to complaints, investigate suspected fraud, maintain platform integrity and meet applicable legal obligations.

Optional OTP work records may be used to show reported start and completion events and may assist in reviewing a dispute. Avenso does not use these events to guarantee wages, quality or completion.

Automated operational matching filters workers by factors such as skills, availability, review status and location, and may expand search radius. This does not itself make a final hiring decision; users make work decisions and administrators make profile-review decisions. No marketing, targeted-advertising or behavioural-profiling feature was identified in the reviewed code.

### P08  Data Sharing and Disclosure

Employers searching for workers may receive an eligible worker’s name, skills, experience, biography, verification status, distance and approved selfie, but not exact worker coordinates or saved address. A worker receiving a direct request may see the employer display name, location summary and offered work terms, without phone numbers in the request list. Employers reviewing public-job applicants may see the applicant’s name, skills, experience, verification status and approved selfie. Contact disclosure depends on the particular workflow as described below.

In an active, unexpired direct connection, the connection-detail service can disclose both parties’ phone numbers to each other. In the public-job application flow, the worker’s phone number is shared with the employer only after the worker affirmatively expresses interest in that job. This does not automatically provide the worker with the employer’s phone number.

Authorised administrators may access profile information and submitted selfies to perform review, support and safety functions. We may disclose limited information to hosting, SMS, map, push-notification and other processors; to competent authorities when legally required; or to protect lawful rights and safety.


### P09  Location and Visibility

Location data supports nearby job discovery, worker search, worksite selection and distance matching. Workers marked available and granting location permission may send GPS fixes. On Android, background location updates are supported through a foreground service with an ongoing notification; on iOS, the reviewed lifecycle stops sharing when the app leaves the foreground. Sharing stops when worker availability is turned off. These behaviours depend on permissions, device state and deployed app version.

Android location updates are requested at approximately 20-second intervals or a 25-metre movement threshold, with application-side sending potentially dependent on roughly 50 metres of movement; no fixed upload interval is guaranteed. The backend stores saved worker coordinates in PostgreSQL and temporary full-precision live coordinates in Redis for matching (approximately three minutes of freshness and four minutes of metadata TTL). Employers are shown distance rather than exact worker coordinates in worker search results. Job/worksite coordinates may be shown in job details.

Search radii vary by feature: direct worker search begins at 10 km, may expand by 5 km every 10 minutes and caps at 25 km; worker travel preference defaults to 10 km; job radius defaults to 20 km and is configurable within API limits.

### P10  Storage, Security and Retention

The reviewed backend uses authenticated administrator routes, admin-role checks and a production server-side phone allowlist for administrator eligibility. Verification decisions are logged with reviewer, subject, reason, status and timestamp. Push tokens are encrypted in the application database. No comprehensive audit of every administrator read was identified.

OTP challenges expire after approximately five minutes and OTP rate-limit counters after approximately fifteen minutes. Temporary live-location records expire in Redis as described above. The reviewed code does not establish general deletion schedules for saved profiles, locations, sessions, jobs, connections or credit ledgers. Previous and current selfie submissions may be retained for review history. 

After eligible account deletion, Avenso intends to remove profile, location, media and session information and anonymise account references in retained transaction or work records, subject to legal and operational exceptions. Anonymisation must be tested so that the remaining information is not readily attributable to the former user.


### P11  User Rights and Consent

Subject to applicable law and verification of the requester, users may request information about personal data processed by Avenso, correction or updating of inaccurate details, and erasure where applicable. Users may also submit privacy grievances and exercise other rights available under applicable Indian law.

Where processing relies on consent, users should be provided clear, purpose-specific information and a practicable means to withdraw consent. Withdrawal may affect features that require the relevant information, but does not automatically undo processing already lawfully carried out.

Avenso should maintain appropriate records of privacy notices, consent requests and changes, and distinguish acceptance of contractual Terms from any separate consent required for personal-data processing.

### P12  Account Deletion

Avenso provides for account deletion through its app workflow, subject to release verification in both Employer and Worker apps. The backend blocks deletion while certain work activity remains unresolved. 

Avenso may need to verify account control and assess unresolved jobs, engagements, disputes or lawful record-keeping obligations before completing deletion. The user should be informed if deletion is delayed or restricted and what action is required.

On eligible deletion, the backend attempts to remove profile, location and session data and anonymise the user while retaining some job and credit-ledger history. It also attempts to delete selfie and job-photo storage objects. Unused credits expire on voluntary deletion subject to applicable law.


### P13  Third-Party Services

Providers identified in reviewed code include MSG91 (OTP SMS), Google Maps Platform and native device geocoding (maps and address lookup), Google Cloud Storage (worker selfies and job photos), Firebase Cloud Messaging (push delivery), and PostgreSQL/Redis infrastructure (persistent and temporary storage). Providers may receive limited personal or technical data needed for those functions.

Avenso currently describes purchases of credits and subscriptions as administrator-assisted; this policy does not assume an integrated payment gateway or app-store checkout exists.

Provider information: MSG91 — https://msg91.com/privacy-policy ; Google — https://policies.google.com/privacy ; Google Cloud — https://cloud.google.com/terms/cloud-privacy-notice ; Firebase — https://firebase.google.com/support/privacy/ . No payment gateway or analytics/crash/marketing provider was identified in the reviewed code.

### P14  Children and Age Restrictions

Avenso is intended for users aged 18 years or older. People under 18 must not register as employers or workers or use the Services as account holders.

If Avenso becomes aware that an account was created by a person below the minimum age, it may restrict the account and take appropriate steps regarding the information involved, consistent with applicable law.

### P15  International Data Transfers

Avenso serves users in India, but the reviewed code does not establish that all data processing takes place in India. Google/Firebase services may involve global infrastructure, depending on project settings and service type. MSG91 and actual database/Redis hosting arrangements also require confirmation. Avenso will evaluate applicable transfer restrictions and safeguards before making any India-only processing representation.

Any transfer or access from another jurisdiction must be assessed against applicable Indian law, government restrictions and contractual safeguards before deployment or publication of definitive claims.


### P16  Changes and Contact

Avenso may update this Privacy Policy to reflect changes in the Services, operational practices or legal requirements. The updated policy should carry a new effective date and be made accessible in both apps and on the public legal page. Material changes should be communicated through appropriate app notices or other available channels.

For privacy questions, correction requests, complaints or deletion assistance, contact **support@avenso.in**. Correspondence location: Gwalior, Madhya Pradesh, India. 

The Privacy Policy, Terms & Conditions, and Help, Grievance & Account Deletion page will be available through their published legal-page links. 

Terms acceptance is intended to capture the checkbox, version, language viewed and any renewed acceptance. 
