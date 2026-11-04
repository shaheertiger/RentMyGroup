// Guides family: the owner-advertiser keyword cluster, consolidated into a few
// intent-distinct pages so they do not compete with the existing money pages
// (/monetize-facebook-group, /facebook-group-advertising, the blog posts).
import { PseoPageData, PSEO_UPDATED } from './types.ts';
import { hubPath, IDEAS_PATHS } from './templates.ts';

const crumbs = (label: string, path: string) => [
  { label: 'Home', path: '/' },
  { label: 'Guides', path: '/guides' },
  { label, path },
];

const promoteFacebookGroup: PseoPageData = {
  path: '/guides/how-to-promote-a-facebook-group',
  family: 'guides',
  eyebrow: 'Guide for Group Owners',
  h1: 'How to Promote a Facebook Group: 12 Ways That Still Work',
  metaTitle: 'How to Promote a Facebook Group (12 Ways That Work in 2026)',
  metaDescription: 'How to promote your Facebook group and get real members: optimize for search, link it from your page, cross-promote, run Facebook ads, and use partnerships.',
  intro: 'Growing a Facebook group is mostly about being findable and giving people a reason to join. Here are the promotion methods that work, from free to paid.',
  breadcrumbs: crumbs('How to promote a Facebook group', '/guides/how-to-promote-a-facebook-group'),
  blocks: [
    { type: 'h2', content: 'Before you promote: fix the basics' },
    { type: 'p', content: 'Promotion only works if people who land on the group want to join. Check three things first: a clear name with the topic (and city, for local groups), a description that says who the group is for, and a cover image that matches the topic.' },
    { type: 'links', links: [
      { label: 'Facebook group description templates', path: hubPath('facebook', 'description') },
      { label: 'Facebook group rules templates', path: hubPath('facebook', 'rules') },
    ] },
    { type: 'h2', content: 'Free ways to promote a Facebook group' },
    { type: 'ol', items: [
      'Put the main keyword in the group name. People search Facebook for things like "dog owners Austin", and the group name is the strongest signal.',
      'Link the group to your Facebook Page so Page followers see a "Join group" prompt.',
      'Share the group link from your personal profile and pin it to the featured section.',
      'Add the group link to your website, email signature, and newsletter.',
      'Invite people who already engage with your content, rather than mass-inviting friends.',
      'Cross-promote with complementary groups: swap a shout-out with admins of groups in a related (not competing) niche.',
      'Post consistently. Active groups get suggested to more people on Facebook.',
      'Ask members to invite one friend who would enjoy the group.',
    ] },
    { type: 'h2', content: 'Paid ways to promote a Facebook group' },
    { type: 'ol', items: [
      'Run a Facebook ad from your Page that links to the group, targeted by interest and location.',
      'Sponsor a post in a bigger related group with the admin\'s permission.',
      'Partner with a creator or newsletter in your niche for a mention.',
      'Run a giveaway with a relevant brand that both of you promote.',
    ] },
    { type: 'callout', content: 'Can you advertise a Facebook group? Yes. Facebook does not offer a "promote group" button the way it does for Pages, but you can run an ad from a Page that sends people to the group link.' },
    { type: 'h2', content: 'Facebook group promotion tools' },
    { type: 'table', headers: ['Tool', 'What it helps with'], rows: [
      ['Group Insights (built in)', 'When members are active, which posts get engagement, and where growth comes from'],
      ['Scheduled posts (built in)', 'Keep posting consistently, even when you are busy'],
      ['Membership questions (built in)', 'Collect emails (with consent) and screen out spam accounts'],
      ['Meta Ads Manager', 'Paid promotion of the group link from your Page'],
      ['Canva or similar', 'Cover images and promo graphics'],
    ] },
    { type: 'h2', content: 'What not to do' },
    { type: 'ul', items: [
      'Do not spam the group link in other groups. It gets you banned and damages your reputation.',
      'Do not buy members. Fake members kill engagement and make the group worthless to advertisers.',
      'Do not add people without asking. Friends added without consent tend to leave or mute.',
    ] },
    { type: 'cta', role: 'admin', headline: 'Grow it, then earn from it', body: 'Once your group has an engaged audience, list it on Rent My Group and get paid by brands that want to reach your members.', buttonText: 'List My Group Free' },
  ],
  faq: [
    { q: 'How do I promote my Facebook group for free?', a: 'Optimize the group name for search, link it to your Page, share it on your profile and website, cross-promote with related groups, and post consistently.' },
    { q: 'Can you pay to promote a Facebook group?', a: 'Not directly. You run an ad from a Facebook Page that links to the group, or pay to be featured in other groups, newsletters, or creator content.' },
    { q: 'How long does it take to grow a Facebook group?', a: 'Most niche groups take a few months of consistent posting and promotion to reach their first thousand engaged members.' },
  ],
  related: [
    { label: 'Facebook group post ideas', path: IDEAS_PATHS.facebook },
    { label: 'Can you make money from Facebook groups?', path: '/guides/can-you-make-money-from-facebook-groups' },
  ],
  updated: PSEO_UPDATED,
};

