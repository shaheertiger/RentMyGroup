// Templates family: platform × template type hubs, and niche pages under each hub.
//   /templates                                   -> family index
//   /templates/{platform}-group-{type}           -> hub (head keyword)
//   /templates/{platform}-group-{type}/{niche}   -> niche page
import { niches, getNiche, NICHE_CATEGORIES, Niche } from './niches.ts';
import { PseoBlock, PseoFaq, PseoLink, PseoPageData, PSEO_UPDATED } from './types.ts';

export type Platform = 'facebook' | 'whatsapp';
export type TemplateType = 'description' | 'rules' | 'welcome-message';

export const PLATFORMS: Platform[] = ['facebook', 'whatsapp'];
export const TEMPLATE_TYPES: TemplateType[] = ['description', 'rules', 'welcome-message'];

const PLATFORM_LABEL: Record<Platform, string> = { facebook: 'Facebook', whatsapp: 'WhatsApp' };
const TYPE_LABEL: Record<TemplateType, string> = {
  description: 'Description',
  rules: 'Rules',
  'welcome-message': 'Welcome Message',
};
const TYPE_LABEL_PLURAL: Record<TemplateType, string> = {
  description: 'Descriptions',
  rules: 'Rules',
  'welcome-message': 'Welcome Messages',
};

export const hubPath = (p: Platform, t: TemplateType) => `/templates/${p}-group-${t}`;
export const nichePath = (p: Platform, t: TemplateType, n: string) => `${hubPath(p, t)}/${n}`;
export const IDEAS_PATHS: Record<Platform, string> = {
  facebook: '/templates/facebook-group-post-ideas',
  whatsapp: '/templates/whatsapp-group-ideas',
};

const lc = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const listJoin = (items: string[]) =>
  items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;

// ─── Generic rules every group needs, merged with each niche's own rules ─────
const BASE_RULES: [string, string][] = [
  ['Be kind and respectful', 'Healthy debate is fine, but personal attacks, harassment, and hate speech are not.'],
  ['No spam or unapproved promotion', 'Self-promotion, affiliate links, and ads need admin approval first.'],
  ['Respect everyone\'s privacy', 'What members share here stays here. No screenshots or sharing outside the group without permission.'],
  ['Stay on topic', 'Keep posts relevant to the group so the feed stays useful for everyone.'],
  ['Report, don\'t retaliate', 'If something breaks the rules, report it to an admin instead of arguing in the comments.'],
];

const WA_EXTRA_RULES: [string, string][] = [
  ['No chain forwards', 'Forwarded rumors, chain messages, and unverified news are deleted.'],
  ['Quiet hours 10pm–7am', 'Avoid non-urgent messages overnight. Members can mute, but be considerate.'],
];

const FB_EXTRA_RULES: [string, string][] = [
  ['Search before you post', 'Your question may already be answered. Use the group search first.'],
  ['Admins have the final say', 'Admins may remove posts or members that go against the spirit of the group.'],
];

// ─── Template text generators ────────────────────────────────────────────────

