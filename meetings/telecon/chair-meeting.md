# How to setup a meeting

1. Create a new MD file in the telecon [folder](https://github.com/openui/open-ui/tree/main/meetings/telecon)
2. Go to Issues and search for the `Agenda+` label. If there are any take the oldest ones and add them to the
list of the agenda. If you think the agenda is a little light review the issues and PRs to see if there are
any that seem ready for review and add them. Place these into the file you created.
3. In the Open UI calendar invite the Google Meet URL is there, place that into the telecon below the agenda
4. Copy the Github URL to the markdown file you created and paste this into the `#telecon-agenda` channel of Discord
5. Also paste in the meeting details into `#telecon-agenda` channel of Discord

# Chairing the meeting

1. Log into IRC
2. Invite Zakim & the RRSAgent (this will generate the logs). To do this, follow the directions [here](https://www.w3.org/2001/12/zakim-irc-bot)
3. To start the meeting, type `Zakim, start meeting` - if you haven't set the meeting it will request you to
4. Remember to tell the participants to the join IRC and type in `Present+ <Their Name>`
5. Request someone to scribe and set them as scribe using `scribenick: <Their IRC nickname>`
6. Begin with the first agenda item

# Make progress on issues

1. The goal of the meeting is to get to a resolution. So allow the person that owns the issue/PR to go over the item, but
if there isn't a clear concise request for feedback help request that. It's easy to generally discuss things for 30 minutes which
isn't inherently bad but the goal of the telecons is to drive consense. If it seems you can't achieve that then recommend taking
it back to the Github issue and for people to weigh in there and we'll resolve at the next meeting
2. If there is a resolution make sure to initially get the `Proposed Resolution: <Resolution>` out and to gain consensus. If there are no objections
then retype it but prepended with `Resolved: <Resolution>`. This will make it highlighted in the minutes.
3. If there isn't a resolution but a specific action (eg: do research on xyz) denote it with `ACTION: <Their IRC name> <Action>`

# Ending the meeting

1. Just like starting the meeting, end the meeting by `Zakim, end meeting`. Zakim will tell the RRSAgent to generate minutes and
the RRSAgent will provide the URL where the generated minutes will end up (it depends on the queue but normally is done in a few minutes)
2. Take the URL and place that below your agenda with the heading of Minutes
3. Place in resolutions (copy the text verbatim) and put them in under a heading of Resolutions & Actions. Do the same with Actions.
4. Paste the link to the telecon file in Github into the `#general` Discord channel (eg: Here are the minutes from today's telecon, thanks for joining: <URL>)

# Participating in a meeting

Please see [`meetings.md`](https://github.com/openui/open-ui/blob/main/meetings/telecon/meetings.md) for more information.
