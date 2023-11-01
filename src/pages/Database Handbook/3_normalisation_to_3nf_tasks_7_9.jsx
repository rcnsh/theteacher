import React from "react";

function normalisation_to_3nf_tasks_7_9() {
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
                              <p>&nbsp;</p>
                              <h1 style="text-align: center">Tasks 7 - 9</h1>
                              <p>
                                <strong>TASK 7</strong>&nbsp; Look back to your
                                answer for a bank’s customer database in TASK 2.
                                Convert the four tables you finished with into
                                the alternative notation. The first two have
                                been done for you.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  CUSTOMER (
                                  <span style="text-decoration: underline">
                                    Cust-ID
                                  </span>
                                  , Surname, Postcode, PhoneNumber)
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  CUST_ACCOUNT (
                                  <span style="text-decoration: underline">
                                    Cust-ID
                                  </span>
                                  ,
                                  <span style="text-decoration: underline">
                                    AccountNumber
                                  </span>
                                  )
                                </strong>
                              </p>

                              <p>
                                <strong>TASK 8</strong>&nbsp; Look back to your
                                answer for a student record database in TASK 3.
                                Convert the four tables you ended up with into
                                the alternative notation.
                              </p>
                              <p>
                                <strong>TASK 9</strong>&nbsp; Brown Owl keeps a
                                record of the Brownies in her pack and what
                                badges they have collected in a relational
                                database. The design of the relational database
                                is shown below.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  BROWNIE: (
                                  <span style="text-decoration: underline">
                                    Brownie-ID
                                  </span>
                                  , FirstName, Surname, Address, ContactNo)
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  BADGE: (
                                  <span style="text-decoration: underline">
                                    Brownie-ID
                                  </span>
                                  , FirstName, Surname, Address, ContactNo,
                                  Badge-ID, BadgeDescription)
                                </strong>
                              </p>
                              <p>a) Describe the problems with this design.</p>
                              <p>
                                b) Design a typical record for each Brownie.
                              </p>
                              <p>
                                c) Normaise the Brownie database using an
                                analysis table.
                              </p>
                              <p>
                                d) Use the alternative notation to describe each
                                table.&nbsp;
                              </p>
                              <p>
                                <span style="line-height: 1.5">&nbsp;</span>
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

export default normalisation_to_3nf_tasks_7_9;