function descriptionTemplates(n: Niche, p: Platform): { label: string; text: string; note?: string }[] {
  const [t1, t2, t3, t4] = n.topics;
  const r = n.rules;
  if (p === 'facebook') {
    return [
      {
        label: 'Short and clear',
        text: `Welcome to [Group Name]! This is a group for ${n.members} to ${n.purpose}. Share ${t1}, ${t2}, and ${t3}. Please read the group rules before posting. In short: ${lc(r[0][0])}, ${lc(r[1][0])}, and be kind.`,
      },
      {
        label: 'Detailed (sections)',
        text: `${n.emoji} [Group Name]\n\nA community for ${n.members} to ${n.purpose}.\n\nWhat you'll find here:\n• ${cap(t1)}\n• ${cap(t2)}\n• ${cap(t3)}\n• ${cap(t4)}\n\nWho it's for: ${cap(n.members)} of every experience level${n.category === 'Local & Community' ? ' in [City / Area]' : ''}.\n\nBefore you post:\n• ${r[0][0]}\n• ${r[1][0]}\n• ${r[2][0]}\n\nQuestions? Message any admin. We're glad you're here.`,
        note: 'Facebook shows the first few lines of the description on the About section, so lead with who the group is for.',
      },
      {
        label: 'Friendly and casual',
        text: `Hey ${n.members}! ${n.emoji}\n\nThis is your place to ${n.purpose}. Whether you're here for ${t1} or just want to talk about ${t4}, you're in the right spot.\n\nThe only must-dos: ${lc(r[0][0])}, keep it kind, and say hi in the welcome post. 👋`,
      },
      {
        label: 'Official / organization',
        text: `[Group Name] is the official ${n.name.toLowerCase()} community of [Organization / Area]. The group is moderated by volunteer admins and exists to help ${n.members} ${n.purpose}.\n\nMembership is approved after answering the membership questions. Posts that break the group rules may be removed without notice. Business and promotional posts are only allowed where the rules say so.`,
      },
    ];
  }
  return [
    {
      label: 'Short (fits above "Read more")',
      text: `${n.emoji} ${n.name} group for ${n.members} to ${n.purpose}. ${r[0][0]}. No spam. Be kind.`,
      note: 'WhatsApp only shows the first lines of a group description before "Read more", so the short version carries the essentials.',
    },
    {
      label: 'Structured with emoji',
      text: `${n.emoji} *[Group Name]*\n\n📌 *Purpose:* ${cap(n.purpose)}.\n\n✅ *Share:* ${t1}, ${t2}, ${t3}.\n\n🚫 *Not allowed:* spam, chain forwards, ${lc(r[1][0])}.\n\n⏰ *Quiet hours:* 10pm–7am\n\n👤 *Admins:* [Name], [Name]`,
      note: 'Wrap words in *asterisks* to make them bold in WhatsApp.',
    },
    {
      label: 'Friendly',
      text: `Welcome to the ${n.name.toLowerCase()} crew! ${n.emoji}\nThis group is for ${n.members} who want to ${n.purpose}. Chat about ${t1}, ${t2}, and anything in between.\nHouse rules: ${lc(r[0][0])}, ${lc(r[2][0])}, and keep it friendly. 🙌`,
    },
    {
      label: 'Formal / announcements',
      text: `Official WhatsApp group for [Organization / Area] ${n.members}.\nPurpose: ${n.purpose}.\nOnly relevant messages please. ${r[0][1]}\nContact the admins for anything else: [Name] [Number].`,
    },
  ];
}

function rulesTemplates(n: Niche, p: Platform): { label: string; text: string; note?: string }[] {
  const extras = p === 'whatsapp' ? WA_EXTRA_RULES : FB_EXTRA_RULES;
  const full: [string, string][] = [BASE_RULES[0], ...n.rules, BASE_RULES[1], BASE_RULES[2], ...extras, BASE_RULES[3], BASE_RULES[4]].slice(0, 10);
  const short: [string, string][] = [BASE_RULES[0], n.rules[0], n.rules[1], BASE_RULES[1], extras[0]];
  if (p === 'facebook') {
    return [
      {
        label: 'Full rule set (10 rules, ready for the Rules section)',
        text: full.map(([t, d], i) => `${i + 1}. ${t}\n${d}`).join('\n\n'),
        note: 'Facebook groups have a dedicated Rules section that takes a title and a description per rule. Paste each rule in separately.',
      },
      {
        label: 'Short version (5 rules)',
        text: short.map(([t, d], i) => `${i + 1}. ${t}: ${d}`).join('\n'),
      },
      {
        label: 'Pinned announcement',
        text: `📌 GROUP RULES: please read before posting\n\nWelcome to [Group Name]! To keep this a great place for ${n.members}:\n\n${short.map(([t], i) => `${i + 1}. ${t}`).join('\n')}\n\nPosts that break these rules will be removed. Repeated breaks mean removal from the group. Thanks for helping us keep this community useful. ${n.emoji}`,
      },
    ];
  }
  return [
    {
      label: 'Full rules message (pin it)',
      text: `*${n.emoji} [Group Name] Rules*\n\n${full.map(([t, d], i) => `*${i + 1}. ${t}*\n${d}`).join('\n\n')}\n\nBreaking the rules = a warning, then removal.`,
      note: 'Pin this message so new members see it. You can also paste the short version into the group description.',
    },
    {
      label: 'Short rules for the group description',
      text: `📜 *Rules*\n${short.map(([t], i) => `${i + 1}. ${t}`).join('\n')}`,
    },
    {
      label: 'Gentle reminder (send when the chat drifts)',
      text: `Hi everyone 👋 quick reminder of our ${n.name.toLowerCase()} group rules: ${lc(n.rules[0][0])}, ${lc(n.rules[1][0])}, no chain forwards, and please keep it on topic. Thanks for keeping the group useful! ${n.emoji}`,
    },
  ];
}

