// Wave 2: admin how-to pages. /how-to, /how-to/{platform}, /how-to/{platform}/{task}
// URLs follow the plan (Page plan, family "admin-howto"). Each page covers the
// whole keyword cell, not just the representative keyword, e.g. /facebook/link
// covers both "facebook group link" and "how to join a group with a link".
//
// Steps were written against the current apps (Nov 2026). Facts that vary or
// changed recently are stated with care; see docs/pseo/README.md for sources.
import { PseoBlock, PseoFaq, PseoLink, PseoPageData, PSEO_UPDATED } from './types.ts';
import { hubPath, IDEAS_PATHS } from './templates.ts';

export type HowToPlatform = 'facebook' | 'whatsapp' | 'telegram' | 'discord';

interface HowTo {
  platform: HowToPlatform;
  slug: string;
  h1: string;
  metaTitle: string;
  desc: string;
  answer: string; // short direct answer, used as the intro (snippet target)
  steps: [string, string[]][]; // [section heading, ordered steps]
  notes?: string[];
  callout?: string;
  faq: [string, string][];
  links?: PseoLink[];
}

export const HOWTO_PLATFORM_LABEL: Record<HowToPlatform, string> = {
  facebook: 'Facebook', whatsapp: 'WhatsApp', telegram: 'Telegram', discord: 'Discord',
};

const FB_APP = 'In the Facebook app, tap the menu (☰ on Android, your profile picture or ☰ at the bottom right on iPhone), then Groups.';
const WA_INFO = 'Open the group chat and tap the group name at the top to open Group info.';

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const T = (p: HowToPlatform, t: string) => `/how-to/${p}/${t}`;