const makeMoneyQuestion: PseoPageData = {
  path: '/guides/can-you-make-money-from-facebook-groups',
  family: 'guides',
  eyebrow: 'Guide for Group Owners',
  h1: 'Can You Make Money From Facebook Groups?',
  metaTitle: 'Can You Make Money From Facebook Groups? (Yes, Here\'s How)',
  metaDescription: 'Yes, Facebook groups make money. Here is how group owners earn from sponsored posts, subscriptions, products, and partnerships, and what a group needs first.',
  intro: 'Short answer: yes. Facebook does not pay you for running a group, but you can earn from the audience you have built. Here is how it works and what a group needs before it can earn.',
  breadcrumbs: crumbs('Can you make money from Facebook groups?', '/guides/can-you-make-money-from-facebook-groups'),
  blocks: [
    { type: 'h2', content: 'Do Facebook groups make money on their own?' },
    { type: 'p', content: 'No. Unlike some video and creator programs, there is no payout for member count or activity in a group. Money comes from what you do with the audience: sponsorships, your own products, paid memberships, or partnerships.' },
    { type: 'h2', content: 'The main ways group owners earn' },
    { type: 'table', headers: ['Method', 'How it works', 'Best for'], rows: [
      ['Sponsored posts', 'Brands pay you to share an approved post with members', 'Any engaged niche group'],
      ['Affiliate links', 'You earn a commission when members buy through your link', 'Product-focused niches'],
      ['Paid subscriptions or a paid community', 'Members pay for premium content or access', 'Expert-led groups'],
      ['Your own products or services', 'The group becomes your best sales channel', 'Coaches, creators, businesses'],
      ['Events and workshops', 'Paid meetups, classes, or webinars for members', 'Local and hobby groups'],
    ] },
    { type: 'h2', content: 'What a group needs before it can earn' },
    { type: 'ul', items: [
      'A clear niche. "Moms in Denver" is easier to sponsor than "general chat".',
      'Real engagement. Advertisers care about comments and reactions more than member count.',
      'Clear rules about promotion, so sponsored posts feel fair to members.',
      'Trust. Only share offers you would recommend to a friend.',
    ] },
    { type: 'h2', content: 'How much can a Facebook group make?' },
    { type: 'p', content: 'It depends on niche and engagement more than size. A small, active local or professional group can earn more per post than a huge, quiet general group. Use the pricing guide below to set your rates.' },
    { type: 'links', links: [
      { label: 'How much to charge for a sponsored post in a Facebook group', path: '/blog/how-much-to-charge-for-sponsored-post-facebook-group' },
      { label: 'How to make money from a Facebook group (full guide)', path: '/blog/how-to-make-money-from-a-facebook-group' },
      { label: 'Monetize your Facebook group with Rent My Group', path: '/monetize-facebook-group' },
    ] },
    { type: 'cta', role: 'admin', headline: 'Find out what your group is worth', body: 'List your Facebook group on Rent My Group for free. Advertisers come to you, you set the price, and you approve every post.', buttonText: 'List My Group Free' },
  ],
  faq: [
    { q: 'Does Facebook pay you for having a group?', a: 'No. Facebook does not pay group admins based on members or activity. Admins earn from sponsorships, affiliate links, paid memberships, and their own products.' },
    { q: 'How many members do you need to make money from a Facebook group?', a: 'There is no fixed number. A few hundred highly engaged members in a valuable niche can attract sponsors. Engagement and niche matter more than size.' },
    { q: 'Is it allowed to sell sponsored posts in a Facebook group?', a: 'Yes, as long as the content follows Facebook\'s Community Standards and advertising policies, and sponsored posts are clearly disclosed to members.' },
  ],
  related: [
    { label: 'How to promote a Facebook group', path: '/guides/how-to-promote-a-facebook-group' },
    { label: 'Can you make money from a WhatsApp group?', path: '/blog/can-you-make-money-from-whatsapp-group' },
  ],
  updated: PSEO_UPDATED,
};

