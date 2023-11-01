import React from "react";

function Serial__parallel__simplex__half_duplex_and_full_duplex_data_transmission() {
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
                                Serial, parallel, simplex, half duplex and full
                                duplex data transmission
                              </h1>
                              <p>
                                <span class="NormalContentHeading">
                                  <strong>Serial data transmission</strong>
                                  <br />{" "}
                                </span>
                                If a piece of data is stored as an 8 bit binary
                                code such as 10111010, and you have only one
                                wire, you can still send this data down the
                                wire. You do it by sending the code one bit at a
                                time. This is known as serial data transmission.
                              </p>
                              <p align="center">
                                <img
                                  src="images/d7316d5c-ea0f-4061-93dc-407475ac1e1bserial.gif"
                                  alt="Serial"
                                />
                              </p>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Parallel data transmission
                                  </span>
                                </strong>
                                <br />
                                If a piece of data is stored as an 8 bit binary
                                code such as 10111010, and you have 8 wires, you
                                can send this data by sending the data bits down
                                the 8 wires, 1 bit for each wire. This is known
                                as parallel data transmission. Parallel data
                                transmission is clearly a lot faster than serial
                                transmission, but you need more wires. There is
                                also a problem when distances over about 10
                                meters are involved. If you are sending lots of
                                8 bit codes, they start to get out of
                                syncronisation with each other and that leads to
                                lots of data transmission errors. This is why
                                parallel data transmission is reserved for
                                connecting devices that use a high volume of
                                data but are close to the computer, like
                                printers and scanners, for example.
                              </p>

                              <p align="center">
                                <img
                                  src="images/fa17e451-0524-470e-8703-fa700c3dc90apar.gif"
                                  alt="parallel"
                                />
                              </p>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Data transmission definitions
                                  </span>
                                </strong>
                                <br />
                                When data is moved from one place to another, we
                                talk about 'data transmission'. You can classify
                                data transmission into different categories
                                known as simplex, half-duplex and duplex. These
                                terms are described below.
                              </p>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Simplex data transmission
                                  </span>
                                </strong>
                                <br />
                                When data transmission can only take place in
                                one direction, we talk about 'simplex
                                transmission'. Teletext is a classic example of
                                simplex transmission. Data is broadcast by
                                television companies at the same time as TV
                                pictures and picked up via aerials in people's
                                homes. People do not send back signals from
                                their television to the aerials. Of course, you
                                can use a handset to send requests for pages to
                                your TV's special Teletext adapter and the
                                special Teletext adapter then captures the
                                requested Teletext pages when they get
                                broadcast. The requests don't get sent from the
                                TV back to the transmitters.
                              </p>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Half duplex transmission
                                  </span>
                                </strong>
                                <br />
                                Simplex data transmission is one-way
                                communication. 'Half duplex communication' is
                                the term given to communication that can happen
                                in both directions but not at the same time. The
                                classic example of this is a set of
                                walkie-talkies. Each handset can be used to
                                either send or receive but cannot do both at the
                                same time.
                              </p>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Duplex data transmission
                                  </span>
                                </strong>
                                <br />
                                Duplex data transmission is the term used to
                                describe any communication that takes place in
                                both directions at the same time. The classic
                                example of this is the telephone. You can both
                                send and receive information at the same time.
                                You can both talk and hear at once!
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

export default Serial__parallel__simplex__half_duplex_and_full_duplex_data_transmission;
