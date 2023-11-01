import React from "react";

function Network_collisions__detection_and_avoiding_them() {
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
                                Network collisions, detection and avoiding them
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />A network cable must have just one data
                                packet on it at any one time. When a packet is
                                'sent', it is actually broadcast to all the
                                computers on the network but the computer with
                                the correct IP address 'grabs' the packet,
                                because it sees that it is addressed to them. If
                                two different computers try to place a packet on
                                the network at exactly the same time and try to
                                broadcast their packets to all computers, then a
                                'collision' happens. The network protocol
                                (typically TCP/IP) declares both packets void,
                                and then asks both computers to resend their
                                packets, but this time, ensuring that it is done
                                at slightly different times. A user on the
                                network will not notice this happening and any
                                slowing down of the network on small networks,
                                but if there are thousands of computers on a
                                network, for example, across a university
                                campus, there could be problems with the network
                                slowing down if it has to deal with lots of
                                network collisions.
                              </p>

                              <p>
                                <strong>
                                  Switches
                                  <br />
                                </strong>
                                A switch can reduce the number of collisions by
                                being able to make multiple connections at the
                                same time. for example, if Computer #1 wants to
                                send a message to Computer #450, at the same
                                time as
                                <span style="line-height: 16.3636360168457px">
                                  Computer #300 wanting to send a message to
                                  Computer #2350,&nbsp;
                                </span>
                                then the switch can set up links between these
                                two pairs of computers to ensure that they can
                                communicate at the same time, but not interfere
                                with each other.&nbsp;
                              </p>
                              <p>
                                <strong>Ethernet</strong>
                                <br />
                                Ethernet is a widely-used design for
                                LANs.&nbsp;Ethernet networks make use of
                                collision avoidance and detection strategies as
                                described above. As&nbsp;traffic increases on an
                                Ethernet network, the number and frequency of
                                collisions increase. This is because every
                                station is&nbsp;broadcasting to every other one
                                and the more workstations there are
                                broadcasting, the more the communications on
                                the&nbsp;network increase.&nbsp;Ethernet will
                                try its best to prevent data collisions. When it
                                does detect a collision, however, it will have
                                the packets put on the&nbsp;network again but
                                this time with a delay between the events.
                              </p>
                              <p>
                                <strong>
                                  Reducing data collisions on a 'swtched
                                  Ethernet LAN'
                                </strong>
                                <br />
                                There are strategies for reducing the number of
                                collisions on a network. We discussed one of
                                them above using a switch, so that t
                                <span style="line-height: 16.3636360168457px">
                                  wo pairs of computers can be given their own
                                  temporary communication link to ensure
                                  successful communication.
                                </span>
                                <strong style="line-height: 16.3636360168457px">
                                  &nbsp;
                                </strong>
                                A switch can also be used to split up a large
                                network into separate areas that improve the
                                efficiency of communication. It can be used
                                to&nbsp;ensure each station is given a
                                ‘time-slice’ in which to send data.&nbsp;
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

export default Network_collisions__detection_and_avoiding_them;
