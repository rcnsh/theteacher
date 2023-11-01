import React from "react";

function The_TCP_IP_protocol_and_how_it_is_used_to_send_a_packet_of_data() {
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
                                The TCP/IP protocol and how it is used to send a
                                packet of data
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                The most common protocol on the Internet is
                                known as TCP/IP, or Transmission Control
                                Protocol / Internet Protocol.&nbsp;
                              </p>

                              <p>
                                If two computers are going to communicate, they
                                must use a communications protocol. This is
                                simply a set of rules that govern&nbsp;how
                                communication will take place. The two basic
                                protocols used on the Internet are IP (Internet
                                Protocol) and TCP&nbsp;(Transmission Control
                                Protocol). Together, they are referred to as
                                TCP/IP. TCP/IP controls how information is
                                successfully&nbsp;transferred between two
                                computers. The computer systems communicating
                                may not be of the same hardware or the
                                same&nbsp;software but so long as they use the
                                TCP/IP, a bridge can be built between them over
                                which information can pass. This
                                protocol&nbsp;is the foundation for other
                                protocols. So, for example, the SMTP protocol
                                used for sending and receiving emails calls on
                                the&nbsp;TCP/IP protocol to aid it sending and
                                receiving emails. When pages are requested using
                                http, TCP/IP has a role in
                                the&nbsp;communication that takes place.
                              </p>
                              <p>
                                <strong>
                                  Sending a packet of data
                                  <br />
                                </strong>
                                Four layers or steps are required to send a
                                packet of data over the Internet using TCP/IP
                                protocol. These are:
                              </p>
                              <p>
                                <strong>The Application layer.</strong> Data is
                                encoded during this step.
                                <br />
                                <strong>The Transport layer.</strong>
                                Data is split up into packets and port number
                                information is added.
                                <br />
                                <strong>The Network layer.</strong>
                                This adds the IP address to say where each
                                packet is coming from and going to.
                                <br />
                                <strong>The Data Link layer.</strong>
                                This adds the MAC address information to specify
                                the hardware a packet came from and the hardware
                                it is going to.
                              </p>
                              <p>
                                <strong>
                                  <img
                                    style="
                                  display: block;
                                  margin-left: auto;
                                  margin-right: auto;
                                  margin-top: 20px;
                                  border: 1px solid #000000;
                                "
                                    src="images/3f8bd47a-292d-4b32-91e0-e665d801db3etcp-ip.GIF"
                                    alt="tcp-ip"
                                  />
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  An example of using the TCP/IP stack
                                  <br />
                                </strong>
                                Imagine you want to send the following
                                information across the Internet:
                              </p>
                              <p style="margin-left: 60px">
                                <strong>
                                  apple &nbsp; banana &nbsp; &nbsp;orange &nbsp;
                                  grape
                                </strong>
                              </p>
                              <p>
                                <strong>Application layer</strong>
                                <br />
                                We need to send the information in a format the
                                person receiving the information can use using a
                                recognised standard. If we use XML tags, our
                                data now looks like this:
                              </p>
                              <p style="margin-left: 60px">
                                <strong>
                                  &lt;fruit&gt;apple&lt;/fruit&gt;&lt;fruit&gt;banana&lt;/fruit&gt;&lt;fruit&gt;orange&lt;/fruit&gt;&lt;fruit&gt;grape&lt;/fruit&gt;&nbsp;
                                </strong>
                              </p>
                              <p>
                                <strong>Transport layer</strong>
                                <br />
                                The data is split up into packets and the port
                                number is added. We also need to ensure that the
                                packets can be assembled in the correct order so
                                we need to add the order. We'll use port 80.
                              </p>
                              <table
                                style="
                              width: 400px;
                              margin-left: auto;
                              margin-right: auto;
                            "
                                border="3"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f3f191">
                                    <td style="text-align: center">
                                      <strong>Transport header</strong>
                                    </td>
                                    <td style="text-align: center; width: 50%">
                                      <strong>Data</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">80 1/4</td>
                                    <td style="text-align: center">
                                      &lt;fruit&gt;apple&lt;/fruit&gt;
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        80 2/4
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      &lt;fruit&gt;banana&lt;/fruit&gt;
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        80 3/4
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      &lt;fruit&gt;orange&lt;/fruit&gt;
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        80 4/4
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      &lt;fruit&gt;grape&lt;/fruit&gt;&nbsp;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p>
                                <strong>Network layer</strong>
                                <br />
                                The network layer adds the receipient's IP
                                address and the&nbsp;sender's IP address. We'll
                                send to 104.322.8.155 and the sender's IP
                                address will be 90.14.202.56.&nbsp;
                              </p>
                              <table
                                style="
                              width: 400px;
                              margin-left: auto;
                              margin-right: auto;
                            "
                                border="3"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f3f191">
                                    <td style="text-align: center">
                                      <strong>Network header</strong>
                                    </td>
                                    <td style="text-align: center">
                                      <strong>Transport header</strong>
                                    </td>
                                    <td style="text-align: center; width: 50%">
                                      <strong>Data</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <p>
                                        104.322.8.155
                                        <br />
                                        90.14.202.56
                                      </p>
                                    </td>
                                    <td style="text-align: center">80 1/4</td>
                                    <td style="text-align: center">
                                      &lt;fruit&gt;apple&lt;/fruit&gt;
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          104.322.8.155
                                        </span>
                                        <br
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        />
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          90.14.202.56
                                        </span>
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        80 2/4
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      &lt;fruit&gt;banana&lt;/fruit&gt;
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          104.322.8.155
                                        </span>
                                        <br
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        />
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          90.14.202.56
                                        </span>
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        80 3/4
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      &lt;fruit&gt;orange&lt;/fruit&gt;
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          104.322.8.155
                                        </span>
                                        <br
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        />
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          90.14.202.56
                                        </span>
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        80 4/4
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      &lt;fruit&gt;grape&lt;/fruit&gt;&nbsp;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p>
                                <strong>Link layer</strong>
                              </p>
                              <p>
                                Finally, we'll add the MAC address of the
                                recipient. We will use 00:34:3d:c5:2a:44.
                                &nbsp;The MAC address of the sender will be
                                4a:22:5a:cb:b2:1d
                              </p>
                              <table
                                style="
                              width: 400px;
                              margin-left: auto;
                              margin-right: auto;
                            "
                                border="3"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f3f191">
                                    <td style="text-align: center">
                                      <strong>Link header</strong>
                                    </td>
                                    <td style="text-align: center">
                                      <strong>Network header</strong>
                                    </td>
                                    <td style="text-align: center">
                                      <strong>Transport header</strong>
                                    </td>
                                    <td style="text-align: center; width: 50%">
                                      <strong>Data</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <p>
                                        &nbsp;00:34:3d:c5:2a:44&nbsp;
                                        <br />
                                        &nbsp;4a:22:5a:cb:b2:1d&nbsp;
                                      </p>
                                    </td>
                                    <td style="text-align: center">
                                      <p>
                                        104.322.8.155
                                        <br />
                                        90.14.202.56
                                      </p>
                                    </td>
                                    <td style="text-align: center">80 1/4</td>
                                    <td style="text-align: center">
                                      &lt;fruit&gt;apple&lt;/fruit&gt;
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          <span
                                            style="
                                          font-family: Verdana, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 11px;
                                          line-height: normal;
                                          text-align: center;
                                        "
                                          >
                                            &nbsp;00:34:3d:c5:2a:44&nbsp;
                                          </span>
                                          <br
                                            style="
                                          font-family: Verdana, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 11px;
                                          line-height: normal;
                                          text-align: center;
                                        "
                                          />
                                          <span
                                            style="
                                          font-family: Verdana, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 11px;
                                          line-height: normal;
                                          text-align: center;
                                        "
                                          >
                                            &nbsp;4a:22:5a:cb:b2:1d&nbsp;
                                          </span>
                                        </span>
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          104.322.8.155
                                        </span>
                                        <br
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        />
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          90.14.202.56
                                        </span>
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        80 2/4
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      &lt;fruit&gt;banana&lt;/fruit&gt;
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          <span
                                            style="
                                          font-family: Verdana, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 11px;
                                          line-height: normal;
                                          text-align: center;
                                        "
                                          >
                                            &nbsp;00:34:3d:c5:2a:44&nbsp;
                                          </span>
                                          <br
                                            style="
                                          font-family: Verdana, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 11px;
                                          line-height: normal;
                                          text-align: center;
                                        "
                                          />
                                          <span
                                            style="
                                          font-family: Verdana, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 11px;
                                          line-height: normal;
                                          text-align: center;
                                        "
                                          >
                                            &nbsp;4a:22:5a:cb:b2:1d&nbsp;
                                          </span>
                                        </span>
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          104.322.8.155
                                        </span>
                                        <br
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        />
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          90.14.202.56
                                        </span>
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        80 3/4
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      &lt;fruit&gt;orange&lt;/fruit&gt;
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          <span
                                            style="
                                          font-family: Verdana, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 11px;
                                          line-height: normal;
                                          text-align: center;
                                        "
                                          >
                                            &nbsp;00:34:3d:c5:2a:44&nbsp;
                                          </span>
                                          <br
                                            style="
                                          font-family: Verdana, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 11px;
                                          line-height: normal;
                                          text-align: center;
                                        "
                                          />
                                          <span
                                            style="
                                          font-family: Verdana, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 11px;
                                          line-height: normal;
                                          text-align: center;
                                        "
                                          >
                                            &nbsp;4a:22:5a:cb:b2:1d&nbsp;
                                          </span>
                                        </span>
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          104.322.8.155
                                        </span>
                                        <br
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        />
                                        <span
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                      "
                                        >
                                          90.14.202.56
                                        </span>
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                    "
                                      >
                                        80 4/4
                                      </span>
                                    </td>
                                    <td style="text-align: center">
                                      &lt;fruit&gt;grape&lt;/fruit&gt;&nbsp;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p>
                                We can now send the packets of data across the
                                Internet. The packets hold enough information
                                for them to reach their destination, find the
                                correct computer, use the correct port, be
                                reassembled in the correct order and be returned
                                or confirmed if there is a problem.
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

export default The_TCP_IP_protocol_and_how_it_is_used_to_send_a_packet_of_data;