const guides: HowTo[] = [
  // ─── Facebook ──────────────────────────────────────────────────────────────
  {
    platform: 'facebook', slug: 'create',
    h1: 'How to Create a Facebook Group (Phone and Desktop)',
    metaTitle: 'How to Create a Facebook Group: Step-by-Step (2026)',
    desc: 'How to create a group on Facebook from the app or a computer: name it, choose privacy, invite members, and set it up so people actually join.',
    answer: 'To create a Facebook group, go to Groups, tap Create (or "+ Create new group" on desktop), enter a name, choose Public or Private, invite a few people, and tap Create. The whole thing takes about two minutes.',
    steps: [
      ['On the Facebook app (iPhone or Android)', [FB_APP, 'Tap the + button (or "Create") at the top of the Groups screen.', 'Enter a group name. Include the topic and, for local groups, the city.', 'Choose a privacy setting: Public (anyone can see posts) or Private (only members can see posts).', 'Tap "Create group", then invite friends or skip for now.']],
      ['On a computer', ['Go to facebook.com/groups.', 'Click "+ Create new group" in the left menu.', 'Enter the group name and choose privacy.', 'Optionally invite friends, then click Create.']],
      ['Set it up before inviting people', ['Add a cover photo.', 'Write a description that says who the group is for.', 'Add group rules.', 'Turn on membership questions to screen out spam accounts.', 'Write a welcome post and pin it.']],
    ],
    notes: ['You need a personal Facebook profile to create a group. You can link it to your Facebook Page afterwards.', 'You can change the name, description, and cover later. Switching privacy has extra rules (see the privacy guide).'],
    faq: [
      ['Is it free to create a Facebook group?', 'Yes. Creating and running a Facebook group is free.'],
      ['Should my Facebook group be public or private?', 'Private works best for most communities because members feel safer posting. Public suits groups that want maximum reach, such as fan or news groups.'],
      ['Can a Facebook Page create a group?', 'Groups are created from a personal profile, but you can link a group to your Page so it appears on the Page and the Page can post and comment in it.'],
    ],
    links: [{ label: 'Facebook group description templates', path: hubPath('facebook', 'description') }, { label: 'Facebook group rules templates', path: hubPath('facebook', 'rules') }],
  },
  {
    platform: 'facebook', slug: 'delete',
    h1: 'How to Delete a Facebook Group',
    metaTitle: 'How to Delete a Facebook Group (and Alternatives to Deleting)',
    desc: 'How to permanently delete a Facebook group as the admin: remove every member, then leave. Plus how to pause or archive instead.',
    answer: 'Facebook deletes a group once it has no members. As an admin, remove every member from the Members list, then leave the group yourself as the last person. Deletion is permanent, so consider pausing or archiving the group first.',
    steps: [
      ['Delete a group you admin', ['Open the group and go to Members (on the app: tap the group name or Manage, then Members).', 'Next to each member, tap ••• and choose "Remove member". Remove all other admins and moderators too.', 'When you are the only person left, open the ••• menu on the group and choose "Leave group".', 'Confirm. With no members left, the group is deleted.']],
    ],
    callout: 'Leave last. If you leave before removing everyone, the group is not deleted: it carries on and another member can become admin.',
    notes: ['Only admins can remove members. If you are not an admin, you can only leave the group.', 'Large groups take a long time to empty by hand. If you just want activity to stop, archive or pause the group instead.', 'Members are not notified when they are removed during deletion.'],
    faq: [
      ['Can I delete a Facebook group without removing members?', 'No. Facebook only deletes a group once it has no members left. To stop activity without removing anyone, archive or pause the group.'],
      ['Can I recover a deleted Facebook group?', 'No. A deleted group and its posts cannot be restored. An archived group can be unarchived at any time.'],
      ['What is the difference between archiving and deleting a Facebook group?', 'Archiving freezes the group: no new posts, comments, or members, but existing content stays visible to members. Deleting removes the group permanently.'],
    ],
    links: [{ label: 'How to archive a Facebook group', path: T('facebook', 'archive') }, { label: 'How to remove someone from a Facebook group', path: T('facebook', 'remove-member') }],
  },
  {
    platform: 'facebook', slug: 'leave',
    h1: 'How to Leave a Facebook Group',
    metaTitle: 'How to Leave (Exit) a Facebook Group on Phone or Computer',
    desc: 'How to leave or exit a Facebook group on the app or desktop, what members see when you leave, and how to stop seeing a group without leaving.',
    answer: 'Open the group, tap "Joined" (the button under the group name), and choose "Leave group". Facebook does not notify the group when you leave.',
    steps: [
      ['On the Facebook app', ['Open the group.', 'Tap "Joined" under the group name.', 'Tap "Leave group", then confirm.']],
      ['On a computer', ['Open the group.', 'Click "Joined" under the cover photo.', 'Click "Leave group", then confirm.']],
      ['Leave several groups quickly', [FB_APP, 'Open "Your groups" (or Settings ⚙ in Groups) to see every group you belong to.', 'Open each group and leave it as above.']],
    ],
    notes: ['Optionally tick "Prevent other members from adding you back" when you leave.', 'If you are the only admin, Facebook will ask you to choose a new admin or the group may end up without one.', 'Want quiet, not out? Unfollow the group or turn off its notifications instead.'],
    faq: [
      ['Does a Facebook group know when you leave?', 'No notification is posted. Admins may notice you are no longer in the member list.'],
      ['Do my posts disappear when I leave a Facebook group?', 'No. Your posts and comments stay unless you delete them before leaving or an admin removes them.'],
    ],
    links: [{ label: 'How to mute a Facebook group', path: T('facebook', 'mute') }],
  },
  {
    platform: 'facebook', slug: 'add-members',
    h1: 'How to Add People (and Admins) to a Facebook Group',
    metaTitle: 'How to Add Members or an Admin to a Facebook Group',
    desc: 'How to invite people to a Facebook group, share an invite link, approve join requests, and add someone as an admin or moderator.',
    answer: 'Open the group and tap "+ Invite" to invite friends or share the group link. To make someone an admin, go to Members, tap ••• next to their name, and choose "Invite as admin". They must accept.',
    steps: [
      ['Invite members', ['Open the group.', 'Tap "+ Invite" under the group name.', 'Select friends, or choose Share / Copy link to invite people outside your friends list.', 'If the group requires approval, approve requests in Admin tools → Member requests.']],
      ['Add an admin or moderator', ['Open the group and go to Members.', 'Find the person (they must already be a member).', 'Tap ••• next to their name.', 'Choose "Invite as admin" or "Invite as moderator".', 'They become admin once they accept the invite.']],
    ],
    notes: ['Moderators can approve posts and members but cannot change group settings or add other admins.', 'People you invite usually have to accept the invitation before they join.'],
    faq: [
      ['Can I add someone to a Facebook group without them accepting?', 'Generally no. Invited people need to accept before they become members.'],
      ['How many admins can a Facebook group have?', 'There is no practical limit. Most groups do well with two or three admins plus moderators.'],
      ['Why can\'t I add an admin?', 'Only admins can add admins, and the person must already be a member of the group.'],
    ],
    links: [{ label: 'Admin roles in Facebook groups', path: T('facebook', 'admin') }, { label: 'Facebook group welcome message templates', path: hubPath('facebook', 'welcome-message') }],
  },
  {
    platform: 'facebook', slug: 'anonymous',
    h1: 'How to Post or Comment Anonymously in a Facebook Group',
    metaTitle: 'How to Post or Comment Anonymously in a Facebook Group',
    desc: 'How anonymous posting works in Facebook groups, how admins turn it on, and who can still see your identity.',
    answer: 'If the admins have turned on anonymous posting, tap "Write something…", switch on "Anonymous post" (or "Post anonymously"), and submit. Anonymous posts usually go to admins for approval first. Admins, moderators, and Facebook can still see who you are.',
    steps: [
      ['Post anonymously', ['Open the group and tap "Write something…".', 'Look for the "Anonymous post" option and turn it on.', 'Write your post and submit it. It may need admin approval before it appears.']],
      ['Turn on anonymous posting (admins)', ['Open the group and go to Settings (Admin tools → Group settings).', 'Find "Anonymous posting" (sometimes under "Manage discussion").', 'Turn it on and save.']],
    ],
    callout: 'Anonymous means hidden from other members, not from the admins. Admins and moderators can see who wrote an anonymous post or comment.',
    notes: ['If you do not see the option, the group has not enabled it.', 'Anonymous comments are only available in some groups.'],
    faq: [
      ['Can admins see anonymous posts on Facebook?', 'Yes. Admins and moderators can see the author of anonymous posts and comments.'],
      ['Why is there no anonymous post option in my group?', 'The admins have not turned it on. Only admins can enable anonymous posting.'],
    ],
    links: [{ label: 'Facebook group rules templates', path: hubPath('facebook', 'rules') }],
  },
  {
    platform: 'facebook', slug: 'link',
    h1: 'Facebook Group Link: How to Find, Share, and Join With It',
    metaTitle: 'How to Get a Facebook Group Link (and Join a Group)',
    desc: 'How to copy a Facebook group link on mobile or desktop, set a custom group URL, link a group to your Page, and join a group from a link.',
    answer: 'Open the group, tap Share (or "+ Invite"), then "Copy link". On a computer, you can also copy the address from the browser bar. To join a group, open its link and tap "Join group".',
    steps: [
      ['Copy a group link on the app', ['Open the group.', 'Tap Share (the arrow) or "+ Invite".', 'Tap "Copy link".']],
      ['Copy a group link on a computer', ['Open the group.', 'Copy the URL in the address bar (facebook.com/groups/…).']],
      ['Set a custom group URL (admins)', ['Go to Settings (Admin tools → Group settings).', 'Find "Web address" or "Custom URL".', 'Enter a short name and save.']],
      ['Join a group from a link', ['Open the link.', 'Tap "Join group".', 'Answer the membership questions if asked. Private groups may need admin approval.']],
    ],
    notes: ['To link a group to your Facebook Page, open the Page, go to Groups, and choose "Link group".'],
    faq: [
      ['How do I join a private Facebook group?', 'Open the group from search or a link, tap "Join group", and answer any questions. An admin has to approve your request.'],
      ['Why is my Facebook group link not working?', 'The group may be hidden, deleted, or the person may be blocked from it. Hidden groups can only be joined by invitation.'],
    ],
    links: [{ label: 'How to find Facebook groups', path: T('facebook', 'find-search') }, { label: 'How to promote a Facebook group', path: '/guides/how-to-promote-a-facebook-group' }],
  },
  {
    platform: 'facebook', slug: 'find-search',
    h1: 'How to Find Facebook Groups (Including Your Own)',
    metaTitle: 'How to Find Facebook Groups and See the Groups You\'re In',
    desc: 'How to search for Facebook groups to join, find groups by location or topic, and see a list of every group you are already in.',
    answer: 'Search a topic in the Facebook search bar and tap the Groups filter. To see groups you have joined, go to Menu → Groups → "Your groups".',
    steps: [
      ['Search for groups to join', ['Tap the search icon (🔍).', 'Type a topic and, for local groups, a place (for example "dog owners Austin").', 'Tap the "Groups" filter.', 'Open a group and tap "Join group".']],
      ['See the groups you are in', [FB_APP, 'Tap "Your groups" (on desktop: "Groups you\'ve joined" in the left menu).']],
      ['Get suggestions', ['Open Groups and browse the Discover tab for recommendations.']],
    ],
    notes: ['Hidden groups never appear in search. You need an invitation.', 'Private groups appear in search, but you only see their posts after joining.'],
    faq: [
      ['Why can\'t I find a Facebook group in search?', 'It may be a hidden group, which does not appear in search, or it may have been renamed or deleted.'],
      ['How many Facebook groups can I join?', 'The widely reported limit is 6,000 groups per account. You must leave one to join another after that.'],
    ],
    links: [{ label: 'Facebook group link and joining', path: T('facebook', 'link') }],
  },
  {
    platform: 'facebook', slug: 'private-public',
    h1: 'Private vs Public Facebook Groups: How to Change Privacy',
    metaTitle: 'How to Make a Facebook Group Private or Public (2026 Rules)',
    desc: 'The difference between public, private, and hidden Facebook groups, how to change a group\'s privacy, and how to find private groups.',
    answer: 'Admins change privacy in Settings → Privacy. Public groups can switch to private. Since Meta\'s late-2025 update, private groups can also switch to public: members are notified and content posted while the group was private stays private.',
    steps: [
      ['Change group privacy (admins)', ['Open the group and go to Settings (Admin tools → Group settings).', 'Tap "Privacy".', 'Choose Public or Private and confirm.', 'If you are making the group private, also choose Visible or Hidden.']],
      ['Find private groups', ['Search a topic and tap the Groups filter.', 'Private groups show a lock and "Private group" label.', 'Tap "Join group" and wait for approval.']],
    ],
    callout: 'Facebook rolled out private-to-public switching gradually from November 2025. If you do not see the option, it may not have reached your group yet.',
    notes: ['Public: anyone can see members and posts. Private: only members see posts. Hidden: the group does not appear in search.', 'Other admins are notified of a privacy change and may be able to review it before it takes effect.'],
    faq: [
      ['Can a private Facebook group become public?', 'Yes, since Meta\'s November 2025 update, though it rolled out gradually. Posts made while the group was private stay visible only to members.'],
      ['Can people see my posts in a private Facebook group?', 'Only members can see posts in a private group. Your friends who are not members cannot.'],
    ],
    links: [{ label: 'How to create a Facebook group', path: T('facebook', 'create') }],
  },
  {
    platform: 'facebook', slug: 'report-block',
    h1: 'How to Report or Block a Facebook Group (or a Member)',
    metaTitle: 'How to Block or Report a Facebook Group or Group Member',
    desc: 'How to report a Facebook group, stop seeing posts from a group, block someone in a group you admin, and report posts to admins.',
    answer: 'To report a group, open it, tap ••• and choose "Report group". To stop seeing a group, leave it or unfollow it. Admins can block a member from Members → ••• → "Block from group".',
    steps: [
      ['Report a group to Facebook', ['Open the group.', 'Tap ••• (top right or under the cover).', 'Tap "Report group" and follow the steps.']],
      ['Stop seeing a group', ['Leave the group, or tap "Joined" → "Unfollow group" to stay a member without seeing posts.', 'For suggested groups you are not in, tap ••• on the suggestion and choose to hide it.']],
      ['Block a member (admins)', ['Go to Members.', 'Tap ••• next to the person.', 'Choose "Remove member" and tick block, or "Block from group".']],
    ],
    notes: ['Members can report a post to group admins (••• on the post → Report to admins) or to Facebook.', 'Blocking a person on Facebook entirely is done from their profile: ••• → Block.'],
    faq: [
      ['Will the group know I reported it?', 'No. Reports to Facebook are confidential.'],
      ['Can a blocked member rejoin the group?', 'No. Blocked people cannot find or rejoin the group unless an admin unblocks them.'],
    ],
    links: [{ label: 'How to remove someone from a Facebook group', path: T('facebook', 'remove-member') }],
  },
  {
    platform: 'facebook', slug: 'admin',
    h1: 'Facebook Group Admin Guide: Roles, Tools, and Responsibilities',
    metaTitle: 'Facebook Group Admin: Roles, Admin Tools & How to Make an Admin',
    desc: 'What Facebook group admins and moderators can do, where to find Admin tools, how to make someone an admin, and how to step down.',
    answer: 'Admins control settings, members, and other admins. Moderators can manage posts and members but not settings. Admins find everything under "Admin tools" (or "Manage") in the group.',
    steps: [
      ['Open Admin tools', ['Open your group.', 'Tap "Manage" (app) or look for "Admin tools" in the left panel (desktop).']],
      ['Make someone an admin', ['Go to Members.', 'Tap ••• next to the person and choose "Invite as admin".', 'They become admin when they accept.']],
      ['Step down as admin', ['Go to Members and find your own name.', 'Tap ••• and choose "Step down as admin". Make sure someone else is admin first.']],
    ],
    notes: ['Admin tools include member requests, pending posts, reported content, rules, membership questions, Group Insights, and scheduled posts.', 'Set clear rules so moderation decisions feel fair: they are the first thing members check when a post is removed.'],
    faq: [
      ['What is the difference between a Facebook group admin and a moderator?', 'Admins can change settings, add or remove admins, and manage everything. Moderators can approve or remove posts and members, but cannot change settings or appoint admins.'],
      ['Can an admin remove the group creator?', 'Admins can remove other admins, including the creator, unless the group settings limit it. Keep at least one trusted co-admin to avoid losing control.'],
    ],
    links: [{ label: 'Facebook group rules templates', path: hubPath('facebook', 'rules') }, { label: 'How to monetize a Facebook group', path: '/monetize-facebook-group' }],
  },
  {
    platform: 'facebook', slug: 'rules',
    h1: 'How to Add Rules to a Facebook Group',
    metaTitle: 'How to Add Facebook Group Rules (+ Examples)',
    desc: 'How to add, edit, and reorder rules in a Facebook group, how many rules you can have, and rule examples you can copy.',
    answer: 'Go to Admin tools → Group rules → Create (or "Get started"), add a title and details for each rule, and save. Facebook groups can have up to 10 rules.',
    steps: [
      ['Add rules', ['Open the group and go to Admin tools (or Manage).', 'Tap "Group rules".', 'Tap "Create" / "Add rules", write a rule title and description, and save.', 'Repeat for each rule, up to 10.']],
      ['Edit or reorder rules', ['Open Group rules in Admin tools.', 'Tap a rule to edit it, or drag rules to reorder them.']],
    ],
    notes: ['When you remove a post or member, you can cite the rule that was broken. This makes moderation easier to explain.', 'Ask new members to agree to the rules in your membership questions.'],
    faq: [
      ['How many rules can a Facebook group have?', 'Up to 10.'],
      ['Where do members see the group rules?', 'In the group\'s About section and when they request to join.'],
    ],
    links: [{ label: 'Facebook group rules templates for 50 niches', path: hubPath('facebook', 'rules') }],
  },
  {
    platform: 'facebook', slug: 'mute',
    h1: 'How to Mute (or Unmute) a Facebook Group',
    metaTitle: 'How to Mute or Unmute a Facebook Group and Its Notifications',
    desc: 'How to turn off Facebook group notifications, unfollow a group, unmute it later, and how admins temporarily mute a member.',
    answer: 'To stop notifications, open the group, tap the bell (or "Joined" → Notifications) and choose "Off". To hide posts from your feed too, tap "Joined" → "Unfollow group". Reverse the same steps to unmute.',
    steps: [
      ['Turn off group notifications', ['Open the group.', 'Tap the bell icon, or "Joined" → "Manage notifications".', 'Choose "Off" (or "Highlights" for fewer notifications).']],
      ['Unfollow a group (hide posts from your feed)', ['Open the group.', 'Tap "Joined" → "Unfollow group".', 'To undo, tap "Joined" → "Follow group".']],
      ['Mute a member (admins)', ['Go to Members, tap ••• next to the person.', 'Choose "Mute member" and pick a duration.', 'Muted members cannot post or comment until the mute ends.']],
    ],
    faq: [
      ['Does muting a Facebook group notify anyone?', 'No. Turning off notifications or unfollowing is private.'],
      ['Why do I still see posts from a muted group?', 'Turning off notifications does not hide posts from your feed. Unfollow the group to stop seeing its posts.'],
    ],
    links: [{ label: 'How to leave a Facebook group', path: T('facebook', 'leave') }],
  },
  {
    platform: 'facebook', slug: 'archive',
    h1: 'How to Archive (or Unarchive) a Facebook Group',
    metaTitle: 'How to Archive or Unarchive a Facebook Group',
    desc: 'How to archive a Facebook group, what archiving does to posts and members, and how to unarchive the group later.',
    answer: 'As an admin, open the group, tap ••• (or Settings) and choose "Archive group". Archived groups keep their content visible to members but no one can post, comment, or join. Unarchive from the same menu at any time.',
    steps: [
      ['Archive a group', ['Open the group you admin.', 'Tap ••• (or open Settings in Admin tools).', 'Tap "Archive group" and confirm.']],
      ['Unarchive a group', ['Open the archived group.', 'Tap ••• or the banner at the top and choose "Unarchive group".']],
    ],
    notes: ['Archiving is reversible. Deleting is not.', 'Some groups also offer "Pause group", which temporarily stops activity with a message to members.'],
    faq: [
      ['What happens when you archive a Facebook group?', 'Existing posts stay visible to members, but nobody can post, comment, react, or join.'],
      ['Can members leave an archived Facebook group?', 'Yes, members can still leave.'],
    ],
    links: [{ label: 'How to delete a Facebook group', path: T('facebook', 'delete') }],
  },
  {
    platform: 'facebook', slug: 'pin',
    h1: 'How to Pin a Post (or a Group) on Facebook',
    metaTitle: 'How to Pin a Post in a Facebook Group (Featured Posts)',
    desc: 'How admins pin or feature a post at the top of a Facebook group, and how to pin your favorite groups for quick access.',
    answer: 'Admins tap ••• on a post and choose "Pin to featured" (older versions say "Mark as announcement"). The post appears in the Featured section at the top of the group. To pin a group for yourself, add it to your shortcuts or favorites.',
    steps: [
      ['Pin a post in a group (admins)', ['Find the post in your group.', 'Tap ••• on the post.', 'Tap "Pin to featured" or "Feature".']],
      ['Unpin a post', ['Open the Featured section.', 'Tap ••• on the post and choose "Unpin" / "Remove from featured".']],
      ['Pin a group for quick access', ['Open Groups.', 'Tap ••• or Settings next to the group and choose "Pin to shortcuts" or add it to favorites.']],
    ],
    notes: ['Pin your rules, a welcome post, and a "start here" guide.'],
    faq: [
      ['What does it mean to pin a group on Facebook?', 'Pinning a group adds it to your shortcuts so you can open it quickly. Other members are not affected.'],
      ['Can members pin posts in a Facebook group?', 'No. Only admins and moderators can feature posts.'],
    ],
    links: [{ label: 'Facebook group welcome message templates', path: hubPath('facebook', 'welcome-message') }],
  },
  {
    platform: 'facebook', slug: 'remove-member',
    h1: 'How to Remove Someone From a Facebook Group',
    metaTitle: 'How to Remove (Kick) Someone From a Facebook Group',
    desc: 'How admins remove a member from a Facebook group, delete their recent activity, and block them from rejoining.',
    answer: 'Open the group, go to Members, tap ••• next to the person, and choose "Remove member". You can also delete their recent posts and block them from rejoining in the same step.',
    steps: [
      ['Remove a member', ['Open the group and tap Members.', 'Search for the person.', 'Tap ••• next to their name.', 'Tap "Remove member".', 'Optionally tick "Delete recent activity" and "Block" before confirming.']],
    ],
    notes: ['Removed members are not notified, but they will notice they no longer have access.', 'Use a mute or warning first for minor rule breaks. Removal is best for spam and repeated problems.'],
    faq: [
      ['Can a removed member rejoin a Facebook group?', 'Yes, unless you also block them.'],
      ['Can I remove members in bulk?', 'Facebook mostly requires removing members one at a time. Spam accounts can be removed from Member requests or reported content.'],
    ],
    links: [{ label: 'How to block someone in a Facebook group', path: T('facebook', 'report-block') }],
  },
  {
    platform: 'facebook', slug: 'name-change',
    h1: 'How to Rename a Facebook Group',
    metaTitle: 'How to Change a Facebook Group Name',
    desc: 'How admins change the name of a Facebook group on the app or desktop, and tips for choosing a name that people can find.',
    answer: 'Go to Admin tools → Settings → "Name and description", edit the name, and save. Members may be notified of the change.',
    steps: [
      ['Change the name', ['Open the group and go to Settings (Admin tools → Group settings).', 'Tap "Name and description".', 'Edit the name and tap Save.']],
    ],
    notes: ['Put the topic and location in the name: it is the strongest signal for Facebook search.', 'Facebook may limit how often you can rename a large group.'],
    faq: [
      ['Why can\'t I change my Facebook group name?', 'Only admins can rename a group, and Facebook may temporarily block renames for large groups or after a recent change.'],
    ],
    links: [{ label: 'Facebook group description templates', path: hubPath('facebook', 'description') }],
  },
  {
    platform: 'facebook', slug: 'limit',
    h1: 'Facebook Group Limits: Members, Groups You Can Join, and Text',
    metaTitle: 'Facebook Group Limits: Member Limit, Join Limit & Character Limits',
    desc: 'Is there a member limit for Facebook groups? How many groups you can join, how many rules you can add, and limits on invitations.',
    answer: 'Facebook groups have no member limit. You can join up to 6,000 groups (widely reported), add up to 10 group rules, and Facebook may temporarily block you if you join, invite, or post too quickly.',
    steps: [],
    notes: [
      'Members per group: no limit.',
      'Groups you can join: about 6,000. Leave one to join another.',
      'Group rules: up to 10.',
      'Join, invite, and posting speed: temporary limits apply if Facebook thinks the activity looks like spam.',
      'Description length: Facebook does not publish a firm limit. Keep it short so the key sentence is visible without expanding.',
    ],
    faq: [
      ['Is there a limit to how many members a Facebook group can have?', 'No. Some groups have millions of members.'],
      ['Why does Facebook say I can\'t join more groups?', 'You have hit the joining cap or a temporary rate limit. Leave groups you no longer use or wait a day.'],
    ],
    links: [{ label: 'How to add rules to a Facebook group', path: T('facebook', 'rules') }, { label: 'Facebook group description templates', path: hubPath('facebook', 'description') }],
  },
  {
    platform: 'facebook', slug: 'description',
    h1: 'How to Add or Edit a Facebook Group Description',
    metaTitle: 'How to Edit a Facebook Group Description (+ Templates)',
    desc: 'How to add or change a Facebook group description on mobile or desktop, how long it should be, and templates you can copy.',
    answer: 'Go to Admin tools → Settings → "Name and description", edit the description, and save. Lead with who the group is for, because that is what people read before deciding to join.',
    steps: [
      ['Edit the description', ['Open the group and go to Settings (Admin tools → Group settings).', 'Tap "Name and description".', 'Edit the description and tap Save.']],
    ],
    notes: ['Facebook does not publish a firm character limit. Two to five short paragraphs is plenty.', 'Mention the topics members can post about and point to the rules.'],
    faq: [
      ['Where does the group description appear?', 'In the group\'s About section, and in search results and previews when people find the group.'],
    ],
    links: [{ label: 'Facebook group description templates for 50 niches', path: hubPath('facebook', 'description') }],
  },
  {
    platform: 'facebook', slug: 'export',
    h1: 'Can You Export a Facebook Group Member List or Posts?',
    metaTitle: 'How to Export a Facebook Group Member List or Posts',
    desc: 'What Facebook lets you export from a group, how to download your own group activity, and how admins collect member emails the right way.',
    answer: 'Facebook does not offer a built-in export of a group\'s member list or all its posts. You can download your own posts and comments with "Download your information", and admins can collect emails (with consent) through membership questions.',
    steps: [
      ['Download your own group activity', ['Go to Settings & privacy → Settings → Accounts Center.', 'Open "Your information and permissions" → "Download your information".', 'Choose the Groups category, a date range, and format, then request the download.']],
      ['Collect member emails (admins)', ['Go to Admin tools → Membership questions.', 'Add a question asking for an email address and explain why you are collecting it.', 'Export the answers using a tool you trust, and follow privacy law (consent, unsubscribe).']],
    ],
    callout: 'Scraping member profiles breaks Facebook\'s terms and can get your account and group restricted. Ask members for their email instead.',
    faq: [
      ['Can a Facebook group admin download the member list?', 'Not as a file. Admins can view the member list in the group but there is no official export.'],
    ],
    links: [{ label: 'Facebook group admin guide', path: T('facebook', 'admin') }],
  },
  {
    platform: 'facebook', slug: 'cover-photo',
    h1: 'How to Change a Facebook Group Cover Photo (and the Right Size)',
    metaTitle: 'Facebook Group Cover Photo: How to Change It + Best Size',
    desc: 'How to add or change a Facebook group cover photo on the app or desktop, the commonly recommended size, and design tips.',
    answer: 'Open the group, tap "Edit" on the cover photo, upload or choose a photo, adjust it, and save. The commonly recommended size is 1640 × 856 pixels. Keep text in the middle so it is not cropped on phones.',
    steps: [
      ['Change the cover photo', ['Open the group you admin.', 'Tap "Edit" on the cover image.', 'Choose "Upload photo" or pick from your photos or illustrations.', 'Drag to reposition, then Save.']],
    ],
    notes: ['Facebook groups do not have a separate profile picture or icon: the cover photo is the group\'s image.', 'Use 1640 × 856 px and keep important text in the center.'],
    faq: [
      ['Why can\'t I change my Facebook group cover photo?', 'Only admins can change it. If you are an admin, try the desktop site or update the app.'],
    ],
    links: [{ label: 'How to create a Facebook group', path: T('facebook', 'create') }],
  },

  {
    platform: 'facebook', slug: 'profile-privacy',
    h1: 'Can Facebook Group Members See Your Profile?',
    metaTitle: 'Can Facebook Group Members See Your Profile? (Privacy Explained)',
    desc: 'What people in a Facebook group can see about you, whether groups show on your profile, and how to keep your profile private from group members.',
    answer: 'Group members can see your name, profile picture, and anything on your profile that your privacy settings make visible to them, just like anyone else on Facebook. Joining a group does not give members extra access to your profile. Admins see your answers to membership questions.',
    steps: [
      ['Limit what group members can see', ['Go to Settings & privacy → Settings → Privacy (or Privacy Center).', 'Set "Who can see your future posts" to Friends.', 'Use "Limit past posts" to restrict older public posts.', 'Open your profile → ••• → "View as" to check what non-friends see.']],
      ['Control groups shown on your profile', ['Open your profile and go to More → Groups (where available).', 'Hide groups you do not want to show, or adjust the visibility of that section.']],
    ],
    notes: ['Private group membership and posts are only visible to members of that group.', 'Some groups let you use a group-specific profile or post anonymously, if admins turn those features on.', 'You cannot convert a personal profile into a group. Create a new group from your profile instead.'],
    faq: [
      ['Can a Facebook group see my friends list?', 'Only if your friends list is visible to them under your privacy settings.'],
      ['Do my posts in a private group appear on my profile?', 'No. Posts in private groups are only visible to group members.'],
    ],
    links: [{ label: 'How to post anonymously in a Facebook group', path: T('facebook', 'anonymous') }, { label: 'Private vs public Facebook groups', path: T('facebook', 'private-public') }],
  },

  // ─── WhatsApp ──────────────────────────────────────────────────────────────
  {
    platform: 'whatsapp', slug: 'link',
    h1: 'WhatsApp Group Link: How to Create, Share, and Reset It',
    metaTitle: 'How to Create a WhatsApp Group Invite Link (and Reset It)',
    desc: 'How to get a WhatsApp group invite link or QR code, share it, reset it to stop new joins, and join a group from a link.',
    answer: 'Open the group, tap the group name, then "Invite to group via link" (or "Invite via link"). Copy, share, or show the QR code. Only admins can create the link, and "Reset link" makes the old link stop working.',
    steps: [
      ['Get the invite link', [WA_INFO, 'Tap "Invite to group via link" (on some versions: Add members → Invite via link).', 'Choose Copy link, Share link, or QR code.']],
      ['Reset the link', ['Open the same invite link screen.', 'Tap "Reset link" and confirm. The old link stops working immediately.']],
      ['Join a group from a link', ['Tap the link.', 'Tap "Join group". If the group approves new members, wait for an admin.']],
    ],
    notes: ['Anyone with the link can join, so only share it where you are happy for strangers to see it.', 'Turn on "Approve new members" in Group settings to review people who join via the link.'],
    faq: [
      ['Who can create a WhatsApp group link?', 'Only group admins.'],
      ['Why does my WhatsApp group link say it was reset?', 'An admin reset the link, so the old one no longer works. Ask an admin for the new link.'],
    ],
    links: [{ label: 'How to add members to a WhatsApp group', path: T('whatsapp', 'add-members') }, { label: 'Private vs public WhatsApp groups', path: T('whatsapp', 'private-public') }],
  },
  {
    platform: 'whatsapp', slug: 'add-members',
    h1: 'How to Add Someone to a WhatsApp Group',
    metaTitle: 'How to Add Someone to a WhatsApp Group (Even If Not Saved)',
    desc: 'How to add people to a WhatsApp group, add someone who is not in your contacts, and what to do when WhatsApp says you can\'t add them.',
    answer: 'Open the group, tap the group name, tap "Add members" (or "Add participants"), select contacts, and tap ✓. If someone\'s privacy settings stop you adding them, WhatsApp lets you send them a private invite link instead.',
    steps: [
      ['Add contacts to a group', [WA_INFO, 'Tap "Add members" / "Add participants".', 'Search and select contacts.', 'Tap ✓ (Android) or Add (iPhone).']],
      ['Add someone not in your contacts', ['Save their number to your contacts first, or', 'Send them the group invite link in a direct chat.']],
    ],
    notes: ['By default only admins can add members. Admins can allow everyone under Group settings → "Add other members".', 'If a person set "Who can add me to groups" to My contacts or Nobody, you will be offered "Invite to group" instead.', 'A group can have up to 1,024 members.'],
    faq: [
      ['Why can\'t I add someone to a WhatsApp group?', 'Either you are not an admin (and only admins can add members), their privacy settings block it, or the group is full.'],
      ['Does the person get notified when added?', 'Yes. They see the group in their chats and a message saying who added them.'],
    ],
    links: [{ label: 'WhatsApp group welcome messages', path: hubPath('whatsapp', 'welcome-message') }, { label: 'WhatsApp group link', path: T('whatsapp', 'link') }],
  },
  {
    platform: 'whatsapp', slug: 'create',
    h1: 'How to Create a WhatsApp Group (iPhone and Android)',
    metaTitle: 'How to Create a WhatsApp Group on iPhone or Android',
    desc: 'Step-by-step: create a WhatsApp group on iPhone or Android, add a name, photo, and description, and set admin-only settings.',
    answer: 'On Android tap ⋮ → New group; on iPhone tap the new chat button → New group. Select contacts, tap Next, add a group name (and photo), and tap Create.',
    steps: [
      ['On Android', ['Open WhatsApp and tap ⋮ (top right) → "New group".', 'Select the contacts to add, then tap the green arrow.', 'Enter a group name and optionally a photo.', 'Tap ✓ to create.']],
      ['On iPhone', ['Open Chats and tap the new chat button (+ or pencil icon).', 'Tap "New group".', 'Select contacts and tap Next.', 'Enter a name and optionally a photo, then tap Create.']],
      ['Set up the group', ['Add a description with the group\'s purpose and rules.', 'Open Group settings to choose who can send messages, edit group info, and add members.']],
    ],
    notes: ['Group names can be up to 100 characters, but only the first part shows in chat lists.', 'Need announcements for hundreds of people? Consider a WhatsApp Community or Channel.'],
    faq: [
      ['How many people can be in a WhatsApp group?', 'Up to 1,024 members.'],
      ['Can I create a WhatsApp group without adding anyone?', 'You need to add at least one other person when you create it. You can remove them later.'],
    ],
    links: [{ label: 'WhatsApp group description templates', path: hubPath('whatsapp', 'description') }, { label: 'WhatsApp group rules templates', path: hubPath('whatsapp', 'rules') }],
  },
  {
    platform: 'whatsapp', slug: 'delete',
    h1: 'How to Delete a WhatsApp Group',
    metaTitle: 'How to Delete a WhatsApp Group (as Admin or Member)',
    desc: 'How to delete a WhatsApp group for everyone as an admin, or delete it from your phone as a member.',
    answer: 'To delete a group for everyone, an admin removes every member, then taps "Exit group" and "Delete group". As a regular member, you can only exit the group and delete it from your own chat list.',
    steps: [
      ['Delete a group as the admin', [WA_INFO, 'Tap each member and choose "Remove". Repeat until you are the only one left.', 'Tap "Exit group" and confirm.', 'Tap "Delete group" to remove it from your chats.']],
      ['Delete a group as a member', [WA_INFO, 'Tap "Exit group" and confirm.', 'Tap "Delete group".']],
    ],
    notes: ['If you exit without removing everyone, the group continues for the remaining members.', 'Back up or export the chat before deleting if you want to keep it.'],
    faq: [
      ['Does deleting a WhatsApp group delete it for everyone?', 'Only if all members have been removed first. Otherwise you only delete it from your own phone.'],
      ['Can I recover a deleted WhatsApp group?', 'Not the group itself. Messages may be restorable from a chat backup made before you deleted it.'],
    ],
    links: [{ label: 'How to export a WhatsApp group chat', path: T('whatsapp', 'export') }],
  },
  {
    platform: 'whatsapp', slug: 'leave',
    h1: 'How to Leave a WhatsApp Group (Quietly)',
    metaTitle: 'How to Leave a WhatsApp Group Without Everyone Knowing',
    desc: 'How to exit a WhatsApp group on iPhone or Android, who gets notified, and how to mute a group instead of leaving.',
    answer: 'Open the group, tap the group name, scroll down, and tap "Exit group". Only the group admins are notified, not every member.',
    steps: [
      ['Exit a group', [WA_INFO, 'Scroll down and tap "Exit group".', 'Confirm. Optionally tap "Delete group" to remove it from your chats.']],
      ['Exit from the chat list', ['Android: long-press the group → ⋮ → Exit group.', 'iPhone: swipe left on the group → More → Exit group.']],
    ],
    notes: ['Other members can still see in the participant list that you are gone.', 'If you are the only admin, WhatsApp picks a new admin automatically.'],
    faq: [
      ['Does everyone know when you leave a WhatsApp group?', 'No. Only admins are notified, though members may notice you are missing from the list.'],
      ['Can I rejoin a WhatsApp group after leaving?', 'Yes, if an admin adds you back or you have a working invite link.'],
    ],
    links: [{ label: 'How to mute a WhatsApp group', path: T('whatsapp', 'mute') }],
  },
  {
    platform: 'whatsapp', slug: 'mute',
    h1: 'How to Mute a WhatsApp Group',
    metaTitle: 'How to Mute (and Unmute) a WhatsApp Group',
    desc: 'How to mute WhatsApp group notifications for 8 hours, a week, or always, and how to unmute later.',
    answer: 'Open the group, tap the group name, tap "Mute notifications", and choose 8 hours, 1 week, or Always. Nobody is told you muted it.',
    steps: [
      ['Mute a group', [WA_INFO, 'Tap "Notifications" / "Mute".', 'Choose 8 hours, 1 week, or Always.']],
      ['Mute from the chat list', ['Android: long-press the group and tap the mute (🔕) icon.', 'iPhone: swipe left on the group → More → Mute.']],
      ['Unmute', ['Repeat the steps and choose "Unmute".']],
    ],
    notes: ['Muted groups still show unread counts. Archive the group to hide it from your chat list as well.', '@mentions and replies to you may still notify you in some versions.'],
    faq: [
      ['Does anyone know if I mute a WhatsApp group?', 'No. Muting is private.'],
    ],
    links: [{ label: 'How to archive a WhatsApp group', path: T('whatsapp', 'archive') }],
  },
  {
    platform: 'whatsapp', slug: 'limit',
    h1: 'WhatsApp Group Limit: How Many Members Can a Group Have?',
    metaTitle: 'WhatsApp Group Limit 2026: Members, Name & Description Length',
    desc: 'WhatsApp group limits: maximum members, group name and description length, pinned messages, and what to use for bigger audiences.',
    answer: 'A WhatsApp group can have up to 1,024 members. Group names can be up to 100 characters and descriptions up to 2,048 characters. For larger audiences, use a Community (which groups several groups) or a Channel.',
    steps: [],
    notes: [
      'Members per group: 1,024.',
      'Group name: up to 100 characters.',
      'Group description: up to 2,048 characters.',
      'Pinned messages: up to 3 per chat.',
      'Bigger audiences: Communities link multiple groups under an announcement group; Channels are one-way broadcasts with no member cap.',
    ],
    faq: [
      ['What happens when a WhatsApp group is full?', 'Nobody new can join until someone leaves or is removed. Create a second group or move to a Community.'],
    ],
    links: [{ label: 'How to create a WhatsApp group', path: T('whatsapp', 'create') }],
  },
  {
    platform: 'whatsapp', slug: 'find-search',
    h1: 'How to Find WhatsApp Groups to Join',
    metaTitle: 'How to Find WhatsApp Groups to Join (Safely)',
    desc: 'WhatsApp has no public group search. Here is how to find WhatsApp groups to join, how to search your own groups, and how to stay safe.',
    answer: 'WhatsApp has no built-in directory of public groups. You join through invite links shared by admins, by websites and communities you trust, or through WhatsApp Communities you belong to. To find a group you are already in, use the search bar in Chats.',
    steps: [
      ['Find groups to join', ['Ask organizations, schools, and communities you belong to for their WhatsApp group link.', 'Look for links on official websites and social profiles.', 'Check Communities you are already in for groups you can join.']],
      ['Find a group you are already in', ['Open Chats and type the group name in the search bar.', 'Or filter Chats by "Groups" (where available).']],
    ],
    callout: 'Be careful with random "WhatsApp group link" lists online. Anyone in a group can see your phone number, and many listed groups are spam or scams.',
    faq: [
      ['Can you search for public WhatsApp groups?', 'No. WhatsApp does not offer group search. You need an invite link.'],
      ['Do WhatsApp Channels work differently?', 'Yes. Channels can be found in the Updates tab directory, and following one does not reveal your number.'],
    ],
    links: [{ label: 'WhatsApp group link', path: T('whatsapp', 'link') }],
  },
  {
    platform: 'whatsapp', slug: 'report-block',
    h1: 'How to Report a WhatsApp Group (or Block Someone in It)',
    metaTitle: 'How to Report a WhatsApp Group or Block a Member',
    desc: 'How to report a WhatsApp group or a message, block a member, and stop being added to groups by strangers.',
    answer: 'Open the group, tap the group name, scroll down, and tap "Report group". You can also exit the group in the same step. To block a person, open their profile from the group and tap Block.',
    steps: [
      ['Report a group', [WA_INFO, 'Scroll down and tap "Report group".', 'Choose whether to also exit the group, then confirm.']],
      ['Report a single message', ['Long-press the message.', 'Tap ⋮ / More → Report.']],
      ['Block someone in a group', ['Tap their name in the group participant list.', 'Open their profile and tap Block.']],
      ['Stop strangers adding you', ['Go to Settings → Privacy → Groups.', 'Choose "My contacts" or "My contacts except…".']],
    ],
    faq: [
      ['Does a WhatsApp group know if I report it?', 'No. Reports are anonymous. WhatsApp receives recent messages from the group to review.'],
      ['If I block someone, can they still see my messages in a group?', 'Yes. Blocking stops direct messages and calls, but you will both still see each other\'s messages in shared groups.'],
    ],
    links: [{ label: 'How to leave a WhatsApp group', path: T('whatsapp', 'leave') }],
  },
  {
    platform: 'whatsapp', slug: 'admin',
    h1: 'WhatsApp Group Admin Guide: Make, Remove, and Manage Admins',
    metaTitle: 'WhatsApp Group Admin: How to Make or Remove an Admin',
    desc: 'How to make someone a WhatsApp group admin, dismiss an admin, what admins can do, and what happens when an admin removes you.',
    answer: 'Open the group info, tap a member, and choose "Make group admin". To remove admin rights, tap them again and choose "Dismiss as admin". Admins control members, the invite link, and group settings.',
    steps: [
      ['Make someone an admin', [WA_INFO, 'Tap the member\'s name in the participant list.', 'Tap "Make group admin".']],
      ['Dismiss an admin', ['Tap the admin\'s name in the participant list.', 'Tap "Dismiss as admin".']],
      ['Admin-only settings', ['Open Group info → Group settings.', 'Choose who can edit group info, send messages, add members, and whether new members need approval.']],
    ],
    notes: ['If an admin removes you, you cannot rejoin unless an admin adds you back or you get a new invite link.', 'If the last admin leaves, WhatsApp makes another member admin.', 'Admins can delete other people\'s messages for everyone.'],
    faq: [
      ['How many admins can a WhatsApp group have?', 'Any number of members can be admins.'],
      ['Why did an admin remove me from a WhatsApp group?', 'Admins can remove anyone at any time, often for breaking group rules or to keep the group small. Message the admin directly to ask.'],
    ],
    links: [{ label: 'WhatsApp group rules templates', path: hubPath('whatsapp', 'rules') }, { label: 'Monetize your WhatsApp group', path: '/monetize-whatsapp-group' }],
  },
  {
    platform: 'whatsapp', slug: 'remove-member',
    h1: 'How to Remove Someone From a WhatsApp Group',
    metaTitle: 'How to Remove Someone From a WhatsApp Group',
    desc: 'How WhatsApp group admins remove a member, whether they are notified, and how to stop them rejoining.',
    answer: 'As an admin, open Group info, tap the member\'s name, and choose "Remove". The member sees that an admin removed them.',
    steps: [
      ['Remove a member', [WA_INFO, 'Tap the member in the participant list.', 'Tap "Remove [name]" and confirm.']],
      ['Stop them rejoining', ['Reset the group invite link (Group info → Invite via link → Reset link).', 'Turn on "Approve new members" in Group settings.']],
    ],
    faq: [
      ['Does WhatsApp notify the group when someone is removed?', 'A system message shows in the group that the admin removed the person.'],
      ['Can non-admins remove members?', 'No. Only admins can remove members.'],
    ],
    links: [{ label: 'WhatsApp group admin guide', path: T('whatsapp', 'admin') }],
  },
  {
    platform: 'whatsapp', slug: 'rules',
    h1: 'How to Set Rules in a WhatsApp Group',
    metaTitle: 'WhatsApp Group Rules: How to Set and Enforce Them (+ Examples)',
    desc: 'WhatsApp has no rules feature, so here is how admins set rules with the description, pinned messages, and admin-only settings.',
    answer: 'WhatsApp has no dedicated rules section. Put a short version of your rules in the group description, send the full rules as a message and pin it, and use Group settings to enforce them (admin-only messages, approval for new members).',
    steps: [
      ['Set up your rules', ['Write your rules (5–10 short points).', 'Paste a short version in the group description.', 'Send the full rules as a message, long-press it, and tap Pin.']],
      ['Enforce them with settings', ['Group info → Group settings → "Send messages": Only admins (for announcement times).', 'Turn on "Approve new members" to screen people who join via link.', 'Restrict "Edit group settings" to admins.']],
    ],
    faq: [
      ['What are good WhatsApp group rules?', 'Be respectful, stay on topic, no chain forwards or spam, respect quiet hours, and no promotion without admin approval.'],
    ],
    links: [{ label: 'WhatsApp group rules templates for 50 niches', path: hubPath('whatsapp', 'rules') }, { label: 'How to pin a message in WhatsApp', path: T('whatsapp', 'pin') }],
  },
  {
    platform: 'whatsapp', slug: 'archive',
    h1: 'How to Archive or Unarchive a WhatsApp Group',
    metaTitle: 'How to Archive and Unarchive a WhatsApp Group',
    desc: 'How to archive a WhatsApp group to hide it from your chat list, find archived chats, and unarchive them on iPhone or Android.',
    answer: 'Archive: swipe left on the group (iPhone) or long-press it and tap the archive icon (Android). Unarchive: open "Archived" at the top of Chats, then swipe or long-press the group and tap Unarchive.',
    steps: [
      ['Archive a group', ['iPhone: swipe left on the group and tap Archive.', 'Android: long-press the group and tap the archive icon at the top.']],
      ['Unarchive a group', ['Open "Archived" at the top of your chat list.', 'iPhone: swipe left on the group and tap Unarchive.', 'Android: long-press the group and tap the unarchive icon.']],
    ],
    notes: ['Archiving does not leave the group or delete messages.', 'By default, archived chats stay archived when new messages arrive. Change this in Settings → Chats → "Keep chats archived".'],
    faq: [
      ['Does archiving a WhatsApp group notify anyone?', 'No. Archiving is private.'],
    ],
    links: [{ label: 'How to mute a WhatsApp group', path: T('whatsapp', 'mute') }],
  },
  {
    platform: 'whatsapp', slug: 'private-public',
    h1: 'Private vs Public WhatsApp Groups: How Group Privacy Works',
    metaTitle: 'Private WhatsApp Group Link: Is a WhatsApp Group Public or Private?',
    desc: 'Are WhatsApp groups public or private? How invite links make a group open to anyone, and how to keep your group private.',
    answer: 'WhatsApp groups are private by default: people can only join if an admin adds them or they have the invite link. A group becomes effectively "public" once its invite link is posted publicly. To keep it private, share the link carefully, reset it if it leaks, and require admin approval.',
    steps: [
      ['Keep a group private', ['Only admins can share the invite link. Share it directly, not on public sites.', 'Turn on "Approve new members" in Group settings.', 'Reset the link if it is posted somewhere you did not intend.']],
    ],
    notes: ['Every member can see the phone numbers of other members (Communities hide numbers in announcement groups).'],
    faq: [
      ['Can strangers find my WhatsApp group?', 'Not through WhatsApp search. They need the invite link.'],
    ],
    links: [{ label: 'WhatsApp group link', path: T('whatsapp', 'link') }],
  },
  {
    platform: 'whatsapp', slug: 'pin',
    h1: 'How to Pin a Message in a WhatsApp Group',
    metaTitle: 'How to Pin a Message in a WhatsApp Group (and Pin Chats)',
    desc: 'How to pin a message in a WhatsApp group for 24 hours, 7 days, or 30 days, who can pin, and how to pin a chat to the top.',
    answer: 'Long-press the message, tap Pin (on iPhone: More → Pin), and choose 24 hours, 7 days, or 30 days. Up to 3 messages can be pinned per chat. Admins can limit pinning to admins only.',
    steps: [
      ['Pin a message', ['Long-press the message.', 'Tap Pin (Android: ⋮ → Pin).', 'Choose how long: 24 hours, 7 days, or 30 days.']],
      ['Pin a chat to the top of your list', ['iPhone: swipe right on the chat and tap Pin.', 'Android: long-press the chat and tap the pin icon.']],
    ],
    notes: ['Group settings let admins choose whether all members or only admins can pin messages.'],
    faq: [
      ['How many messages can I pin in a WhatsApp group?', 'Up to 3.'],
    ],
    links: [{ label: 'How to set rules in a WhatsApp group', path: T('whatsapp', 'rules') }],
  },
  {
    platform: 'whatsapp', slug: 'export',
    h1: 'How to Export a WhatsApp Group Chat',
    metaTitle: 'How to Export a WhatsApp Group Chat (iPhone & Android)',
    desc: 'How to export a WhatsApp group chat with or without media, what you get, and how to move chats to a new phone.',
    answer: 'Android: open the group → ⋮ → More → Export chat. iPhone: open Group info → Export chat. Choose with or without media and share the file to email or storage.',
    steps: [
      ['On Android', ['Open the group chat.', 'Tap ⋮ → More → Export chat.', 'Choose "Without media" or "Include media" and pick where to save or send it.']],
      ['On iPhone', [WA_INFO, 'Scroll down and tap "Export chat".', 'Choose "Without media" or "Attach media" and share it.']],
    ],
    notes: ['Exports are text files (plus media files) for reading, not a backup you can import back into WhatsApp.', 'To move chats to a new phone, use WhatsApp\'s chat backup or transfer instead.'],
    faq: [
      ['Can I import an exported WhatsApp chat?', 'Not into WhatsApp. Use chat backup and restore to move chats between phones.'],
    ],
    links: [{ label: 'How to delete a WhatsApp group', path: T('whatsapp', 'delete') }],
  },
  {
    platform: 'whatsapp', slug: 'description',
    h1: 'How to Add or Change a WhatsApp Group Description',
    metaTitle: 'How to Change a WhatsApp Group Description (Limit + Templates)',
    desc: 'How to add or edit a WhatsApp group description, the character limit, who can change it, and templates to copy.',
    answer: 'Open the group, tap the group name, tap the description (or "Add group description"), type it, and save. Descriptions can be up to 2,048 characters, but only the first lines show before "Read more".',
    steps: [
      ['Edit the description', [WA_INFO, 'Tap "Add group description" or the existing description.', 'Edit the text and tap Save / OK.']],
    ],
    notes: ['If "Edit group settings" is set to admins only, only admins can change it.', 'Use *asterisks* for bold and line breaks for sections.'],
    faq: [
      ['What is the WhatsApp group description character limit?', 'Up to 2,048 characters.'],
    ],
    links: [{ label: 'WhatsApp group description templates for 50 niches', path: hubPath('whatsapp', 'description') }],
  },
  {
    platform: 'whatsapp', slug: 'name-change',
    h1: 'How to Change a WhatsApp Group Name (and Your Name in a Group)',
    metaTitle: 'How to Change a WhatsApp Group Name or Your Name in a Group',
    desc: 'How to rename a WhatsApp group, who can change the name, and how to change the name other members see for you.',
    answer: 'To rename a group, open Group info and tap the group name (iPhone: Edit), type the new name, and save. To change the name members see for you, change your profile name in Settings. WhatsApp shows your profile name to people who have not saved your number.',
    steps: [
      ['Rename a group', [WA_INFO, 'Tap the group name (or Edit on iPhone).', 'Type a new name (up to 100 characters) and save.']],
      ['Change your own name', ['Go to Settings and tap your name.', 'Edit your profile name and save.']],
    ],
    notes: ['People who saved your number see the name they saved, not your profile name.', 'Admins can restrict who changes the group name under Group settings → "Edit group settings".'],
    faq: [
      ['Can I set a nickname for just one WhatsApp group?', 'No. Your profile name is the same across all chats.'],
    ],
    links: [{ label: 'WhatsApp group description templates', path: hubPath('whatsapp', 'description') }],
  },
  {
    platform: 'whatsapp', slug: 'anonymous',
    h1: 'Can You Send Anonymous Messages in a WhatsApp Group?',
    metaTitle: 'How to Send an Anonymous Message in a WhatsApp Group',
    desc: 'WhatsApp doesn\'t support anonymous messages in groups. Here is what members can see about you and the privacy options you do have.',
    answer: 'No. Every message in a WhatsApp group shows the sender, and members can see your phone number. To give feedback anonymously, use a poll (votes are visible) or an external anonymous form shared in the group.',
    steps: [
      ['Collect anonymous feedback in a group', ['Create a form with an anonymous survey tool.', 'Share the link in the group.', 'Post a summary of the results.']],
    ],
    notes: ['WhatsApp polls show who voted for what, so they are not anonymous.', 'In Community announcement groups, phone numbers are hidden from other members.'],
    faq: [
      ['Can WhatsApp group members see my number?', 'Yes. Members of regular groups can see your phone number.'],
    ],
    links: [{ label: 'Private vs public WhatsApp groups', path: T('whatsapp', 'private-public') }],
  },
  {
    platform: 'whatsapp', slug: 'read-receipts',
    h1: 'How to See Who Read Your Message in a WhatsApp Group',
    metaTitle: 'How to Check Who Read Your Message in a WhatsApp Group',
    desc: 'How to see who read (and who received) your message in a WhatsApp group on iPhone or Android, and what the blue ticks mean.',
    answer: 'Long-press your message and tap Info (iPhone: swipe left on the message). WhatsApp lists who has read it and who it was delivered to. Blue ticks only appear once every member has read it.',
    steps: [
      ['On Android', ['Long-press your message in the group.', 'Tap ⋮ → Info.', 'See "Read by" and "Delivered to".']],
      ['On iPhone', ['Swipe left on your message (or long-press → Info).', 'See "Read by" and "Delivered to".']],
    ],
    notes: ['You can only see read info for your own messages.', 'WhatsApp says read receipts are always sent in group chats, even if someone turned them off for individual chats.'],
    faq: [
      ['What do the ticks mean in a WhatsApp group?', 'One grey tick: sent. Two grey ticks: delivered to everyone. Two blue ticks: read by everyone.'],
    ],
    links: [{ label: 'WhatsApp group ideas', path: IDEAS_PATHS.whatsapp }],
  },
  {
    platform: 'whatsapp', slug: 'icon',
    h1: 'How to Change a WhatsApp Group Icon (Group DP)',
    metaTitle: 'How to Change a WhatsApp Group Icon / DP',
    desc: 'How to add or change a WhatsApp group photo (DP), who can change it, and what to do if it won\'t update.',
    answer: 'Open Group info, tap the group photo (or camera icon), and choose Take photo, Choose photo, Emoji & sticker, or Search web. Crop it and save.',
    steps: [
      ['Change the group icon', [WA_INFO, 'Tap the group photo at the top, then Edit (or the camera icon).', 'Choose a photo, emoji, or sticker.', 'Crop it and tap Done / Save.']],
    ],
    notes: ['If admins restricted "Edit group settings", only admins can change the icon.', 'If the icon won\'t update, check your connection and app version, then try again.'],
    faq: [
      ['Who can change a WhatsApp group photo?', 'Everyone, unless admins restrict editing group info to admins.'],
    ],
    links: [{ label: 'How to create a WhatsApp group', path: T('whatsapp', 'create') }],
  },

  // ─── Telegram ──────────────────────────────────────────────────────────────
  {
    platform: 'telegram', slug: 'find-search',
    h1: 'How to Find and Search Telegram Groups',
    metaTitle: 'Telegram Group Search: How to Find Telegram Groups to Join',
    desc: 'How to search for public Telegram groups and channels, join from a link, and find groups you are already in.',
    answer: 'Tap the search bar in Telegram and type a topic or group name. Public groups and channels appear under "Global search". Private groups do not appear: you need an invite link.',
    steps: [
      ['Search for public groups', ['Open Telegram and tap the search bar.', 'Type a keyword or group name.', 'Look under "Global search" (or the Chats / Channels tabs) for public results.', 'Open a group and tap Join.']],
      ['Join from a link', ['Tap a t.me link.', 'Tap "Join group".']],
    ],
    callout: 'Search results include many spam and scam groups. Check the member count, recent messages, and admins before joining.',
    faq: [
      ['Can I find private Telegram groups in search?', 'No. Private groups are only joinable with an invite link.'],
    ],
    links: [{ label: 'Telegram group link', path: T('telegram', 'link') }],
  },
  {
    platform: 'telegram', slug: 'link',
    h1: 'Telegram Group Link: How to Create and Share an Invite Link',
    metaTitle: 'How to Create a Telegram Group Invite Link',
    desc: 'How to get a Telegram group invite link, create links with limits or approval, and set a public t.me link for your group.',
    answer: 'Open the group, tap the group name, then "Invite links" (or Add members → Invite via link). Copy or share the primary link, or create a new link with an expiry date, member limit, or join requests.',
    steps: [
      ['Share the invite link', ['Open the group and tap its name.', 'Tap "Invite links" (or Edit → Invite links).', 'Copy or share the primary link, or show the QR code.']],
      ['Create a custom link', ['In Invite links, tap "Create a new link".', 'Set an expiry, a member limit, or turn on "Request admin approval".']],
      ['Give a public group a t.me address', ['Tap Edit → Group type → Public.', 'Choose a username. Your link becomes t.me/username.']],
    ],
    faq: [
      ['Can I revoke a Telegram invite link?', 'Yes. Open Invite links, tap the link, and choose Revoke.'],
    ],
    links: [{ label: 'Public vs private Telegram groups', path: T('telegram', 'private-public') }],
  },
  {
    platform: 'telegram', slug: 'private-public',
    h1: 'How to Make a Telegram Group Public or Private',
    metaTitle: 'How to Make a Telegram Group Public or Private',
    desc: 'How to switch a Telegram group between public and private, what changes for members, and why you might be restricted from public groups.',
    answer: 'Open the group, tap the name, tap Edit → Group type, and choose Public (with a t.me username) or Private (invite links only). Public groups appear in search; private groups do not.',
    steps: [
      ['Change group type', ['Open the group and tap its name.', 'Tap Edit (pencil) → Group type.', 'Choose Public and set a username, or choose Private.', 'Save.']],
    ],
    notes: ['If you can\'t post in public groups, your account may be limited for spam reports. Telegram\'s @SpamBot explains limits on your account.'],
    faq: [
      ['Can anyone join a public Telegram group?', 'Yes, unless admins turn on join requests or other restrictions.'],
    ],
    links: [{ label: 'Telegram group link', path: T('telegram', 'link') }],
  },
  {
    platform: 'telegram', slug: 'admin',
    h1: 'How to Add an Admin to a Telegram Group (and Admin Tools)',
    metaTitle: 'Telegram Group Admin: How to Add Admins and Use Admin Tools',
    desc: 'How to make someone an admin in a Telegram group, choose their permissions, and use bots and tools to manage the group.',
    answer: 'Open the group, tap its name, tap Edit → Administrators → Add admin, choose a member, and set their permissions. Admins can also add bots for moderation, welcome messages, and anti-spam.',
    steps: [
      ['Add an admin', ['Open the group and tap its name.', 'Tap Edit → Administrators → Add admin.', 'Choose the member and switch on the permissions they need.', 'Tap Save / Done.']],
      ['Add a management bot', ['Search for a reputable moderation bot.', 'Add it to the group and promote it to admin with only the permissions it needs.']],
    ],
    notes: ['Useful admin tools: slow mode, member permissions, join requests, and the recent actions log.'],
    faq: [
      ['Can a Telegram admin have limited powers?', 'Yes. Each admin can be given only specific rights, like deleting messages or banning users.'],
    ],
    links: [{ label: 'Telegram group rules', path: T('telegram', 'rules') }],
  },
  {
    platform: 'telegram', slug: 'rules',
    h1: 'How to Set Rules in a Telegram Group',
    metaTitle: 'Telegram Group Rules: How to Set Them (+ Examples)',
    desc: 'How to add rules to a Telegram group with the description, pinned messages, permissions, and welcome bots.',
    answer: 'Telegram has no rules section. Put rules in the group description, pin a rules message, and enforce them with member permissions, slow mode, and a welcome bot that shows the rules to new members.',
    steps: [
      ['Publish the rules', ['Write 5–10 short rules.', 'Send them as a message, long-press it, and tap Pin.', 'Add a short version to the group description (Edit → Description).']],
      ['Enforce them', ['Edit → Permissions: limit links, media, or messages for members.', 'Turn on Slow mode for busy groups.']],
    ],
    links: [{ label: 'WhatsApp group rules templates (work for Telegram too)', path: hubPath('whatsapp', 'rules') }],
    faq: [
      ['Can a bot show rules to new Telegram members?', 'Yes. Many moderation bots send a welcome message with the rules when someone joins.'],
    ],
  },
  {
    platform: 'telegram', slug: 'limit',
    h1: 'Telegram Group Limits: How Many Members Can Join?',
    metaTitle: 'Telegram Group Limit: Max Members in Groups and Channels',
    desc: 'Telegram group limits: maximum members in a group, channel subscriber limits, and how many groups you can join.',
    answer: 'A Telegram group can have up to 200,000 members. Channels have no subscriber limit. Accounts can join a limited number of groups and channels (higher with Telegram Premium).',
    steps: [],
    notes: ['Group members: up to 200,000.', 'Channel subscribers: unlimited.', 'Groups and channels you can join: capped per account; Telegram Premium raises the cap.'],
    faq: [
      ['What if my Telegram group needs more than 200,000 members?', 'Use a channel for announcements and link a discussion group to it.'],
    ],
    links: [{ label: 'How to find Telegram groups', path: T('telegram', 'find-search') }],
  },

  // ─── Discord ───────────────────────────────────────────────────────────────
  {
    platform: 'discord', slug: 'leave',
    h1: 'How to Leave a Discord Server or Group Chat',
    metaTitle: 'How to Leave a Discord Server or Group DM',
    desc: 'How to leave a Discord server or group DM on desktop and mobile, leave quietly, and what to do if you own the server.',
    answer: 'Desktop: right-click the server icon and choose "Leave Server". Mobile: tap the server name and choose "Leave Server". For a group DM, right-click it (or long-press on mobile) and choose "Leave Group".',
    steps: [
      ['Leave a server', ['Desktop: right-click the server icon → Leave Server → confirm.', 'Mobile: open the server, tap its name → Leave Server.']],
      ['Leave a group DM', ['Desktop: right-click the group in Direct Messages → Leave Group.', 'Mobile: long-press the group DM → Leave Group.', 'Tick "Leave without notifying other members" if offered.']],
    ],
    notes: ['If you own the server, transfer ownership (Server Settings → Members → ••• → Transfer Ownership) or delete the server.', 'Bots cannot leave group DMs on your behalf: you need to leave them yourself.'],
    faq: [
      ['Does Discord notify a server when I leave?', 'Discord does not send a public message, but some servers use bots that announce when members leave.'],
    ],
    links: [{ label: 'How to create a Discord group chat', path: T('discord', 'create') }],
  },
  {
    platform: 'discord', slug: 'create',
    h1: 'How to Make a Group Chat on Discord',
    metaTitle: 'How to Make a Group Chat on Discord (Group DM or Server)',
    desc: 'How to create a Discord group DM with up to 10 people, when to make a server instead, and how to invite people.',
    answer: 'Open Direct Messages, click the "New Group DM" icon, pick up to 9 friends, and click Create. Group DMs hold up to 10 people. For bigger groups, create a server with "+" → Create My Own.',
    steps: [
      ['Create a group DM', ['Open Direct Messages (Discord logo, top left).', 'Click the "New Group DM" icon (+ next to Direct Messages).', 'Select up to 9 friends and click Create Group DM.']],
      ['Create a server for a larger group', ['Click "+" (Add a Server) in the server list.', 'Choose "Create My Own" and a template.', 'Name the server and invite people with a link.']],
    ],
    faq: [
      ['How many people can be in a Discord group chat?', 'Up to 10 in a group DM. Servers can hold far more.'],
    ],
    links: [{ label: 'Discord invite links', path: T('discord', 'link') }],
  },
  {
    platform: 'discord', slug: 'link',
    h1: 'Discord Invite Links: How to Create One and Find Servers to Join',
    metaTitle: 'How to Create a Discord Invite Link and Find Servers to Join',
    desc: 'How to create a Discord server invite link, set it to never expire, and find Discord servers and groups to join.',
    answer: 'Right-click the server (or tap its name on mobile) and choose "Invite People". Copy the link, or click "Edit invite link" to set the expiry to Never and limit uses. To find servers, use Discover in Discord or links shared by communities you trust.',
    steps: [
      ['Create an invite link', ['Right-click the server icon (desktop) or tap the server name (mobile).', 'Choose "Invite People".', 'Copy the link or tap "Edit invite link" to change expiry and max uses.']],
      ['Find servers to join', ['Click the compass icon (Discover) in the server list.', 'Search by topic or browse categories.', 'Open a server and click Join.']],
    ],
    faq: [
      ['How do I make a Discord invite link that never expires?', 'In Invite People, click "Edit invite link", set "Expire after" to Never, and generate the link.'],
    ],
    links: [{ label: 'How to leave a Discord server', path: T('discord', 'leave') }],
  },
];

