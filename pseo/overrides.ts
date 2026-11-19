// Hand-written upgrades for generated template pages whose Search Console data
// showed demand the generated copy did not fully answer (Nov 2026):
//   whatsapp/description/family          pos 6.8, 89 impressions, 0 clicks; "family group description for whatsapp" 480/mo IN
//   whatsapp/description/small-business  pos 40; searchers want a business-to-customer group description
//                                         ("whatsapp group description for business" 480 IN + 210 US)
//   whatsapp/description (hub)           pos 10, 1.9% CTR
// Keys are `${platform}/${type}` for hubs and `${platform}/${type}/${niche}` for niche pages.
import { PseoBlock, PseoFaq, PseoLink } from './types.ts';

export interface PageOverride {
  h1?: string;
  metaTitle?: string;
  metaDescription?: string;
  intro?: string;
  /** Inserted right after the generated copy-paste templates. */
  extraBlocks?: PseoBlock[];
  /** Appended after the generated FAQ. */
  extraFaq?: PseoFaq[];
  /** Added to the start of the related links. */
  extraRelated?: PseoLink[];
  updated?: string;
}

const UPDATED = '2026-11-19';
const INTRO_PATH = '/templates/whatsapp-group-introduction-message';
const GROUP_DESC_PATH = '/templates/group-description';
const PAGE_WELCOME_PATH = '/templates/facebook-page-welcome-message';

