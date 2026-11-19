// Wave 3 (Nov 2026): standalone template pages for keyword clusters that Search
// Console showed Google already testing the site for, without a matching page:
//   /templates/whatsapp-group-introduction-message  "whatsapp group introduction message" (4.4k IN, 140 US, KD 12-17)
//   /templates/group-description                    "group description", "what is group description" (1.3k IN, 590 US)
//   /templates/facebook-page-welcome-message        "facebook messenger greeting examples", "welcome to my page message"
import { PseoPageData } from './types.ts';
import { hubPath, nichePath, IDEAS_PATHS } from './templates.ts';

export const EXTRAS_UPDATED = '2026-11-19';

export const EXTRA_PATHS = {
  introduction: '/templates/whatsapp-group-introduction-message',
  groupDescription: '/templates/group-description',
  pageWelcome: '/templates/facebook-page-welcome-message',
} as const;

const crumbs = (label: string, path: string) => [
  { label: 'Home', path: '/' },
  { label: 'Templates', path: '/templates' },
  { label, path },
];

// ─── WhatsApp group introduction message ─────────────────────────────────────

const introduction: PseoPageData = {
  path: EXTRA_PATHS.introduction,
  family: 'templates',
  eyebrow: 'WhatsApp Group Templates',
  h1: 'WhatsApp Group Introduction Message: 25 Samples to Copy',
  metaTitle: 'WhatsApp Group Introduction Message: 25 Samples (Self, Admin, Business)',
  metaDescription: 'Copy-paste WhatsApp group introduction messages: introduce yourself as a new member, as the admin, as a teacher to parents, or introduce your business without spamming.',
  intro: 'Just joined a WhatsApp group, or just created one? Pick the introduction message that fits, replace the [brackets], and send. Every sample is short enough to read on a phone.',
  breadcrumbs: crumbs('WhatsApp Group Introduction Message', EXTRA_PATHS.introduction),
  blocks: [
    { type: 'h2', content: 'Introduce yourself as a new member' },
    { type: 'copy', label: 'Short and friendly', text: "Hi everyone 👋 I'm [Name] from [City]. Thanks for adding me! Looking forward to learning from you all and joining the conversation." },
    { type: 'copy', label: 'Slightly longer, with a bit about you', text: "Hello all! 😊 I'm [Name]. I [work as / study / run] [what you do] and I joined because [why you joined].\n\nA fun fact about me: [one line].\n\nHappy to be here, and feel free to say hi anytime!" },
    { type: 'copy', label: 'Professional or networking group', text: "Good [morning/afternoon], everyone. I'm [Name], [role] at [Company] in [City]. I work on [area of work] and I'm here to [learn about X / meet people in Y / share what I know about Z].\n\nIf anyone is working on something similar, I'd be glad to connect. Thanks for having me." },
    { type: 'copy', label: 'Class, college, or study group', text: "Hi everyone! I'm [Name], [course / class and section]. Looking forward to sharing notes and preparing for [exam / subject] together. My strongest subject is [subject] if anyone needs help, and I could definitely use help with [subject] 😅" },
    { type: 'copy', label: 'New employee in an office group', text: "Hello team 👋 I'm [Name] and I've just joined as [role] in [team]. I'll be working on [main responsibility]. Looking forward to working with all of you, and please don't hesitate to reach out if you need anything from me." },
    { type: 'copy', label: 'Neighborhood, society, or apartment group', text: "Hi neighbors! I'm [Name] and we've just moved into [flat / house number or street]. Looking forward to getting to know everyone. If there's anything we should know about the area, we're all ears 🙂" },
    { type: 'copy', label: 'Hobby or interest group', text: "Hey all! I'm [Name], a [beginner / long-time] [hobby] fan from [City]. Right now I'm [working on / into] [current project]. Excited to swap tips and see what everyone is up to!" },
    { type: 'copy', label: 'Parent in a school parents group', text: "Hello everyone 🙏 I'm [Name], [Child's name]'s [mother / father] from [Class and Section]. Happy to be part of this group and looking forward to staying updated together. Please feel free to reach out anytime!" },
    { type: 'copy', label: 'Sports team or club', text: "Hey team! ⚽ I'm [Name], just joined [Club / Team]. I usually play [position / role] and I'm free for games on [days]. See you at the next session!" },
    { type: 'copy', label: 'Gym or fitness group', text: "Hi all 💪 I'm [Name]. I've just started at [Gym / program] and my goal is [goal]. Would love tips from anyone who's been at it a while, and I'm always up for a workout buddy!" },
    { type: 'copy', label: 'Church or faith group', text: "Hello everyone, I'm [Name] 🙏 I've recently started attending [Church / community] and I'm grateful to be added here. Looking forward to fellowship with you all." },
    { type: 'copy', label: 'Jobs or career group', text: "Hello everyone, I'm [Name], a [role] with [number] years of experience in [field], based in [City]. I'm currently looking for opportunities in [area]. Thanks for having me, and happy to help others with referrals where I can." },
    { type: 'copy', label: 'Freelancer in a networking group', text: "Hi all! I'm [Name], a freelance [skill] working with [type of clients]. I joined to meet other freelancers, share leads, and learn how you all handle [challenge]. Glad to be here!" },
    { type: 'copy', label: 'Rejoining after a break', text: "Hi everyone, it's [Name]! 👋 Back in the group after a while. For those who don't know me, I [one line about you]. Great to see so many new faces!" },
    { type: 'copy', label: 'New member of a family group', text: "Hello everyone 🙏 I'm [Name], [relationship, e.g. Ravi's wife / Anna's partner]. Thank you for adding me to the family group. I'm so happy to be part of the family and can't wait to meet everyone at the next get-together! ❤️" },

    { type: 'h2', content: 'Introduction messages for admins' },
    { type: 'copy', label: 'First message in a new group (introduce the group)', text: "Welcome everyone to *[Group Name]*! 🎉\n\nI'm [Name], and I created this group so we can [purpose of the group].\n\n📌 What to share here: [topics]\n🚫 Please avoid: spam, chain forwards, and off-topic messages\n\nTo get started, please introduce yourself: your name, where you're from, and [one question that fits the group]." },
    { type: 'copy', label: 'New admin introducing themselves', text: "Hi everyone 👋 I'm [Name], and I'll be helping [Admin Name] look after this group from today. If you have a question, a problem, or an idea for the group, message me directly anytime. Thanks for keeping this group friendly and useful!" },
    { type: 'copy', label: 'Ask new members to introduce themselves', text: "👋 *New here? Introduce yourself!*\n\nReply with:\n1. Your name\n2. Where you're from\n3. [One question that fits the group]\n\nThen say hi to someone else who just joined 😊" },
    { type: 'copy', label: 'Event or trip group', text: "Hi all, I'm [Name] and I'll be coordinating [event / trip] on [date]. I'll use this group for timings, location, and last-minute updates, so please keep it to event messages only. Reply 👍 so I know you've seen this." },

    { type: 'h2', content: 'Teacher introduction message for a parents group' },
    { type: 'copy', label: 'Class teacher to parents', text: "Dear Parents,\n\nI am [Name], the class teacher of [Class and Section] for [year]. I will use this group to share homework, notices, and important updates.\n\nTo keep the group useful for everyone:\n• Please message me directly for questions about your child\n• Avoid forwards and personal messages in the group\n• I will reply between [time] and [time] on school days\n\nLooking forward to a wonderful year together. Thank you!" },
    { type: 'copy', label: 'Subject teacher or tutor', text: "Hello Parents, I am [Name], and I will be teaching [Subject] to [Class / batch]. I will share the weekly plan and practice work here every [day]. For any concerns about your child's progress, please message me privately. Thank you for your support!" },
    { type: 'copy', label: 'Welcome message for parents (from the admin)', text: "Welcome to the [Class / School] parents' group 🙏 This group is for school updates and class announcements. Please keep messages relevant, avoid forwards, and contact the class teacher directly for anything about your child." },

    { type: 'h2', content: 'Introduce your business in a WhatsApp group (without spamming)' },
    { type: 'p', content: "Only post a business introduction where the group rules allow it, or after asking the admin. A short, useful message gets replies. A sales pitch gets you removed." },
    { type: 'copy', label: 'Business owner introduction', text: "Hi everyone, I'm [Name], and I run [Business Name], a [what you do] in [City]. I joined to [learn / connect / help] and I'm happy to answer questions about [your area of expertise] anytime, no sales pitch. 🙂" },
    { type: 'copy', label: 'Service provider (with the admin\'s permission)', text: "Hello all 👋 With [Admin Name]'s permission: I'm [Name] from [Business Name]. We help [who you help] with [what you do]. If it's ever useful, members of this group get [offer]. You can message me directly, so I won't post about it again here." },
    { type: 'copy', label: 'Business group or community intro', text: "Hi everyone! I'm [Name], founder of [Business Name]. We [one-line description]. I'm here to meet other [business owners / professionals] in [City / industry] and share what's worked for us with [topic]. Looking forward to connecting!" },

    { type: 'h2', content: 'How to write a good introduction message' },
    { type: 'ol', items: [
      'Lead with your name and one detail that links you to the group (your class, flat number, company, or relationship).',
      'Say why you joined. It gives people something to reply to.',
      'Keep it to three or four short lines. Long intros get scrolled past.',
      'Add one emoji, not ten. It reads as friendly on a phone.',
      'Match the group\'s tone: formal for school and office groups, casual for friends and hobbies.',
      'Do not sell in your first message. If you run a business, mention it and stop there.',
    ] },
    { type: 'callout', content: 'Bold words in WhatsApp by wrapping them in *asterisks*, and italicize them with _underscores_. Use bold for the one thing you want people to notice, like your name or the group\'s rules.' },

    { type: 'links', heading: 'More WhatsApp group templates', links: [
      { label: 'WhatsApp group welcome messages', path: hubPath('whatsapp', 'welcome-message'), desc: 'For admins welcoming new members' },
      { label: 'WhatsApp group description templates', path: hubPath('whatsapp', 'description') },
      { label: 'WhatsApp group rules templates', path: hubPath('whatsapp', 'rules') },
      { label: 'Family WhatsApp group welcome messages', path: nichePath('whatsapp', 'welcome-message', 'family') },
      { label: 'Teachers WhatsApp group description', path: nichePath('whatsapp', 'description', 'teachers') },
    ] },
    { type: 'cta', role: 'admin', headline: 'Run an active WhatsApp group?', body: 'Brands pay to reach engaged WhatsApp communities. List your group on Rent My Group for free, set your own rates, and approve every sponsored message.', buttonText: 'List My Group Free' },
  ],
  faq: [
    { q: 'How do I introduce myself in a WhatsApp group?', a: "Send a short message with your name, one detail that connects you to the group (like your class, company, or neighborhood), and why you joined. For example: \"Hi everyone, I'm Priya from Flat 304. Just moved in and looking forward to meeting you all!\"" },
    { q: 'What is a good introduction message for a WhatsApp group?', a: 'A good introduction is three or four lines long, matches the group\'s tone, and gives people something to reply to, such as why you joined or a question for the group.' },
    { q: 'How does an admin introduce a new WhatsApp group?', a: "Send a first message that says who created the group, what it is for, what members can share, and what to avoid. Then ask members to introduce themselves with one easy question. Put the same purpose and rules in the group description." },
    { q: 'How do teachers introduce themselves in a parents WhatsApp group?', a: 'State your name, class, and subject, explain what the group will be used for (homework, notices, updates), and set expectations: message the teacher privately about individual children, avoid forwards, and note when you will reply.' },
    { q: 'Can I promote my business in a WhatsApp group introduction?', a: 'Only if the group rules allow it or the admin agrees. Mention what your business does in one line and offer help, but do not post prices or repeated promotions.' },
  ],
  related: [
    { label: 'WhatsApp group welcome messages', path: hubPath('whatsapp', 'welcome-message') },
    { label: 'What is a group description? (with examples)', path: EXTRA_PATHS.groupDescription },
    { label: 'WhatsApp group ideas', path: IDEAS_PATHS.whatsapp },
  ],
  updated: EXTRAS_UPDATED,
};