// ─── Page builders ───────────────────────────────────────────────────────────

const HOWTO_PLATFORMS: HowToPlatform[] = ['facebook', 'whatsapp', 'telegram', 'discord'];
const byPath = new Map(guides.map((g) => [T(g.platform, g.slug), g]));

function buildHowTo(g: HowTo): PseoPageData {
  const P = HOWTO_PLATFORM_LABEL[g.platform];
  const path = T(g.platform, g.slug);
  const blocks: PseoBlock[] = [];
  for (const [heading, items] of g.steps) blocks.push({ type: 'h2', content: heading }, { type: 'ol', items });
  if (g.notes?.length) blocks.push({ type: 'h2', content: g.steps.length ? 'Good to know' : `${P} group limits at a glance` }, { type: 'ul', items: g.notes });
  if (g.callout) blocks.push({ type: 'callout', content: g.callout });
  blocks.push({ type: 'callout', content: `${P} updates its apps often. If a menu label is slightly different on your phone, look for the closest match. Last checked ${new Date(PSEO_UPDATED + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })}.` });
  if (g.links?.length) blocks.push({ type: 'links', heading: 'Useful next', links: g.links });
  if (g.platform === 'facebook' || g.platform === 'whatsapp') {
    blocks.push({
      type: 'cta', role: 'admin',
      headline: `Run a ${P} group? Get paid for it.`,
      body: `Rent My Group connects active ${P} groups with brands that want to reach them. List for free, set your rates, and approve every sponsored post.`,
      buttonText: 'List My Group Free',
    });
  }
  const siblings = guides.filter((x) => x.platform === g.platform && x !== g).slice(0, 6);
  return {
    path,
    family: 'how-to',
    eyebrow: `${P} How-To`,
    h1: g.h1,
    metaTitle: g.metaTitle,
    metaDescription: g.desc,
    intro: g.answer,
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'How-To', path: '/how-to' },
      { label: P, path: `/how-to/${g.platform}` },
      { label: cap(g.h1.split(':')[0].replace(/^How to /, '').replace(/ \(.*\)$/, '')), path },
    ],
    blocks,
    faq: g.faq.map(([q, a]): PseoFaq => ({ q, a })),
    related: [...siblings.map((x) => ({ label: x.h1, path: T(x.platform, x.slug) })), { label: `All ${P} group guides`, path: `/how-to/${g.platform}` }],
    updated: PSEO_UPDATED,
  };
}