function welcomeTemplates(n: Niche, p: Platform): { label: string; text: string; note?: string }[] {
  if (p === 'facebook') {
    return [
      {
        label: 'Weekly welcome post (tag new members)',
        text: `${n.emoji} Please welcome our newest members! [tag new members]\n\nWe're a community of ${n.members} who ${n.purpose}. To kick things off, ${n.welcomeAsk} in the comments.\n\nA few quick tips:\n• Read the rules (${lc(n.rules[0][0])}!)\n• Use the search bar before asking a question\n• Turn on notifications for announcements\n\nGlad to have you here!`,
        note: 'Facebook can draft a welcome post that tags recent members. Post it on the same day every week so it becomes a habit.',
      },
      {
        label: 'Short welcome comment',
        text: `Welcome to the group! ${n.emoji} We'd love to hear from you. ${cap(n.welcomeAsk)}.`,
      },
      {
        label: 'Welcome message for approved members',
        text: `Hi [Name], thanks for joining [Group Name]! This is where ${n.members} ${n.purpose}. Start by reading the pinned rules, then introduce yourself in the welcome post. If you need anything, message an admin.`,
      },
      {
        label: 'Introduce-yourself thread',
        text: `👋 NEW MEMBER INTRODUCTIONS\n\nNew here? Comment below with:\n1. Your first name\n2. ${cap(n.welcomeAsk)}\n3. What you'd like to get out of this group\n\nThen say hi to someone else who just joined!`,
      },
    ];
  }
  return [
    {
      label: 'Welcome message for one new member',
      text: `Welcome to the group, [Name]! ${n.emoji}\nThis is where we ${n.purpose}. Please read the rules in the group description. To get started, ${n.welcomeAsk}. 😊`,
    },
    {
      label: 'Welcome several new members',
      text: `👋 A warm welcome to everyone who just joined!\nWe're ${n.members} here to ${n.purpose}.\n✅ Rules are in the group description\n✅ ${n.rules[0][0]}\nNow over to you: ${n.welcomeAsk}!`,
    },
    {
      label: 'Short and casual',
      text: `Hey [Name], welcome! ${n.emoji} ${cap(n.welcomeAsk)}.`,
    },
    {
      label: 'Formal welcome',
      text: `Dear [Name], welcome to [Group Name]. This group exists to help ${n.members} ${n.purpose}. Please review the group rules in the description and keep messages relevant. For any questions, contact the admins. Thank you.`,
      note: 'Copy this into a WhatsApp Business quick reply (for example /welcome) so admins can send it in two taps.',
    },
  ];
}

const generators: Record<TemplateType, typeof descriptionTemplates> = {
  description: descriptionTemplates,
  rules: rulesTemplates,
  'welcome-message': welcomeTemplates,
};

// ─── Platform × type guidance shared by the hub and niche pages ─────────────