export const PAGE_OVERRIDES: Record<string, PageOverride> = {
  // ─── Hubs: cross-links to the wave 3 pages ─────────────────────────────────
  'whatsapp/description': {
    metaTitle: 'WhatsApp Group Description Examples: 200+ to Copy & Paste',
    metaDescription: 'WhatsApp group description examples for family, business, class, friends, church, and 45 more kinds of groups. Short and long versions, ready to copy and paste.',
    extraBlocks: [
      { type: 'links', heading: 'Popular WhatsApp group descriptions', links: [
        { label: 'Family group description', path: '/templates/whatsapp-group-description/family' },
        { label: 'Business group description', path: '/templates/whatsapp-group-description/small-business' },
        { label: 'Class group description', path: '/templates/whatsapp-group-description/class' },
        { label: 'Friends group description', path: '/templates/whatsapp-group-description/friends' },
        { label: 'What is a group description? (meaning + examples)', path: GROUP_DESC_PATH },
      ] },
    ],
    updated: UPDATED,
  },
  'facebook/description': {
    extraRelated: [{ label: 'What is a group description? (meaning + examples)', path: GROUP_DESC_PATH }],
  },
  'whatsapp/welcome-message': {
    extraBlocks: [
      { type: 'callout', content: 'Joined a group and want to introduce yourself instead? See our WhatsApp group introduction message samples, linked below.' },
      { type: 'links', links: [{ label: 'WhatsApp group introduction messages (25 samples)', path: INTRO_PATH, desc: 'Introduce yourself, as an admin, as a teacher, or as a business' }] },
    ],
  },
  'facebook/welcome-message': {
    extraBlocks: [
      { type: 'callout', content: 'Need a welcome message for a Facebook Page (Messenger greetings and instant replies) rather than a group? See the Page welcome message examples, linked below.' },
      { type: 'links', links: [{ label: 'Facebook Page welcome messages and Messenger greetings', path: PAGE_WELCOME_PATH }] },
    ],
  },

  // ─── Family WhatsApp group description ─────────────────────────────────────
  'whatsapp/description/family': {
    h1: 'Family WhatsApp Group Description: 20+ Examples to Copy',
    metaTitle: 'Family Group Description for WhatsApp: 20+ Examples to Copy',
    metaDescription: 'Family group description ideas for WhatsApp: short, emotional, funny, and extended-family examples, plus welcome messages for new family members and get-together invitations.',
    intro: 'The best family WhatsApp group descriptions are short and warm, and quietly set the rules (family only, no forwards). Copy one of the 20+ examples below, add your surname, and paste it into Group info.',
    extraBlocks: [
      { type: 'h2', content: 'More family group description ideas' },
      { type: 'h3', content: 'Short (one line)' },
      { type: 'ul', items: [
        '❤️ The [Surname] family: news, photos, and love. Family only.',
        '🏠 Home is wherever this group is. No forwards, only family.',
        '👨‍👩‍👧‍👦 One family, many cities, one chat.',
        '📸 Photos, birthdays, and plans. Please keep forwards out!',
        '🙏 Our little family corner. Be kind, stay in touch.',
        '🎂 Never miss a birthday again. The [Surname] family chat.',
        '🌳 Roots in [hometown], branches everywhere.',
        '☕ Family news over virtual chai. Everyone welcome, forwards not.',
        '💬 Where the family stays connected, one message at a time.',
      ] },
      { type: 'h3', content: 'Emotional and heartfelt' },
      { type: 'copy', label: 'Close-knit family', text: "❤️ [Surname] Family\nDistance means nothing when we're all in one place, even if it's a chat. Share your news, your photos, and your little wins. Every message here is a hug from home. 🏡" },
      { type: 'copy', label: 'In memory / honoring grandparents', text: "🌳 Children and grandchildren of [Grandparents' names]\nWe started this group to keep the family together, the way [they] always did. Share memories, celebrate each other, and never miss a birthday. ❤️" },
      { type: 'h3', content: 'Funny family group descriptions' },
      { type: 'copy', label: 'Funny', text: "😂 The [Surname] Circus\nWhere Mom sends good-morning flowers, Dad replies \"ok\", and nobody answers the dinner poll. Rules: no politics, no forwards, and yes, we saw your message." },
      { type: 'copy', label: 'Funny and short', text: "🍲 Family group: 10% news, 20% photos, 70% \"who's bringing food?\" Join the chaos responsibly." },
      { type: 'h3', content: 'Extended family, cousins, and in-laws' },
      { type: 'copy', label: 'Cousins group', text: "👫 [Surname] Cousins\nThe group the parents don't know about 😄 For plans, throwbacks, birthday surprises, and keeping in touch across [cities]. What's shared here stays here." },
      { type: 'copy', label: 'Family abroad / across countries', text: "🌍 [Surname] Family Worldwide\nFrom [Country] to [Country], one family. Share photos, time-zone-friendly updates, and visit plans. Quiet hours: please be mindful of everyone's time zones 🕰️" },
      { type: 'copy', label: 'In-laws and both families', text: "💞 [Surname] & [Surname] Families\nBringing both families together after [couple's names] said \"I do\". A place to share news, plan visits, and get to know each other. Family only, please." },

      { type: 'h2', content: 'Welcome message for a new family member' },
      { type: 'copy', label: 'New daughter-in-law or son-in-law', text: "Welcome to the family group, [Name]! ❤️ We're so happy to have you with us. Get ready for lots of photos, birthday reminders, and dinner plans. Say hi to everyone! 🙏" },
      { type: 'copy', label: 'New partner', text: "Everyone, please welcome [Name], [relationship to family member], to our family group! 🎉 [Name], we can't wait to get to know you better. Fair warning: Aunty [Name] will ask when you're visiting. 😄" },
      { type: 'copy', label: 'New baby announcement', text: "👶 Our family just got bigger! Please welcome [Baby's name], born on [date] to [parents' names]. Mother and baby are doing well. Blessings and photos welcome! ❤️" },
      { type: 'copy', label: 'Greet the family (when you are added)', text: "Hello everyone 🙏 Thank you for adding me to the family group. It's lovely to be part of this family, and I look forward to meeting all of you at the next get-together!" },

      { type: 'h2', content: 'Get-together invitation message for family members' },
      { type: 'copy', label: 'Family get-together', text: "📢 Family get-together!\n\n📅 [Date] at [Time]\n📍 [Place / Address]\n🍲 [Lunch / Dinner / Potluck: please bring a dish]\n\nPlease reply with how many of you are coming by [date] so we can plan. Can't wait to see everyone! ❤️" },
      { type: 'copy', label: 'Festival or holiday celebration', text: "🎉 This [festival / holiday], let's celebrate together at [host's] place!\n[Date], from [time]. Kids, bring your best outfits for photos 📸 Reply 👍 if you're coming." },
      { type: 'copy', label: 'Family reunion', text: "🌳 [Surname] Family Reunion [Year]\nIt's been too long! We're planning a reunion on [date] at [place]. Please vote in the poll for the best date, and share this with any family members not in the group yet." },
    ],
    extraFaq: [
      { q: 'What is a good description for a family group on WhatsApp?', a: 'A short line that says who the group is for and sets one rule, for example: "The [Surname] family: news, photos, and love. Family only, no forwards." Add a longer section below it if you want more rules.' },
      { q: 'How do I welcome a new family member to a WhatsApp group?', a: 'Greet them by name, say how they are connected to the family, and give them something easy to reply to, like "Say hi to everyone!" See the welcome examples above for in-laws, partners, and new babies.' },
    ],
    extraRelated: [
      { label: 'Family WhatsApp group welcome message', path: '/templates/whatsapp-group-welcome-message/family' },
      { label: 'Family WhatsApp group rules', path: '/templates/whatsapp-group-rules/family' },
      { label: 'WhatsApp group introduction messages', path: INTRO_PATH },
    ],
    updated: UPDATED,
  },

  // ─── Business WhatsApp group description ───────────────────────────────────
  'whatsapp/description/small-business': {
    h1: 'WhatsApp Group Description for Business: 15+ Examples',
    metaTitle: 'WhatsApp Group Description for Business: 15+ Examples to Copy',
    metaDescription: 'WhatsApp group description examples for businesses: customer update groups, offers and new arrivals, shops, restaurants, salons, real estate, and business owner networks.',
    intro: 'Running a WhatsApp group for your customers, or for other business owners? Below are templates for both: customer-facing groups that share offers and updates, and peer groups for owners who swap advice and referrals.',
    extraBlocks: [
      { type: 'h2', content: 'Descriptions for customer groups' },
      { type: 'p', content: 'A customer group works best as an announcement group: only admins post, so members get updates without the noise. Say that in the description so people know what to expect.' },
      { type: 'copy', label: 'Shop updates and offers', text: "🛍️ *[Business Name] Updates*\nNew arrivals, offers, and store news, straight from us.\n\n📢 Only admins post here, so it stays quiet.\n🛒 To order: message [number] or visit [link]\n🕘 Open [days], [hours]\n\nYou can leave anytime. Thanks for supporting a local business! ❤️" },
      { type: 'copy', label: 'Offers and deals only', text: "🔥 [Business Name] Deals\nMembers-only offers, 1–2 messages a week, never spam. Message [number] to order. Reply STOP to the business number if you'd rather not get offers." },
      { type: 'copy', label: 'Online store / reseller', text: "📦 [Store Name]: New Stock Alerts\nWe post new products with prices and photos. To order, message [number] with the product photo. Delivery to [areas] in [days]. Payment: [methods]." },
      { type: 'copy', label: 'Restaurant or café', text: "🍽️ [Restaurant Name] Family\nDaily specials, new menu items, and events. Order on [number] or [link]. Open [hours]. Admin-only group, so no chat, just good food news." },
      { type: 'copy', label: 'Salon, spa, or beauty', text: "💇 [Salon Name] VIP\nFirst to hear about open slots, offers, and new services. Book by messaging [number]. Please don't share members' numbers outside this group." },
      { type: 'copy', label: 'Real estate listings', text: "🏠 [Agency / Agent] Property Updates: [Area]\nNew listings for sale and rent in [area], with price, size, and photos. Message [number] to schedule a visit. Listings only, no forwards." },
      { type: 'copy', label: 'Clients of a service business', text: "🧰 [Business Name] Clients\nFor scheduling updates, service reminders, and important notices. For anything about your own booking, message us directly at [number] so we can keep your details private." },
      { type: 'copy', label: 'Grocery or local delivery', text: "🛒 [Store Name]: Daily Fresh\nToday's fresh stock and prices, posted every morning by [time]. Order by replying to [number] before [time] for same-day delivery in [area]." },
      { type: 'copy', label: 'Home baker or food orders', text: "🎂 [Bakery Name] Orders\nWeekly menu every [day]. Order at least [number] days ahead by messaging [number]. Custom cakes on request. Pickup from [area] or delivery for [fee]." },
      { type: 'copy', label: 'Event organizer', text: "🎟️ [Organizer Name] Events\nUpcoming events, early-bird tickets, and venue updates. Book at [link]. Admin-only group, about one message a week." },
      { type: 'copy', label: 'Suppliers or B2B partners', text: "🤝 [Business Name] Partners\nFor order updates, price changes, and delivery schedules with our suppliers and distributors. Work messages only, [hours]. Contact [Name] for urgent issues." },

      { type: 'h2', content: 'Set up a business group the right way' },
      { type: 'ul', items: [
        'Turn on admin-only messaging: Group info → Group settings → Send messages → Only admins.',
        'Invite customers with a link or QR code instead of adding them. People choose who can add them to groups in their privacy settings, and an opt-in list is a more engaged list.',
        'Say how often you will post (for example, "1–2 messages a week") and stick to it. Over-posting is the top reason people leave.',
        'Put your order number, hours, and website in the description so it is always one tap away.',
        'Use your WhatsApp Business profile and catalog for product details, and keep the group for updates.',
      ] },
      { type: 'callout', content: 'Do not share customers\' phone numbers. In a regular group, members can usually see each other\'s numbers, so say so up front, or use an announcement-only group or a broadcast list for large customer lists.' },
    ],
    extraFaq: [
      { q: 'What should a business WhatsApp group description include?', a: 'What members will get (offers, updates, new stock), how often you post, how to order or contact you, your hours, and whether only admins can post.' },
      { q: 'Should a business WhatsApp group be admin-only?', a: 'For customer groups, usually yes. Admin-only messaging keeps updates visible and stops the group from turning into a chat. Peer groups for business owners work better with everyone able to post.' },
    ],
    extraRelated: [
      { label: 'Entrepreneurs WhatsApp group description', path: '/templates/whatsapp-group-description/entrepreneurs' },
      { label: 'E-commerce sellers WhatsApp group description', path: '/templates/whatsapp-group-description/ecommerce-sellers' },
      { label: 'WhatsApp group introduction messages (business intros)', path: INTRO_PATH },
    ],
    updated: UPDATED,
  },
};
