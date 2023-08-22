/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/newComponents/home/footer";
import React from "react";

const TermsAndConditions = () => {
  const conditions = [
    {
      name: "Acceptance",
      link: "#acceptance",
      id: "acceptance",
      paragraphs: [
        "Enders Gate and any services available within the application (the App) is operated by 5HeadGames LLC (we, our or us). It is available at: Endersgate.one (the website) and may be available through other addresses or channels. By creating an Account and/or using the App you: warrant to us that you have reviewed these Terms and Conditions, including our Privacy Policy (available on the website) (Terms), with your parent or legal guardian (if you are under 18 years old), and you understand them; warrant to us that you have the legal capacity to enter into a legally binding agreement with us or (if you are under 18 years old) you have your parent’s or legal guardian’s permission to access and use the website and they have agreed to the Terms on your behalf; and agree to use the website in accordance with the Terms. Please read the Terms carefully and immediately cease using the website if you do not agree to them. You must not create an account and/or place an order for products through the website unless you are at least 13 years old. If you are a parent or legal guardian permitting a person who is at least 13 years old but under 18 years old (a Minor) to create an account and/or use the Website, you agree to: (i) supervise the Minor’s use of the Website and their account; (ii) assume all risks associated with, and liabilities resulting from, the Minor’s use of the Website and their account; (iii) ensure that the content on the Website is suitable for the Minor; (iv) ensure all information submitted to us by the Minor is accurate; and (v) provide the consents, representations and warranties contained in the Terms on the Minor’s behalf.",
      ],
    },
    {
      name: "Accounts",
      link: "#accounts",
      id: "accounts",
      paragraphs: [
        "In order to use the App and the Website, you are required to create an account. You will be required to provide your wallet address when creating your Account. You must ensure any personal information being provided to us is up-to-date. ",
      ],
    },
    {
      name: "Using the App",
      link: "#using_app",
      id: "using_app",
      paragraphs: [
        "We grant you a non-exclusive, non-transferable (except with our written permission), non-sublicensable (except as otherwise permitted under these Terms), personal and revocable license to access and use the services available on the App and the Website. Transactions that take place on the App are managed and confirmed via the blockchain. You understand that your wallet address will be publicly visible whenever you engage in a transaction on the App and or Website. You may be required to download, install or use third party services (such as Wallet apps, Web browsers, and blockchain networks) in order to use the App or Website, as set out on the Website. You acknowledge and agree that you may not be able to use all features of the App in the event that you do not use these third party services.",
      ],
    },
    {
      name: "Banned Behavior",
      link: "#banned_behavior",
      id: "banned_behavior",
      paragraphs: [
        "You agree not to, or to authorize any third party on your behalf to, interact in the App and or Website in a manner that is contrary to any rules or guidelines we may impose from time to time, or in a way that we determine, in our absolute discretion, to be cheating, farming, or otherwise acting in a manner that may negatively impact the enjoyment of others in connection with the App. This includes, without limitation, using third party software (by injecting the software into the App and or Website) to give you or another user(s) an unfair advantage, or to automate aspects of gameplay, creating and using multiple Accounts, sharing your Account, participating in win trading with other users and otherwise acting contrary to the spirit of the App. For clarity, acting contrary to this clause will be considered a material breach of these Terms and may result in suspension and/or termination as set out below.",
      ],
    },
    {
      name: "Referrals",
      link: "#referrals",
      id: "referrals",
      paragraphs: [
        "From time to time, we may offer incentives to you to refer the App to others (Referral Program). If you participate in a Referral Program, you agree not to act in any way which allows you to fraudulently, inappropriately or unfairly receive the benefits of a Referral Program. This includes, without limitation, sending referral links to yourself and/or creating multiple Accounts. For clarity, acting contrary to this clause will be considered a material breach of these Terms and may result in suspension and/or termination as set out below. Additionally, if you breach this clause, we may withhold any referral rewards relating to a Referral Program.",
      ],
    },
    {
      name: "Purchasing Items",
      link: "#purchasing_items",
      id: "purchasing_items",
      paragraphs: [
        "You may purchase Items from us (including Digital Cards, Card Packs and other Items) as set out on the Website and the App. Any purchase from us through the Website or the App is an offer by you to purchase the relevant Item for the price listed (including any charges and taxes) at the time you purchase the Digital Cards, Card Packs, and or other Items. Each Card Pack will contain a set of 5 probabilistically random Cards. The probabilities of receiving a particular rarity and version are defined by us and are roughly described in that pack’s Buyer’s Guide. The transaction for the purchase of Card Packs makes use of the 5HeadGames platform as well as the Blockchain for the transfer of funds. The Card Pack creation process is developed and managed by 5HeadGames and we make best effort to meet the probabilistic odds as described in that pack's Buyer's Guide. Each purchase results in a separate binding agreement between you and us for the supply of the Item in accordance with the Terms. It is your responsibility to check the purchase details, including selected Items and pricing, before you place a transaction through the Website. When you purchase an Item and your transaction has completed, we will provide you with transaction details, which may include the Enders Gate transaction address and a description of what was ordered. ",
      ],
    },
    {
      name: "Price and Payments",
      link: "#price_payments",
      id: "price_payments",
      paragraphs: [
        "You must pay us the purchase price of each Item you select as set out on the App or Website (plus any applicable taxes and charges (including any Transaction Fees)) (the Price) in accordance with this clause. You must not pay, or attempt to pay, the Price by fraudulent or unlawful means. You must pay the Price using one of the payment methods set out on the Website, which may include Crypto and credit card payments. Any financial transaction you engage in through the App or the Website will be conducted solely through the (Harmony) (Polygon) network(s). We have no insight into or ability to control these transactions (including reversing transactions). You are responsible for paying any relevant transaction fees incurred in relation to the payment method you select when transacting on the App or Website (Transaction Fees). The Transaction Fees will be set out on the App or Website, and may include without limitation a (Harmony) (Polygon) transaction fee or a credit card transaction fee. You are responsible for determining what and paying for, if any, taxes apply to the transactions that take place on the App or Website.",
      ],
    },
    {
      name: "Communication",
      link: "#communication",
      id: "communication",
      paragraphs: [
        "The App may facilitate a Discord communication server, in-game communication and other forums on which you are able to communicate with other App participants. We ask you to limit your discussions to topics which are relevant to the App. You acknowledge and agree that you are not permitted to send any communication which contains foul language, illegal material, defamatory comments, business advertisements, spam, religious debates, comments which incite fear, and/or any form of abuse, insults, racism or personal attacks. We reserve the right to remove any communication which we, in our sole discretion, deem to be inappropriate, and prevent you from further participating in the communication methods outlined above.",
      ],
    },
    {
      name: "Marketplace",
      link: "#marketplace",
      id: "marketplace",
      paragraphs: [
        "5HeadGames provides a marketplace for you to buy and sell Items purchased or earned through the App or Website, in addition to Third Party Items (the Marketplace). If you wish to sell an Item or Third Party Item, you must create a listing with an accurate and complete description of the Item offered for sale (including the price you are selling the Item for) (Listing). If you wish to buy an Item or Third Party Items, you must follow the instructions provided on the App or Website to purchase the Items set out in the Listing, and pay the purchase price indicated by the seller. You understand that the App provides an introductory platform only, and that our responsibilities are limited to facilitating the user functionality and availability of the App. We are not a reseller of Items. We are not a party to any agreement entered into between a buyer and a seller. We have no control over the conduct of buyers, sellers and any other users of the App. We accept no liability for any aspect of the buyer and seller interaction, including but not limited to the description of Items offered for sale and the delivery of the Item or Third Party Items. We set out a number of payment methods on the Marketplace. You may use any of these payment methods to complete a transaction on the Marketplace. We retain a portion of the price paid by the buyer as set out on the App or Website. ",
      ],
    },
    {
      name: "Promotional Discount Codes",
      link: "#promotional_discount_codes",
      id: "promotional_discount_codes",
      paragraphs: [
        "We may from time to time issue promotional discount codes for certain Items. To claim the discount, you must enter the promotional discount code at the time of purchasing the Item through the App or Website. The conditions of use relating to promotional discount codes will be specified on the App or Website at the time they are issued.",
      ],
    },
    {
      name: "Restrictions",
      link: "#restrictions",
      id: "restrictions",
      paragraphs: [
        "You must not access or use the App except as permitted by these Terms and you must not and must not permit any other person to: use the App in any way which is in breach of any applicable Laws or which infringes any person's rights, including Intellectual Property rights; use the App to transmit, publish or communicate material that is defamatory, offensive, abusive, indecent, menacing or unwanted; use the App in any way that damages, interferes with or interrupts the supply of the App; introduce malicious programs into our hardware and software, including viruses, worms, trojan horses and e-mail bombs; use the App to carry out security breaches or disruptions of a network. Security breaches include accessing data where you are not the intended recipient or logging into a server or account that you are not expressly authorized to access or corrupting any data (including network sniffing/monitoring, pinged floods, packet spoofing, denial of service and forged routing information for malicious purposes); use any program/script/command, or send messages of any kind, with the intent to interfere with, or disable, any person’s use of the App; or to send any form of harassment via email, or any other form of messaging (such as the messaging features within the App), whether through language, frequency, or size of messages or use the App in breach of any person’s privacy (such as by way of identity theft or “phishing”). Items are only to be earned, purchased or sold for the purpose of genuinely interacting with the App. You must not obtain or sell Items for investment purposes.",
      ],
    },
    {
      name: "Third Parties",
      link: "#third_parties",
      id: "third_parties",
      paragraphs: [
        "You acknowledge and agree that: the provision of the App may be contingent on, or impacted by, third parties, other customers’ use of our services, suppliers, other subcontractors (Third Party Inputs); and despite anything to the contrary, to the maximum extent permitted by law, we will not be responsible, and will have no Liability, for any default or breach of these Terms or law, if such default or breach was caused or contributed to by any Third Party Inputs. For clarity, Third Party Inputs may include Metamask, Web Browsers and the (Harmony) (Polygon) network. This clause will survive the termination or expiry of these Terms. Intellectual Property Rights Our Intellectual Property All Intellectual Property in the App and that Intellectual Property developed, adapted, modified or created by us or our Personnel (including in connection with these Terms) is and will remain owned exclusively by us or our third party service providers. You must not, without our prior written consent: copy or use, in whole or in part, any of our Intellectual Property; reproduce, retransmit, distribute, disseminate, sell, publish, broadcast or circulate any of our Intellectual Property to any third party; reverse assemble, reverse engineer, reverse compile or enhance the App; breach any Intellectual Property Rights connected with the App, including altering or modifying any of our Intellectual Property; cause any of any of our Intellectual Property to be framed or embedded in another Website; or creating derivative works from any of our Intellectual Property; resell, assign, transfer, distribute or make available the App to third parties; “frame”, “mirror” or serve any of the App on any web server or other computer server over the Internet or any other network; alter, remove or tamper with any trademarks, any patent or copyright notices, any confidentiality legend or notice, any numbers or any other means of identification used on or in relation to the App or Website; Notwithstanding anything to the contrary in these Terms or elsewhere, we may monitor, analyse and compile statistical and performance information based on and/or related to your use of the App or Website, in an aggregated and anonymized format (Analytics). You agree that we may make such Analytics publicly available, provided that it: does not contain identifying information; is not compiled using a sample size small enough to make the underlying data identifiable. We and/or our licensors own all right, title and interest in and to the Analytics and all related software, technology, documentation and content provided in connection with the Analytics, including all Intellectual Property rights in the foregoing.",
      ],
    },
    {
      name: "Your Intellectual Property",
      link: "#you_intellectual_property",
      id: "you_intellectual_property",
      paragraphs: [
        "As between you and us, (i) all Data is and remains your property, and (ii) you retain any and all rights, title and interest in and to the Data, including all copies, modifications, extensions and derivative works thereof. License: You grant us a limited license to copy, transmit, store and back-up or otherwise access the Data during the Term solely to: supply the App; diagnose problems with the App; enhance and otherwise modify the App; develop other services, provided we de-identify the Data; and as reasonably required to perform our obligations under these Terms. General: You must, at all times, ensure the integrity of the Data and that your use of the Data is compliant with all Laws. You represent and warrant that: (i) you have obtained all necessary rights, releases and permissions to provide all your Data to us and to grant the rights granted to us in these Terms; and (ii) the Data and its transfer to and use by us, as authorized by you under these Terms do not violate any Laws (including those relating to export control and electronic communications) or rights of any third party, including any Intellectual Property rights, rights of privacy, or rights of publicity, and any use, collection and disclosure authorized in these Terms is not inconsistent with the terms of any applicable privacy policies. We assume no responsibility or Liability for the Data. You are solely responsible for the Data and the consequences of using, disclosing, storing or transmitting it. This clause will survive termination or expiry of these Terms.",
      ],
    },
    {
      name: "Liability",
      link: "#liability",
      id: "liability",
      paragraphs: [
        "Despite anything to the contrary, to the maximum extent permitted by law: our maximum aggregate Liability arising from or in connection with these Terms will be limited to, and must not exceed the portion of the Price paid by you to us for the Items the subject of the relevant claim; we will not be liable to you in respect of any transactions that take place on the Marketplace; and we will not be liable to you for any Consequential Loss, whether under statute, contract, equity, tort (including negligence), indemnity or otherwise. Despite anything to the contrary, to the maximum extent permitted by law, we will have no Liability, and you waive and release us from and against, all Liability (whether under statute, contract, negligence or other tort, indemnity, or otherwise) arising from or in connection with any: loss of, or damage to, any property or any injury to or loss to any person; failure or delay in providing the App; breach of these Terms or any Laws; or the Computing Environment, where caused or contributed to by any: (i) event outside our reasonable control; (ii) a fault, defect, error or omission in your Computing Environment or Data; or (iii) act or omission of you, your related parties, Authorized Users, Personnel or any third party (including customers, end users, suppliers, providers or subcontractors), and, in any event, any error, omission or lack of suitability (or the absence of, or reduction in, any anticipated result, outcome or benefit) with respect to the App or Website. To the maximum extent permitted by law, you indemnify and continue to indemnify us against all Liability we suffer or incur arising from or as a consequence of a breach of Intellectual Property Rights and/or your use of the App contrary to these Terms. Certain legislation, including the Law on consumer protection in Bosnia and Herzegovina, and similar consumer protection laws and regulations may confer you with rights, warranties, guarantees and remedies relating to the App which cannot be excluded, restricted or modified (Consumer Rights). Nothing in these Terms attempts to exclude, restrict or modify your Consumer Rights as a consumer under the ACL. Any and all other warranties or conditions which are not guaranteed by the ACL are expressly excluded where permitted, except to the extent such warranties and conditions are fully expressed in these Terms. You acknowledge and agree that: you use the App and any associated programs and files at your own risk; the technical processing and transmission of the App, including your Data, may be transferred unencrypted and involve (i) transmissions over various networks; and (ii) changes to conform and adapt to technical requirements of connecting networks or devices; we may use third party service providers to host the App. If the providers of third party applications or services cease to make their services or programs available on reasonable terms, we may cease providing any affected features; the App may use third party products, facilities or services. We do not make any warranty or representation in respect of the third party products, facilities or services; we do not guarantee that any file or program available for download and/or execution from or via the App is free from viruses or other conditions which could damage or interfere with Data, hardware or software with which it might be used; we are not responsible for the integrity or existence of any Data on the Computing Environment, network or any device controlled by you; and we may pursue any available equitable or other remedy against you if you breach any provision of these Terms. This clause will survive termination or expiry of these Terms.",
      ],
    },
    {
      name: "Termination",
      link: "#termination",
      id: "termination",
      paragraphs: [
        "You may terminate these Terms at any time by canceling your Account and ceasing to use the App. If you breach these Terms, we may immediately suspend access to your Account. You will have an opportunity to appeal the suspension by contacting us. We may also terminate these Terms if you have breached a material term of these Terms and have failed to remedy such breach within 5 Business Days of receiving notice to do so, subject to any other express right of termination. On termination of these Terms, you may no longer have access to the App and information that you have posted to the App or in relation to your Account (including any Items). The accrued rights, obligations and remedies of the Parties are not affected by the termination of these Terms. This clause will survive termination or expiry of these Terms.",
      ],
    },
    {
      name: "General",
      link: "#general",
      id: "general",
      paragraphs: [
        "Functionality: We reserve the right at any time and from time to time to change or remove features of the App. ",
        "Disputes: Any dispute, controversy or claim arising out of, relating to or in connection with these Terms, including any question regarding its existence, validity or termination, shall be resolved by arbitration in accordance with the ACICA Arbitration Rules. The seat of arbitration shall be Sarajevo, Bosnia and Herzegovina. The language of the arbitration shall be English. The number of arbitrators shall be one. ",
        " Notices: We may provide you with notices (including, without limitation those regarding changes to these Terms) by email, or postings on the App. You may provide us with notices through the App. ",
        "Waiver: Any failure or delay by a Party in exercising a power or right (either wholly or partly) in relation to these Terms does not operate as a waiver or prevent a Party from exercising that power or right or any other power or right. A waiver must be in writing. ",
        "Severance: If a provision of these Terms is held to be void, invalid, illegal or unenforceable, that provision is to be read down as narrowly as necessary to allow it to be valid or enforceable, failing which, that provision (or that part of that provision) will be severed from these Terms without affecting the validity or enforceability of the remainder of that provision or the other provisions. ",
        "Assignment: We may assign, transfer or otherwise deal with all or any of its rights or obligations under these Terms without your prior written consent. ",
        "Amendment: We may, at any time and at our discretion, vary these Terms by publishing the varied terms on the Website or App. We recommend you check our App and Website regularly to ensure you are aware of the current Terms. ",
        "Governing law: These Terms are governed by the laws of Sarajevo, Bosnia and Herzegovina. You irrevocably and unconditionally submit to the exclusive jurisdiction of the courts operating in Sarajevo and any courts entitled to hear appeals from those courts and waive any rights to object to proceedings being brought in those courts. The App may be accessed in Bosnia and Herzegovina as well as overseas. We make no representation that the App complies with the laws of any country outside of Bosnia and Herzegovina. If you access the App from outside Bosnia and Herzegovina, you do so at your own risk and are responsible for complying with the laws in the place you access the App. This clause will survive termination or expiry of these Terms.",
      ],
    },
    {
      name: "Definitions",
      link: "#definitions",
      id: "definitions",
      paragraphs: [
        "Unless the context otherwise requires, the following words will mean: ACL has the meaning given above; Card Pack means a collection of 5 Digital Cards (or another number of Cards as set out on the Website), created in accordance with these Terms; Business Day means a day which is not a Saturday, Sunday or bank or public holiday in Sarajevo, Bosnia and Herzegovina. Computing Environment means your computing environment including all hardware, software, information technology and telecommunications services; Consequential Loss includes any indirect, incidental or consequential loss, loss of profits, revenue, production, opportunity, access to markets, goodwill, reputation, use or any remote, abnormal or unforeseeable loss, loss of use and/or loss or corruption of data or any loss or damage relating to business interruption, or otherwise, suffered or incurred by a person, arising out of or in connection with these Terms (whether involving a third party or a Party to these Terms or otherwise); Data means the information, documents and other data inputted by you stored by the App or on the Website or generated by the App as a result of your use of the App; Intellectual Property includes any and all intellectual and industrial property rights throughout the world, whether subsisting now or in the future and includes all copyright and analogous rights, all rights in relation to inventions (including patent rights), registered and unregistered trademarks, designs (whether or not registered or registrable), circuit layouts, trade names, trade secrets, business names, customer names or internet domain names; Our Intellectual Property includes the visual interfaces, graphics (including without limitation, all art and drawings associated with them), designs, systems, methods, information, computer code, software, services, “look and feel”, organisation, compilation of the content, code, data and all other elements of the App and Website; Item means Digital Cards, Card Packs, and any other digital items (including cosmetic items) that are available for use within the App; Laws means acts, ordinances, regulations, rules, code and by-laws of Bosnia and Herzegovina; Liability means any loss, liability, cost, payment, damages, debt or expense (including reasonable legal fees); Party means either party to these Terms; Personnel means, in relation to a Party, the officers, employees, contractors, sub-contractors and agents of that Party; Statutory Rights has the meaning given above; and Third Party Items means digital items for third party applications that have been approved for sale by us.",
      ],
    },
    {
      name: "Interpretation",
      link: "#interpretation",
      id: "interpretation",
      paragraphs: [
        'In these Terms, unless the context otherwise requires: the singular includes the plural and vice versa; headings are for convenience only and do not affect interpretation; a reference to these Terms or any other document includes the document, all schedules and all annexures as novated, amended, supplemented, varied or replaced from time to time; if any act which must be done under these Terms is to be done on a day that is not a Business Day then the act must be done on or by the next Business Day; the word "month" means calendar month and the word "year" means 12 months; the words "in writing" include any communication sent by letter or email or any other form of communication capable of being read by the recipient; a reference to any legislation or law includes subordinate legislation or law and all amendments, consolidations, replacements or re-enactments from time to time; includes and similar words mean includes without limitation; a reference to $ or dollars refers to the currency of Bosnia and Herzegovina from time to time; a reference to any agency or body, if that agency or body ceases to exist or is reconstituted, renamed or replaced or has its powers or functions removed (defunct body), means the agency or body that performs most closely the functions of the defunct body; and no clause will be interpreted to the disadvantage of a Party merely because that Party drafted the clause or would otherwise benefit from it.',
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-[#171717] py-16 2xl:px-48 xl:px-44 md:px-40 sm:px-28 px-2 flex flex-col items-center justify-center">
      <div className="flex flex-col md:w-2/3 sm:w-4/5 w-full items-center justify-center">
        <img src="/assets/5headgames.svg" className="h-24 mb-10" alt="" />
        <h1 className="text-white text-5xl text-center mb-10" id="topLegal">
          TERMS OF SERVICE
        </h1>
        <div
          className="w-full border-white grid grid-cols-2 mb-10 p-4"
          style={{
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
          }}
        >
          {conditions.map((condition) => {
            return (
              <a
                href={condition.link}
                key={condition.link}
                className="text-md cursor-pointer"
                style={{ color: "#EA1701" }}
              >
                -{condition.name}
              </a>
            );
          })}
        </div>
        <p className="text-white text-md w-full" id={conditions[0].id}>
          Enders Gate is a distributed gaming application provided by 5HeadGames
          LLC and runs on the (Polygon) (Harmony) network(s). You are able to
          earn, purchase, transfer and trade unique digital NFT (Cards), which
          can then be visualized and interacted with on the (Enders Gate)
          website.
        </p>

        <div className="w-full flex flex-col mb-10">
          {conditions.map((condition, index) => {
            return (
              <div
                className="flex flex-col relative pt-8"
                key={"legal-" + index}
              >
                <h2
                  className="text-left w-full text-md"
                  style={{ color: "#EA1701" }}
                >
                  {condition.name}
                </h2>
                <div
                  id={conditions[index + 1] ? conditions[index + 1].id : ""}
                  className="bottom-24 absolute"
                ></div>
                {condition.paragraphs.map((paragraph) => {
                  return (
                    <p className="text-white text-md w-full" key={paragraph}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default TermsAndConditions;