const advertiseInFacebookGroups: PseoPageData = {
  path: '/guides/how-to-advertise-in-facebook-groups',
  family: 'guides',
  eyebrow: 'Guide for Advertisers',
  h1: 'How to Advertise in Facebook Groups (and Find the Best Ones)',
  metaTitle: 'How to Advertise in Facebook Groups: Finding the Best Groups to Advertise',
  metaDescription: 'How to advertise in Facebook groups without getting banned: find the best groups for your audience, work with admins, and run sponsored posts members trust.',
  intro: 'Facebook groups put you in front of people who already care about your niche. The catch is that most groups ban unapproved promotion. Here is how to advertise in groups the right way.',
  breadcrumbs: crumbs('How to advertise in Facebook groups', '/guides/how-to-advertise-in-facebook-groups'),
  blocks: [
    { type: 'h2', content: 'Can you run Facebook ads inside groups?' },
    { type: 'p', content: 'Not through Ads Manager. Facebook does not sell ad placements inside specific groups. Advertising in groups means working with the people who run them: admins who approve a sponsored post, pin an announcement, or host a giveaway.' },
    { type: 'h2', content: 'How to find the best Facebook groups to advertise in' },
    { type: 'ol', items: [
      'Start with your customer, not group size. List the topics, places, and life stages your buyers have in common.',
      'Search Facebook for those terms and filter by Groups. Note groups that are active today, not just large.',
      'Check engagement: look at comments per post over the last week. Ten engaged comments beat ten thousand silent members.',
      'Read the rules. Groups that allow promotion usually have a promo day or a "contact admin for ads" rule.',
      'Shortlist five to ten groups and contact admins with a specific, relevant offer.',
    ] },
    { type: 'h2', content: 'What to ask a group admin' },
    { type: 'ul', items: [
      'How many members saw or engaged with recent posts?',
      'Who are the members (location, interests, age range)?',
      'What formats are available: sponsored post, pinned post, cover photo, giveaway?',
      'What is the price and how will the post be disclosed?',
      'Can you share results from previous sponsors?',
    ] },
    { type: 'h2', content: 'Facebook group ads vs Facebook Ads Manager' },
    { type: 'table', headers: ['', 'Group sponsored post', 'Facebook Ads Manager'], rows: [
      ['Audience', 'Self-selected niche members', 'Algorithmic targeting'],
      ['Trust', 'Endorsed by the admin', 'Clearly an ad'],
      ['Pricing', 'Flat fee per post', 'Auction (CPM/CPC)'],
      ['Scale', 'One group at a time', 'Large reach'],
      ['Best for', 'Local and niche offers', 'Broad campaigns and retargeting'],
    ] },
    { type: 'callout', content: 'Never post promotions in groups without admin approval. It gets your post removed, your account restricted, and your brand remembered for the wrong reasons.' },
    { type: 'links', links: [
      { label: 'Facebook group advertising on Rent My Group', path: '/facebook-group-advertising' },
      { label: 'Group advertising marketplace', path: '/group-advertising-marketplace' },
    ] },
    { type: 'cta', role: 'advertiser', headline: 'Skip the cold DMs to admins', body: 'Rent My Group lists vetted Facebook and WhatsApp groups with real engagement data. Pick your niche, book a sponsored post, and the admin approves it.', buttonText: 'Find Groups to Advertise In' },
  ],
  faq: [
    { q: 'How do I advertise in Facebook groups?', a: 'Find active groups your customers belong to, check that the rules allow sponsored content, and agree a paid post with the admin. Marketplaces like Rent My Group make this faster.' },
    { q: 'What are the best Facebook groups to advertise in?', a: 'The best groups are niche, active, and match your customer, for example local parent groups for a kids activity center. Engagement matters more than size.' },
    { q: 'How much does it cost to advertise in a Facebook group?', a: 'It varies by niche, size, and engagement. Small local groups may charge a modest flat fee per post, while large professional groups charge more.' },
  ],
  related: [
    { label: 'How to post in Facebook groups', path: '/guides/how-to-post-in-facebook-groups' },
    { label: 'How to advertise in WhatsApp groups', path: '/guides/how-to-advertise-in-whatsapp-groups' },
  ],
  updated: PSEO_UPDATED,
};

