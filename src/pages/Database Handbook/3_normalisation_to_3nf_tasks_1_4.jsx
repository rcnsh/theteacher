import React from "react";

function normalisation_to_3nf_tasks_1_4() {
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
                              <h1 style="text-align: center">Tasks 1 - 4</h1>
                              <p>
                                <span style="line-height: 1.5">
                                  <strong>TASK 1</strong>&nbsp; State the main
                                  aims of normalisation:
                                </span>
                              </p>
                              <ol>
                                <li>
                                  <em>
                                    One aim of normalisation is to get rid of
                                    anomalies when you add, delete or amend
                                    records. This is because adding and deleting
                                    records and amending data in records can
                                    result in data inconsistencies.
                                  </em>
                                  <span style="line-height: 1.5">&nbsp;</span>
                                </li>
                                <li>
                                  <em>
                                    The other main aim of normalisation is …
                                  </em>
                                </li>
                              </ol>
                              <p>
                                <strong>TASK 2</strong>&nbsp; Normalise a bank's
                                customer database!&nbsp;A typical example record
                                is shown below.
                              </p>
                              <p style="margin-left: 30px">
                                <em>
                                  Use exactly the same method as you have just
                                  seen. Start at 'Step 0 - Set up the Analysis
                                  Table'. To make life easier for ourselves at
                                  this point, we will assume that every account
                                  number is unique - you cannot have two account
                                  numbers that are the same, even if they are
                                  different types of account or belong to
                                  different customers. This means that if you
                                  want a balance, you only need the account
                                  number. You do not need the customer’s ID. The
                                  balance depends just upon the account number.
                                  (This will help you when you normalise the
                                  database from 1NF to 2NF.)
                                </em>
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/73f9e432-57e4-4337-abea-9f8a5a653da9t8.JPG"
                                  alt="t8"
                                />
                              </p>
                              <p>&nbsp;</p>
                              <p>
                                <strong>TASK 3</strong>&nbsp; &nbsp;Normalise a
                                student-course database. A typical record is
                                shown below.
                              </p>

                              <p style="text-align: center">
                                <img
                                  src="images/dbe90c2f-55a8-48bb-8514-6a74008bba45t9.JPG"
                                  alt="t9"
                                />
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  <strong>TASK 4</strong> &nbsp;A database is to
                                  be kept that records all the parts that make
                                  up a particular model of digital camera.
                                </span>
                              </p>
                              <p>
                                Following an analysis of the problem, it is
                                found that these details are to be kept about
                                each individual camera:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The camera model (which is unique for
                                      every camera).
                                    </li>
                                    <li>
                                      The date the camera was released for sale.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                For each camera, the following details about
                                every part needed to build it will be kept:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>A part number.</li>
                                    <li>A part name.</li>
                                    <li>
                                      The ID of the manufacturer of the part.
                                    </li>
                                    <li>
                                      The name of the manufacturer of the part.
                                    </li>
                                    <li>
                                      Your job is to produce a normalised design
                                      for the database. Use the table below.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p style="margin-left: 30px">
                                <em>
                                  (HINT: If you are not sure how to start, why
                                  not sketch out a typical record card for one
                                  camera and then fill it in with some made-up
                                  data. It will help you visualise the problem.
                                  Use this table to structure your answer.)
                                </em>
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/395dc1ba-0b6d-4817-86d4-4deab705839ft10.JPG"
                                  alt="t10"
                                />
                              </p>
                              <p>&nbsp;</p>
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

export default normalisation_to_3nf_tasks_1_4;