// ─── Group description: meaning + examples, all platforms ───────────────────

const groupDescription: PseoPageData = {
  path: EXTRA_PATHS.groupDescription,
  family: 'templates',
  eyebrow: 'Group Templates',
  h1: 'What Is a Group Description? Meaning + 30 Examples',
  metaTitle: 'Group Description: What It Is + 30 Examples to Copy (2026)',
  metaDescription: 'What a group description is, what to write in one, and 30 group description examples for family, friends, class, business, community, and church groups on WhatsApp and Facebook.',
  intro: 'A group description is the short text that tells people what a group is for, who it is for, and how to behave in it. It is the first thing people read when they open a group or decide whether to join.',
  breadcrumbs: crumbs('Group Description', EXTRA_PATHS.groupDescription),
  blocks: [
    { type: 'h2', content: 'What does "group description" mean?' },
    { type: 'p', content: 'On WhatsApp, Facebook, Telegram, and most other apps, every group has a name and a description. The name says what the group is called. The description explains its purpose, who should be in it, and the basic rules. A good description saves admins from answering the same questions and keeps the wrong people out.' },
    { type: 'table', headers: ['Platform', 'Where the description appears', 'Good to know'], rows: [
      ['WhatsApp', 'Group info, under the group name', 'Up to 2,048 characters, but only the first lines show before "Read more"'],
      ['Facebook', 'The About section of the group', 'Shown to people deciding whether to join, so lead with who it is for'],
      ['Telegram', 'Group or channel info', 'Short: Telegram keeps descriptions to a couple of lines'],
      ['Discord', 'The welcome screen and a #rules or #welcome channel', 'Servers rarely use one block of text; split purpose and rules into channels'],
    ] },

    { type: 'h2', content: 'What to write in a group description' },
    { type: 'ol', items: [
      'Purpose: one line on what the group is for.',
      'Who it is for: "for parents of Class 5B", "for small business owners in Pune".',
      'What to share: the two or three topics members actually post about.',
      'Rules in one line: the rule that matters most, plus "no spam".',
      'Admin contact: who to message with questions.',
    ] },
    { type: 'callout', content: 'Formula: [Emoji] [Group name] is a group for [who] to [purpose]. Share [topics]. [Most important rule]. Questions? Message [admin].' },

    { type: 'h2', content: 'Group description examples' },
    { type: 'h3', content: 'Family group' },
    { type: 'copy', label: 'Family group description', text: "👨‍👩‍👧‍👦 The [Surname] Family\nOur place to share news, photos, birthdays, and plans for the next get-together. Family only, please, and no forwards. Love you all ❤️" },
    { type: 'copy', label: 'Extended family group', text: "🌳 [Surname] Family Tree\nFor all the cousins, aunts, uncles, and grandparents to stay in touch across [cities / countries]. Share photos and family news, wish each other on special days, and keep politics out of it 🙏" },
    { type: 'h3', content: 'Friends group' },
    { type: 'copy', label: 'Friends group description', text: "😎 [Group Name]\nThe official home of plans, memes, and bad jokes since [year]. Rule #1: what's said in the group stays in the group. Rule #2: reply to the meetup poll." },
    { type: 'copy', label: 'School or college friends', text: "🎓 [School / College] Batch of [Year]\nFor old classmates to stay in touch, share updates, and plan reunions. Keep it friendly and no business promotions without asking the admins." },
    { type: 'h3', content: 'Class, students, and study groups' },
    { type: 'copy', label: 'Class group', text: "📚 [Class and Section] [Year]\nFor class updates, homework, timetables, and exam notices. Study-related messages only. No forwards, no spam, and be kind to each other." },
    { type: 'copy', label: 'Study group', text: "✏️ [Subject / Exam] Study Group\nWe share notes, practice questions, and doubts to prepare for [exam] together. Ask anything, help when you can, and keep it on topic." },
    { type: 'copy', label: 'Tuition or coaching group', text: "📖 [Tutor / Coaching Name]: [Class / Batch]\nFor class timings, homework, test schedules, and announcements. Parents and students can message the tutor directly for individual questions. Group messages are for updates only." },
    { type: 'h3', content: 'Business and customer groups' },
    { type: 'copy', label: 'Business group for customers', text: "🛍️ [Business Name] Updates\nNew arrivals, offers, and store news, straight from us. Only admins post here, so it won't get noisy. To order or ask a question, message us at [number]." },
    { type: 'copy', label: 'Networking group', text: "🤝 [City] Business Network\nFor local business owners to share advice, referrals, and opportunities. Promote your business only in the Monday thread. Give before you ask." },
    { type: 'copy', label: 'Office or team group', text: "💼 [Team Name]\nFor quick updates, shift changes, and team announcements. Work topics only, please keep it professional, and use direct messages for personal matters." },
    { type: 'h3', content: 'Community, neighborhood, and church groups' },
    { type: 'copy', label: 'Neighborhood or society group', text: "🏡 [Society / Street Name] Residents\nFor neighbors to share notices, local recommendations, lost and found, and safety alerts. No forwards or political posts. Admins: [Name], [Name]." },
    { type: 'copy', label: 'Church group', text: "⛪ [Church Name] Fellowship\nA place to share service times, prayer requests, events, and encouragement. Please keep messages uplifting and relevant to our church family. 🙏" },
    { type: 'copy', label: 'Volunteer group', text: "🙌 [Organization] Volunteers\nFor shift sign-ups, event updates, and thank-yous. Reply to polls so we can plan, and message [Name] if you can't make a shift." },
    { type: 'h3', content: 'Hobby, sports, and event groups' },
    { type: 'copy', label: 'Sports team', text: "⚽ [Team Name]\nMatch times, training updates, and lift sharing. Reply to the weekly availability poll by [day]. Banter welcome, but keep it friendly." },
    { type: 'copy', label: 'Gym or fitness group', text: "💪 [Group Name] Fitness Crew\nDaily check-ins, workout ideas, and motivation. Post your workout, cheer each other on, and no selling supplements or programs." },
    { type: 'copy', label: 'Trip or travel group', text: "✈️ [Destination] Trip, [Dates]\nFor tickets, itinerary, packing lists, and meeting points. Trip updates only, please. Important info is pinned." },
    { type: 'copy', label: 'Wedding group', text: "💍 [Couple's names] Wedding\nAll the details for [date]: venue, timings, dress code, and travel. Share photos here after the big day! 📸" },
    { type: 'copy', label: 'Book club', text: "📖 [Group Name] Book Club\nThis month: [Book]. We meet [day / time / place]. Spoilers only after the meeting, and suggestions for the next read are always welcome." },
    { type: 'copy', label: 'Gaming group', text: "🎮 [Group Name]\nFor finding squads, sharing clips, and planning game nights. Be a good teammate, no cheating talk, and keep it respectful." },
    { type: 'h3', content: 'Buy and sell, jobs, and alumni groups' },
    { type: 'copy', label: 'Buy and sell group', text: "🏷️ [Area] Buy & Sell\nPost items with a photo, price, and location. Meet in public places, no pre-payments to strangers, and mark items SOLD when they go." },
    { type: 'copy', label: 'Jobs group', text: "💼 [City / Industry] Jobs\nJob openings, referrals, and career tips. Every job post needs a company name and how to apply. No fees-for-jobs offers." },
    { type: 'copy', label: 'Alumni group', text: "🎓 [School / University] Alumni\nFor former students to reconnect, share opportunities, and plan reunions. Introduce yourself with your batch year and what you're up to now." },
    { type: 'h3', content: 'Short one-line group descriptions' },
    { type: 'ul', items: [
      'Family news, photos, and plans. Family only, no forwards. ❤️',
      'Class updates and homework only. Be kind, no spam. 📚',
      'Plans, memes, and good vibes since [year]. 😎',
      'Official updates from [Business Name]. Admins only post here. 🛍️',
      'Neighbors helping neighbors in [Area]. No forwards, no politics. 🏡',
      'Daily practice and doubts for [exam]. Stay on topic. ✏️',
      'Trip plans for [destination], [dates]. Updates only. ✈️',
      'Fitness check-ins and motivation. Post your workout! 💪',
    ] },

    { type: 'h2', content: 'Find a template for your exact group' },
    { type: 'p', content: 'Our platform-specific pages have four templates each for 50 kinds of groups, with topics and rules written for that niche.' },
    { type: 'links', links: [
      { label: 'WhatsApp group description templates', path: hubPath('whatsapp', 'description'), desc: '50 niches' },
      { label: 'Facebook group description templates', path: hubPath('facebook', 'description'), desc: '50 niches' },
      { label: 'Family WhatsApp group description', path: nichePath('whatsapp', 'description', 'family') },
      { label: 'Business WhatsApp group description', path: nichePath('whatsapp', 'description', 'small-business') },
      { label: 'Class WhatsApp group description', path: nichePath('whatsapp', 'description', 'class') },
      { label: 'Church WhatsApp group description', path: nichePath('whatsapp', 'description', 'church') },
    ] },
    { type: 'h2', content: 'How to add or change a group description' },
    { type: 'ul', items: [
      'WhatsApp: open the group, tap the group name, tap "Add group description" (or the current description), paste, and save.',
      'Facebook: open the group, go to Admin tools, then Settings, then "Name and description".',
      'Telegram: open the group, tap its name, tap Edit (the pencil), and fill in Description.',
    ] },
    { type: 'cta', role: 'admin', headline: 'A clear description attracts the right members, and advertisers notice', body: 'Brands pay to reach focused, active groups. List your group on Rent My Group for free and approve every sponsored post.', buttonText: 'List My Group Free' },
  ],
  faq: [
    { q: 'What is a group description?', a: 'A group description is the text under a group\'s name that explains what the group is for, who should join, and the basic rules. On WhatsApp it appears in Group info; on Facebook it appears in the About section.' },
    { q: 'What should I write in a group description?', a: 'Write the group\'s purpose, who it is for, what members can share, the most important rule, and who to contact. One to five short lines is enough for most groups.' },
    { q: 'What is a good short group description?', a: 'Something like "Family news, photos, and plans. Family only, no forwards." It states the purpose and the main rule in one line, which is all most people read.' },
    { q: 'How long can a WhatsApp group description be?', a: 'Up to 2,048 characters. Only the first lines show before "Read more", so put the purpose first.' },
    { q: 'Who can change the group description?', a: 'On WhatsApp, admins decide: in Group settings, "Edit group settings" controls whether all members or only admins can change the name, icon, and description. On Facebook, only admins and moderators can change it.' },
  ],
  related: [
    { label: 'WhatsApp group description templates', path: hubPath('whatsapp', 'description') },
    { label: 'Facebook group description templates', path: hubPath('facebook', 'description') },
    { label: 'WhatsApp group introduction messages', path: EXTRA_PATHS.introduction },
  ],
  updated: EXTRAS_UPDATED,
};