const TIPS: Record<Platform, Record<TemplateType, string[]>> = {
  facebook: {
    description: [
      'Lead with who the group is for. People decide to join in the first line.',
      'Name the topics members can post about so the right people request to join.',
      'Mention the rules in one sentence and point to the Rules section for the full list.',
      'If your group is local, put the city or area in the description and the group name.',
      'Update the description when the group changes focus. An outdated description attracts the wrong members.',
    ],
    rules: [
      'Keep each rule short: a clear title plus one or two sentences of explanation.',
      'Put the rules that are broken most often at the top.',
      'Say what happens when a rule is broken (removal, warning, ban) so moderation feels fair.',
      'Ask new members to agree to the rules in your membership questions.',
      'Revisit your rules every few months and remove ones you never enforce.',
    ],
    'welcome-message': [
      'Post a welcome thread on the same day each week and tag everyone who joined.',
      'Give new members one easy thing to do, like answering a single question.',
      'Point to the rules and the search bar so new members do not repeat old questions.',
      'Reply to introductions. A welcome from an admin makes people come back.',
      'Use a pinned introductions thread if your group gets dozens of new members a day.',
    ],
  },
  whatsapp: {
    description: [
      'Only the first lines show before "Read more", so put the purpose first.',
      'Use emoji and line breaks to make sections easy to scan on a phone.',
      'Bold key words with *asterisks* (for example *Rules*).',
      'List the admins so members know who to contact.',
      'Put quiet hours in the description if your group spans time zones.',
    ],
    rules: [
      'Pin the rules message so it stays at the top of the chat.',
      'Keep a short version in the group description for people who never scroll.',
      'Ban chain forwards explicitly. They are the most common WhatsApp group complaint.',
      'Consider admin-only messaging for announcement groups.',
      'Send a friendly reminder when the chat drifts instead of removing people straight away.',
    ],
    'welcome-message': [
      'Welcome new members by name so they feel noticed in a busy chat.',
      'Batch welcomes once a day if lots of people join through an invite link.',
      'Point to the rules in the group description rather than pasting them in full.',
      'Ask one easy question to get the new member talking.',
      'Save your welcome text as a quick reply in WhatsApp Business to send it faster.',
    ],
  },
};

const HOW_TO_EDIT: Record<Platform, Record<TemplateType, string>> = {
  facebook: {
    description: 'Open your group, go to the group settings (on desktop: Admin tools, then Settings), choose "Name and description", paste your text, and save.',
    rules: 'Open your group, go to Admin tools, choose "Group rules", then add each rule with a title and details. You can add up to 10 rules.',
    'welcome-message': 'Write a new post in your group with your welcome text and tag recent members, or pin it as an announcement so new members see it first.',
  },
  whatsapp: {
    description: 'Open the group chat, tap the group name at the top, tap the description (or "Add group description"), paste your text, and save. If admins restricted group info edits, only admins can change it.',
    rules: 'Send the rules as a message, then long-press it and choose Pin. Paste the short version into the group description as well.',
    'welcome-message': 'Send the welcome message in the group when someone joins. In WhatsApp Business, save it as a quick reply so you can insert it with a shortcut.',
  },
};

// ─── Page builders ───────────────────────────────────────────────────────────

const nicheLinks = (p: Platform, t: TemplateType, exclude?: string): PseoBlock[] =>
  NICHE_CATEGORIES.map((cat) => ({
    type: 'links' as const,
    heading: cat,
    links: niches
      .filter((n) => n.category === cat && n.slug !== exclude)
      .map((n) => ({ label: `${n.emoji} ${n.name}`, path: nichePath(p, t, n.slug) })),
  })).filter((b) => b.links.length > 0);

const typeNoun = (t: TemplateType) => (t === 'rules' ? 'rules' : TYPE_LABEL[t].toLowerCase());