const postInFacebookGroups: PseoPageData = {
  path: '/guides/how-to-post-in-facebook-groups',
  family: 'guides',
  eyebrow: 'Guide',
  h1: 'How to Post in Facebook Groups (Without Getting Your Post Removed)',
  metaTitle: 'How to Post in Facebook Groups Without Getting Removed',
  metaDescription: 'How to post in Facebook groups on phone and desktop, why posts get declined, and how to share business content in groups without breaking the rules.',
  intro: 'Posting in a Facebook group takes seconds. Getting the post approved and seen takes a bit more care, especially if you are posting for a business.',
  breadcrumbs: crumbs('How to post in Facebook groups', '/guides/how-to-post-in-facebook-groups'),
  blocks: [
    { type: 'h2', content: 'How to post in a Facebook group' },
    { type: 'ol', items: [
      'Open the group from the Groups tab or search.',
      'Tap or click "Write something…" at the top of the group feed.',
      'Add your text, photos, a poll, or other options.',
      'Tap Post. If the group uses post approval, your post appears once an admin approves it.',
    ] },
    { type: 'h2', content: 'Why your post was declined or is pending' },
    { type: 'ul', items: [
      'The group requires admin approval for all posts.',
      'Your post broke a rule (often: no self-promotion or no links).',
      'You are a new member and the group limits posting for new members.',
      'Your post includes a link or keyword the admins auto-decline.',
    ] },
    { type: 'h2', content: 'How to post business content in groups the right way' },
    { type: 'ol', items: [
      'Read the rules. Many groups have a promo day or a pinned thread for businesses.',
      'Lead with value: answer questions and help members before mentioning your business.',
      'Ask the admin. Many will approve a relevant offer, often for a fee.',
      'Disclose clearly when a post is sponsored or you are the business owner.',
    ] },
    { type: 'cta', role: 'advertiser', headline: 'Want your business post approved in the right groups?', body: 'Rent My Group connects you with admins who welcome sponsored posts. You get placement, they get paid, members get relevant offers.', buttonText: 'Start Advertising' },
  ],
  faq: [
    { q: 'Why can\'t I post in a Facebook group?', a: 'The admins may have limited posting to admins, require approval, or restrict new members. Check the group rules or message an admin.' },
    { q: 'Can I post the same thing in multiple Facebook groups?', a: 'You can, but posting identical content to many groups quickly can trigger Facebook\'s spam filters. Tailor each post and follow each group\'s rules.' },
  ],
  related: [
    { label: 'How to advertise in Facebook groups', path: '/guides/how-to-advertise-in-facebook-groups' },
    { label: 'Facebook group post ideas', path: IDEAS_PATHS.facebook },
  ],
  updated: PSEO_UPDATED,
};

