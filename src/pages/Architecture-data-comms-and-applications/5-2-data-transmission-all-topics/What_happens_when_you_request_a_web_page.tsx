import React from "react";

function What_happens_when_you_request_a_web_page() {
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
                                What happens when you request a web page
                              </h1>
                              <p class="NormalContent">
                                <strong style="line-height: 1.5">
                                  Introduction
                                  <br />
                                </strong>
                                Here is a description of exactly what happens
                                when you request a web page?
                              </p>

                              <p>
                                <strong>
                                  <img
                                    style="margin: 10px; float: right"
                                    src="images/56beb5c0-92b3-48d3-9a39-7b5f6ac232b2dns.GIF"
                                    alt="dns"
                                  />
                                  Requesting a web page and the role of the DNS
                                  server
                                </strong>
                                <br />
                                You can request a web page in two ways. You can
                                click on a link (called a 'hot link') on a page
                                you are already on or you can type in an address
                                (called a URL or Uniform Resource Locator) into
                                your web browser. When you first connected to
                                the Internet,
                                <span style="line-height: 16.3636360168457px">
                                  your ISP (Internet Service Provider) sent you
                                  some information that told your computer which
                                  DNS&nbsp;
                                  <span style="line-height: 16.3636360168457px">
                                    (Domain Name System) server&nbsp;
                                  </span>
                                  to use when you request web pages.&nbsp;
                                </span>
                                Your web browser will contact that DNS server
                                first when you want a web page. The DNS server
                                will look up the human-readable form of the web
                                page you want and get back the IP address for
                                that web page. I
                                <span style="line-height: 1.5">
                                  f that DNS server can't find a particular IP
                                  address then it will ask another DNS server
                                  that is higher up in importance to it, and
                                  then another one even higher up, until it
                                  either finds the IP address that corresponds
                                  to the web page you want, or it returns a
                                  message to you that it doesn't exist or can't
                                  be found.&nbsp;
                                  <span style="line-height: 16.3636360168457px">
                                    DNS servers are essentially ordered like a
                                    family tree, and you start at the bottom of
                                    the tree, working your way up the tree to
                                    ever more important DNS servers if an IP
                                    address can't be found.
                                  </span>
                                </span>
                              </p>
                              <p>
                                <strong>
                                  What happens when the IP address is returned
                                  by the DNS server?
                                </strong>
                                <br />
                                Your web browser uses the IP address sent back
                                to you to visit the web server that holds the
                                page that you want and it does this using the
                                TCP/IP protocol on port number 80. The web
                                server will go and find the requested web page
                                and send back the HTML codes (called 'tags')
                                that make up that page to your browser. Your
                                browser then goes through each HTML code and
                                each piece of information in turn and displays
                                it (or 'marks it up') in accordance with the
                                HTML codes used. The connection with the web
                                server for that web page will end when you
                                either close the browser or move to a different
                                web page.
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

export default What_happens_when_you_request_a_web_page;
