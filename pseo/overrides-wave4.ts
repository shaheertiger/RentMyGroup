// Wave 4: "double down on what is working" (Search Console, 3 months to 2026-11-19).
// The WhatsApp welcome-message and description niche pages rank at positions 2-8
// and bring most non-home clicks. These overrides deepen the pages that already
// rank, so they win more of the clicks for the queries Google already sends:
//   whatsapp/welcome-message/church        4 clicks, 133 impressions, pos 4.3 (best template page)
//   whatsapp/welcome-message/family        0 clicks,  67 impressions, pos 7.0
//   whatsapp/welcome-message/travel        0 clicks,  31 impressions, pos 5.7
//   whatsapp/description/church            0 clicks,  25 impressions, pos 4.5
//   whatsapp/welcome-message/bible-study   0 clicks,  19 impressions, pos 5.7
//   whatsapp/rules/family                  0 clicks,  18 impressions, pos 4.1
//   whatsapp/welcome-message/college-students 0 clicks, 18 impressions, pos 15.9
//   whatsapp/description/jobs              1 click,   17 impressions, pos 3.8
//   whatsapp/welcome-message/teachers      0 clicks,  14 impressions, pos 5.1 (+ "welcome message for parents in whatsapp group")
//   whatsapp/welcome-message/islamic       0 clicks,  13 impressions, pos 3.5
//   whatsapp/description/teachers          1 click,   10 impressions, pos 2.5
// Bible verses are quoted from the King James Version (public domain).
import type { PageOverride } from './overrides.ts';

const UPDATED = '2026-11-19';
const SPONSORS_FB = '/blog/how-to-get-sponsors-for-facebook-group';
const SPONSORS_WA = '/blog/how-to-get-sponsors-for-whatsapp-group';

