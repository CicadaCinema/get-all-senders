# Get all senders

This add-on retrieves all the senders associated with the emails in this mailbox and stores them in your clipboard.

## Download

https://addons.thunderbird.net/en-GB/thunderbird/addon/get-all-senders/

## Usage

Download and install the add-on using the link above (the installation does not require a restart). The add-on can be accessed in the toolbar, as shown:

![image](https://user-images.githubusercontent.com/52425971/184532533-9e4bb7c5-6762-4ef2-bfcb-04891dde7efb.png)

A few seconds later (or more, depending on the number of emails stored in Thunderbird), the list of unique senders across all your folders should be in your clipboard.

## Sample output

For a Thunderbird profile containing a single folder with [this content](https://github.com/git/git/blob/6b4b013f1884a3b5e67877d65a9f1da598ab4a6f/t/t5100/sample.mbox) (as in the screenshot above), the add-on is expected to copy the following as output:
```
A U Thor <a.u.thor@example.com>
A (zzz) U Thor <a.u.thor@example.com> (Comment)
Junio C Hamano <junio@kernel.org>
YOSHIFUJI Hideaki / 吉藤英明 <yoshfuji@linux-ipv6.org>
David Kågedal <davidk@lysator.liu.se>
Lukas Sandström <lukass@etek.chalmers.se>
Dmitriy Blinov <bda@mnsspb.ru>
<a.u.thor@example.com> (A U Thor)
Junio Hamano <junkio@cox.net>
```