function buildPlatformHub(p: HowToPlatform): PseoPageData {
  const P = HOWTO_PLATFORM_LABEL[p];
  const list = guides.filter((g) => g.platform === p);
  return {
    path: `/how-to/${p}`,
    family: 'how-to',
    eyebrow: 'How-To',
    h1: `${P} Group How-To Guides`,
    metaTitle: `${P} Group Help: ${list.length} Step-by-Step How-To Guides`,
    metaDescription: `Step-by-step guides for ${P} groups: ${list.slice(0, 4).map((g) => g.h1.replace(/^How to /, '').replace(/ \(.*\)$/, '').toLowerCase()).join(', ')}, and more.`,
    intro: `Quick, accurate answers for running and using ${P} groups, with steps for phone and desktop.`,
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'How-To', path: '/how-to' }, { label: P, path: `/how-to/${p}` }],
    blocks: [
      { type: 'links', links: list.map((g) => ({ label: g.h1, path: T(g.platform, g.slug), desc: g.answer.split('. ')[0] + '.' })) },
      ...(p === 'facebook' || p === 'whatsapp'
        ? [{ type: 'links' as const, heading: 'Free templates', links: [
            { label: `${P} group description templates`, path: hubPath(p, 'description') },
            { label: `${P} group rules templates`, path: hubPath(p, 'rules') },
            { label: `${P} group welcome messages`, path: hubPath(p, 'welcome-message') },
          ] }]
        : []),
    ],
    faq: [],
    related: HOWTO_PLATFORMS.filter((x) => x !== p).map((x) => ({ label: `${HOWTO_PLATFORM_LABEL[x]} group guides`, path: `/how-to/${x}` })),
    updated: PSEO_UPDATED,
  };
}

