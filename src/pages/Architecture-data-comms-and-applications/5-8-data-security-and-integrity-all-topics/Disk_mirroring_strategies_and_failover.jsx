import React from "react";

function Disk_mirroring_strategies_and_failover() {
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
                                Disk mirroring strategies and failover
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                <span style="line-height: 16.3636360168457px">
                                  If an organisation's network or key pieces of
                                  hardware fail for whatever reason, it might
                                  have serious implications for the
                                  organisation. They would lose all of their
                                  employees' records. They would lose all of the
                                  data about the products they sell. They
                                  wouldn't know who has paid them for products
                                  and services and who still owes them money,
                                  and they wouldn't know what bills need to be
                                  paid. They would lose all the information
                                  about past and present customers and all the
                                  information about marketing and advertising.
                                  Losing data could be so serious that they
                                  might even go out of business. If some of the
                                  network hardware failed on your school or
                                  college network, you might lose all of your
                                  controlled assessments or other project work.
                                  The school might lose all of its information
                                  it needs to run the school and information
                                  about you, for example, contact information in
                                  case you have an accident. The data must be
                                  kept secure. Another way to achieve this is
                                  called disk mirroring, or 'failover'.
                                </span>
                              </p>

                              <p>
                                <strong>
                                  Failover
                                  <br />
                                </strong>
                                All equipment will fail eventually. Moving parts
                                wear out. Dust gets into equipment and stops
                                them working properly. There are other reasons,
                                too. So that a business can continue as normal
                                in the event of a serious hardware failure,
                                organisations often use 'failover'. Failover is
                                the term used when you have a second, identical
                                piece of equipment that can start working
                                automatically if the first main piece of
                                equipment fails.
                              </p>
                              <p>
                                <strong>
                                  <img
                                    style="float: left"
                                    src="images/10f25a41-7f2a-45c2-a2ae-c8dfce1ee326Failsafe.GIF"
                                    alt="Failsafe"
                                  />
                                </strong>
                                For example, one key piece of equipment on a
                                client-server network is the server. This
                                manages the entire network of personal
                                computers, printers and other hardware on the
                                network. If the server fails, the whole network
                                will not be available for anyone to use.
                              </p>
                              <p>
                                Network designers often include a second,
                                back-up server on a network. This second server
                                has a mirror image of the software and files on
                                the main server, and is constantly updated. If
                                the main server fails, then this second server
                                starts up automatically so that users on the
                                network can carry on as normal. They won’t even
                                know that there has been a major hardware
                                problem. The network manager can then arrange to
                                get the main server fixed.
                              </p>
                              <p>
                                You could ask your Network Manager if they have
                                a back-up server that kicks in automatically in
                                case the first one fails. You could also ask
                                about the back-up system in place. Are magnetic
                                tapes used? How is the back-up system organised?
                                How often are back-ups taken? Have they
                                considered using cloud storage for automatic
                                back-ups if they don't? Why do they / don't they
                                use cloud storage?&nbsp;
                              </p>
                              <p></p>
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

export default Disk_mirroring_strategies_and_failover;