function buildHub(p: Platform, t: TemplateType): PseoPageData {
  const P = PLATFORM_LABEL[p];
  const T = TYPE_LABEL[t];
  const generic: Niche = {
    slug: 'general', name: 'Community', category: 'Local & Community', emoji: '✨', members: 'members',
    purpose: 'share ideas, ask questions, and help each other',
    topics: ['questions and answers', 'tips and resources', 'wins and updates', 'events'],
    rules: [
      ['Introduce yourself', 'Say hello in the welcome post so members get to know you.'],
      ['No hate speech or bullying', 'Make sure everyone feels safe. Bullying and degrading comments are not allowed.'],
      ['Give more than you take', 'Answer questions and share useful things, not just requests.'],
    ],
    welcomeAsk: 'tell us a little about yourself and what brought you here',
    sponsors: ['relevant brands', 'local businesses', 'online services'],
  };
  const templates = generators[t](generic, p);
  const h1 = `${P} Group ${t === 'rules' ? 'Rules' : TYPE_LABEL_PLURAL[t]}: Templates and Examples`;
  const blocks: PseoBlock[] = [
    { type: 'h2', content: `${templates.length} ${P} group ${typeNoun(t)} templates you can copy` },
    ...templates.map((x) => ({ type: 'copy' as const, label: x.label, text: x.text, note: x.note })),
    { type: 'h2', content: `How to write a good ${P} group ${typeNoun(t)}` },
    { type: 'ol', items: TIPS[p][t] },
    { type: 'h2', content: `How to add it to your ${P} group` },
    { type: 'p', content: HOW_TO_EDIT[p][t] },
    { type: 'h2', content: `${P} group ${typeNoun(t)} templates by niche`, id: 'by-niche' },
    { type: 'p', content: `Pick your group's niche to get ${typeNoun(t)} written for it, with topics and rules that fit the members you actually have.` },
    ...nicheLinks(p, t),
    {
      type: 'cta', role: 'admin',
      headline: `Turn your ${P} group into income`,
      body: `Once your group is set up and active, advertisers will pay to reach it. List your group on Rent My Group for free, set your own rates, and approve every sponsored post.`,
      buttonText: 'List My Group Free',
    },
  ];
  const faq: PseoFaq[] = [
    { q: `Can I copy these ${P} group ${typeNoun(t)} templates?`, a: 'Yes. Every template on this page is free to copy and edit. Replace the text in [brackets] with your own details.' },
    { q: `How do I change my ${P} group ${typeNoun(t)}?`, a: HOW_TO_EDIT[p][t] },
    t === 'description'
      ? { q: `How long should a ${P} group description be?`, a: p === 'whatsapp' ? 'Put the essentials in the first two lines, because WhatsApp hides the rest behind "Read more". A longer structured description underneath is fine for rules and admin contacts.' : 'Two to five short paragraphs is plenty. The first sentence matters most because it is what people read when deciding whether to join.' }
      : t === 'rules'
        ? { q: `How many rules should a ${P} group have?`, a: p === 'facebook' ? 'Between 5 and 10. Facebook lets you add up to 10 rules, and fewer rules that you actually enforce work better than a long list.' : 'Five to ten short rules in a pinned message, plus a three to five line summary in the group description.' }
        : { q: `When should I send a welcome message in a ${P} group?`, a: p === 'facebook' ? 'Once a week in a single post that tags all new members works for most groups. Very large groups can welcome daily.' : 'As soon as someone joins in small groups. In busy groups, send one welcome a day for everyone who joined.' },
  ];
  return {
    path: hubPath(p, t),
    family: 'templates',
    eyebrow: `${P} Group Templates`,
    h1,
    metaTitle: `${P} Group ${t === 'rules' ? 'Rules' : T}: ${templates.length} Templates + ${niches.length} Niche Examples`,
    metaDescription: `Copy-paste ${P} group ${typeNoun(t)} templates and examples for ${niches.length} niches, plus tips on writing one that attracts the right members.`,
    intro: `Free ${P} group ${typeNoun(t)} templates you can copy, edit, and paste in under a minute. Start with a general template below, or pick your niche for one written for your kind of group.`,
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Templates', path: '/templates' },
      { label: `${P} Group ${T}`, path: hubPath(p, t) },
    ],
    blocks,
    faq,
    related: [
      ...TEMPLATE_TYPES.filter((x) => x !== t).map((x) => ({ label: `${P} group ${typeNoun(x)} templates`, path: hubPath(p, x) })),
      { label: `${PLATFORM_LABEL[p === 'facebook' ? 'whatsapp' : 'facebook']} group ${typeNoun(t)} templates`, path: hubPath(p === 'facebook' ? 'whatsapp' : 'facebook', t) },
      { label: p === 'facebook' ? 'Facebook group post ideas' : 'WhatsApp group ideas', path: IDEAS_PATHS[p] },
    ],
    updated: PSEO_UPDATED,
  };
}

