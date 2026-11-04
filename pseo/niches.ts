// The 50 niches used by the templates family (plan note: "description, rules,
// welcome message × 50 niches × platform"). Each niche carries the specifics
// that make its pages different from each other: what members talk about,
// the rules that niche actually needs, and who sponsors groups like it.

export type NicheCategory =
  | 'Local & Community'
  | 'Family & Social'
  | 'Hobbies & Interests'
  | 'Health & Fitness'
  | 'Business & Careers'
  | 'Education & Learning'
  | 'Faith';

export interface Niche {
  slug: string;
  name: string; // "Book Club" -> "Book Club Facebook Group Description"
  category: NicheCategory;
  emoji: string;
  members: string; // plural noun for members
  purpose: string; // completes "a group for {members} to ..."
  topics: [string, string, string, string];
  rules: [string, string][]; // niche-specific [title, detail]
  welcomeAsk: string; // completes "To kick things off, ..."
  sponsors: [string, string, string];
}

export const NICHE_CATEGORIES: NicheCategory[] = [
  'Local & Community',
  'Family & Social',
  'Hobbies & Interests',
  'Health & Fitness',
  'Business & Careers',
  'Education & Learning',
  'Faith',
];

export const niches: Niche[] = [
  // ── Local & Community ──────────────────────────────────────────────────────
  {
    slug: 'neighborhood', name: 'Neighborhood', category: 'Local & Community', emoji: '🏡', members: 'neighbors',
    purpose: 'share local news, recommendations, and lost-and-found posts',
    topics: ['local news and road closures', 'recommendations for trusted tradespeople', 'lost and found pets', 'community events'],
    rules: [
      ['Residents first', 'Membership is for people who live in or near the neighborhood. Answer the join questions so admins can check.'],
      ['No public shaming', 'Do not post photos, plates, or addresses of people to call them out. Report safety issues to the authorities.'],
      ['Business posts on the weekly thread', 'Local businesses are welcome to promote once a week in the pinned thread only.'],
    ],
    welcomeAsk: 'tell us which street or area you are in and one local spot you love',
    sponsors: ['local restaurants and cafés', 'home services such as plumbers and cleaners', 'real estate agents'],
  },
  {
    slug: 'buy-and-sell', name: 'Buy and Sell', category: 'Local & Community', emoji: '🛒', members: 'local buyers and sellers',
    purpose: 'buy, sell, and swap secondhand items locally',
    topics: ['furniture and home goods', 'electronics', 'kids items and clothing', 'wanted posts'],
    rules: [
      ['One item per post with a price', 'Every listing needs a clear photo, the price, and the pickup area. Posts without a price are removed.'],
      ['Meet in public places', 'Arrange handovers somewhere public and well lit. Never send a deposit to someone you have not met.'],
      ['Mark items as sold', 'Edit your post to SOLD or delete it once the item is gone so the feed stays useful.'],
    ],
    welcomeAsk: 'share the first thing you are hoping to find or sell',
    sponsors: ['moving and storage companies', 'local repair shops', 'secondhand and consignment stores'],
  },
  {
    slug: 'buy-nothing', name: 'Buy Nothing', category: 'Local & Community', emoji: '🎁', members: 'neighbors',
    purpose: 'give away, lend, and share things for free',
    topics: ['free items to give away', 'requests and asks', 'lending tools and equipment', 'gratitude posts'],
    rules: [
      ['Everything is free', 'No selling, trading, or asking for money, not even for gas. Gifts only.'],
      ['Give to the community, not the fastest', 'Let a post sit for a while before choosing a recipient so everyone has a fair chance.'],
      ['Pickups are your responsibility', 'If you claim an item, collect it when agreed or let the giver know right away.'],
    ],
    welcomeAsk: 'introduce yourself with one thing you could offer and one thing you would love to receive',
    sponsors: ['local thrift and repair cafés', 'sustainability brands', 'community recycling services'],
  },
  {
    slug: 'community-events', name: 'Community Events', category: 'Local & Community', emoji: '📅', members: 'locals',
    purpose: 'find and share what is happening around town',
    topics: ['weekend events', 'markets and festivals', 'free family activities', 'volunteer days'],
    rules: [
      ['Include date, time, and place', 'Event posts must list the date, start time, location, and price (or say it is free).'],
      ['Post events once, then update', 'Do not repost the same event every day. Edit the original post or comment with updates.'],
      ['Local events only', 'Online-only events and events outside our area are removed.'],
    ],
    welcomeAsk: 'tell us the kind of events you never want to miss',
    sponsors: ['event venues', 'ticketing platforms', 'local food and drink businesses'],
  },
  {
    slug: 'homeowners-association', name: 'Homeowners Association', category: 'Local & Community', emoji: '🏘️', members: 'homeowners and residents',
    purpose: 'stay informed about association updates, meetings, and shared spaces',
    topics: ['board meeting updates', 'maintenance requests', 'shared amenities', 'community guidelines'],
    rules: [
      ['Official notices come from the board', 'Only board members post official announcements. Everyone else can comment and ask questions.'],
      ['Report maintenance through the proper channel', 'Use the management contact for repairs; the group is for discussion, not tickets.'],
      ['Keep disputes private', 'Disagreements with a neighbor or the board are handled by direct message or at a meeting.'],
    ],
    welcomeAsk: 'let us know your street or building so we can point you to the right updates',
    sponsors: ['property management firms', 'landscaping and pool services', 'home insurance providers'],
  },
  {
    slug: 'alumni', name: 'Alumni', category: 'Local & Community', emoji: '🎓', members: 'alumni',
    purpose: 'reconnect with classmates, share career news, and plan reunions',
    topics: ['reunion plans', 'career moves and job leads', 'throwback photos', 'campus news'],
    rules: [
      ['Graduates and former students only', 'Please include your graduation year when you join so we can verify you.'],
      ['Job posts are welcome, recruiters are limited', 'Members can share openings. Recruitment agencies post once a month.'],
      ['Ask before tagging old photos', 'Not everyone wants old pictures public. Ask before you tag classmates.'],
    ],
    welcomeAsk: 'share your graduation year and what you are up to now',
    sponsors: ['career and recruiting platforms', 'continuing education programs', 'event and reunion venues'],
  },
  {
    slug: 'volunteers', name: 'Volunteers', category: 'Local & Community', emoji: '🤝', members: 'volunteers',
    purpose: 'coordinate shifts, share opportunities, and support local causes',
    topics: ['upcoming volunteer shifts', 'donation drives', 'training sessions', 'impact updates'],
    rules: [
      ['Sign up through the official form', 'Shift sign-ups happen through the pinned link, not in the comments.'],
      ['Protect the people we serve', 'Never post photos or personal details of the people or families we help.'],
      ['Fundraising needs approval', 'Ask an admin before sharing any fundraiser or donation request.'],
    ],
    welcomeAsk: 'tell us which causes you care about and how much time you can give',
    sponsors: ['local businesses with community programs', 'corporate social responsibility teams', 'volunteer management tools'],
  },

  // ── Family & Social ────────────────────────────────────────────────────────
  {
    slug: 'family', name: 'Family', category: 'Family & Social', emoji: '👨‍👩‍👧‍👦', members: 'family members',
    purpose: 'stay close, share photos, and plan get-togethers',
    topics: ['family news and milestones', 'photos and memories', 'birthdays and anniversaries', 'holiday plans'],
    rules: [
      ['Family only', 'Please do not add friends or partners without checking with the family admins first.'],
      ['Ask before sharing outside the group', 'Photos and news shared here stay here unless the person agrees.'],
      ['Keep politics out of it', 'We all love each other more when we leave political debates for another place.'],
    ],
    welcomeAsk: 'share a favorite family memory or a recent photo',
    sponsors: ['photo printing services', 'gift and greeting card brands', 'family travel companies'],
  },
  {
    slug: 'moms', name: 'Moms', category: 'Family & Social', emoji: '👩‍👧', members: 'moms',
    purpose: 'swap advice, find support, and share the ups and downs of parenting',
    topics: ['sleep, feeding, and routines', 'playdates and local activities', 'product recommendations', 'self-care for moms'],
    rules: [
      ['No mom-shaming', 'Every family does things differently. Share your experience without judging other choices.'],
      ['Medical questions go to a professional', 'Members can share experiences, but a doctor should answer health questions about your child.'],
      ['Protect children\'s privacy', 'Avoid posting school names, full names, or locations of children.'],
    ],
    welcomeAsk: 'tell us how old your little ones are and one thing you would love help with',
    sponsors: ['baby and kids brands', 'family photographers', 'kids classes and activity centers'],
  },
  {
    slug: 'dads', name: 'Dads', category: 'Family & Social', emoji: '👨‍👧', members: 'dads',
    purpose: 'share parenting wins, ask for advice, and connect with other fathers',
    topics: ['parenting advice', 'weekend activities with kids', 'balancing work and family', 'dad jokes'],
    rules: [
      ['Support over judgment', 'Everyone is figuring it out. Offer advice, not criticism.'],
      ['Keep kids\' details private', 'Skip full names, schools, and locations when you post about your children.'],
      ['No selling in posts', 'Product promotions go in the monthly recommendations thread.'],
    ],
    welcomeAsk: 'share how many kids you have and your best dad hack',
    sponsors: ['outdoor and sports brands', 'kids education apps', 'family-friendly restaurants'],
  },
  {
    slug: 'wedding', name: 'Wedding', category: 'Family & Social', emoji: '💍', members: 'guests and wedding party members',
    purpose: 'share wedding plans, travel details, and photos from the big day',
    topics: ['schedule and venue details', 'travel and accommodation', 'dress code', 'photos from the day'],
    rules: [
      ['Check the pinned post first', 'Dates, addresses, and dress code are pinned. Read it before asking.'],
      ['No photos before the couple shares', 'Please wait for the couple to post first before sharing wedding photos anywhere else.'],
      ['RSVP through the official link', 'Use the RSVP form, not the group chat, so nothing gets missed.'],
    ],
    welcomeAsk: 'tell us how you know the couple',
    sponsors: ['wedding photographers', 'florists and venues', 'travel and hotel booking services'],
  },
  {
    slug: 'friends', name: 'Friends', category: 'Family & Social', emoji: '🥳', members: 'friends',
    purpose: 'make plans, share memes, and keep the group chat alive',
    topics: ['weekend plans', 'memes and inside jokes', 'birthdays', 'trip planning'],
    rules: [
      ['Plans need a date', 'If you suggest a hangout, suggest a date too, or it never happens.'],
      ['What happens in the group stays in the group', 'No screenshots outside the chat without asking.'],
      ['Mute, do not leave', 'Busy week? Mute the chat instead of leaving and re-joining.'],
    ],
    welcomeAsk: 'drop your best meme to prove you belong here',
    sponsors: ['restaurants and bars', 'event ticketing apps', 'group travel brands'],
  },
  {
    slug: 'pet-owners', name: 'Pet Owners', category: 'Family & Social', emoji: '🐾', members: 'pet owners',
    purpose: 'share pet photos, get advice, and find trusted local pet services',
    topics: ['training tips', 'vet and groomer recommendations', 'pet photos', 'lost and found pets'],
    rules: [
      ['Emergencies go to a vet', 'If your pet is sick or injured, call a vet first. The group is not a substitute for care.'],
      ['No selling or breeding ads', 'Rehoming posts must go through approved rescue partners.'],
      ['Be kind about choices', 'Food, training, and care choices vary. Share facts, not judgment.'],
    ],
    welcomeAsk: 'introduce your pet with a photo, their name, and their age',
    sponsors: ['pet food and treat brands', 'vets and groomers', 'pet insurance providers'],
  },
  {
    slug: 'roommates', name: 'Roommates and Rentals', category: 'Family & Social', emoji: '🔑', members: 'renters and people looking for roommates',
    purpose: 'find rooms, roommates, and rental leads',
    topics: ['rooms available', 'people looking for rooms', 'roommate introductions', 'rental advice'],
    rules: [
      ['Use the posting format', 'Listings must include rent, location, move-in date, and photos. Seekers must include budget and dates.'],
      ['Never pay before viewing', 'Do not send deposits for a place you have not seen in person or by live video. Report suspected scams.'],
      ['No discrimination', 'Listings cannot exclude people based on race, religion, gender identity, disability, or other protected traits.'],
    ],
    welcomeAsk: 'share whether you are looking for a room or offering one, plus your area',
    sponsors: ['moving companies', 'renters insurance providers', 'furniture rental services'],
  },

  // ── Hobbies & Interests ────────────────────────────────────────────────────
  {
    slug: 'book-club', name: 'Book Club', category: 'Hobbies & Interests', emoji: '📚', members: 'readers',
    purpose: 'read a book together every month and swap recommendations',
    topics: ['the book of the month', 'reading recommendations', 'author news', 'meetup schedules'],
    rules: [
      ['Mark spoilers', 'Start any post that discusses the ending with SPOILER and leave a few blank lines.'],
      ['Vote, then commit', 'Book picks are decided by the monthly poll. Once chosen, we read it together.'],
      ['Authors promote in the monthly thread', 'Self-published authors can share their work once a month in the pinned thread.'],
    ],
    welcomeAsk: 'tell us what you are reading right now',
    sponsors: ['bookstores', 'audiobook and ebook apps', 'independent authors and publishers'],
  },
  {
    slug: 'gardening', name: 'Gardening', category: 'Hobbies & Interests', emoji: '🌱', members: 'gardeners',
    purpose: 'share growing tips, diagnose plant problems, and show off harvests',
    topics: ['plant ID and problem diagnosis', 'seasonal planting tips', 'harvest photos', 'seed and cutting swaps'],
    rules: [
      ['Include your growing zone', 'When asking for help, share your region or zone and a clear photo.'],
      ['No invasive species trades', 'Do not offer or swap plants that are invasive or restricted in our area.'],
      ['Sales on swap days only', 'Selling plants or seeds is allowed only in the weekly swap thread.'],
    ],
    welcomeAsk: 'show us a photo of your garden or the plant you are proudest of',
    sponsors: ['garden centers and nurseries', 'seed companies', 'tool and irrigation brands'],
  },
  {
    slug: 'photography', name: 'Photography', category: 'Hobbies & Interests', emoji: '📷', members: 'photographers',
    purpose: 'share work, get feedback, and learn new techniques',
    topics: ['photo critiques', 'gear questions', 'editing techniques', 'weekly photo challenges'],
    rules: [
      ['Only post your own photos', 'Share work you took yourself, and credit models or locations where relevant.'],
      ['Ask for the feedback you want', 'Add "C&C welcome" if you want critique. Keep critique specific and kind.'],
      ['Gear sales in the marketplace thread', 'Buying and selling equipment is limited to the monthly marketplace post.'],
    ],
    welcomeAsk: 'share one photo you took and the camera or phone you used',
    sponsors: ['camera and lens brands', 'editing software', 'photo printing labs'],
  },
  {
    slug: 'cooking', name: 'Cooking and Recipes', category: 'Hobbies & Interests', emoji: '🍳', members: 'home cooks',
    purpose: 'share recipes, cooking wins, and kitchen tips',
    topics: ['recipes with photos', 'weeknight dinner ideas', 'baking help', 'kitchen gadget advice'],
    rules: [
      ['Share the recipe, not just the photo', 'If you post a dish, include the recipe or a link to it.'],
      ['Credit the original creator', 'Name the cookbook, blog, or creator you adapted a recipe from.'],
      ['No food shaming', 'Every diet and budget is welcome. Keep comments helpful.'],
    ],
    welcomeAsk: 'tell us your go-to dish when you have no time to cook',
    sponsors: ['meal kit services', 'kitchenware brands', 'grocery delivery apps'],
  },
  {
    slug: 'travel', name: 'Travel', category: 'Hobbies & Interests', emoji: '✈️', members: 'travelers',
    purpose: 'swap trip advice, itineraries, and travel deals',
    topics: ['itinerary help', 'destination recommendations', 'flight and hotel deals', 'trip reports'],
    rules: [
      ['Give context when asking', 'Share your dates, budget, and travel style so people can give useful advice.'],
      ['No affiliate spam', 'Links to your own blog or deals page are allowed only when someone asks.'],
      ['Respect local cultures', 'Posts mocking people or places will be removed.'],
    ],
    welcomeAsk: 'tell us the last place you visited and where you want to go next',
    sponsors: ['travel booking platforms', 'luggage and gear brands', 'travel insurance companies'],
  },
  {
    slug: 'gaming', name: 'Gaming', category: 'Hobbies & Interests', emoji: '🎮', members: 'gamers',
    purpose: 'find teammates, talk about new releases, and share clips',
    topics: ['looking-for-group posts', 'new releases and patches', 'clips and highlights', 'hardware help'],
    rules: [
      ['No cheats or hacks', 'Do not share or ask for cheats, exploits, or account boosting services.'],
      ['Tag spoilers', 'Story spoilers for recent releases must be clearly marked.'],
      ['No account trading', 'Buying, selling, or trading game accounts is not allowed.'],
    ],
    welcomeAsk: 'drop your platform, your main game, and your gamer tag',
    sponsors: ['game studios', 'gaming peripherals brands', 'streaming and creator tools'],
  },
  {
    slug: 'crafts', name: 'DIY and Crafts', category: 'Hobbies & Interests', emoji: '🧶', members: 'makers and crafters',
    purpose: 'share projects, patterns, and crafting tips',
    topics: ['finished projects', 'patterns and tutorials', 'supply recommendations', 'works in progress'],
    rules: [
      ['Credit patterns and designers', 'If you used someone\'s pattern, name the designer.'],
      ['No pirated patterns', 'Do not share paid patterns or ask others to.'],
      ['Selling on Fridays only', 'Shops and makers can promote their work in the Friday showcase thread.'],
    ],
    welcomeAsk: 'show us the project you are working on right now',
    sponsors: ['craft supply stores', 'pattern designers', 'online craft class platforms'],
  },
  {
    slug: 'fishing', name: 'Fishing', category: 'Hobbies & Interests', emoji: '🎣', members: 'anglers',
    purpose: 'share catches, swap tips, and talk gear and spots',
    topics: ['catch reports', 'tackle and gear advice', 'local conditions', 'techniques'],
    rules: [
      ['Respect local regulations', 'Follow size, season, and bag limits. Posts showing illegal catches are removed.'],
      ['Don\'t demand secret spots', 'Sharing exact locations is up to the poster. Do not pressure people for them.'],
      ['Gear sales in the swap thread', 'Buying and selling tackle happens in the weekly swap post.'],
    ],
    welcomeAsk: 'share your best catch or the species you most want to land',
    sponsors: ['tackle shops', 'boat and outdoor brands', 'fishing charters and guides'],
  },
  {
    slug: 'hiking', name: 'Hiking', category: 'Hobbies & Interests', emoji: '🥾', members: 'hikers',
    purpose: 'find trails, plan group hikes, and share trail conditions',
    topics: ['trail recommendations', 'group hike plans', 'trail conditions', 'gear advice'],
    rules: [
      ['Leave no trace', 'Posts encouraging off-trail damage or littering are removed.'],
      ['Safety first on group hikes', 'Organizers must share difficulty, distance, and meeting point. Hike at your own risk.'],
      ['Share conditions with dates', 'Trail reports must say when you were there.'],
    ],
    welcomeAsk: 'tell us your favorite trail and how far you like to hike',
    sponsors: ['outdoor gear retailers', 'hiking apps', 'local guide services'],
  },
  {
    slug: 'car-enthusiasts', name: 'Car Enthusiasts', category: 'Hobbies & Interests', emoji: '🚗', members: 'car enthusiasts',
    purpose: 'share builds, ask mechanical questions, and plan meets',
    topics: ['build updates', 'mechanical help', 'car meets', 'parts recommendations'],
    rules: [
      ['No street racing content', 'Posts promoting illegal racing or dangerous driving are removed.'],
      ['Include details when asking for help', 'Year, make, model, and what you have already tried.'],
      ['Parts sales in the classifieds thread', 'Sell parts and cars only in the pinned classifieds post.'],
    ],
    welcomeAsk: 'show us your ride with the year, make, and model',
    sponsors: ['auto parts stores', 'detailing and repair shops', 'car insurance providers'],
  },
  {
    slug: 'music', name: 'Music', category: 'Hobbies & Interests', emoji: '🎸', members: 'musicians and music fans',
    purpose: 'share music, find bandmates, and talk gear and gigs',
    topics: ['original music', 'gig listings', 'gear talk', 'finding bandmates'],
    rules: [
      ['Self-promo on Saturdays', 'Share your own tracks in the Saturday promo thread so the feed is not just links.'],
      ['Give feedback when you ask for it', 'If you post for feedback, leave feedback for two others.'],
      ['No pirated content', 'Do not share links to pirated music, plugins, or sample packs.'],
    ],
    welcomeAsk: 'tell us what you play or listen to and share one track you love',
    sponsors: ['instrument retailers', 'music production software', 'venues and promoters'],
  },
  {
    slug: 'sports-fans', name: 'Sports Fans', category: 'Hobbies & Interests', emoji: '⚽', members: 'fans',
    purpose: 'talk about games, transfers, and match days',
    topics: ['match day threads', 'transfer and trade news', 'watch parties', 'predictions'],
    rules: [
      ['Banter, not abuse', 'Rival fans are welcome. Personal insults and threats are not.'],
      ['Use the match thread on game day', 'During games, post in the match thread to keep the feed readable.'],
      ['No illegal streams', 'Links to unofficial streams are removed.'],
    ],
    welcomeAsk: 'tell us your team and your all-time favorite player',
    sponsors: ['sports bars', 'merchandise stores', 'sports streaming services'],
  },
  {
    slug: 'cycling', name: 'Cycling', category: 'Hobbies & Interests', emoji: '🚴', members: 'cyclists',
    purpose: 'plan rides, share routes, and talk bikes',
    topics: ['group rides', 'route recommendations', 'bike maintenance', 'gear reviews'],
    rules: [
      ['Helmets on in ride photos', 'Ride photos should show safe riding. We do not promote risky behavior.'],
      ['Post ride details', 'Group ride posts need pace, distance, start point, and drop or no-drop policy.'],
      ['Stolen bike alerts are welcome', 'Share serial numbers and photos to help recover stolen bikes.'],
    ],
    welcomeAsk: 'tell us what you ride and your favorite local route',
    sponsors: ['bike shops', 'cycling apparel brands', 'nutrition and hydration brands'],
  },
  {
    slug: 'running', name: 'Running', category: 'Hobbies & Interests', emoji: '🏃', members: 'runners',
    purpose: 'train together, share race plans, and keep each other motivated',
    topics: ['training plans', 'race sign-ups', 'group runs', 'injury prevention'],
    rules: [
      ['Celebrate every pace', 'First 5K or tenth marathon, every runner is welcome here.'],
      ['Injury questions need a professional', 'Share experience, but see a physio or doctor for injuries.'],
      ['Race bib transfers follow race rules', 'Only transfer bibs where the race officially allows it.'],
    ],
    welcomeAsk: 'share your next race or the distance you are training for',
    sponsors: ['running shoe stores', 'race organizers', 'sports nutrition brands'],
  },

  // ── Health & Fitness ───────────────────────────────────────────────────────
  {
    slug: 'fitness', name: 'Fitness', category: 'Health & Fitness', emoji: '💪', members: 'members',
    purpose: 'share workouts, track progress, and keep each other accountable',
    topics: ['workout plans', 'progress check-ins', 'nutrition basics', 'form checks'],
    rules: [
      ['No unsolicited body comments', 'Comment on effort and progress, never on how someone looks unless they ask.'],
      ['No medical or supplement claims', 'Do not promise results or recommend substances. Talk to a professional.'],
      ['Coaches promote in the Sunday thread', 'Trainers can share services once a week in the pinned thread.'],
    ],
    welcomeAsk: 'tell us your current goal and how often you train',
    sponsors: ['gyms and studios', 'fitness apparel brands', 'workout apps'],
  },
  {
    slug: 'weight-loss', name: 'Weight Loss Support', category: 'Health & Fitness', emoji: '⚖️', members: 'members',
    purpose: 'support each other with healthy, sustainable weight-loss goals',
    topics: ['weekly check-ins', 'healthy meal ideas', 'non-scale victories', 'motivation on hard days'],
    rules: [
      ['No crash diets or pills', 'Posts promoting extreme diets, pills, or quick fixes are removed.'],
      ['Before-and-after photos are optional', 'Share them only if you are comfortable. Nobody is required to.'],
      ['Talk to a doctor about medical changes', 'Medication and medical diet questions go to a professional.'],
    ],
    welcomeAsk: 'share one small goal you want to hit this week',
    sponsors: ['healthy meal delivery', 'fitness trackers', 'registered dietitians'],
  },
  {
    slug: 'yoga', name: 'Yoga', category: 'Health & Fitness', emoji: '🧘', members: 'yogis',
    purpose: 'share practice tips, class schedules, and mindful inspiration',
    topics: ['pose tips and modifications', 'class schedules', 'meditation', 'retreats and workshops'],
    rules: [
      ['All levels welcome', 'Beginners and teachers practice side by side. Keep advice encouraging.'],
      ['Teachers share classes in the weekly thread', 'Class and retreat promotion happens in the pinned schedule post.'],
      ['Listen to your body', 'Advice here is not a substitute for a qualified teacher or medical professional.'],
    ],
    welcomeAsk: 'tell us how long you have practiced and your favorite pose',
    sponsors: ['yoga studios', 'mat and apparel brands', 'meditation apps'],
  },
  {
    slug: 'mental-health-support', name: 'Mental Health Support', category: 'Health & Fitness', emoji: '💙', members: 'members',
    purpose: 'offer peer support in a safe, judgment-free space',
    topics: ['daily check-ins', 'coping strategies', 'wins big and small', 'resources and helplines'],
    rules: [
      ['This is peer support, not therapy', 'Members share experience, not diagnosis. If you are in crisis, contact local emergency services or a crisis line.'],
      ['What is shared here stays here', 'Never screenshot or share another member\'s post outside the group.'],
      ['Use content warnings', 'Add a content warning at the top of posts about self-harm, abuse, or other heavy topics.'],
    ],
    welcomeAsk: 'share as much or as little as you like. Even a hello is enough',
    sponsors: ['licensed online therapy platforms', 'wellbeing apps', 'mental health charities'],
  },
  {
    slug: 'healthy-eating', name: 'Healthy Eating', category: 'Health & Fitness', emoji: '🥗', members: 'members',
    purpose: 'share healthy recipes, meal prep ideas, and grocery tips',
    topics: ['meal prep', 'healthy recipes', 'grocery hauls', 'budget-friendly swaps'],
    rules: [
      ['Share recipes with ingredients', 'Food photos need the recipe or at least the ingredient list.'],
      ['No diet shaming', 'Plant-based, keto, or anything in between, all approaches are welcome.'],
      ['No health claims', 'Do not claim foods cure illnesses. Point people to a dietitian for medical diets.'],
    ],
    welcomeAsk: 'share your favorite healthy meal that takes under 20 minutes',
    sponsors: ['meal prep services', 'health food brands', 'grocery delivery apps'],
  },

  // ── Business & Careers ─────────────────────────────────────────────────────
  {
    slug: 'small-business', name: 'Small Business', category: 'Business & Careers', emoji: '🏪', members: 'small business owners',
    purpose: 'share advice, referrals, and support for running a small business',
    topics: ['marketing tips', 'tools and software', 'hiring and HR questions', 'wins and lessons'],
    rules: [
      ['Promote on Promo Monday only', 'Share your business in the Monday thread. Promo in the main feed is removed.'],
      ['Give before you ask', 'Answer a question or two before posting your own.'],
      ['No MLM or get-rich-quick offers', 'Recruiting for network marketing schemes is not allowed.'],
    ],
    welcomeAsk: 'tell us what your business does and the biggest challenge you are facing',
    sponsors: ['accounting and payroll software', 'business banks', 'marketing agencies'],
  },
  {
    slug: 'entrepreneurs', name: 'Entrepreneurs', category: 'Business & Careers', emoji: '🚀', members: 'founders and entrepreneurs',
    purpose: 'swap ideas, find collaborators, and share what is working',
    topics: ['idea validation', 'fundraising', 'growth tactics', 'co-founder search'],
    rules: [
      ['Add value, not links', 'Posts that only drop a link to your product are removed. Share the lesson behind it.'],
      ['No pitch DMs', 'Do not cold-pitch members by direct message.'],
      ['Be honest about results', 'Share real numbers or say you cannot. No fake screenshots.'],
    ],
    welcomeAsk: 'share what you are building and the stage you are at',
    sponsors: ['startup tools and SaaS', 'banking and payments platforms', 'accelerators and incubators'],
  },
  {
    slug: 'real-estate', name: 'Real Estate', category: 'Business & Careers', emoji: '🏠', members: 'agents, investors, and buyers',
    purpose: 'discuss the market, share deals, and trade advice',
    topics: ['market updates', 'investment deals', 'financing questions', 'agent referrals'],
    rules: [
      ['Listings in the weekly thread', 'Property listings go in the pinned listings post, one per agent per week.'],
      ['Disclose your interest', 'If you are the agent, owner, or lender, say so when you post or comment.'],
      ['This is not financial or legal advice', 'Speak to a licensed professional before making decisions.'],
    ],
    welcomeAsk: 'tell us whether you are buying, selling, investing, or an agent, and your market',
    sponsors: ['mortgage brokers', 'property management firms', 'home inspection services'],
  },
  {
    slug: 'jobs', name: 'Jobs', category: 'Business & Careers', emoji: '💼', members: 'job seekers and employers',
    purpose: 'share job openings and find work',
    topics: ['job openings', 'people looking for work', 'interview tips', 'CV and resume feedback'],
    rules: [
      ['Use the job post format', 'Include role, company, location or remote, pay range, and how to apply.'],
      ['No fees to apply', 'Any post asking applicants to pay to get a job is removed and the poster banned.'],
      ['Verify before you share personal details', 'Do not send ID documents or bank details to unverified recruiters.'],
    ],
    welcomeAsk: 'share the kind of role you are looking for or hiring for',
    sponsors: ['job boards', 'resume and career coaching services', 'training and certification providers'],
  },
  {
    slug: 'freelancers', name: 'Freelancers', category: 'Business & Careers', emoji: '💻', members: 'freelancers',
    purpose: 'share gigs, rates, and advice on working for yourself',
    topics: ['rate and pricing advice', 'client leads', 'contracts and invoicing', 'productivity tools'],
    rules: [
      ['Gigs must include a budget', 'Job posts need a budget or rate. No spec work or "exposure" pay.'],
      ['No poaching clients', 'Never contact another member\'s client to undercut them.'],
      ['Portfolio links in your intro only', 'Share your portfolio in your introduction post, not in every comment.'],
    ],
    welcomeAsk: 'tell us what you do and how long you have been freelancing',
    sponsors: ['invoicing and accounting tools', 'coworking spaces', 'freelance marketplaces'],
  },
  {
    slug: 'marketing', name: 'Marketing', category: 'Business & Careers', emoji: '📣', members: 'marketers',
    purpose: 'share campaigns, tools, and strategies that work',
    topics: ['campaign breakdowns', 'tool recommendations', 'SEO and content', 'paid ads'],
    rules: [
      ['Share the how, not just the result', 'Case studies need the strategy behind them, not just a screenshot.'],
      ['No link dropping', 'Links to your blog or agency are allowed only when they answer a specific question.'],
      ['No buying or selling followers', 'Fake engagement services are banned.'],
    ],
    welcomeAsk: 'tell us your specialty and one tool you cannot live without',
    sponsors: ['marketing SaaS tools', 'analytics platforms', 'online courses'],
  },
  {
    slug: 'investing', name: 'Investing', category: 'Business & Careers', emoji: '📈', members: 'investors',
    purpose: 'discuss markets, strategies, and long-term investing',
    topics: ['market news', 'portfolio discussions', 'investing basics', 'book and resource recommendations'],
    rules: [
      ['Not financial advice', 'Everything here is opinion and education. Do your own research and consult a licensed advisor.'],
      ['No pump-and-dump or signals groups', 'Promoting paid signals, guaranteed returns, or coordinated buying is banned.'],
      ['Disclose positions', 'If you are talking up an asset you hold, say so.'],
    ],
    welcomeAsk: 'tell us how long you have been investing and what you are learning about',
    sponsors: ['brokerage platforms', 'financial education courses', 'portfolio tracking apps'],
  },
  {
    slug: 'ecommerce-sellers', name: 'Ecommerce Sellers', category: 'Business & Careers', emoji: '📦', members: 'online sellers',
    purpose: 'share selling tips, supplier advice, and platform updates',
    topics: ['product research', 'supplier and shipping questions', 'platform policy updates', 'conversion tips'],
    rules: [
      ['No supplier spam', 'Suppliers and agencies can post once a month in the vendor thread.'],
      ['Share your numbers honestly', 'Fake revenue screenshots get you removed.'],
      ['No account selling', 'Buying, selling, or renting seller accounts is not allowed.'],
    ],
    welcomeAsk: 'tell us where you sell and what you sell',
    sponsors: ['shipping and fulfillment services', 'ecommerce platforms', 'product photography studios'],
  },

  // ── Education & Learning ───────────────────────────────────────────────────
  {
    slug: 'study-group', name: 'Study Group', category: 'Education & Learning', emoji: '📝', members: 'students',
    purpose: 'share notes, plan study sessions, and prepare for exams together',
    topics: ['study session plans', 'shared notes', 'exam dates and deadlines', 'practice questions'],
    rules: [
      ['No sharing exam answers', 'Help each other learn, but do not share answers to live tests or graded work.'],
      ['Stay on topic', 'Keep the chat about the course so important updates do not get buried.'],
      ['Credit shared notes', 'If you share someone else\'s notes, say whose they are.'],
    ],
    welcomeAsk: 'tell us which topic you find hardest so far',
    sponsors: ['tutoring services', 'study and note-taking apps', 'textbook retailers'],
  },
  {
    slug: 'class', name: 'Class', category: 'Education & Learning', emoji: '🏫', members: 'classmates',
    purpose: 'share homework updates, announcements, and class reminders',
    topics: ['homework and deadlines', 'teacher announcements', 'study help', 'class events'],
    rules: [
      ['Announcements first', 'Important updates from the class rep or teacher are pinned. Read them before asking.'],
      ['No copying homework', 'Ask for help understanding a question, not for someone\'s answers.'],
      ['Respect everyone', 'No bullying, mocking, or sharing embarrassing photos of classmates.'],
    ],
    welcomeAsk: 'say hi and share your favorite subject',
    sponsors: ['stationery brands', 'tutoring centers', 'education apps'],
  },
  {
    slug: 'college-students', name: 'College Students', category: 'Education & Learning', emoji: '🎒', members: 'students',
    purpose: 'find housing, sell textbooks, and share campus life',
    topics: ['housing and roommates', 'textbook swaps', 'campus events', 'course advice'],
    rules: [
      ['Current students only', 'Answer the join questions with your student email or year.'],
      ['Use the marketplace thread for sales', 'Textbooks and furniture go in the weekly marketplace post.'],
      ['No sharing exam material', 'Leaked exams or graded answers are removed.'],
    ],
    welcomeAsk: 'tell us your major and your year',
    sponsors: ['student banks', 'textbook rental services', 'local restaurants with student deals'],
  },
  {
    slug: 'teachers', name: 'Teachers', category: 'Education & Learning', emoji: '🍎', members: 'teachers',
    purpose: 'share lesson ideas, classroom resources, and support',
    topics: ['lesson plans', 'classroom management', 'free resources', 'professional development'],
    rules: [
      ['Protect student privacy', 'Never post student names, photos, or identifying details.'],
      ['Share free resources freely', 'Paid resource promotion is limited to the monthly showcase post.'],
      ['Venting is allowed, naming is not', 'Talk about challenges without naming schools, colleagues, or families.'],
    ],
    welcomeAsk: 'tell us what grade and subject you teach',
    sponsors: ['education technology tools', 'classroom supply brands', 'teacher training providers'],
  },
  {
    slug: 'language-learning', name: 'Language Learning', category: 'Education & Learning', emoji: '🗣️', members: 'learners',
    purpose: 'practice together, swap resources, and find conversation partners',
    topics: ['daily practice prompts', 'resource recommendations', 'conversation partners', 'grammar questions'],
    rules: [
      ['Correct kindly', 'Corrections are welcome when someone asks for them. Keep them gentle.'],
      ['Practice in the target language', 'Try to post in the language you are learning, with a translation if needed.'],
      ['Tutors promote once a month', 'Paid tutoring offers go in the monthly tutors thread.'],
    ],
    welcomeAsk: 'tell us which language you are learning, your level, and your native language',
    sponsors: ['language apps', 'online tutoring platforms', 'study-abroad programs'],
  },
  {
    slug: 'coding', name: 'Coding', category: 'Education & Learning', emoji: '👩‍💻', members: 'developers and learners',
    purpose: 'ask questions, share projects, and learn to code together',
    topics: ['debugging help', 'project showcases', 'learning resources', 'job and interview prep'],
    rules: [
      ['Post code as text', 'Share code as text or a link to a snippet, not a photo of your screen.'],
      ['Show what you tried', 'Include the error message and what you have already tried.'],
      ['No homework outsourcing', 'We help you learn. We do not do graded assignments for you.'],
    ],
    welcomeAsk: 'tell us which language or stack you are learning and what you want to build',
    sponsors: ['developer tools', 'coding bootcamps', 'cloud hosting providers'],
  },

  // ── Faith ──────────────────────────────────────────────────────────────────
  {
    slug: 'church', name: 'Church', category: 'Faith', emoji: '⛪', members: 'church members',
    purpose: 'share service times, prayer requests, and church news',
    topics: ['service times and events', 'prayer requests', 'volunteer sign-ups', 'ministry updates'],
    rules: [
      ['Keep prayer requests respectful', 'Share only what the person has agreed to share about their situation.'],
      ['Official announcements from church staff', 'Event and schedule updates come from staff and ministry leaders.'],
      ['No selling or fundraising without approval', 'Ask the church office before posting fundraisers or business offers.'],
    ],
    welcomeAsk: 'tell us how long you have been part of the church and which service you attend',
    sponsors: ['Christian bookstores', 'faith-based charities', 'local family businesses'],
  },
  {
    slug: 'islamic', name: 'Islamic', category: 'Faith', emoji: '🕌', members: 'brothers and sisters',
    purpose: 'share reminders, learn together, and stay connected with the community',
    topics: ['daily reminders and duas', 'Quran study circles', 'masjid announcements', 'Ramadan and Eid plans'],
    rules: [
      ['Share authentic sources', 'Include the reference for any hadith or ayah you share.'],
      ['Avoid sectarian debates', 'Disagreements on fiqh are handled respectfully or with a scholar, not in the group.'],
      ['Keep it halal', 'No inappropriate images, music links, or content that goes against group values.'],
    ],
    welcomeAsk: 'introduce yourself and share a reminder that has stayed with you',
    sponsors: ['Islamic bookstores', 'halal food brands', 'Islamic finance providers'],
  },
  {
    slug: 'bible-study', name: 'Bible Study', category: 'Faith', emoji: '📖', members: 'members',
    purpose: 'read scripture together and share reflections',
    topics: ['the weekly reading plan', 'reflections and questions', 'prayer requests', 'study resources'],
    rules: [
      ['Stay on this week\'s passage', 'Keep discussion focused on the current reading so everyone can follow.'],
      ['Disagree with grace', 'Different interpretations are welcome. Keep the tone loving.'],
      ['No outside promotion', 'Do not share links to other groups, ministries, or products without admin approval.'],
    ],
    welcomeAsk: 'tell us your favorite verse or book of the Bible',
    sponsors: ['Christian publishers', 'Bible study apps', 'faith-based retreats'],
  },
];

export const getNiche = (slug: string): Niche | undefined => niches.find((n) => n.slug === slug);
