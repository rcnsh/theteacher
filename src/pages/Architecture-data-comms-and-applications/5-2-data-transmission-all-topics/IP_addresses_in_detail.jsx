import React from "react";

function IP_addresses_in_detail() {
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
                                IP addresses in detail
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                Every computer on the Internet is given an IP
                                addresses which is unique. This IP address is
                                different to other computers on the Internet.
                                How is an IP address formatted and how is it
                                used?&nbsp;Computers on networks connected to
                                the Internet use a protocol (a set of rules for
                                communication) called TCP/IP to send and receive
                                packets of information. Information such as a
                                web page is broken down into packets of data,
                                each of which is a fixed size and contains the
                                IP address of the target computer (as well as
                                other information). Because the IP address is
                                unique, the packets will constantly be forwarded
                                from the sending computer ever closer to the
                                target computer by routers, going from network
                                to network, until eventually, all the packets
                                arrive, are reassembled and displayed.
                              </p>

                              <p style="text-align: left">
                                <strong>The format of an IP address</strong>
                                <br />
                                An IP address using a system called IPv4 is made
                                up of 4 bytes separated by dots, a total of 32
                                bits. A typical IP might look like this:
                                01110000.11010100.11111111.11111111 which is
                                slightly problematic for humans to work with! We
                                therefore usually display the IP address as 4
                                numbers between 0 and 255. The example just
                                given would therefore be expressed as
                                &nbsp;112.212.255.255 which is much easier for
                                us to talk about. Each number can range from 0
                                to 255.
                              </p>
                              <p style="text-align: left">
                                <strong>Two parts to an IP address</strong>
                                <br />
                                An IP address has two parts. The first part
                                identifies the network. The second part
                                identifies the computer on the network. There
                                are five kinds of networks, called 'classes'.
                              </p>
                              <p style="text-align: left">
                                <strong>Class A networks</strong>
                                <br />
                                The binary address starts with a 0. The first 8
                                bits identify the network. The last 24 bits
                                identify the host (a computer, a networked
                                printer or any other piece of equipment that
                                needs an address) on the network. Because the
                                first 8 bits begin with a 0, the first decimal
                                number can go from 0 to 127, while the other 3
                                numbers can go from 0 to 255. This network is
                                designed to support huge networks, with 16
                                million hosts!
                              </p>
                              <p style="text-align: left">
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    Class B networks
                                  </span>
                                </strong>
                                <br style="line-height: 16.3636360168457px" />
                                <span style="line-height: 16.3636360168457px">
                                  The binary address starts with a 10. The first
                                  16 bits identify the network. The last 16 bits
                                  identify the host on the network.&nbsp;
                                  <span style="line-height: 16.3636360168457px">
                                    Because the first 8 bits begin with a 10,
                                    the first decimal number can go from 128 to
                                    191, while the other 3 numbers can go from 0
                                    to 255.&nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      This network is designed to support 16000
                                      networks, each with 65000 hosts!
                                    </span>
                                  </span>
                                </span>
                              </p>
                              <p style="text-align: left">
                                <span style="line-height: 16.3636360168457px">
                                  <strong>
                                    <span style="line-height: 16.3636360168457px">
                                      Class C networks
                                    </span>
                                  </strong>
                                  <br style="line-height: 16.3636360168457px" />
                                  <span style="line-height: 16.3636360168457px">
                                    The binary address starts with a 110. The
                                    first 24 bits identify the network. The last
                                    8 bits identify the host on the
                                    network.&nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      Because the first 8 bits begin with a 110,
                                      the first decimal number can go from 192
                                      to 223, while the other 3 numbers can go
                                      from 0 to 255.&nbsp;
                                      <span style="line-height: 16.3636360168457px">
                                        This network is designed to support 2
                                        million networks, each with 254 hosts!
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                              <p style="text-align: left">
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    Class D networks
                                  </span>
                                </strong>
                                <br style="line-height: 16.3636360168457px" />
                                <span style="line-height: 16.3636360168457px">
                                  The binary address starts with a 1110. All the
                                  bits are used for multi-casting.&nbsp;
                                  <span style="line-height: 16.3636360168457px">
                                    Because the first 8 bits begin with a 1110,
                                    the first decimal number can go from 224 to
                                    239, while the other 3 numbers can go from 0
                                    to 255.
                                  </span>
                                </span>
                              </p>
                              <p style="text-align: left">
                                <span style="line-height: 16.3636360168457px">
                                  <strong>
                                    <span style="line-height: 16.3636360168457px">
                                      Class E networks
                                    </span>
                                  </strong>
                                  <br style="line-height: 16.3636360168457px" />
                                  <span style="line-height: 16.3636360168457px">
                                    The binary address starts with a 1111. All
                                    the bits are used for experimenting
                                    with.&nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      Because the first 8 bits begin with a
                                      1111, the first decimal number can go from
                                      240 to 254, while the other 3 numbers can
                                      go from 0 to 255.
                                    </span>
                                  </span>
                                </span>
                              </p>
                              <p style="text-align: left">
                                <strong>Examples of IP address</strong>
                                <br />
                                When you write down an IP address, you are
                                allowed to use hyphens and wildcards in a range.
                                There are also a number of different ways you
                                can write the same range of IP addresses. Here
                                are some examples:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  108.18.19.20 = a specific IP address for a
                                  specific host computer on a network
                                </strong>
                                <br />
                                <strong>
                                  108.18.19.* = all IP addresses beginning
                                  108.18.19
                                </strong>
                                <br />
                                <strong>
                                  123.18.19.0-255 = a range of IP addresses from
                                  123.18.19.0 to 121.18.19.255 inclusive
                                </strong>
                                <br />
                                <strong>
                                  123.18.* = all IP addresses beginning 123.18
                                </strong>
                                <br />
                                <strong>
                                  123.18.0-255. = all IP addresses in the range
                                  123.18.0-255
                                </strong>
                                <br />
                                <strong>
                                  123.18.0-255.0-255 = all IP addresses
                                  beginning 123.18
                                </strong>
                                <br />
                                <strong>
                                  123.* = all IP addresses beginning 123
                                </strong>
                                <br />
                                <strong>
                                  123.0-255.0-255.0-255 = all IP addresses
                                  beginning 123
                                </strong>
                              </p>
                              <p>
                                The different classes are used to accommodate
                                different sized networks. Class A is good for
                                defining a few networks with a lot of hosts
                                each.&nbsp;Class B network addresses use the
                                first two numbers (the remainder of the first,
                                and all of the second) to define the network and
                                the last two to define the hosts on each
                                network.
                                <span style="line-height: 16.3636360168457px">
                                  Class C network addresses
                                </span>
                                &nbsp;use the first three numbers to define the
                                network and the last one to define hosts within
                                that network.
                              </p>
                              <p>
                                <strong>
                                  Who hands out the public IP addresses?
                                </strong>
                                <br />
                                ISPs (Internet Service Providers), for example,
                                are assigned public IP addresses by
                                organisations set-up to distribute and manage
                                public IP addresses. The Network Information
                                Center (NIC) and the Internet Assigned Numbers
                                Authority (IANA) are two such orgnaisations.
                              </p>
                              <p style="text-align: left">
                                <strong>IPv6</strong>
                                <br />
                                Most computer networks use the IPv4 system but
                                because of the growth of the Internet, available
                                network addresses are running out. A newer
                                system called IPv6 is being introduced. This has
                                128 bits and is typically written as five hex
                                numbers separated by colons, for example:
                                22A3:4338:FA23:324D:AC4B&nbsp;
                              </p>
                              <p style="text-align: left">
                                <strong>What is your IP address?</strong>
                                <br />
                                If you type 'What is my IP address' into Google,
                                it will tell you. You can also go into a
                                terminal window in Windows (click on the start
                                button and then in the search area, type in
                                <strong>
                                  <em>Command prompt</em>
                                </strong>
                                ). Then type in
                                <strong>
                                  <em>ipconfig</em>
                                </strong>{" "}
                                and see what you get.
                              </p>
                              <p style="text-align: left"></p>
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

export default IP_addresses_in_detail;
