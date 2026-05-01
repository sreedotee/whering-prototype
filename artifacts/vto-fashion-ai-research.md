# AI Virtual Try-On (VTO) Fashion Research

Date: 2026-04-28

Scope: public online research into fashion, footwear, eyewear, luxury, marketplace, and VTO infrastructure companies implementing or selling AI/AR virtual try-on, fit simulation, digital twin, or virtual fitting-room technology. I attempted to use the requested LinkedIn MCP tools, but no LinkedIn MCP server/tools were exposed in this workspace session; only Refero MCP was listed. I used public web search, official company pages, press releases, trade press, and LinkedIn web-indexed pages where available.

Important caveat: “Leave no company out” is impossible to guarantee because many pilots are private, region-limited, A/B tested, or removed after trials. This report prioritizes confirmed public rollouts, pilots, partnerships, and credible vendor/client claims.

## Executive Takeaways

1. The market has moved from AR novelty to commerce infrastructure. Brands are now framing VTO around conversion, return-rate reduction, inclusive representation, product visualization, and content-cost reduction.
2. The strongest B2B portal/dashboard opportunities are with VTO vendors, not only fashion brands. Vendors need client onboarding, catalog ingestion, garment QA, model/avatar libraries, analytics dashboards, consent/privacy tooling, integration monitoring, campaign/reporting, and account-management workflows.
3. Large retailers with in-house tech teams are building or acquiring capability: Walmart acquired Zeekit; Zalando acquired Fision; Google is scaling Shopping Graph try-on; Amazon is replacing “try before you buy” behavior with AI fit and VTO features.
4. Luxury is now entering with higher-fidelity digital twins: Balmain x Bods, AMIRI x Catches RealFit, ASOS x AIUTA, and Perfect Corp x Nicole Miller indicate that visual quality has crossed the threshold for premium brands.
5. The best prospect set for a B2B management/dashboard product: AIUTA, Veesual, Catches, Bods, Zyler/Anthropics, 3DLOOK, Reactive Reality/PICTOFiT, Perfect Corp, WANNA, Zelig, True Fit, Sizebay, Fit Collective, Style.me, WEARFITS, Genlook, StyleBuddy, and Fytted.

## Confirmed Brand/Retailer Deployments And Pilots