export const WAVE4_OVERRIDES: Record<string, PageOverride> = {
  // ─── Church welcome message (the best-performing template page) ───────────
  'whatsapp/welcome-message/church': {
    h1: 'Church WhatsApp Group Welcome Message: 25+ Examples',
    metaTitle: 'Church WhatsApp Group Welcome Message: 25+ Examples With Bible Verses',
    metaDescription: 'Welcome messages for church WhatsApp groups: new members, first-time visitors, youth, choir, women\'s and men\'s fellowship, cell groups, and prayer groups. With Bible verses, ready to copy.',
    intro: 'A warm welcome is often the first thing a new member hears from your church outside a Sunday service. Below are 25+ church WhatsApp welcome messages, for new members, visitors, and every ministry group, with Bible verses you can add. Copy one, replace the [brackets], and send.',
    extraBlocks: [
      { type: 'h2', content: 'Welcome messages for new church members' },
      { type: 'copy', label: 'New member (warm)', text: "Welcome to the [Church Name] family, [Name]! ⛪❤️\nWe're so glad God brought you to us. This group is where we share service times, prayer requests, and church news.\n\n🕘 Sunday service: [time]\n📍 [Address]\n\nIf you need prayer or anything at all, message [Pastor / Admin name]. God bless you!" },
      { type: 'copy', label: 'New member with a verse', text: "A warm welcome to [Name]! 🙏\n\n\"Wherefore receive ye one another, as Christ also received us to the glory of God.\" (Romans 15:7)\n\nWe're happy to have you in our church family. Feel free to say hello and tell us a little about yourself." },
      { type: 'copy', label: 'Several new members after a service', text: "🎉 Please join us in welcoming our newest members: [Name], [Name], and [Name]!\n\n\"Behold, how good and how pleasant it is for brethren to dwell together in unity!\" (Psalm 133:1)\n\nChurch family, say hello and make them feel at home. 🙌" },
      { type: 'copy', label: 'Short welcome', text: "Welcome to the family, [Name]! 🙏 We're blessed to have you. See you on Sunday!" },
      { type: 'copy', label: 'From the pastor', text: "Dear [Name],\nOn behalf of [Church Name], I want to personally welcome you to our church family. My door is always open, so please reach out if you need prayer, a conversation, or help finding a ministry to serve in.\n\nBlessings,\nPastor [Name]" },
      { type: 'copy', label: 'New believer or after baptism', text: "🕊️ Rejoicing with [Name], who was baptized today! Welcome to the family of God and to [Church Name].\n\n\"Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.\" (2 Corinthians 5:17)\n\nPlease keep [Name] in your prayers as they grow in faith. ❤️" },

      { type: 'h2', content: 'Welcome messages for first-time visitors' },
      { type: 'copy', label: 'First-time visitor', text: "Hi [Name], it was a joy to have you with us at [Church Name] on Sunday! 😊\nWe added you here so you can stay in the loop with services and events. No pressure at all. If you have any questions, just ask.\n\nHope to see you again soon! 🙏" },
      { type: 'copy', label: 'Visitor follow-up (sent privately)', text: "Hello [Name], this is [Your name] from [Church Name]. Thank you for worshipping with us on Sunday! Is there anything we can pray with you about this week? We'd love to see you again at [time] next Sunday." },
      { type: 'copy', label: 'Welcome back to someone returning', text: "Welcome back, [Name]! ❤️ It's so good to have you with us again. We missed you. Here's what's coming up this month: [events]." },

      { type: 'h2', content: 'Welcome messages for church ministry groups' },
      { type: 'copy', label: 'Youth group', text: "🙌 Hey [Name], welcome to [Church Name] Youth!\nWe meet every [day] at [time] at [place]. Expect games, worship, real talk, and snacks. 🍕\nSay hi and tell us your name and school! Leaders [Name] and [Name] are here if you need anything." },
      { type: 'copy', label: 'Choir or worship team', text: "🎶 Welcome to the [Church Name] choir, [Name]!\nRehearsals: [day] at [time]\nSong list and recordings for Sunday are posted here every [day].\n\n\"O sing unto the LORD a new song.\" (Psalm 96:1)\nWhat part do you sing? 🎤" },
      { type: 'copy', label: 'Women\'s fellowship', text: "🌸 Welcome to [Church Name] Women's Fellowship, [Name]!\nThis is a space to pray, study, and encourage one another. We meet on [day] at [time].\nPlease introduce yourself, sister. We're so glad you're here! ❤️" },
      { type: 'copy', label: 'Men\'s fellowship', text: "🤝 Welcome to the [Church Name] Men's Fellowship, [Name].\nWe meet [day] at [time] for breakfast, the Word, and prayer.\n\n\"Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.\" (Proverbs 27:17)\nGlad to have you, brother." },
      { type: 'copy', label: 'Cell group / home fellowship', text: "🏠 Welcome to the [Area] cell group, [Name]!\nWe meet every [day] at [time], hosted by [Host] at [address].\n\n\"For where two or three are gathered together in my name, there am I in the midst of them.\" (Matthew 18:20)\nSee you this week!" },
      { type: 'copy', label: 'Prayer group', text: "🙏 Welcome to our prayer group, [Name].\nPost your requests anytime, and reply \"praying\" when you pray for someone. Everything shared here stays here.\nIs there anything we can pray with you about this week?" },
      { type: 'copy', label: 'Ushers, volunteers, or media team', text: "👋 Welcome to the [team name] team, [Name]! Thank you for serving.\nThe rota for this month is pinned. Please reply 👍 to confirm your Sundays, and message [Coordinator] if you need to swap." },
      { type: 'copy', label: 'Sunday school teachers', text: "📚 Welcome to the Sunday school team, [Name]!\nLesson plans for each Sunday are shared here by [day]. Please arrive by [time] to set up. Thank you for investing in our children! ❤️" },

      { type: 'h2', content: 'Bible verses to add to a church welcome message' },
      { type: 'table', headers: ['Verse (KJV)', 'Best for'], rows: [
        ['"Wherefore receive ye one another, as Christ also received us to the glory of God." (Romans 15:7)', 'Any new member'],
        ['"Behold, how good and how pleasant it is for brethren to dwell together in unity!" (Psalm 133:1)', 'Welcoming several people'],
        ['"For where two or three are gathered together in my name, there am I in the midst of them." (Matthew 18:20)', 'Cell and home groups'],
        ['"And let us consider one another to provoke unto love and to good works." (Hebrews 10:24)', 'Ministry and volunteer teams'],
        ['"Wherefore comfort yourselves together, and edify one another, even as also ye do." (1 Thessalonians 5:11)', 'Prayer and fellowship groups'],
        ['"The LORD bless thee, and keep thee." (Numbers 6:24)', 'Closing line for any welcome'],
      ] },

      { type: 'h2', content: 'After the welcome: messages to keep the group alive' },
      { type: 'copy', label: 'Sunday service reminder', text: "☀️ Good morning, church family!\nJoin us today at [time] for [service / sermon series]. Bring a friend! 🙌\n📍 [Address] | 🖥️ Live: [link]" },
      { type: 'copy', label: 'Weekly prayer request thread', text: "🙏 Prayer requests for this week\nReply with your request (or someone else's, with their permission). Let's lift each other up. We'll pray together at [prayer meeting time]." },
      { type: 'copy', label: 'Event announcement', text: "📢 [Event name]\n📅 [Date] at [time]\n📍 [Place]\nEveryone is welcome. Please reply 👍 if you're coming so we can plan food. God bless!" },
    ],
    extraFaq: [
      { q: 'What do you say to welcome a new member to a church WhatsApp group?', a: 'Greet them by name, say you are glad they joined the church family, share the service time and place, and tell them who to contact for prayer or questions. Adding a short verse such as Romans 15:7 makes it feel personal.' },
      { q: 'Should I add first-time visitors to the church WhatsApp group?', a: 'Ask first. Many churches add visitors to a separate announcements group, or send a private follow-up message, and only add them to the main group once they want to stay connected.' },
    ],
    extraRelated: [
      { label: 'Church WhatsApp group description', path: '/templates/whatsapp-group-description/church' },
      { label: 'Youth group WhatsApp welcome message', path: '/templates/whatsapp-group-welcome-message/youth-group' },
      { label: 'Prayer group WhatsApp welcome message', path: '/templates/whatsapp-group-welcome-message/prayer-group' },
      { label: 'Bible study WhatsApp welcome message', path: '/templates/whatsapp-group-welcome-message/bible-study' },
    ],
    updated: UPDATED,
  },

  // ─── Church description ────────────────────────────────────────────────────
  'whatsapp/description/church': {
    h1: 'Church WhatsApp Group Description: 15+ Examples to Copy',
    metaTitle: 'Church WhatsApp Group Description: 15+ Examples (Youth, Choir, Prayer)',
    metaDescription: 'Church WhatsApp group description examples for the main church group and every ministry: youth, choir, women\'s and men\'s fellowship, prayer, cell groups, and announcements.',
    intro: 'A church WhatsApp group description should tell members three things: what the group is for, when and where you meet, and who to contact. Below are examples for the main church group and for each ministry group.',
    extraBlocks: [
      { type: 'h2', content: 'Short church group descriptions (one line)' },
      { type: 'ul', items: [
        '⛪ [Church Name] family: service times, prayer, and church news.',
        '🙏 Official group of [Church Name]. Announcements and prayer requests only.',
        '❤️ One church, one family. Sundays at [time], [place].',
        '📖 "Behold, how good and how pleasant it is for brethren to dwell together in unity!" (Psalm 133:1)',
        '🕊️ [Church Name]: loving God, loving people, serving [city].',
      ] },
      { type: 'h2', content: 'Descriptions for ministry groups' },
      { type: 'copy', label: 'Youth group', text: "🙌 [Church Name] Youth\nFor ages [age range]. We meet [day] at [time] at [place].\nShare: meetup plans, devotionals, prayer requests.\nLeaders: [Name], [Name]. Parents are welcome to join this group." },
      { type: 'copy', label: 'Choir / worship team', text: "🎶 [Church Name] Choir\nRehearsal: [day] at [time]. Song list and recordings are posted every [day].\nPlease reply to the weekly roll call so we know who is singing on Sunday." },
      { type: 'copy', label: 'Women\'s fellowship', text: "🌸 [Church Name] Women's Fellowship\nA place for sisters to pray, study the Word, and encourage one another.\nMeetings: [day] at [time]. Prayer requests are welcome anytime." },
      { type: 'copy', label: 'Men\'s fellowship', text: "🤝 [Church Name] Men's Fellowship\nBreakfast, the Word, and prayer on [day] at [time].\n\"Iron sharpeneth iron.\" (Proverbs 27:17)" },
      { type: 'copy', label: 'Prayer group', text: "🙏 [Church Name] Prayer Chain\nPost requests anytime and reply \"praying\" when you pray. Requests are confidential: no screenshots or forwards. Prayer meeting: [day] at [time]." },
      { type: 'copy', label: 'Cell group / home fellowship', text: "🏠 [Area] Cell Group, [Church Name]\nWe meet every [day] at [time] at [host's home]. Share the study notes, prayer needs, and who is bringing snacks." },
      { type: 'copy', label: 'Announcements only', text: "📢 [Church Name] Announcements\nOnly admins post here. Service times, events, and urgent updates.\nFor prayer or questions, message the church office: [number]." },
      { type: 'copy', label: 'Ushers / volunteers', text: "👋 [Church Name] Ushers & Volunteers\nRotas, reminders, and swaps. The monthly rota is pinned. Coordinator: [Name] [number]." },
    ],
    extraRelated: [
      { label: 'Church WhatsApp group welcome messages (25+)', path: '/templates/whatsapp-group-welcome-message/church' },
      { label: 'Youth group WhatsApp group description', path: '/templates/whatsapp-group-description/youth-group' },
      { label: 'Prayer group WhatsApp group description', path: '/templates/whatsapp-group-description/prayer-group' },
    ],
    updated: UPDATED,
  },

  // ─── Family welcome message ───────────────────────────────────────────────
  'whatsapp/welcome-message/family': {
    h1: 'Welcome Message for a Family WhatsApp Group: 20+ Examples',
    metaTitle: 'Family WhatsApp Group Welcome Message: 20+ Examples to Copy',
    metaDescription: 'Welcome messages for family WhatsApp groups: the first message in a new group, welcoming a new family member or in-law, greeting the family when you are added, and more.',
    intro: 'Whether you just created the family group, are welcoming a new daughter-in-law, or were just added and want to say hello, here are 20+ family WhatsApp welcome messages you can copy and personalize.',
    extraBlocks: [
      { type: 'h2', content: 'First message when you create a family group' },
      { type: 'copy', label: 'Group creator (warm)', text: "Hello everyone! ❤️ I made this group so our whole family can stay connected in one place: news, photos, birthdays, and plans.\n\nA few simple rules:\n🙏 Family only\n🚫 No forwards or politics\n🎂 Never miss a birthday!\n\nSay hi so we know everyone is here 😊" },
      { type: 'copy', label: 'Group creator (short)', text: "Welcome to the [Surname] family group! 🏠 One place for all of us. Say hi! 👋" },
      { type: 'copy', label: 'Extended family / cousins', text: "Hi cousins! 👫 Finally, a group for all of us. Let's use it to stay in touch, plan the next get-together, and share old family photos. Who has the best childhood photo? 📸" },

      { type: 'h2', content: 'Welcoming a new family member' },
      { type: 'copy', label: 'New daughter-in-law', text: "Everyone, please welcome [Name], our new daughter-in-law, to the family group! ❤️ [Name], we're so happy you're part of our family. Get ready for lots of photos and dinner invitations! 😊" },
      { type: 'copy', label: 'New son-in-law', text: "A warm welcome to [Name], our new son-in-law! 🎉 We're delighted to have you in the family. Feel free to say hello to everyone. You'll learn everyone's names soon! 😄" },
      { type: 'copy', label: 'New spouse (general)', text: "Welcome to the family, [Name]! 💞 [Partner's name] has told us so much about you. We're so glad you're here. Say hi to the family! 🙏" },
      { type: 'copy', label: 'Elder relative joining', text: "Welcome to the group, [Uncle / Aunty / Grandma] [Name]! 🙏 So happy you're here with us. Now you'll get all the photos of the kids first! ❤️" },
      { type: 'copy', label: 'Relative living abroad', text: "Welcome, [Name]! 🌍 Now you're only a message away, no matter the time zone. We've missed you. Share some photos from [city]! 📸" },
      { type: 'copy', label: 'Family friend', text: "Welcome to the family group, [Name]! You've been like family for years, so it's only right you're here. ❤️" },

      { type: 'h2', content: 'How to greet the family when you are added' },
      { type: 'copy', label: 'Polite greeting', text: "Hello everyone 🙏 Thank you for adding me to the family group. It's lovely to be connected with all of you here!" },
      { type: 'copy', label: 'New in-law greeting', text: "Namaste / Salaam / Hello everyone 🙏 Thank you so much for the warm welcome. I'm so happy to be part of this family and look forward to getting to know each of you. ❤️" },
      { type: 'copy', label: 'Casual', text: "Hi family! 👋 Thanks for adding me. Happy to finally be in the famous family group 😄" },

      { type: 'h2', content: 'Messages to keep the family group warm' },
      { type: 'copy', label: 'Birthday wish for a family member', text: "🎂 Happy birthday, [Name]! Wishing you a year full of health, happiness, and love. The whole family is celebrating you today! ❤️🎉" },
      { type: 'copy', label: 'Good morning message', text: "Good morning, family! ☀️ Wishing everyone a peaceful and blessed day. ❤️" },
      { type: 'copy', label: 'Get-together invitation', text: "📢 Family get-together on [date] at [place]! 🍲 Please reply with how many are coming by [date]. Can't wait to see everyone! ❤️" },
    ],
    extraFaq: [
      { q: 'How do I welcome a new family member to a WhatsApp group?', a: 'Introduce them by name and relationship ("our new daughter-in-law"), say how happy the family is, and invite everyone to say hello. A light, friendly line helps them reply.' },
      { q: 'How do I greet family members when I am added to a WhatsApp group?', a: 'Thank whoever added you, say hello to everyone, and add one warm line, for example: "Hello everyone, thank you for adding me. It\'s lovely to be connected with you all."' },
    ],
    extraRelated: [
      { label: 'Family WhatsApp group description (20+ examples)', path: '/templates/whatsapp-group-description/family' },
      { label: 'Family WhatsApp group rules', path: '/templates/whatsapp-group-rules/family' },
    ],
    updated: UPDATED,
  },

  // ─── Family rules ──────────────────────────────────────────────────────────
  'whatsapp/rules/family': {
    h1: 'Family WhatsApp Group Rules: Polite, Funny, and Short Versions',
    metaTitle: 'Family WhatsApp Group Rules: Polite, Funny & Short Examples',
    metaDescription: 'Family WhatsApp group rules you can copy: polite rules for elders, funny rules, short rules for the description, and a gentle reminder for when the chat gets out of hand.',
    intro: 'Family groups need rules too, but they have to be gentle enough not to upset anyone. Here are polite, funny, and short family WhatsApp group rules, plus a reminder you can send without offending your relatives.',
    extraBlocks: [
      { type: 'h2', content: 'Polite family group rules (safe for elders)' },
      { type: 'copy', label: 'Polite and respectful', text: "🙏 *A few gentle requests for our family group*\n\n1. Please share family news, photos, and plans here.\n2. Kindly avoid forwarded messages and unverified news.\n3. Let's keep politics and religion debates outside the group.\n4. Please avoid messages late at night unless it's urgent.\n5. Respect everyone's opinions, especially our elders.\n6. Personal matters are best discussed privately.\n\nThank you, and lots of love to everyone ❤️" },
      { type: 'h2', content: 'Funny family group rules' },
      { type: 'copy', label: 'Funny', text: "📜 *Official [Surname] Family Group Rules*\n\n1. Good morning flowers: max 1 per person per day 🌸\n2. \"Forwarded many times\" = do not send 🚫\n3. Reply to the dinner poll. Yes, YOU. 🍲\n4. No politics. We want to stay a family. 😅\n5. If you post a photo, tag who's in it. Grandma is still guessing.\n6. Leaving the group is not allowed. We will find you. ❤️" },
      { type: 'h2', content: 'Short rules for the group description' },
      { type: 'copy', label: 'Short (3 lines)', text: "❤️ Family only\n🚫 No forwards, no politics\n🌙 Quiet after 10pm" },
      { type: 'h2', content: 'A gentle reminder that will not upset anyone' },
      { type: 'copy', label: 'Gentle reminder', text: "Hi everyone ❤️ Just a small reminder to keep our family group for family news and photos. Let's avoid forwards and debates so everyone enjoys being here. Thank you all! 🙏" },
    ],
    extraRelated: [
      { label: 'Family WhatsApp group description', path: '/templates/whatsapp-group-description/family' },
      { label: 'Family WhatsApp group welcome messages', path: '/templates/whatsapp-group-welcome-message/family' },
    ],
    updated: UPDATED,
  },

  // ─── Travel welcome message ───────────────────────────────────────────────
  'whatsapp/welcome-message/travel': {
    h1: 'Travel WhatsApp Group Welcome Message: Trip, Tour, and Travel Club Examples',
    metaTitle: 'Travel WhatsApp Group Welcome Message: 15+ Trip & Tour Templates',
    metaDescription: 'Welcome messages for travel WhatsApp groups: friends\' trips, group tours, travel agency customers, pilgrimages, and travel clubs. Includes itinerary and packing reminders.',
    intro: 'Travel WhatsApp groups usually start a few weeks before a trip and need to share a lot of details fast. Here are welcome messages for friends\' trips, tour groups, travel agencies, and travel clubs, plus the reminder messages that keep a trip on schedule.',
    extraBlocks: [
      { type: 'h2', content: 'Welcome messages for a trip group' },
      { type: 'copy', label: 'Friends\' trip', text: "✈️ Welcome to the [Destination] trip group! 🎉\n\n📅 [Dates]\n🏨 [Hotel / stay]\n💰 Budget per person: [amount]\n\nI'll pin the itinerary here. Please reply 👍 once you've booked your tickets!" },
      { type: 'copy', label: 'Group tour (from the tour leader)', text: "Hello and welcome to the [Tour name] group! 🌍 I'm [Name], your tour leader.\n\nI'll use this group for meeting points, timings, and any changes during the trip. Please:\n✅ Save my number: [number]\n✅ Turn on notifications for this group\n✅ Reply with your name so I can mark you present\n\nSee you on [date]!" },
      { type: 'copy', label: 'Travel agency customers', text: "Welcome to [Agency Name] Travellers! ✈️ Thank you for booking with us.\nYour itinerary, tickets, and hotel vouchers will be shared here. For anything about your own booking, please message us privately at [number]. Happy travels! 🧳" },
      { type: 'copy', label: 'Pilgrimage group (Umrah, Hajj, or other)', text: "Welcome to the [Year] [Pilgrimage] group 🙏\nDeparture: [date] from [city]. Please share a copy of your passport with [Name] privately by [date], and watch this group for the packing list and briefing session details." },
      { type: 'copy', label: 'Travel club / community', text: "🌍 Welcome to [Club name], [Name]!\nWe share trip ideas, deals, and plan group trips every [month / season]. Tell us: where was your best trip, and where do you want to go next?" },

      { type: 'h2', content: 'Trip reminders to send after the welcome' },
      { type: 'copy', label: 'Packing reminder', text: "🧳 Packing checklist for [Destination]:\n✅ Passport / ID\n✅ Tickets (downloaded offline)\n✅ Chargers and power adapter\n✅ Medicines\n✅ [Weather-specific item]\n\nWe meet at [place] at [time]. Please be on time! ⏰" },
      { type: 'copy', label: 'Day plan', text: "📍 Day [X] plan\n🕗 [time] Breakfast at [place]\n🚌 [time] Leave for [stop]\n🍽️ [time] Lunch\n🌅 [time] [Activity]\n\nShare your live location if you split from the group." },
      { type: 'copy', label: 'Expense split', text: "💰 Trip expenses so far: [total]. That's [amount] per person. Please send your share to [Name] by [date]. Receipts are in the pinned message." },
    ],
    extraRelated: [
      { label: 'Travel WhatsApp group description', path: '/templates/whatsapp-group-description/travel' },
      { label: 'Travel WhatsApp group rules', path: '/templates/whatsapp-group-rules/travel' },
    ],
    updated: UPDATED,
  },

  // ─── Bible study welcome message ──────────────────────────────────────────
  'whatsapp/welcome-message/bible-study': {
    h1: 'Bible Study WhatsApp Group Welcome Message: 12+ Examples',
    metaTitle: 'Bible Study WhatsApp Group Welcome Message: 12+ Examples With Verses',
    metaDescription: 'Welcome messages for Bible study WhatsApp groups: new members, the first day of a study, a reading plan kickoff, and daily verse messages. With KJV verses to copy.',
    intro: 'A Bible study group grows when new members feel welcome and know exactly what to read next. Here are welcome messages for new members, the first day of a new study, and the daily messages that keep everyone reading together.',
    extraBlocks: [
      { type: 'h2', content: 'More Bible study welcome messages' },
      { type: 'copy', label: 'New member with a verse', text: "📖 Welcome to our Bible study, [Name]!\n\n\"Thy word is a lamp unto my feet, and a light unto my path.\" (Psalm 119:105)\n\nWe're reading [book / plan] together. This week: [passage]. Share a thought or a question anytime!" },
      { type: 'copy', label: 'First day of a new study', text: "🙏 Welcome, everyone, to our new study on [book / topic]!\n\n📅 We'll read [chapter(s)] each [day / week].\n💬 Share one verse that stood out to you and why.\n🙏 Prayer requests are welcome anytime.\n\nLet's begin with [passage] this week. So glad you're here!" },
      { type: 'copy', label: 'Reading plan kickoff', text: "📅 Our [30-day / 1-year] reading plan starts tomorrow!\nEach morning I'll post the day's reading. Reply ✅ when you've read it, and share one takeaway. Let's encourage each other to stay consistent." },
      { type: 'copy', label: 'Online Bible study (video call)', text: "Welcome to [Group name], [Name]! 💻 We meet on [platform] every [day] at [time] ([time zone]). The link is pinned. Have your Bible ready and a cup of tea ☕" },
      { type: 'copy', label: 'Women\'s or men\'s Bible study', text: "Welcome to the [women's / men's] Bible study, [Name]! ❤️ We're studying [book] together. This week's reading: [passage]. We'd love to hear a little about you." },
      { type: 'h2', content: 'Daily messages for a Bible study group' },
      { type: 'copy', label: 'Daily verse', text: "☀️ Verse of the day\n\n\"Trust in the LORD with all thine heart; and lean not unto thine own understanding.\" (Proverbs 3:5)\n\nWhat does trusting God look like for you today?" },
      { type: 'copy', label: 'Discussion question', text: "💬 Question for today's reading ([passage]):\nWhat does this passage teach us about [topic]? How can we apply it this week?" },
    ],
    extraRelated: [
      { label: 'Church WhatsApp group welcome messages (25+)', path: '/templates/whatsapp-group-welcome-message/church' },
      { label: 'Prayer group WhatsApp welcome message', path: '/templates/whatsapp-group-welcome-message/prayer-group' },
    ],
    updated: UPDATED,
  },

  // ─── Islamic welcome message ──────────────────────────────────────────────
  'whatsapp/welcome-message/islamic': {
    h1: 'Islamic WhatsApp Group Welcome Message: 12+ Examples',
    metaTitle: 'Islamic WhatsApp Group Welcome Message: 12+ Examples (Assalamu Alaikum)',
    metaDescription: 'Islamic WhatsApp group welcome messages for masjid groups, sisters\' and brothers\' groups, Quran classes, Ramadan groups, and community reminders. Ready to copy.',
    intro: 'Start every welcome with salaam. Below are Islamic WhatsApp group welcome messages for masjid groups, sisters\' and brothers\' circles, Quran classes, and Ramadan groups.',
    extraBlocks: [
      { type: 'h2', content: 'More Islamic group welcome messages' },
      { type: 'copy', label: 'Masjid community group', text: "Assalamu alaikum wa rahmatullahi wa barakatuh, [Name] 🕌\nWelcome to the [Masjid Name] community group. Prayer times, Jumu'ah updates, classes, and events are shared here.\nJazakAllahu khairan for joining. May Allah bless our community. 🤲" },
      { type: 'copy', label: 'Sisters\' group', text: "Assalamu alaikum, dear sister [Name] 🌸\nWelcome to [Group name]. This is a sisters-only space for reminders, halaqa updates, and supporting one another.\nPlease introduce yourself, insha'Allah." },
      { type: 'copy', label: 'Brothers\' group', text: "Assalamu alaikum, brother [Name] 🤝\nWelcome to [Group name]. We share reminders, halaqa times, and community news. Please keep the group respectful and beneficial.\nJazakAllahu khairan." },
      { type: 'copy', label: 'Quran class', text: "Assalamu alaikum, [Name] 📖\nWelcome to the [Class name] Quran class. Classes are on [day] at [time] with [Teacher name]. Lesson notes and homework are posted here after each class.\nMay Allah make it easy for you." },
      { type: 'copy', label: 'Ramadan group', text: "🌙 Ramadan Mubarak and welcome, [Name]!\nThis group shares iftar and suhoor times, taraweeh updates, and daily reminders for [city] this Ramadan.\nMay Allah accept our fasting and prayers. 🤲" },
      { type: 'copy', label: 'Several new members', text: "Assalamu alaikum, everyone 🕌\nPlease welcome our new members: [Name], [Name], and [Name]. May Allah bless you all and make this group a source of benefit. Please read the group description for the guidelines." },
      { type: 'copy', label: 'Short', text: "Assalamu alaikum and welcome, [Name]! 🤲 JazakAllahu khairan for joining." },
    ],
    extraRelated: [
      { label: 'Islamic WhatsApp group description', path: '/templates/whatsapp-group-description/islamic' },
      { label: 'Islamic WhatsApp group rules', path: '/templates/whatsapp-group-rules/islamic' },
    ],
    updated: UPDATED,
  },

  // ─── Teachers welcome message (+ welcoming parents) ────────────────────────
  'whatsapp/welcome-message/teachers': {
    h1: 'Teachers WhatsApp Group Welcome Message: Staff and Parent Groups',
    metaTitle: 'Teacher WhatsApp Group Welcome Message: Staff & Parents Examples',
    metaDescription: 'Welcome messages for teachers\' WhatsApp groups: welcoming new staff, a teacher welcoming parents to the class group, and the first message of the school year.',
    intro: 'Teachers use WhatsApp groups two ways: staff groups with colleagues, and class groups with parents. Here are welcome messages for both, including the first message to parents at the start of the school year.',
    extraBlocks: [
      { type: 'h2', content: 'Teacher welcoming parents to a class group' },
      { type: 'copy', label: 'Start of the school year', text: "Dear parents, welcome to the [Class / Grade] [Section] group for [school year]! 🏫\nI'm [Name], your child's [subject / class] teacher.\n\nI'll use this group for:\n📚 Homework and test dates\n📅 Events and holidays\n📢 Important reminders\n\nFor anything about your own child, please message me privately. I reply between [time] and [time] on school days.\nLooking forward to a wonderful year! 😊" },
      { type: 'copy', label: 'Short welcome for parents', text: "Welcome, parents, to [Class] [Section]! 🍎 Updates on homework, tests, and events will be shared here. Please keep messages to school matters. Thank you!" },
      { type: 'copy', label: 'Welcome a new parent mid-year', text: "Welcome to our class group, [Parent name]! 😊 We're happy to have [Child's name] with us. Homework and updates are posted here, and the timetable is pinned." },
      { type: 'copy', label: 'Admin-only notice', text: "📢 Dear parents, this group is set to admin-only so that important updates are easy to find. Please contact me directly at [number] for any questions. Thank you for your support!" },
      { type: 'h2', content: 'Welcoming new teachers to a staff group' },
      { type: 'copy', label: 'New staff member', text: "Please join me in welcoming [Name], who joins us as our new [subject] teacher! 🎉 [Name], we're so glad to have you on the team. Don't hesitate to ask any of us for help as you settle in." },
      { type: 'copy', label: 'Start-of-year staff message', text: "Welcome back, team! 🍎 I hope everyone had a restful break. Staff meeting on [date] at [time] in [room]. The new timetable is pinned. Here's to a great year together! 💪" },
    ],
    extraFaq: [
      { q: 'What should a teacher write in the first message to parents on WhatsApp?', a: 'Introduce yourself, say what the group will be used for (homework, tests, events), when you reply, and that questions about a single child should be sent privately.' },
    ],
    extraRelated: [
      { label: 'School parents WhatsApp group welcome message', path: '/templates/whatsapp-group-welcome-message/school-parents' },
      { label: 'Tuition WhatsApp group description', path: '/templates/whatsapp-group-description/tuition' },
    ],
    updated: UPDATED,
  },

  // ─── College students welcome message ─────────────────────────────────────
  'whatsapp/welcome-message/college-students': {
    h1: 'College WhatsApp Group Welcome Message: Freshers, Batch, and Class Groups',
    metaTitle: 'College WhatsApp Group Welcome Message: Freshers & Batch Templates',
    metaDescription: 'Welcome messages for college WhatsApp groups: freshers\' groups, batch and class groups, department groups, and hostel groups. Copy, edit, and send.',
    intro: 'The first college WhatsApp group is often how a whole batch meets. Here are welcome messages for freshers, batch and class groups, departments, and hostels.',
    extraBlocks: [
      { type: 'h2', content: 'More college group welcome messages' },
      { type: 'copy', label: 'Freshers\' group', text: "🎉 Welcome to the [College] [Year] freshers' group!\nThis is where we'll share class schedules, orientation updates, and hostel info before term starts.\nIntroduce yourself: name, course, and where you're from! 👋" },
      { type: 'copy', label: 'Batch / class group (from the class representative)', text: "Hi everyone 👋 I'm [Name], your CR for [Course] [Year].\nI'll post timetable changes, assignment deadlines, and exam updates here.\n📌 Timetable is pinned\n🚫 No forwards or spam please\nLet's have a great year! 🎓" },
      { type: 'copy', label: 'Department group', text: "Welcome to the [Department] students' group! 📚 Notices from the department, internship leads, and event updates are shared here. Please keep it relevant to the department." },
      { type: 'copy', label: 'Hostel group', text: "🏠 Welcome to [Hostel / Block] group! Mess timings, maintenance updates, and hostel events will be shared here. Tell us your room number so neighbors can find you 😄" },
    ],
    extraRelated: [
      { label: 'Classmates and batchmates WhatsApp welcome message', path: '/templates/whatsapp-group-welcome-message/classmates' },
      { label: 'Study group WhatsApp welcome message', path: '/templates/whatsapp-group-welcome-message/study-group' },
    ],
    updated: UPDATED,
  },

  // ─── Jobs description ──────────────────────────────────────────────────────
  'whatsapp/description/jobs': {
    h1: 'Jobs WhatsApp Group Description: 10+ Examples for Job Groups',
    metaTitle: 'Job WhatsApp Group Description: 10+ Examples (Vacancies, Referrals)',
    metaDescription: 'WhatsApp group description examples for job groups: vacancy alerts, local jobs, freshers\' jobs, government jobs, referrals, and recruiter groups. Includes a scam warning to add.',
    intro: 'A job group description has two jobs: tell members what kind of vacancies are shared, and protect them from scams. Here are examples for every kind of jobs group, plus a safety line every job group should include.',
    extraBlocks: [
      { type: 'h2', content: 'More job group descriptions' },
      { type: 'copy', label: 'Vacancy alerts (admin-only)', text: "💼 [Group Name]: Job Alerts\nDaily vacancies in [city / field]. Only admins post, so it stays useful.\n✅ Verified openings only\n🚫 Never pay anyone for a job\nShare this group with friends who are job hunting! 🙌" },
      { type: 'copy', label: 'Local jobs', text: "📍 [City] Jobs\nFull-time, part-time, and walk-in openings in [city]. Each post includes the role, salary (if known), and how to apply. Employers: message [admin] to post a vacancy." },
      { type: 'copy', label: 'Freshers\' jobs and internships', text: "🎓 Freshers' Jobs & Internships\nOpenings for [year] graduates in [fields]. Resume tips and interview prep shared weekly. Ask questions anytime!" },
      { type: 'copy', label: 'Government jobs', text: "🏛️ [Region] Government Job Updates\nExam notifications, application dates, and results, with the link to the official notice for every update. Always apply on the official website." },
      { type: 'copy', label: 'Referrals group', text: "🤝 [Industry] Referrals\nMembers share openings at their own companies and refer each other. Post your role, company, and how to apply. Be honest: refer people you'd vouch for." },
      { type: 'copy', label: 'Recruiter / agency group', text: "📋 [Agency Name] Careers\nNew openings from our clients in [industry]. To apply, send your CV to [email] with the job code. We never charge candidates a fee." },
      { type: 'h2', content: 'Add a scam warning to every job group' },
      { type: 'callout', content: 'Fake job offers that ask for a "registration fee", "training fee", or "security deposit" are common in WhatsApp job groups. Put a line like "We never charge for jobs. Never pay anyone to get hired." in the description, and remove posts that ask members for money.' },
    ],
    extraRelated: [
      { label: 'Freelancers WhatsApp group description', path: '/templates/whatsapp-group-description/freelancers' },
      { label: 'Office colleagues WhatsApp group description', path: '/templates/whatsapp-group-description/colleagues' },
    ],
    updated: UPDATED,
  },

  // ─── Teachers description ─────────────────────────────────────────────────
  'whatsapp/description/teachers': {
    metaTitle: 'Teachers WhatsApp Group Description: Staff, Class & Parent Group Examples',
    metaDescription: 'WhatsApp group description examples for teachers: school staff groups, class groups with parents, subject departments, and tuition groups. Copy and paste.',
    extraBlocks: [
      { type: 'h2', content: 'More teacher group descriptions' },
      { type: 'copy', label: 'School staff group', text: "🏫 [School Name] Staff\nOfficial updates for teaching and non-teaching staff: meetings, duties, timetables, and circulars.\nWork matters only, [time]–[time] on school days." },
      { type: 'copy', label: 'Class group with parents', text: "📚 [Class] [Section] Parents | [School year]\nHomework, test dates, and school events from [Teacher name].\nQuestions about your child: please message the teacher privately.\nAdmin-only group." },
      { type: 'copy', label: 'Subject department', text: "🔬 [Subject] Department, [School Name]\nLesson plans, assessments, and resources for [subject] teachers. Share what works in your classroom!" },
    ],
    extraRelated: [
      { label: 'School parents WhatsApp group description', path: '/templates/whatsapp-group-description/school-parents' },
      { label: 'Tuition WhatsApp group description', path: '/templates/whatsapp-group-description/tuition' },
    ],
    updated: UPDATED,
  },

  // ─── Facebook pages with the best CTR: point them at the sponsors guide ────
  'facebook/description/church': {
    extraRelated: [{ label: 'How to get sponsors for your Facebook group', path: SPONSORS_FB }],
  },
  'whatsapp/welcome-message/alumni': {
    extraRelated: [
      { label: 'Classmates and batchmates WhatsApp welcome message', path: '/templates/whatsapp-group-welcome-message/classmates' },
      { label: 'How to get sponsors for your WhatsApp group', path: SPONSORS_WA },
    ],
  },
};