function buildNichePage(p: Platform, t: TemplateType, n: Niche): PseoPageData {
  const P = PLATFORM_LABEL[p];
  const T = TYPE_LABEL[t];
  const noun = typeNoun(t);
  const templates = generators[t](n, p);
  const sameCategory = niches.filter((x) => x.category === n.category && x.slug !== n.slug).slice(0, 6);
  const blocks: PseoBlock[] = [
    { type: 'h2', content: `${templates.length} ${n.name.toLowerCase()} ${P} group ${noun} templates` },
    ...templates.map((x) => ({ type: 'copy' as const, label: x.label, text: x.text, note: x.note })),
    { type: 'h2', content: `What to include in a ${n.name.toLowerCase()} group ${noun}` },
  ];
  if (t === 'rules') {
    blocks.push(
      { type: 'p', content: `General rules like "be kind" apply to every group. These are the rules ${n.name.toLowerCase()} groups need on top of them:` },
      { type: 'table', headers: ['Rule', 'Why it matters'], rows: n.rules.map(([a, b]) => [a, b]) },
    );
  } else if (t === 'description') {
    blocks.push(
      { type: 'p', content: `People join a ${n.name.toLowerCase()} group when the description tells them exactly what they will get. Mention the topics members actually post about:` },
      { type: 'ul', items: n.topics.map(cap) },
      { type: 'p', content: `Then add the one rule that matters most for this niche: "${n.rules[0][0]}". ${n.rules[0][1]}` },
    );
  } else {
    blocks.push(
      { type: 'p', content: `The best welcome messages give new ${n.members} one easy way to join the conversation. For a ${n.name.toLowerCase()} group, ask them to ${n.welcomeAsk}.` },
      { type: 'p', content: `Point new members to the rule that trips people up most often in this niche: "${n.rules[0][0]}".` },
    );
  }
  blocks.push(
    { type: 'h2', content: `Tips for ${P}` },
    { type: 'ul', items: TIPS[p][t] },
    { type: 'h2', content: `How to add it to your ${P} group` },
    { type: 'p', content: HOW_TO_EDIT[p][t] },
    { type: 'h2', content: `More templates for ${n.name.toLowerCase()} groups` },
    {
      type: 'links',
      links: [
        ...TEMPLATE_TYPES.filter((x) => x !== t).map((x) => ({ label: `${n.name} ${P} group ${typeNoun(x)}`, path: nichePath(p, x, n.slug) })),
        { label: `${n.name} ${PLATFORM_LABEL[p === 'facebook' ? 'whatsapp' : 'facebook']} group ${noun}`, path: nichePath(p === 'facebook' ? 'whatsapp' : 'facebook', t, n.slug) },
      ],
    },
    { type: 'h2', content: `Can a ${n.name.toLowerCase()} group make money?` },
    { type: 'p', content: `Yes. Engaged ${n.name.toLowerCase()} groups are exactly the audience that ${listJoin(n.sponsors)} want to reach. Instead of guessing with ads, they pay group owners to share approved, relevant offers with members.` },
    {
      type: 'cta', role: 'admin',
      headline: `Get paid by brands that want to reach your ${n.name.toLowerCase()} group`,
      body: `List your ${P} group on Rent My Group for free. You set the rates and approve every sponsored post, so your members only see offers that fit.`,
      buttonText: 'List My Group Free',
    },
  );
  const faq: PseoFaq[] = [
    { q: `Can I use these ${n.name.toLowerCase()} group ${noun} templates for free?`, a: 'Yes. Copy any template, replace the text in [brackets], and edit it to sound like you.' },
    { q: `How do I change the ${noun} of my ${P} group?`, a: HOW_TO_EDIT[p][t] },
    { q: `What should a ${n.name.toLowerCase()} group be about?`, a: `Most ${n.name.toLowerCase()} groups exist to help ${n.members} ${n.purpose}. Popular topics include ${listJoin(n.topics)}.` },
  ];
  return {
    path: nichePath(p, t, n.slug),
    family: 'templates',
    eyebrow: `${n.emoji} ${n.name} · ${P} Group ${T}`,
    h1: `${n.name} ${P} Group ${T}: ${templates.length} Copy-Paste Templates`,
    metaTitle: `${n.name} ${P} Group ${T} Templates (Copy & Paste)`,
    metaDescription: `${templates.length} ready-to-use ${P} group ${noun} templates for ${n.name.toLowerCase()} groups, written for ${n.members} who ${n.purpose}. Copy, edit, and paste.`,
    intro: `Ready-to-use ${P} ${noun} templates for ${n.name.toLowerCase()} groups. Each one is written for ${n.members} who ${n.purpose}. Copy one, replace the [brackets], and paste it into your group.`,
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Templates', path: '/templates' },
      { label: `${P} Group ${T}`, path: hubPath(p, t) },
      { label: n.name, path: nichePath(p, t, n.slug) },
    ],
    blocks,
    faq,
    related: [
      ...sameCategory.map((x) => ({ label: `${x.name} ${P} group ${noun}`, path: nichePath(p, t, x.slug) })),
      { label: `All ${P} group ${noun} templates`, path: hubPath(p, t) },
    ],
    updated: PSEO_UPDATED,
  };
}

