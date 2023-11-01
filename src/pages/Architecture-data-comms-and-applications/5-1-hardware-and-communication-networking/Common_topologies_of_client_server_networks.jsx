import React from "react";

function Common_topologies_of_client_server_networks() {
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
                                Common topologies of client-server networks
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                Stand-alone computers can be connected up in
                                different ways to create a network of computers.
                                The way that you connect them up is known as the
                                network 'topology'. The three most common
                                topologies are known as the 'star network', the
                                'bus network' and the 'ring network'. The GCSE
                                Computing specification asks that you know only
                                how to describe these three topologies using a
                                diagram or otherwise. You don't need to know
                                about advantages and disadvantages of each type
                                of network compared to the other types.
                              </p>

                              <p>
                                <strong>Star network</strong>
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/3ffe1152-7263-45cc-8d72-a03814910be8Star.GIF"
                                  alt="Star"
                                />
                              </p>
                              <p>
                                In a star network, all the computers are
                                connected directly to a switch. You also connect
                                other pieces of equipment to the switch, for
                                example a print server, if you want to have a
                                printer on the network and a router, if you want
                                to connect the network to other networks such as
                                the Internet. The switch is then connected to
                                the server. The switch has lots of sockets which
                                allow you to connect many different workstations
                                (otherwise known as 'computers' or clients' or
                                PCs'). It can make many communications links
                                with the server at the same time.
                              </p>
                              <p>
                                <strong>Bus network</strong>
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/d6db1eff-5818-49e3-9f94-0effd80bd898Bus.GIF"
                                  alt="Bus"
                                />
                              </p>
                              <p>
                                A bus network is made up of one main cable. At
                                the end of each cable, there is a 'terminator'.
                                Workstations, file servers and print servers,
                                for example, are simply connected to the cable.
                                To do this, the cable is actually cut and a T
                                connector is put in place to reconnect the two
                                cut ends. The other part of the T connector can
                                then have a cable running from it to the piece
                                of equipment.
                              </p>
                              <p>
                                <strong>Ring network</strong>
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/c7b6d8fb-ea7c-437c-a9b6-d755340889e4Ring.GIF"
                                  alt="Ring"
                                />
                              </p>
                              <p>
                                If you imagine a bus network for a moment, and
                                hold the two ends of the main cable in your
                                hands. Then if you bring the two ends together
                                and join them, you have a ring network! In a
                                ring network, the cable goes from one piece of
                                equipment to the next piece of equipment in a
                                loop (or 'ring'), as shown in the diagram above.
                              </p>
                              <p>
                                <strong>
                                  Network card (or Network Interface Card, or
                                  NIC)
                                </strong>
                                <br />
                                To physically connect a workstation to a
                                network, the workstation needs a network card.
                                This is usually fitted inside the computer and a
                                cable is run from the network card for a short
                                distance. To connect this cable to the actual
                                network cable, the network cable is actually cut
                                and a T connector is put in place to reconnect
                                the two cut ends. The other part of the T
                                connector can then be attached to the cable.
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/ac649b12-7ffe-4ef0-8dab-db6bcdc17141T_Connector.GIF"
                                  alt="T Connector"
                                />
                              </p>
                              <p>
                                One job of a network card is to allow
                                workstations to be physically connected to a
                                network. Another job it has is to give the
                                computer a unique address on the network, known
                                as a 'MAC address' . This is needed so that the
                                workstation can pick up any messages on the
                                network cable that was intended for that
                                computer.<strong>&nbsp;</strong>
                              </p>
                              <p>
                                <strong>&nbsp;</strong>
                              </p>
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

export default Common_topologies_of_client_server_networks;
