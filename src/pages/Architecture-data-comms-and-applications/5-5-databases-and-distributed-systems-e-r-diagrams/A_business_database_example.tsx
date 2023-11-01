import React from "react";

function A_business_database_example() {
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
                              <h1 style="text-align: center">
                                A business database example
                              </h1>
                              <p>
                                <strong>
                                  A chain of shops
                                  <br />
                                </strong>
                                A chain of shops sells a range of mobile phones
                                and accessories sourced from a variety of mobile
                                phone companies. Customers place orders for
                                phones and accessories with a shop, which then
                                supplies the customer from stock or orders the
                                items from one of its suppliers. Design a draft
                                database that could be used to model this
                                system.
                              </p>
                              <p>
                                This is a typical description of part of a
                                system. It is important to recognise a number of
                                things:
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>
                                      There is always more than one possible E-R
                                      diagram you can design that will do the
                                      job. The key is to be able to justify any
                                      particular design.
                                    </li>
                                    <li>
                                      E-R diagrams ‘evolve’. The process
                                      involves investigating a system and then
                                      designing a draft E-R diagram. This
                                      diagram needs to be thought about,
                                      discussed with other database designers or
                                      team members and reviewed. It then needs
                                      to be redrawn. The review process is
                                      repeated until everyone is happy! This is
                                      not a quick job! It takes time and
                                      experience to be able to design and review
                                      E-R diagrams effectively.
                                    </li>
                                    <li>
                                      The E-R diagram only shows the designer
                                      what tables they need in the database and
                                      how those tables are related. It doesn’t
                                      show the designer what fields will be in
                                      each table.
                                    </li>
                                    <li>
                                      <span style="line-height: 1.5">
                                        So long as tables are related, any data
                                        held anywhere within the whole database
                                        can be retrieved.
                                      </span>
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                After analysing the system and writing down a
                                description of it, the following relationships
                                were identified:
                              </p>

                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The organisation has many SHOPs in
                                      different towns and cities.
                                    </li>
                                    <li>Each SHOP sells many PRODUCTs.</li>
                                    <li>
                                      Each PRODUCT can be sold in many SHOPs.
                                    </li>
                                    <li>
                                      PRODUCTs can be broadly split into PHONEs
                                      and ACCESSORIEs.
                                    </li>
                                    <li>
                                      PRODUCTs can be sourced from many
                                      SUPPLIERs.
                                    </li>
                                    <li>SUPPLIERs supply many PRODUCTs.</li>
                                    <li>
                                      CUSTOMERs place many different ORDERs over
                                      time.
                                    </li>
                                    <li>
                                      Each ORDER can only come from one
                                      CUSTOMER.
                                    </li>
                                    <li>One ORDER may be for many PRODUCTs.</li>
                                    <li>
                                      Each PRODUCT may appear on different
                                      ORDERs.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>TASK 8</strong>&nbsp; The E-R diagram
                                for the business database example has been
                                partially completed below. The entities have
                                been identified and the one-to-one relationships
                                have been added. Complete the relationships
                                between the remaining entities by drawing in the
                                one-to-many relationship lines along with
                                helping words and phrases. Note that there are
                                no many-to-many relationships. They have all
                                been resolved!&nbsp;
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/c23682df-9961-42d3-8b51-e77a9912bbf6er18.JPG"
                                  alt="er18"
                                />
                              </p>
                              <p>&nbsp;</p>
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

export default A_business_database_example;