function buildTemplatesIndex(): PseoPageData {
  const links: PseoLink[] = [];
  for (const p of PLATFORMS) for (const t of TEMPLATE_TYPES) {
    links.push({ label: `${PLATFORM_LABEL[p]} group ${typeNoun(t)}`, path: hubPath(p, t), desc: `${niches.length} niche templates` });
  }
  return {
    path: '/templates',
    family: 'templates',
    eyebrow: 'Free Templates',
    h1: 'Free Facebook and WhatsApp Group Templates',
    metaTitle: 'Facebook & WhatsApp Group Templates: Descriptions, Rules, Welcome Messages',
    metaDescription: `Free copy-paste group descriptions, rules, and welcome messages for Facebook and WhatsApp groups, with templates for ${niches.length} niches.`,
    intro: `Everything you need to set up a group people actually want to join: descriptions, rules, and welcome messages for Facebook and WhatsApp, written for ${niches.length} different kinds of communities.`,
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Templates', path: '/templates' }],
    blocks: [
      { type: 'links', heading: 'Templates by type', links },
      {
        type: 'links', heading: 'Ideas to keep your group active',
        links: [
          { label: 'Facebook group post ideas', path: IDEAS_PATHS.facebook, desc: 'Engagement posts, theme days, games, and contests' },
          { label: 'WhatsApp group ideas', path: IDEAS_PATHS.whatsapp, desc: 'Games, daily activities, and monthly themes' },
        ],
      },
      {
        type: 'cta', role: 'admin',
        headline: 'Built a great group? Get paid for it.',
        body: 'Rent My Group connects active Facebook and WhatsApp groups with advertisers who want to reach them. Free to list, and you approve every post.',
        buttonText: 'List My Group Free',
      },
    ],
    faq: [
      { q: 'Are these group templates free?', a: 'Yes. Every template is free to copy, edit, and use in your group.' },
      { q: 'Do the templates work for Telegram or Discord groups too?', a: 'The WhatsApp templates work well for Telegram, and the Facebook rules templates adapt easily for Discord server rules. Adjust platform-specific features like pinned messages.' },
    ],
    related: [{ label: 'Guides for group owners and advertisers', path: '/guides' }, { label: 'Group how-to guides', path: '/how-to' }],
    updated: PSEO_UPDATED,
  };
}

// ─── Public API ──────────────────────────────────────────────────────────────

export function getTemplatePage(path: string): PseoPageData | null {
  if (path === '/templates') return buildTemplatesIndex();
  const m = path.match(/^\/templates\/(facebook|whatsapp)-group-(description|rules|welcome-message)(?:\/([a-z0-9-]+))?$/);
  if (!m) return null;
  const p = m[1] as Platform;
  const t = m[2] as TemplateType;
  if (!m[3]) return buildHub(p, t);
  const n = getNiche(m[3]);
  return n ? buildNichePage(p, t, n) : null;
}

export function templatePaths(): string[] {
  const out = ['/templates'];
  for (const p of PLATFORMS) for (const t of TEMPLATE_TYPES) {
    out.push(hubPath(p, t));
    for (const n of niches) out.push(nichePath(p, t, n.slug));
  }
  return out;
}
