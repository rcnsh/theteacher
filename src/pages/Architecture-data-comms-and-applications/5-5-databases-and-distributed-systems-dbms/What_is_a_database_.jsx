import React from "react";

function What_is_a_database_() {
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
                                What is a database?
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                Databases are everywhere! They are used to store
                                details of pupils in your school, health records
                                are increasingly held in a database and driving
                                licence details are held by the DVLC. The police
                                keep records of crimes and criminals, shops keep
                                details of what they have for sale and what they
                                have sold and the Government keeps details about
                                its citizens, for example, for tax reasons. In
                                fact, the more you look, the more you find
                                databases in use. As they are so important and
                                impact in our lives every day, it is reasonable
                                that we should know all about them if we are
                                doing a Computing course!
                              </p>

                              <p>
                                <strong>
                                  What is a database?
                                  <br />
                                </strong>
                                When you look inside any filing cabinet, you
                                will find that it typically holds records e.g.
                                patient records in a hospital. Each 'record'
                                might be a single piece of paper or a folder of
                                pieces of paper. Each record holds the data
                                about a particular person you want to keep
                                details about. The records are organised,
                                sometimes in alphabetical order using each
                                patient's surname from A - Z (ascending order)
                                or perhaps Z - A (descending order) or perhaps
                                by some other piece of data, such as who was
                                born first or postcode or patient number and so
                                on. Sometimes, you want to search through the
                                database and get back a single record, or a set
                                of records e.g. everyone who has had an
                                operation in the last month. You might want to
                                do other things to your filing cabinet of
                                records, such as sort the records in a different
                                order, or add, delete or amend a record.
                              </p>
                              <p>
                                Our filing cabinet of records is a database and
                                for a long time, this was the only kind of
                                database that could be used to store, organise
                                and search data. There are problems with this
                                kind of manual system. It is easy to lose a
                                record by misfiling it in the wrong place. It is
                                hard to take a million hospital records and put
                                them in a different order, or search through all
                                of the records for those that meet a certain set
                                of criteria. When computers came along, so did
                                software that allowed someone to make and use
                                computerised databases. Suddenly, all the hard
                                jobs associated with manual systems became easy
                                any now anyone can make and use a database! You
                                can set up a new database structure, define what
                                records you want to keep and what data has to be
                                in the records and then you can sort the
                                records, search the records and do lots of other
                                jobs using the software tools provided.
                              </p>
                              <p>
                                <strong>
                                  Persistent organised store of data
                                </strong>
                                <br />
                                So we know that a database is an organised
                                collection of data items and the links between
                                the data items. What usually happens with
                                databases is that you set up your database of
                                data on the one hand, and then quite separately,
                                use software applications that can access the
                                data and sort and search it on the other
                                hand.&nbsp;The data items are organised into a
                                database structure, which is completely separate
                                from the applications that use them. You might
                                ask why you would do this. Well, with a bit of
                                organising using a special piece of software
                                known as a Database Management System (DBMS),
                                different applications can get access to the
                                same database by keeping it separate from the
                                applications that use it.
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/c9445ae3-5858-43e6-9db0-565f12ee5b38DBMS.GIF"
                                  alt="DBMS"
                                />
                              </p>
                              <p>
                                We often use the word 'persistent' when talking
                                about databases. Even though an application may
                                not actually be searching through the data or
                                doing something else with the data, the database
                                is still there, it still exists.
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

export default What_is_a_database_;
