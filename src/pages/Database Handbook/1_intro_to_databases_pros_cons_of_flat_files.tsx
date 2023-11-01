import React from "react";

function intro_to_databases_pros_cons_of_flat_files() {
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
                                The pros and cons of flat files
                              </h1>
                              <p>
                                <strong>
                                  The good points about flat files
                                </strong>
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Flat files are relatively quick and easy
                                      to set up and use.
                                    </li>
                                    <li>
                                      They are ideal for smaller databases.
                                    </li>
                                    <li>
                                      They provide many of the sorting and
                                      searching tools commonly needed by users
                                      of the database.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>The problems with flat files</strong>
                              </p>

                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      You can see that in the flat file, every
                                      member has an ID number. This should be
                                      unique for each member and is known as the
                                      Primary Key. The problem is that some
                                      records (some rows) have the same ID
                                      number. This means that you cannot pick
                                      out one and only one record if you
                                      searched for a member by their membership
                                      number.
                                    </li>
                                    <li>
                                      Dogs do not have their own unique identity
                                      number. It is therefore impossible to find
                                      an individual dog. Consider Gov in the
                                      above flat file. There are different two
                                      dogs, both called ‘Gov’. Their personal
                                      details just happen to be the same! You
                                      cannot tell them apart from the details
                                      held in the flat file.
                                    </li>
                                    <li>
                                      Because dogs do not have their own ID
                                      number, you cannot enter in a ‘new’ breed
                                      until a member owns a dog of that breed.
                                    </li>
                                    <li>
                                      Lots of details are held over and over
                                      again, for example, the origins and life
                                      expectancy of poodles, and the details
                                      about the member known as ‘A fish’. This
                                      is known as ‘data redundancy’ and is a
                                      waste of (hard disk) space. Data
                                      redundancy also contributes to larger
                                      files, which means longer search times. In
                                      addition, if you enter the same data over
                                      and over again in different places in the
                                      flat file, you are more likely to make a
                                      mistake when entering in one of the
                                      entries. This results in some of your data
                                      being inconsistent.
                                    </li>
                                    <li>
                                      If ‘A Fish’ got married and changed her
                                      name to ‘A Haddock’, then the secretary
                                      would have to make four changes to the
                                      database rather than just one. This is
                                      clearly a waste of time. The secretary
                                      could also introduce some data
                                      inconsistencies if he or she changed the
                                      name in one of A Haddock’s records to A
                                      Hadock (with one ‘d’). This is referred to
                                      as an ‘amendment anomaly’.
                                    </li>
                                    <li>
                                      If one member such as ‘Y Nott’ left the
                                      club, the secretary would have to delete
                                      five records (not just one). This is
                                      sometimes referred to as a ‘deletion
                                      anomaly’.
                                    </li>
                                    <li>
                                      If one new member joined with more than
                                      one dog, you would have to store more than
                                      one record (each one holding details about
                                      the member) - even though only one member
                                      has joined! We will call this an ‘adding
                                      anomaly’.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                To summarise, flat flies are easy and quick to
                                set up. They are easy to use and are ideal for
                                small databases. They have a series of problems.
                                These relate to the repetition of data stored in
                                the database (known as ‘data redundancy’) as
                                well as problems to do with adding and removing
                                records or changing the data in records. These
                                are referred to as ‘adding, deleting and
                                amendment anomalies’ and can result in the data
                                in the records becoming inconsistent.&nbsp;
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

export default intro_to_databases_pros_cons_of_flat_files;