const advertiseInWhatsAppGroups: PseoPageData = {
  path: '/guides/how-to-advertise-in-whatsapp-groups',
  family: 'guides',
  eyebrow: 'Guide for Advertisers',
  h1: 'How to Advertise in WhatsApp Groups Without Spamming',
  metaTitle: 'WhatsApp Group Ads: How to Advertise in WhatsApp Groups (the Right Way)',
  metaDescription: 'How to advertise in WhatsApp groups without spamming: promotion strategies that work with admins, message formats that convert, and what to avoid.',
  intro: 'WhatsApp groups have some of the highest open rates of any channel, which is exactly why members hate spam. The way in is through the admin.',
  breadcrumbs: crumbs('How to advertise in WhatsApp groups', '/guides/how-to-advertise-in-whatsapp-groups'),
  blocks: [
    { type: 'h2', content: 'Can you run ads in WhatsApp groups?' },
    { type: 'p', content: 'There is no ad product that places ads inside WhatsApp groups. WhatsApp group advertising means an admin shares your approved message with their group, usually for a fee.' },
    { type: 'h2', content: 'WhatsApp group promotion strategies that work' },
    { type: 'ol', items: [
      'Find groups your customers are in: local community, parents, students, hobby, and professional groups.',
      'Contact the admin, not the group. Ask if they accept sponsored messages and what they charge.',
      'Write for a phone: one short message, one clear offer, one link.',
      'Offer something members value: a discount code, a free resource, or a local event.',
      'Let the admin introduce you. A message from a trusted admin outperforms a cold drop.',
    ] },
    { type: 'h2', content: 'Promotion without admin access' },
    { type: 'p', content: 'If you are a member but not an admin, ask the admin before sharing anything promotional. Dropping links without permission gets you removed and can get your number reported, which affects your WhatsApp account.' },
    { type: 'h2', content: 'Sample sponsored message' },
    { type: 'copy', label: 'Sponsored message template', text: '📣 *Sponsored* | Thanks to [Brand] for supporting our group!\n[One-line offer, e.g. 20% off your first class at [Studio]]\nUse code *[CODE]* by [date]: [link]\nQuestions? Message [Name] at [Brand].' },
    { type: 'links', links: [
      { label: 'WhatsApp group advertising on Rent My Group', path: '/whatsapp-group-advertising' },
      { label: 'How to price promotions in a WhatsApp group', path: '/blog/how-to-price-promotions-in-whatsapp-group' },
    ] },
    { type: 'cta', role: 'advertiser', headline: 'Reach WhatsApp groups through their admins', body: 'Rent My Group connects you with WhatsApp group owners who accept approved promotions. No spam, no cold messages.', buttonText: 'Start Advertising' },
  ],
  faq: [
    { q: 'Is advertising in WhatsApp groups allowed?', a: 'Sharing a promotional message is allowed when the admin and members agree to it. Unsolicited bulk messaging breaks WhatsApp\'s terms and can get numbers banned.' },
    { q: 'How do I promote my business in WhatsApp groups?', a: 'Work with admins of relevant groups, offer something useful to members, keep the message short, and always get permission before posting.' },
  ],
  related: [
    { label: 'How to advertise in Facebook groups', path: '/guides/how-to-advertise-in-facebook-groups' },
    { label: 'WhatsApp group ideas', path: IDEAS_PATHS.whatsapp },
  ],
  updated: PSEO_UPDATED,
};

const guides = [promoteFacebookGroup, makeMoneyQuestion, advertiseInFacebookGroups, postInFacebookGroups, advertiseInWhatsAppGroups];

const guidesIndex: PseoPageData = {
  path: '/guides',
  family: 'guides',
  eyebrow: 'Guides',
  h1: 'Guides for Group Owners and Advertisers',
  metaTitle: 'Guides: Grow, Promote, and Advertise in Facebook & WhatsApp Groups',
  metaDescription: 'Practical guides for Facebook and WhatsApp group owners and the brands that advertise with them: promotion, monetization, and group advertising.',
  intro: 'Practical, no-fluff guides for people who run groups and the businesses that want to reach them.',
  breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Guides', path: '/guides' }],
  blocks: [
    { type: 'links', heading: 'For group owners', links: [promoteFacebookGroup, makeMoneyQuestion].map((g) => ({ label: g.h1, path: g.path, desc: g.metaDescription })) },
    { type: 'links', heading: 'For advertisers', links: [advertiseInFacebookGroups, advertiseInWhatsAppGroups, postInFacebookGroups].map((g) => ({ label: g.h1, path: g.path, desc: g.metaDescription })) },
    { type: 'links', heading: 'Free resources', links: [{ label: 'Group descriptions, rules, and welcome messages', path: '/templates' }, { label: 'Step-by-step group how-to guides', path: '/how-to' }] },
  ],
  faq: [],
  related: [{ label: 'Blog', path: '/blog' }],
  updated: PSEO_UPDATED,
};

export const guidePages: PseoPageData[] = [guidesIndex, ...guides];
