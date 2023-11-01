import React from "react";

function Contemporary_protocols() {
  return (
    <div id="jsn-maincontent" class="span9 order1 row-fluid">
      <div id="jsn-maincontent_inner">
        <div id="jsn-centercol">
          <div id="jsn-centercol_inner">
            <div id="jsn-mainbody-content" class="jsn-hasmainbody">
              <div id="jsn-mainbody-content-inner1">
                <div id="jsn-mainbody-content-inner2">
                  <div id="jsn-mainbody-content-inner3">
                    <div id="jsn-mainbody-content-inner4" class="row-fluid">
                      <div
                        id="jsn-mainbody-content-inner"
                        class="span12 order1"
                      >
                        <div id="jsn-mainbody">
                          <div id="system-message-container"></div>

                          <div
                            class="item-page"
                            itemscope
                            itemtype="https://schema.org/Article"
                          >
                            <meta itemprop="inLanguage" content="en-GB" />

                            <div itemprop="articleBody">
                              <p></p>
                              <h1 style="text-align: center">
                                Contemporary protocols
                              </h1>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />
                                If you were to meet the Queen, for example, you
                                would be expected to follow protocol. You would
                                be expected, for example, to call her Ma'am' or
                                'Your Majesty'. You might be expected to bow and
                                to dress appropriately as well. A set of rules
                                that you have to follow is known as a
                                'protocol'. Computers make use of protocols as
                                well, to enable them to communicate.
                              </p>

                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Protocols
                                  </span>
                                </strong>
                                <br />
                                Devices need to communicate. For example, a
                                printer needs to send messages to a computer
                                telling it that it has run out of paper or that
                                it is ready to print while a computer needs to
                                send the data it wants to print to the printer.
                                Computers need to send data between themselves
                                so that, for example, email can be exchanged and
                                the Internet can function. When two devices want
                                to successfully communicate, they must agree to
                                follow some rules about the way they will do it.
                                These are known as protocols.
                              </p>
                              <p>
                                A communications protocol is the phrase used to
                                describe a set of rules that communication
                                equipment adhere to when they send data to each
                                other. If two devices are sending and receiving
                                data but using different rules then the
                                receiving device will not understand what was
                                sent! Because communications protocols are so
                                important, a special organisation known as the
                                ITU, or International Telecommunications Union,
                                exists to lay down the exact detail in the
                                standards that everyone will use. They define
                                the protocols.
                              </p>
                              <p>
                                <strong>
                                  TCP/IP and UDP/IP
                                  <br />
                                </strong>
                                The two basic protocols used on the Internet are
                                IP (Internet Protocol) and
                                TCP&nbsp;(Transmission Control Protocol).
                                Together, they are referred to as TCP/IP. TCP/IP
                                controls how information is
                                successfully&nbsp;transferred between two
                                computers. The computer systems communicating
                                may not be of the same hardware or the
                                same&nbsp;software but so long as they use the
                                TCP/IP, a bridge can be built between them over
                                which information can pass. This
                                protocol&nbsp;is the foundation for other
                                protocols. So, for example, the SMTP protocol
                                used for sending and receiving emails calls on
                                the&nbsp;TCP/IP protocol to help it to send and
                                receiv emails. When pages are requested using
                                the http, TCP/IP has a role in
                                the&nbsp;communication that takes place. A
                                variation of TCP/IP is UDP/IP. User Datagram
                                Protocol is an alternative protocol to TCP and
                                is used on some networks.
                              </p>
                              <p>
                                Both TCP and UDP are used to send data over
                                networks. When you request a web page that uses
                                TCP, the web page from the web server is broken
                                down into packets. Each packet is given some
                                sequencing information for reassembly, the
                                destination IP address and a return IP address.
                                All the packets are then sent off to your
                                computer, and can go by different routes. When
                                your browser receives all of the packets, it
                                puts them back together in the right order and
                                displays it. The packets are regularly checked
                                for reliability in the TCP protocol. If packets
                                go missing or get corrupted, the web server is
                                informed and they are resent. TCP is designed
                                for reliability. A datagram in UDP is the same
                                as a packet. Although packets are still sent,
                                they are not checked. If some go missing or get
                                corrupted, they are not resent. Any remaining
                                packets will just continue to be sent. UDP is
                                less reliable, but because there is a lot less
                                checking going on, it is much faster!
                              </p>
                              <p>
                                UDP is important on a network that is used for
                                gaming, or for live video streaming of events,
                                for example, where speed is the most important
                                thing and the odd problem can just be ignored.
                                If a streamed video stops for a fraction of a
                                section once or twice an hour, it won't affect
                                your overall enjoyment of the video. If a
                                character doesn't move to where it should be for
                                a fraction of a section, it doesn't matter as
                                the action has all moved on anyway.
                              </p>
                              <p>
                                <strong>HTTP and HTTPS</strong>
                                <br />
                                When web pages are requested and then sent over
                                the Internet using web browsers, another
                                protocol is used in addition to TCP/IP. It's
                                called the HTTP protocol, or Hyper Text Transfer
                                Protocol. A web browser is an HTTP client. In
                                other words, it makes use of the http protocol
                                to connect with web servers. Information can
                                also be sent across the Internet to web browsers
                                securely using the HTTPS protocol, or
                                <span style="line-height: 16.3636360168457px">
                                  Hyper Text Transfer Protocol Secure. Banks,
                                  for example, use this protocol when sending
                                  and receiving financial information. Because
                                  the data is encrypted, if it is intercepted,
                                  it can't be read so hackers can't make use of
                                  it.
                                </span>
                              </p>
                              <p>
                                <strong>
                                  FTP
                                  <br />
                                </strong>
                                As well as putting information on the Internet,
                                you can make files available for downloading.
                                There are different ways of&nbsp;achieving this
                                but a common way is to use ftp or the File
                                Transfer Protocol. A user uses&nbsp;
                                <span style="line-height: 16.3636360168457px">
                                  a login and password to login&nbsp;
                                </span>
                                to the host's computer using an ftp program.
                                They can then view the files available and
                                download what they require. You&nbsp;can use a
                                web browser to access ftp sites, although it is
                                worth having an ftp program if you intend
                                uploading and downloading&nbsp;lots of files -
                                the Graphical User Interface with drag and drop
                                capabilities is a lot easier to use than typing
                                in commands into a&nbsp;web browser. Many
                                companies make a number of files available by
                                creating a public area. Users can log in using
                                the ID'anonymous' and password 'guest'. You can
                                download and try out a wide range of free ftp
                                programs. An excellent one is Filezilla.
                              </p>
                              <p>
                                <strong>
                                  <img
                                    style="margin: 10px; float: right"
                                    src="images/8020f5f5-e8f3-4f79-bc22-669be84ce9d4email.GIF"
                                    alt="email"
                                    width="400"
                                    height="339"
                                  />
                                  IMAP, POP3 and SMTP
                                </strong>
                                <br />
                                These three protocols are used for sending and
                                receiving email. When someone sends you an
                                email, it goes from whatever program they used
                                to write the email to their mail server. The
                                mail server then uses the destination email
                                address to work out where the email should be
                                sent, and sends it to your mail server. The mail
                                server stores it until you log in to whatever
                                email program you use and request it (although
                                usually just logging in gets the mail server to
                                send you any email you have waiting for you).
                                Mail servers might be provided free, such as the
                                ones that Google, Microsoft, GMX and Yahoo
                                provide. They may be a paid-for mail server, one
                                provided by your ISP (Internet Service Provider)
                                or one you have as part of a web hosting
                                package.&nbsp;
                              </p>
                              <p>
                                Internet Message Access Protocol (IMAP) and Post
                                Office Protocol (POP3) are the two most common
                                ways of getting mail from a server. When you
                                view an email message, your email program can
                                either download it on to your local computer,
                                delete it from the mail server, and then you
                                read from your local computer. Alternatively,
                                your email program may just let you read it from
                                the mail server, without downloading a copy to
                                your computer. If you download an email to your
                                computer, POP3 is used. If you view the email
                                from your mail server without downloading it,
                                you are using the IMAP protocol. Clearly, with
                                POP3, you can read email if you are offline,
                                it's easy to back-up, you only need to download
                                the email once so it tends to be faster to use
                                and it's often faster to search through emails.
                                You could lose all your emails if your hard
                                drive fails and it's more difficult to access
                                emails when you are not at your normal computer.
                                Emails viewed remotely using IMAP can be
                                accessed from anywhere in the world with an
                                Internet connection. your emails can all be
                                backed-up remotely, although there may be an
                                issue with privacy as the company who owns the
                                mail server can scan and read your emails for
                                certain data any time they like. If the company
                                owning the mail server goes out of business or
                                changes the service or just stops it, you may
                                lose all your emails, especially if it is a free
                                account.
                              </p>
                              <p>
                                When you send an email, whether you are using
                                POP3 or IMAP, you will be using a different
                                protocol called the Simple Mail Transfer
                                Protocol (SMTP). When you send an email, your
                                email program contacts the SMTP server that is
                                associated with the company you use for your
                                email account, whether it is a free or paid-for
                                one, an ISP account or a hosting account. The
                                mail server will check your login and password
                                to authorise you, and then will collect the
                                email from your application, look up the
                                recipient's mail server and forward the email
                                message on to them. The email message is then
                                placed in the Sent folder in your email account.
                              </p>
                              <p>
                                <strong>DHCP</strong>
                                <br />
                                The Dynamic Host Configuration Protocol (DHCP)
                                is a protocol used on a network to dynamically
                                (in other words, it can change) set-up basic
                                network communications information to computers
                                and other networked devices (called clients) on
                                a network. This typically means that each client
                                automatically requests network information and
                                then this is allocated by a DHCP server. A
                                client requesting to be set-up on a network will
                                be given such things as an IP address (to
                                uniquely identify the client on the network), a
                                subnet mask (to identify the part of a network
                                the client is in) and a default gateway (to
                                allow Internet access). Having a DHCP server
                                set-up to hand out this information
                                automatically saves the Network Manager from
                                having to configure every computer manually. On
                                large networks, this can be a considerable time
                                saving.&nbsp;
                              </p>
                              <p>
                                <strong>Wireless protocols</strong>
                                <br />
                                We have already discussed Wi-Fi, microwave and
                                satellite communications in another section,
                                although we haven't mentioned Bluetooth or WAP.
                              </p>
                              <p
                                style="
                              margin-top: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>
                                  <img
                                    style="margin: 20px; float: left"
                                    src="images/00c16812-b18a-4e15-ae26-526b8075f413bluetooth.GIF"
                                    alt="bluetooth"
                                  />
                                  What is Bluetooth?
                                </strong>
                                <br />
                                Bluetooth is a technology that allows you to
                                share data between devices over short distances,
                                usually up to about 10 metres. Like wifi, you
                                don't need any wires to connect the devices but
                                a big advantage of Bluetooth is that you don't
                                need a wireless router! One Bluetooth device can
                                make direct and secure contact with another
                                device directly without having to go through
                                another device. In fact, the official Bluetooth
                                specifications state that you connect seven
                                devices at once to yours using Bluetooth.
                                However, practically speaking, three to four
                                devices is the limit as any more than that and
                                performance is often greatly reduced. The
                                Bluetooth chip is found in many different places
                                today, from phones, to cameras, GPS units,
                                laptops, tablets and so on and can be used, for
                                example, to send messages and transfer or stream
                                files such as photos, music and video.
                              </p>
                              <p style="line-height: 16.3636360168457px">
                                <strong>Making a connection</strong>
                                <br />
                                Connecting devices (or pairing them, as it's
                                usually called) involves you making your device
                                'visible' or 'discoverable' to other Bluetooth
                                devices by ticking a box in the settings. You
                                usually give your device a name as well. This
                                means that other devices can now see
                                yours.&nbsp;If your friend wants to pair their
                                phone with yours, they select your phone from a
                                list of discoverable devices (which will include
                                yours). They will be given or have to select a
                                passcode to enter. A request is then sent to
                                your phone and you confirm that it's okay to
                                pair, confirming or entering the same PIN on
                                your phone as your friend used. If you want to
                                send a file to someone, you then just select the
                                file and select the option to send it via
                                Bluetooth. You will be given a list of names of
                                the other Bluetooth devices you're paired to,
                                select the target device and the file will be
                                sent automatically.
                              </p>
                              <p style="line-height: 16.3636360168457px">
                                <strong>Security.</strong>
                                <br />
                                Bluetooth can act as a drain on the power of a
                                phone so it's a good idea to only have it
                                enabled when you need to use it. You can set up
                                'trusted' devices so that you don't have to keep
                                going through the authentication process each
                                time you want to send a file to a particular
                                person. Bluetooth is usually set up so that your
                                device is discoverable for only a short window
                                of time, typically two minutes but you&nbsp;can
                                also make your device 'undiscoverable' so that
                                you will only receive requests to pair and make
                                connections with people you want to. Bluetooth
                                is considered a very secure method of
                                communication.
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>Bluetooth uses</strong>
                                <br />
                                There are lots of uses for Bluetooth, apart from
                                pairing phones and sharing files. You can
                                transfer photos from your camera to a laptop
                                without having to set up messy wired
                                connections. You can connect your phone to a
                                hands-free set in a car so that you can answer
                                and make calls safely (and legally). you can
                                stream music from a phone or MP3 player to a car
                                radio. A search of the Internet should reveal
                                many other applications.
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>WAP</strong>
                                <br />
                                Wireless Application Protocol (WAP) is a
                                communications protocol used by mobile phones,
                                walkie talkies and other mobile devices to allow
                                them to instantly access web pages securely. It
                                is designed for mobile devices with limited
                                viewing screens, limited power, smaller amounts
                                of memory compared to personal computers and
                                limited bandwidth capabilities.&nbsp;
                              </p>
                              <p class="QuestionStyle"></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contemporary_protocols;