| Company / Brand | Segment | VTO / AI Fit Status | Tech Partner / Stack | B2B / Dashboard Relevance |
|---|---:|---|---|---|
| ASOS | Online fashion marketplace | Launched hybrid VTO in Feb 2026 for about 10,000 products on iOS, initially selected UK/US customers. Upload own image or choose AI-generated likeness. | AIUTA | Very high: ASOS has digital product, e-commerce, merchandising, content, return management, and experimentation teams. Likely needs dashboards for product coverage, try-on completion, latency, conversion, returns, content QA. Source: [ASOS plc](https://www.asosplc.com/news-and-media/latest-news/asos-launches-hybrid-approach-to-virtual-try-on-giving-customers-a-unique-way-to-shop-with-confidence/). |
| Walmart | Mass retail / apparel marketplace | “Choose My Model” and “Be Your Own Model” launched at scale; more than 270,000 apparel items reported in 2022 rollout. | Zeekit, acquired by Walmart | Very high, but mostly internal. Walmart Global Technology, apparel/private brands, site merchandising, marketplace teams. Source: [Walmart corporate](https://corporate.walmart.com/news/2022/03/02/walmart-launches-zeekit-virtual-fitting-room-technology), [Retail Dive](https://www.retaildive.com/news/walmart-expands-virtual-try-on-functionality-with-be-your-own-model/631929/). |
| Zalando | European fashion marketplace | 3D avatar virtual fitting room pilots across markets; 2024 personalized body-measurement VFR with Levi’s in 14 European markets. | In-house plus Fision acquisition | Very high: partner data loop to brands, size/fit analytics, return dashboards, fit model data, body measurement infrastructure. Source: [FashionNetwork](https://us.fashionnetwork.com/news/Zalando-unveils-more-personalised-fitting-trial-launches-streetwear-platform%2C1672311.html), [Tech.eu on Fision](https://tech.eu/2020/10/16/its-a-fit-zalando-buys-swiss-body-scanning-tech-startup-fision/). |
| Zara / Inditex | Fast fashion | Public reports in early 2026 indicate Zara app AI try-on using two photos to generate an avatar; appears region/rollout dependent. | Not clearly disclosed | High if confirmed directly: Inditex has massive product, design, logistics, and app teams. Use caution because official technical partner is not public. Sources: [Perfect Corp analysis](https://www.perfectcorp.com/business/blog/ai-clothes/i-tried-zara-online-virtual-try-on-tool), [NY Post](https://nypost.com/2026/03/03/lifestyle/zaras-ai-try-on-feature-creates-model-bots-for-customers/). |
| AMIRI | Luxury fashion | First public RealFit deployment in March 2026; “Try on Me” for selected products. | Catches RealFit, Nvidia CUDA | High: luxury client portal needs privacy-safe image handling, SKU onboarding, garment physics QA, executive reporting. Source: [Business Wire via Times Online](https://business.times-online.com/times-online/article/bizwire-2026-3-16-catches-launches-generative-ai-with-physics-based-sizing-technology-for-fashion-e-commerce-with-amiri-powered-by-nvidia), [Vogue AI Tracker](https://www.vogue.com/story/technology/the-vogue-business-ai-tracker). |
| Balmain | Luxury fashion | 3D avatar virtual fitting/styling launched with 7 RTW designs, 5 handbags, and a boot; US site rollout. | Bods | Very high: luxury product digitization, asset approval, styling, conversion, returns, sustainability reporting. Source: [FashionUnited](https://fashionunited.com/news/business/balmain-introduces-virtual-fitting-with-bods-partnership/2023111756901), [Forbes](https://www.forbes.com/sites/stephaniehirschmiller/2023/11/20/balmain-is-using-gaming-tech--ai-to-power-new-virtual-fit-solution/). |
| Mr Porter / Mr P. / YNAP | Luxury menswear marketplace/private label | Feb 2024 six-month VTO pilot for 90 Mr P. styles, 70% of permanent collection, with 3D avatar size simulator in six languages. | Not named in official source | High: private-label design team, digital ID strategy, returns tracking, luxury merchandising analytics. Source: [YNAP](https://www.ynap.com/news/yoox-net-a-porter-launches-virtual-try-on-experience-for-mr-porter-private-label/). |
| EILEEN FISHER | Women’s apparel | Veesual partnership; Switch Model and multi-sizing available/testing on product pages. | Veesual | High: inclusivity, size representation, model selection analytics, return reduction, PDP engagement. Source: [PRNewswire](https://www.prnewswire.com/news-releases/ai-powered-virtual-try-on-technology-platform-for-the-fashion-industry-veesual-raises-7-5-million-announces-us-expansion-with-new-eileen-fisher-partnership-302119247.html), [Retail Customer Experience](https://www.retailcustomerexperience.com/news/veesual-bumps-up-virtual-try-on-features/). |
| Claudie Pierlot | Premium fashion | Listed Veesual customer. | Veesual | Medium-high: model switching, visual merchandising, outfit generation. Source: [Veesual](https://www.veesual.ai/solutions/e-commerce). |
| La Redoute | Marketplace / catalog fashion | Listed Veesual customer. | Veesual | High: catalog scale, outfit/mix-match, content automation. Source: [PRNewswire](https://www.prnewswire.com/news-releases/ai-powered-virtual-try-on-technology-platform-for-the-fashion-industry-veesual-raises-7-5-million-announces-us-expansion-with-new-eileen-fisher-partnership-302119247.html). |
| Gemo | Mass fashion | Listed Veesual customer for Mix&Match. | Veesual | Medium-high: outfit builder, retail analytics. Source: [Veesual](https://www.veesual.ai/solutions/e-commerce). |
| Sergent Major / DPAM | Kids fashion | Listed Veesual customers for Mix&Match. | Veesual | Medium: parent-focused outfit assembly, kids sizing, catalog ops. Source: [Veesual](https://www.veesual.ai/solutions/e-commerce). |
| Marine Henrion | Designer fashion | Early Veesual virtual fitting / Mix & Match launch. | Veesual | Medium: boutique/designer proof point. Source: [Marine Henrion](https://marinehenrion.com/en/journal/the-little-revolution-of-the-virtual-try-on-by-veesual/). |
| John Lewis Fashion Rental | Fashion rental | Zyler-powered “Try it On”; reports over 30% of sales following Zyler visualization; 16% visitor engagement. | Zyler / Anthropics | Very high: rental returns, eventwear conversion, campaign dashboards, outfit analytics. Source: [RTIH](https://retailtechinnovationhub.com/home/2023/10/18/zyler-virtual-try-on-tech-drives-30-of-sales-on-john-lewis-fashion-rental-platform). |
| Moss / Moss Bros | Menswear / suits | 2024 trial of AI-powered Zyler try-on for formalwear. | Zyler / Anthropics | High: formalwear fit, rental/wedding/customer-service workflows. Source: [InternetRetailing](https://internetretailing.net/moss-trials-ai-powered-try-on-technology/). |
| Larusmiani | Luxury menswear | Listed Zyler partner. | Zyler / Anthropics | Medium-high: bespoke/luxury menswear fit visualization. Source: [Textile World](https://www.textileworld.com/textile-world/knitting-apparel/2024/05/zyler-virtual-try-on-wins-virtual-fitting-room-innovation-of-the-year-at-retailtech-breakthrough-awards-2024/). |
| Nicole Miller | Designer fashion | Feb 2026 AI virtual fitting room for archival designs at Fashion Forward Week. | Perfect Corp | Medium-high: event activation, archival digital content, brand storytelling. Source: [Perfect Corp](https://www.perfectcorp.com/business/news/perfect-corp-nicole-miller-virtual-fitting-room). |
| REVOLVE | Fashion e-commerce | Uses Zelig AI-powered styling / Build a Look experience. | Zelig | High: AI commerce engine, analytics, session/AOV/returns metrics. Source: [Zelig](https://www.zelig.com/). |
| Hugo Boss | Premium/luxury fashion | Virtual try-on service in Germany, UK, France using body-measurement avatars. | Reactive Reality / PICTOFiT | High: premium brand integration, avatar management, outfit/layering QA. Source: [Hypebae](https://hypebae.com/2022/8/hugo-boss-reactive-reality-virtual-try-on-service-details), [Reactive Reality listing](https://directory.pi.tv/listing/reactive-reality/). |
| 1822 Denim | Denim | 3DLOOK partnership; reported 4x conversion improvement, personalized fit confidence. | 3DLOOK | High for fit analytics and return reduction. Source: [PRWeb](https://www.prweb.com/releases/3DLOOK_receives_RTIH_Innovation_Award_for_collaborative_partnership_with_1822_Denim/prweb18404938.htm). |
| Dickies / VF Corp | Workwear | 3DLOOK fit pilot for Dickies customers on Tmall Global. | 3DLOOK | High: marketplace localization, brand-partner dashboards. Source: [3DLOOK](https://3dlook.ai/content-hub/3dlook-partners-with-dickies-to-offer-tmall-global-shoppers-a-personalized-fitting-experience/). |
| TA3 Swim, Careste, DOB, RedThread, Safari, Fechheimer | Apparel/swim/workwear | Listed 3DLOOK / YourFit customers. | 3DLOOK | Medium-high: fit-sensitive categories are ideal for dashboards. Source: [3DLOOK YourFit](https://xyz.3dlook.me/yourfit/). |
| Gucci | Luxury footwear | AR shoe try-on in Gucci app and Snapchat shoppable AR campaign. | WANNA / Snapchat | High for campaign analytics, 3D asset management, luxury QA. Source: [Snap case study](https://forbusiness.snapchat.com/inspiration/gucci-ar-tryon?_sid=ADAGE&lang=en-US), [VentureBeat](https://venturebeat.com/ai/guccis-ios-app-lets-you-try-shoes-on-remotely-in-ar/). |
| FARFETCH | Luxury marketplace | AR/VTO deployments; WANNA cites FARFETCH results and Vogue notes Snapchat AR adoption. | WANNA / Snapchat | Very high: marketplace, luxury seller onboarding, 3D/VTO asset coverage. Source: [WANNA](https://wanna.fashion/), [Vogue Business via Vogue](https://www.vogue.com/article/snapchat-boosts-ar-try-on-tools-farfetch-prada-dive-in). |
| Prada | Luxury accessories | Snapchat AR try-ons, including handbags. | Snapchat AR | Medium-high: AR campaign management and luxury digital innovation. Source: [Vogue](https://www.vogue.com/article/snapchat-boosts-ar-try-on-tools-farfetch-prada-dive-in). |
| Piaget | Luxury watches/jewelry | Snapchat AR try-on noted for watches/bracelets. | Snapchat AR | Medium: jewelry/watch VTO dashboards. Source: [Vogue](https://www.vogue.com/article/snapchat-boosts-ar-try-on-tools-farfetch-prada-dive-in). |
| Allbirds | Footwear | WANNA site quotes Allbirds senior product manager on app VTO. | WANNA | High: app feature analytics, 3D SKU pipeline. Source: [WANNA](https://wanna.fashion/). |
| The Iconic | Fashion marketplace | WANNA site cites footwear VTO / Visualise. | WANNA | High: marketplace analytics and 3D try-on operations. Source: [WANNA](https://wanna.fashion/). |
| GOAT | Sneaker marketplace | WANNA site cites sneaker try-on collaboration. | WANNA | High: sneaker 3D assets, mobile conversion, marketplace seller ops. Source: [WANNA](https://wanna.fashion/). |
| Amazon Fashion | Marketplace | AR virtual try-on for shoes across New Balance, adidas, Reebok, Puma, Superga, Lacoste, Asics, Saucony; also AI size recommendations. | In-house | Very high, mostly internal or seller-platform-adjacent. Source: [Amazon](https://www.aboutamazon.com/news/retail/amazon-makes-shopping-easier-with-virtual-try-on-for-shoes), [AP on Try Before You Buy shutdown](https://apnews.com/article/05197d30e819a28c6d0e0ead3057accc). |
| Google Shopping | Search/shopping infrastructure | Generative AI apparel try-on: initially tops from Anthropologie, Everlane, H&M, LOFT; dresses from SIMKHAI, Boden, Staud, Sandro, Maje; expanded to upload-photo VTO and UK/India. | Google internal | Very high for merchants, though not a classic vendor portal. Merchant Center eligibility, image requirements, catalog/listing coverage. Sources: [Google blog 2023](https://blog.google/products-and-platforms/products/shopping/ai-virtual-try-on-google-shopping/), [Google dresses](https://blog.google/products-and-platforms/products/shopping/virtual-try-on-dresses/), [FashionUnited UK/India](https://fashionunited.com/news/fashion/google-launches-virtual-apparel-try-on-tool-in-the-uk-and-india/2025120369473). |
| Nike | Footwear | Nike Fit scans feet with computer vision/AR for size recommendations. | In-house | High, but internal product/retail analytics rather than third-party portal. Source: [CNBC](https://www.cnbc.com/2019/05/08/nike-is-launching-nike-fit-to-scan-your-feet-tell-you-your-shoe-size.html), [Wired](https://www.wired.com/story/nike-fit-trainers). |
| Warby Parker | Eyewear | AR virtual try-on in iOS app using ARKit/TrueDepth and in-house algorithm. | In-house | Medium-high: eyewear asset creation, face mapping, app funnel analytics. Source: [TechCrunch](https://techcrunch.com/2019/02/04/warby-parker-dips-into-ar-with-the-launch-of-virtual-try-on/). |
| Lenskart | Eyewear | 3D Try-On for thousands of frames; virtual face analysis and sizing with card calibration. | In-house / Ditto heritage | High: consumer app, product recommendations, retail omnichannel. Source: [Lenskart SG](https://www.lenskart.sg/sg-3d-try-on). |
| Fytted app | Consumer fashion VTO / body measuring | Lets users virtually try more than one million items from 600+ brands, including Free People, Lululemon, J.Crew. | Fytted | Medium: consumer aggregator, affiliate/catalog analytics, brand integrations. Source: [Retail Dive](https://www.retaildive.com/news/fytted-virtual-fitting-room-tool-ai/728000/). |

## B2B VTO / Fit-Tech Vendors To Track

| Vendor | What They Sell | Confirmed Clients / Signals | B2B Portal / Dashboard Opportunity |
|---|---|---|---|
| AIUTA | AI fashion platform, AI Studio, virtual try-on, brand-aligned visual content. | ASOS integration in 2026. | Client dashboards for SKU onboarding, AI image generation QA, try-on usage, latency, conversion, return impact, creative approvals. Source: [ASOS](https://www.asosplc.com/news-and-media/latest-news/asos-launches-hybrid-approach-to-virtual-try-on-giving-customers-a-unique-way-to-shop-with-confidence/). |
| Veesual | 2D image generation for fashion: Switch Model, Mix&Match, Multi-Sizing, Look Inspiration. | EILEEN FISHER, Claudie Pierlot, La Redoute, Gemo, Sergent Major, DPAM; $7.5M seed and US expansion. | Strong fit for brand management dashboard: model library, body/size representation, generated image QA, A/B tests, PDP analytics, acquisition/retargeting creative. Source: [PRNewswire](https://www.prnewswire.com/news-releases/ai-powered-virtual-try-on-technology-platform-for-the-fashion-industry-veesual-raises-7-5-million-announces-us-expansion-with-new-eileen-fisher-partnership-302119247.html). |
| Catches / RealFit | Physics-backed generative AI sizing, fit, drape, movement; app plus white-label brand infrastructure. | AMIRI launch; $10M; investors include Antoine Arnault and Natalia Vodianova Arnault; other luxury brands planned. | Very strong: luxury client portal, measurements/privacy compliance, digital twin generation, garment physics simulation ops, QA, executive ROI reporting. Source: [Business Wire via Times Online](https://business.times-online.com/times-online/article/bizwire-2026-3-16-catches-launches-generative-ai-with-physics-based-sizing-technology-for-fashion-e-commerce-with-amiri-powered-by-nvidia). |
| Bods | 3D digital styling / avatar try-on for luxury and fashion. | Balmain; broader Vogue mentions Khaite, Canada Goose, Macy’s, Dapper Boi trials in avatar-fit category. | Strong: 3D asset ingestion, fit maps, avatar creation, styling combinations, luxury approval workflow. Source: [FashionUnited](https://fashionunited.com/news/business/balmain-introduces-virtual-fitting-with-bods-partnership/2023111756901), [Vogue](https://www.vogue.com/article/want-to-reduce-returns-avatars-might-be-the-answer). |
| Zyler / Anthropics | AI virtual fashion try-on from headshot plus sizing information; web/in-store use. | John Lewis Fashion Rental, Moss, Larusmiani, Kangra. | Strong: retailer admin, rental-eventwear analytics, email campaign integrations, sales attribution, return reduction reporting. Source: [Textile World](https://www.textileworld.com/textile-world/knitting-apparel/2024/05/zyler-virtual-try-on-wins-virtual-fitting-room-innovation-of-the-year-at-retailtech-breakthrough-awards-2024/). |
| 3DLOOK / YourFit | Mobile body measuring, virtual fitting room, size recommendation from two photos. | Dickies/VF, 1822 Denim, TA3 Swim, Careste, RedThread, Fechheimer, etc. | Strong: fit analytics, body measurement profiles, return reasons, product development feedback, B2B reporting. Source: [3DLOOK YourFit](https://xyz.3dlook.me/yourfit/). |
| Reactive Reality / PICTOFiT | Photorealistic avatars, virtual dressing room, on-model fashion image generation, e-commerce/app/in-store solutions. | Hugo Boss, Shopify cited in directory; Microsoft and London College of Fashion partnerships. | Strong: virtual asset management, customer avatar workflow, product lifecycle use from design to merchandising. Source: [World Fashion Index](https://directory.pi.tv/listing/reactive-reality/). |
| Perfect Corp | AI/AR beauty and fashion APIs: clothes, fabric, watches, jewelry, hats, shoes, bags, etc. | Nicole Miller; 800+ global brand partners mostly across beauty/fashion/retail. | Very strong: developer APIs, usage dashboards, billing, modular API access, brand campaign reporting, virtual fitting-room admin. Source: [Perfect Corp APIs](https://www.perfectcorp.com/business/news/new-api-fashion-category), [BusinessWire launch](https://www.businesswire.com/news/home/20250523976398/en/Available-Now---Perfect-Corp.-Debuts-New-GenAI-Clothes-Virtual-Try-On-for-Brand-and-Retailer-Websites-Apps-and-API). |
| WANNA | AR/3D virtual try-on for shoes, bags, jewelry/watches, clothes. | Gucci, FARFETCH, Allbirds, GOAT, The Iconic, Dolce&Gabbana cited. | Strong: 3D pipeline, campaign tracking, Snapchat/social-commerce integrations, 3D catalog QA. Source: [WANNA](https://wanna.fashion/). |
| Zelig | “AI Commerce” engine with styling, digital closet, mix-and-match, recommendations, data capture. | REVOLVE. | Very strong: shopper data, styling analytics, commerce KPIs, CMS ingestion, client reporting. Source: [Zelig](https://www.zelig.com/). |
| True Fit | AI size and fit intelligence, shopping agent, fit data infrastructure, MCP-style “fit intelligence”. | Publicly positioned as network for retailers/brands; LinkedIn says data informs marketing, merchandising, sourcing, product development. | Very strong: fit intelligence dashboards, product/returns analytics, merchandising and design feedback loops. Sources: [True Fit site](https://www.truefit.com/), [LinkedIn web page](https://www.linkedin.com/company/true-fit-corporation). |
| Fit Collective | AI fit analytics to help brands fix product sizing before/after sale. | 10 clients per Vogue Business reporting; Shopify integration. | Very strong: not classic VTO, but dashboard-first fit analytics for design/product teams. Source: [Vogue](https://www.vogue.com/article/can-ai-stop-brands-from-making-clothes-that-dont-fit). |
| Style.me | 3D assets, virtual fitting, digital fashion, mixed reality. | Vendor positioning, not many current public client names in quick scan. | Medium-high: digital fashion asset platform, internal/sales partner experiences. Source: [Style.me](https://style.me/). |
| WEARFITS | AR try-on for shoes/bags, AI apparel try-on, 3D assets without CAD files. | Vendor site; public clients not prominent in quick scan. | Medium-high: accessible VTO for brands, product digitization dashboards. Source: [WEARFITS](https://wearfits.com/). |
| Genlook | Shopify AI apparel try-on. | Shopify-oriented vendor; public client names not prominent. | Medium: SMB brand dashboard, theme/widget customization, try-on analytics. Source: [Genlook](https://genlook.app/solutions/fashion-brands). |
| StyleBuddy | AI fashion platform for brands: VTO, AI styling, catalog management, analytics, Shopify/Wix/API. | Claims 120+ brand integrations and analytics dashboards. | Strong for SMB/mid-market B2B portal inspiration. Source: [StyleBuddy](https://brands.stylebuddy.ai/). |
| eSaapa Fashion AI | Virtual try-on, garment AI, AI model/content generation, dashboard workflows. | Vendor site; public clients not prominent. | Medium: content workflows, catalog generation, multi-channel publishing dashboard. Source: [eSaapa](https://esaapa.com/fashionai). |
| Fytted | Consumer virtual fitting app/body measuring with brand aggregation. | 600+ brands in app including Free People, Lululemon, J.Crew per Retail Dive. | Medium: catalog integration, brand attribution, affiliate/e-commerce dashboard. Source: [Retail Dive](https://www.retaildive.com/news/fytted-virtual-fitting-room-tool-ai/728000/). |
| Doji | Consumer AI avatar/fashion try-on app. | Private beta; Peter Do in-app brand partnership reported by Vogue. | Emerging: if B2B expands, brand drops, shoppable collections, avatar analytics. Source: [Vogue](https://www.vogue.com/article/virtual-try-on-20-will-it-change-the-way-we-shop). |
| Alta | AI styling/digital wardrobe app. | Mentioned with Doji as VTO 2.0 startup. | Emerging: wardrobe, styling, personalized commerce analytics. Source: [Vogue](https://www.vogue.com/article/virtual-try-on-20-will-it-change-the-way-we-shop). |
| DressX | Digital fashion / AI VTO stack. | Forbes discusses Google/DressX fashion AI VTO stack. | Medium-high: digital fashion assets, creator/brand campaigns, try-on content workflows. Source: [Forbes](https://www.forbes.com/sites/moinroberts-islam/2026/04/14/google-dressx-and-the-new-fashion-ai-virtual-try-on-stack/). |

## Strongest Outreach / Partnership Targets

Priority 1: vendors actively selling to brands and likely needing B2B management portals

- AIUTA
- Veesual
- Catches / RealFit
- Bods
- Zyler / Anthropics
- 3DLOOK
- Reactive Reality / PICTOFiT
- Perfect Corp
- WANNA
- Zelig
- True Fit
- Fit Collective

Priority 2: large retailers/brands with in-house VTO programs or high product/design complexity

- ASOS
- Walmart
- Zalando
- Zara / Inditex
- Amazon Fashion
- Google Shopping / Merchant Center
- YNAP / Mr Porter / Net-a-Porter
- Balmain
- AMIRI
- EILEEN FISHER
- REVOLVE
- Hugo Boss
- Gucci
- FARFETCH
- Nike
- Warby Parker
- Lenskart

Priority 3: category-specific or emerging plays

- John Lewis Fashion Rental / HURR
- Moss
- 1822 Denim
- Dickies / VF Corp
- TA3 Swim
- Careste
- Dapper Boi
- Khaite
- Canada Goose
- Macy’s
- Nicole Miller
- Allbirds
- GOAT
- The Iconic
- La Redoute
- Claudie Pierlot
- Gemo
- Sergent Major / DPAM

## Dashboard / Portal Features The Market Needs

For VTO vendors selling to fashion brands:

- Client onboarding: brand, region, consent policy, allowed categories, privacy settings.
- Catalog ingestion: Shopify, Salesforce Commerce Cloud, Magento, custom APIs, Google Merchant Center feeds.
- Asset readiness: image quality, garment mask quality, front/back/side availability, material metadata, size coverage.
- Model/avatar library: body size, ethnicity, age, pose, fit preference, inclusivity coverage.
- Garment QA workflow: generated output review, fail states, human approval, brand visual-standard checks.
- Performance analytics: try-on starts, completion, saves/shares, add-to-cart lift, conversion, AOV, return rate, size exchanges.
- Experiment management: A/B tests by category, region, model type, product page placement.
- Return/fit feedback loop: connect try-on interactions to returns reason codes and product development.
- Campaign tools: social AR links, shoppable lenses, email personalization, retargeting generated images.
- Compliance center: biometric consent, retention/deletion, age gating, region controls, audit log.
- Executive reporting: ROI, return savings, product coverage, launch readiness, top failing SKUs.

For brands with design teams:

- Fit analytics by garment block, size, fabric, supplier, season.
- Body-data clusters mapped to target customer segments.
- Design/spec alerts for SKUs likely to cause fit-related returns.
- Digital sample review and virtual model approval.
- Product development feedback from consumer try-on behavior.

## LinkedIn Local Tool Pass

After the first draft, I found and used the local LinkedIn scraper workspace at `C:\Users\sreen\linkedin-mcp-server`. The saved profile initially was unauthenticated, so the login flow was run with a visible browser and then the read-only company/profile searches succeeded.

Important slug corrections:

- `aiuta` was not the fashion VTO company; correct LinkedIn slug is `aiuta-inc`.
- `wanna` was not the AR fashion vendor; correct LinkedIn slug is `wannaby`.
- `fit-collective` was a Denver fitness studio; correct LinkedIn slug is `fit-collective-labs`.
- `style-me` was not Style.me; correct LinkedIn slug is `styleme`.
- `genlook` was a near-empty/wrong page; correct LinkedIn slug is `genlook-virtual-try-on`.

LinkedIn-enriched company signals:

| Company | LinkedIn Signal | Implication For B2B / Dashboard Research |
|---|---|---|
| AIUTA (`aiuta-inc`) | 11-50 employees; 45 associated members; Delaware plus Limassol; describes “enterprise Virtual Try-On (VTO) and AI-driven content systems”; “AIUTA Studio”; built for large catalogs, peak traffic, global markets. | Very strong enterprise B2B fit: needs catalog-scale operations, model imagery workflows, QA review, traffic/performance monitoring, enterprise success dashboards. |
| Veesual (`veesual`) | 2-10 employees; 11 associated members; Paris; now positioned around “image animation at scale” and `vidcap.ai`, with specialties in image generation, look personalization, individual marketing, and deep tech. | Strong but note strategic shift: still relevant to fashion content automation and generated visual workflows; dashboard angle may be video/image generation, campaigns, retargeting, and ecommerce content ops. |
| CATCHES (`catches`) | 11-50 employees; 47 associated members; London; “physics-backed AI for personalised garment fit”; specialties include Fashion, Clothing, AI, SaaS, Nvidia, AWS, Google Cloud, Azure; remote team with 3D rendering, AI, VFX. | One of the clearest B2B portal candidates: simulation pipeline, garment physics QA, infrastructure monitoring, brand onboarding, cloud/compute cost dashboards. |
| BODS (`bods`) | 2-10 employees; 35 associated members; Los Angeles; “immersive 3D digital styling and try-on”; specialties include 3D, Software, AI, computer graphics, Fashion, Luxury, Ecommerce. | Lean team but high luxury/product-design relevance. Likely uses hands-on implementation and client-success workflows around 3D assets, fit maps, and brand visual approval. |
| 3DLOOK (`3dlook`) | 11-50 employees; 35 associated members; New York; body scanning and 3D visualization; two smartphone photos into precise human geometry; APIs/SDKs for health, wearables, apparel. | Dashboard angle extends beyond fashion: body data infrastructure, API usage, measurement accuracy, custom/uniform workflows, partner integrations. |
| Perfect Corp (`perfect-corp`) | 501-1,000 employees; 343 associated LinkedIn members; 800+ global brand partners; enterprise VTO across makeup, hair, jewelry, watches, fashion accessories, plus APIs. | Mature enterprise SaaS/API org. Strong benchmark for admin portals, API consoles, usage billing, enterprise account dashboards, and modular product packaging. |
| WANNA (`wannaby`) | 51-200 employees; 38 associated members; now “WANNA by Perfect Corp.”; categories include bags, scarves, footwear, watches, clothes, jewelry; trusted by Loewe, Burberry, Valentino, Balenciaga, Tod’s, Dolce&Gabbana, IWC, Diesel, Farfetch, GOAT. | Very high luxury AR/3D B2B relevance. Needs 3D asset management, campaign analytics, SKU/category coverage, channel deployment dashboards across web/iOS/WeChat/social. |
| Zelig (`zelig`) | 11-50 employees; 59 associated members; Los Angeles; “AI Commerce engine”; real-time recommendations, mix-and-match “Build A Look,” digital closet; specialties include AI, luxury fashion, VTO, AI commerce, retail tech. | Strong dashboard opportunity around shopper data, outfit graph, content/CMS ingestion, session/AOV/return metrics, merchandising analytics. |
| True Fit (`true-fit-corporation`) | 51-200 employees; 123 associated members; Boston; AI platform for apparel/footwear size and fit; datasets feed marketing, merchandising, sourcing, product development. | One of the most dashboard-native companies: fit intelligence, product development feedback loops, retailer analytics, returns, personalization. |
| Fit Collective / Maeve AI (`fit-collective-labs`) | 2-10 employees; 17 associated members; London; now describes Maeve AI as a copilot unifying sales, returns, reviews, and PLM data for teams from garment tech to CFO. | Extremely relevant to management dashboards. Less consumer VTO, more fit/product-margin operating system for design, garment tech, finance, and merchandising. |
| Style.me (`styleme`) | 11-50 employees; 20 associated members; Brooklyn; virtual fitting, AR, digital fashion, physically based simulation, size recommendation, data analysis. | Good B2B portal candidate for 3D virtual fitting rooms, avatar setup, Shopify/Magento/Wix plugins, consumer insights dashboards. |
| GenLook (`genlook-virtual-try-on`) | 2-10 employees; 1 associated member; Paris; Shopify app for AI virtual fitting room; founded 2025. | Early-stage SMB/mid-market Shopify portal opportunity: install flow, theme/widget controls, product eligibility, try-on usage and conversion analytics. |
| WEARFITS (`wearfits`) | 2-10 employees; 6 associated members; Krakow; Gen-AI and AR VTO/size fitting for footwear, bags, apparel; explicitly mentions global B2B/SaaS cloud platform for managing 3D assets and product information. | Very direct dashboard fit: 3D asset/PIM management, photo-to-AR pipeline, footwear/bag/apparel size fitting, reseller/product-tag data exchange. |
| StyleBuddy (`stylebuddy`) | 11-50 employees; 35 associated members; Bengaluru; personal styling and transformation platform; AI-assisted outfit suggestions, certified stylists, shopping/grooming advisors. | More styling marketplace than pure VTO. B2B brands site still relevant, but LinkedIn page suggests consumer/service-led styling operations. |

LinkedIn people-search signals:

- AIUTA: results surfaced Maísa Benatti as CEO, Daniel Thomas Flynn as GTM Lead, Alexis Fabbri as Head of Go-To-Market, Marco Delvai as Strategic Partnerships Principal, and Ilvina Asliamova as AI Fashion Creative. This supports a go-to-market plus fashion-creative layer, not only engineering.
- WANNA: results surfaced Olga Titova as Chief Product Officer, Marina Gruzdova as Senior Product Designer for R&D/fashion tech, Nata Loginova as Strategic Account Executive / Head of Sales WANNA at Perfect Corp, and Daria G. with past senior business development/customer success leadership at WANNA. This is one of the strongest signs of a mature product/design/customer-success organization.
- Zelig: results surfaced Spencer Carey as Senior Product Designer / Head of Design at Zelig, plus product/UX and GTM-adjacent fashion-tech people. This supports a real design function around the AI commerce experience.
- 3DLOOK: results surfaced Whitney Cathcart as Co-Founder & Chief Commercial Officer, Kateryna Boichuk as Business Development Lead, Yurii Tymko as Senior Product Analyst, and prior AI/ML product management and account director profiles. This reinforces analytics and B2B sales motion.
- Perfect Corp: results surfaced strategic account, customer success/project management, and WANNA sales leadership profiles; consistent with enterprise SaaS/customer implementation.

Net-new conclusion from LinkedIn:

- The most “dashboard/portal-rich” targets are not only those with the biggest public brand logos. They are the companies whose LinkedIn positioning explicitly mentions enterprise scale, APIs/SDKs, B2B/SaaS cloud platforms, product data, PLM/returns data, customer success, or AI Studio workflows: AIUTA, CATCHES, WANNA, Perfect Corp, True Fit, Fit Collective/Maeve AI, Zelig, 3DLOOK, WEARFITS, Style.me, and Veesual.

## Source Index

- ASOS x AIUTA: https://www.asosplc.com/news-and-media/latest-news/asos-launches-hybrid-approach-to-virtual-try-on-giving-customers-a-unique-way-to-shop-with-confidence/
- Veesual / EILEEN FISHER / clients: https://www.prnewswire.com/news-releases/ai-powered-virtual-try-on-technology-platform-for-the-fashion-industry-veesual-raises-7-5-million-announces-us-expansion-with-new-eileen-fisher-partnership-302119247.html
- Veesual e-commerce page: https://www.veesual.ai/solutions/e-commerce
- Walmart Zeekit: https://corporate.walmart.com/news/2022/03/02/walmart-launches-zeekit-virtual-fitting-room-technology
- Zalando fitting room: https://us.fashionnetwork.com/news/Zalando-unveils-more-personalised-fitting-trial-launches-streetwear-platform%2C1672311.html
- Zalando Fision acquisition: https://tech.eu/2020/10/16/its-a-fit-zalando-buys-swiss-body-scanning-tech-startup-fision/
- Catches RealFit x AMIRI: https://business.times-online.com/times-online/article/bizwire-2026-3-16-catches-launches-generative-ai-with-physics-based-sizing-technology-for-fashion-e-commerce-with-amiri-powered-by-nvidia
- Balmain x Bods: https://fashionunited.com/news/business/balmain-introduces-virtual-fitting-with-bods-partnership/2023111756901
- YNAP / Mr Porter: https://www.ynap.com/news/yoox-net-a-porter-launches-virtual-try-on-experience-for-mr-porter-private-label/
- Zyler / John Lewis: https://retailtechinnovationhub.com/home/2023/10/18/zyler-virtual-try-on-tech-drives-30-of-sales-on-john-lewis-fashion-rental-platform
- Zyler awards/clients: https://www.textileworld.com/textile-world/knitting-apparel/2024/05/zyler-virtual-try-on-wins-virtual-fitting-room-innovation-of-the-year-at-retailtech-breakthrough-awards-2024/
- Moss x Zyler: https://internetretailing.net/moss-trials-ai-powered-try-on-technology/
- 3DLOOK YourFit: https://xyz.3dlook.me/yourfit/
- 3DLOOK x Dickies: https://3dlook.ai/content-hub/3dlook-partners-with-dickies-to-offer-tmall-global-shoppers-a-personalized-fitting-experience/
- Reactive Reality / PICTOFiT: https://directory.pi.tv/listing/reactive-reality/
- Perfect Corp fashion APIs: https://www.perfectcorp.com/business/news/new-api-fashion-category
- Perfect Corp x Nicole Miller: https://www.perfectcorp.com/business/news/perfect-corp-nicole-miller-virtual-fitting-room
- WANNA: https://wanna.fashion/
- Gucci x Snapchat: https://forbusiness.snapchat.com/inspiration/gucci-ar-tryon?_sid=ADAGE&lang=en-US
- Amazon Fashion VTO shoes: https://www.aboutamazon.com/news/retail/amazon-makes-shopping-easier-with-virtual-try-on-for-shoes
- Google VTO 2023: https://blog.google/products-and-platforms/products/shopping/ai-virtual-try-on-google-shopping/
- Google dresses: https://blog.google/products-and-platforms/products/shopping/virtual-try-on-dresses/
- Google UK/India rollout: https://fashionunited.com/news/fashion/google-launches-virtual-apparel-try-on-tool-in-the-uk-and-india/2025120369473
- Warby Parker AR: https://techcrunch.com/2019/02/04/warby-parker-dips-into-ar-with-the-launch-of-virtual-try-on/
- Lenskart 3D Try-On: https://www.lenskart.sg/sg-3d-try-on
- Nike Fit: https://www.cnbc.com/2019/05/08/nike-is-launching-nike-fit-to-scan-your-feet-tell-you-your-shoe-size.html
- Fytted: https://www.retaildive.com/news/fytted-virtual-fitting-room-tool-ai/728000/
- True Fit: https://www.truefit.com/
- True Fit LinkedIn public page: https://www.linkedin.com/company/true-fit-corporation
- Vogue avatar/VTO overview: https://www.vogue.com/article/want-to-reduce-returns-avatars-might-be-the-answer
- Vogue VTO 2.0: https://www.vogue.com/article/virtual-try-on-20-will-it-change-the-way-we-shop
- Zelig: https://www.zelig.com/
- StyleBuddy: https://brands.stylebuddy.ai/
- Genlook: https://genlook.app/solutions/fashion-brands
- Style.me: https://style.me/
- WEARFITS: https://wearfits.com/