function buildHowToIndex(): PseoPageData {
  return {
    path: '/how-to',
    family: 'how-to',
    eyebrow: 'How-To',
    h1: 'Group How-To Guides for Facebook, WhatsApp, Telegram, and Discord',
    metaTitle: 'Group How-To Guides: Facebook, WhatsApp, Telegram & Discord',
    metaDescription: `${guides.length} step-by-step guides to creating, managing, and leaving groups on Facebook, WhatsApp, Telegram, and Discord.`,
    intro: 'Short, step-by-step answers for group owners and members, on every major platform.',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'How-To', path: '/how-to' }],
    blocks: HOWTO_PLATFORMS.map((p) => ({
      type: 'links' as const,
      heading: HOWTO_PLATFORM_LABEL[p],
      links: guides.filter((g) => g.platform === p).map((g) => ({ label: g.h1, path: T(g.platform, g.slug) })),
    })),
    faq: [],
    related: [{ label: 'Free group templates', path: '/templates' }, { label: 'Guides for group owners and advertisers', path: '/guides' }],
    updated: PSEO_UPDATED,
  };
}

export function getHowToPage(path: string): PseoPageData | null {
  if (path === '/how-to') return buildHowToIndex();
  const hub = path.match(/^\/how-to\/(facebook|whatsapp|telegram|discord)$/);
  if (hub) return buildPlatformHub(hub[1] as HowToPlatform);
  const g = byPath.get(path);
  return g ? buildHowTo(g) : null;
}

export function howToPaths(): string[] {
  return ['/how-to', ...HOWTO_PLATFORMS.map((p) => `/how-to/${p}`), ...guides.map((g) => T(g.platform, g.slug))];
}