// ─── Facebook Page welcome messages and Messenger greetings ─────────────────

const pageWelcome: PseoPageData = {
  path: EXTRA_PATHS.pageWelcome,
  family: 'templates',
  eyebrow: 'Facebook Page Templates',
  h1: 'Facebook Page Welcome Messages and Messenger Greeting Examples',
  metaTitle: 'Facebook Messenger Greeting Examples + Page Welcome Messages',
  metaDescription: 'Copy-paste Messenger greeting and instant reply examples for your Facebook Page, plus welcome posts for new followers and "please like our page" invite messages.',
  intro: 'A Facebook Page can greet people automatically in Messenger before and after they message you. These examples cover greetings, instant replies, away messages, and posts that welcome new followers.',
  breadcrumbs: crumbs('Facebook Page Welcome Message', EXTRA_PATHS.pageWelcome),
  blocks: [
    { type: 'callout', content: 'Looking for messages to welcome new members to a Facebook group instead? See the Facebook group welcome message templates linked below. This page is for Facebook Pages (businesses, creators, organizations).' },
    { type: 'h2', content: 'Messenger greeting examples' },
    { type: 'p', content: 'The greeting is the short message people see when they open a chat with your Page, before they type anything. Keep it to one or two sentences.' },
    { type: 'copy', label: 'Simple and friendly', text: 'Hi there! 👋 Thanks for stopping by [Page Name]. How can we help you today?' },
    { type: 'copy', label: 'Shop or e-commerce', text: 'Welcome to [Store Name]! 🛍️ Ask us about sizes, stock, or delivery and we\'ll get back to you shortly.' },
    { type: 'copy', label: 'Restaurant or café', text: 'Hi! 🍽️ Want to book a table, order, or check today\'s menu? Send us a message and we\'ll reply right away.' },
    { type: 'copy', label: 'Service business', text: 'Hello! Thanks for contacting [Business Name]. Tell us a little about what you need and we\'ll reply within [time].' },
    { type: 'copy', label: 'Creator or personal brand', text: 'Hey, thanks for reaching out! 😊 I read every message myself, so it might take me a little while to reply.' },
    { type: 'copy', label: 'Nonprofit or community organization', text: 'Welcome to [Organization]! 🙌 Ask us about volunteering, events, or how to get help, and our team will reply soon.' },

    { type: 'h2', content: 'Instant reply examples (sent after the first message)' },
    { type: 'copy', label: 'General instant reply', text: 'Thanks for your message, [first name]! We\'ve received it and will reply within [time]. In the meantime, you can find answers to common questions here: [link].' },
    { type: 'copy', label: 'With business hours', text: 'Hi [first name], thanks for getting in touch! Our team is online [days], [hours]. We\'ll get back to you as soon as we can.' },
    { type: 'copy', label: 'Orders and bookings', text: 'Thanks for reaching out! To help us faster, please send your [order number / preferred date and time] and we\'ll take it from there.' },
    { type: 'copy', label: 'Away message (outside hours)', text: 'Hi! We\'re away right now, but your message is safe with us. We\'ll reply first thing [tomorrow / on Monday]. For anything urgent, call [number].' },

    { type: 'h2', content: 'Welcome posts for new Page followers' },
    { type: 'copy', label: 'Welcome new followers', text: '👋 A big welcome to everyone who followed us this week!\n\nHere\'s what you can expect from [Page Name]: [what you post].\n\nTell us in the comments: [easy question]?' },
    { type: 'copy', label: 'Milestone thank-you', text: '🎉 We just reached [number] followers! Thank you for being part of the [Page Name] community. To celebrate, [offer / giveaway / behind-the-scenes post]. Here\'s to the next [number]!' },
    { type: 'copy', label: 'Pinned "start here" post', text: '📌 New here? Start with this post.\n\nWe\'re [Page Name], and we [what you do].\n✅ [Link 1: best product / service]\n✅ [Link 2: popular post or guide]\n✅ Message us anytime with questions\n\nThanks for following!' },

    { type: 'h2', content: '"Please like our page" invite messages' },
    { type: 'copy', label: 'Invite friends to like a business page', text: 'Hi [Name]! I\'ve just started a Page for [Business Name], where I share [what you post]. I\'d really appreciate it if you could give it a like and share it with anyone who might be interested. Thank you! 🙏 [link]' },
    { type: 'copy', label: 'Short invite', text: 'Hey! I\'ve launched [Page Name] for [topic]. Would mean a lot if you gave it a like 😊 [link]' },
    { type: 'copy', label: 'Community or cause page', text: 'Hello! We\'ve created a Page for [cause / community] to share updates and events. Please like and follow to stay in the loop, and invite anyone who\'d want to be part of it. [link]' },

    { type: 'h2', content: 'How to set up a Messenger greeting and instant reply' },
    { type: 'ol', items: [
      'Open Meta Business Suite (business.facebook.com or the app) and select your Page.',
      'Go to Inbox, then Automations.',
      'Choose "Instant reply" (and, where offered, the Messenger greeting) and turn it on.',
      'Paste your message. Use the "Add personalization" option to insert the person\'s first name.',
      'Save, then send a test message from a personal account to check it.',
    ] },
    { type: 'p', content: 'Meta changes these menus often and sets character limits on each field. If a label looks different, look for Automations or Saved replies in your Page\'s inbox. If you connect a third-party chatbot tool, turn the built-in automations off first so people do not get two replies.' },

    { type: 'h2', content: 'Tips for Page greetings that get replies' },
    { type: 'ul', items: [
      'Ask a question. "How can we help?" gets more replies than "Thanks for visiting".',
      'Say when you will reply, and keep that promise.',
      'Use the person\'s first name in instant replies.',
      'Link to your most common answer (prices, menu, delivery) to save both of you time.',
      'Keep greetings short. People read them on a phone, in a small chat window.',
    ] },
    { type: 'links', heading: 'Related templates', links: [
      { label: 'Facebook group welcome message templates', path: hubPath('facebook', 'welcome-message'), desc: 'For welcoming new group members' },
      { label: 'Facebook group description templates', path: hubPath('facebook', 'description') },
      { label: 'Facebook group post ideas', path: IDEAS_PATHS.facebook },
      { label: 'How to promote a Facebook group', path: '/guides/how-to-promote-a-facebook-group' },
    ] },
    { type: 'cta', role: 'advertiser', headline: 'Want more people to find your Page?', body: 'Rent My Group lets you place approved posts inside Facebook and WhatsApp groups full of your ideal customers, and you only work with admins who agree.', buttonText: 'I Want to Advertise' },
  ],
  faq: [
    { q: 'What is a Messenger greeting on Facebook?', a: 'It is a short message your Page shows to people when they open a Messenger chat with you, before they send anything. It is set up in Meta Business Suite under Inbox automations.' },
    { q: 'What should I write in a Facebook Page welcome message?', a: 'Greet the person, say what your Page can help with, and ask a question that invites a reply, such as "How can we help you today?" Add your reply time if you are not always online.' },
    { q: 'What is the difference between a greeting and an instant reply?', a: 'A greeting appears before someone messages you. An instant reply is sent automatically right after their first message, usually to confirm you received it and say when you will respond.' },
    { q: 'How do I welcome new followers on my Facebook Page?', a: 'Post a weekly welcome that thanks new followers, tells them what you post, and asks an easy question in the comments. A pinned "start here" post also helps.' },
  ],
  related: [
    { label: 'Facebook group welcome messages', path: hubPath('facebook', 'welcome-message') },
    { label: 'WhatsApp group introduction messages', path: EXTRA_PATHS.introduction },
    { label: 'Facebook group advertising', path: '/facebook-group-advertising' },
  ],
  updated: EXTRAS_UPDATED,
};

export const extraPages: PseoPageData[] = [introduction, groupDescription, pageWelcome];
